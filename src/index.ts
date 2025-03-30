import { Hono } from "hono";
import { stream, streamText } from "hono/streaming";
import { spawn } from "node:child_process";
import { randomUUID, UUID } from "node:crypto";
import { resolve } from "node:path";
import { authenticator } from "otplib";
import { writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { logger, LogLevel } from "@intzaaa/logger";
import { MiddlewareHandler } from "hono";

type Config = {
    NAME: string;
    DEV: boolean;
    ALLOWED_EXECUTABLES: string[];
    ALLOWED_FILE_PATHS: string[];
    EXEC_TIMEOUT: number;
    TOTP_SECRET: string | undefined;
    TOKEN_EXPIRATION: number;
    LOGLEVEL: LogLevel;
};

const config: Config = {
    NAME: process.env["NAME"] || "CAPI",
    DEV: process.env["NODE_ENV"] === "development",
    ALLOWED_EXECUTABLES: process.env["ALLOWED_EXECUTABLES"]?.split(",") ?? [],
    ALLOWED_FILE_PATHS: process.env["ALLOWED_FILE_PATHS"]?.split(",") ?? [],
    EXEC_TIMEOUT: Number(process.env["EXEC_TIMEOUT"]) || 10000,
    TOTP_SECRET: process.env["TOTP_SECRET"],
    TOKEN_EXPIRATION: Number(process.env["TOKEN_EXPIRATION"]) || 1_800_000,
    LOGLEVEL: (process.env["LOGLEVEL"] || "INFO") as LogLevel,
};

const log = logger(config.LOGLEVEL, config.NAME);

const tokens: Set<UUID> = new Set();

const getToken = (headers: Headers): UUID | undefined => {
    const authHeader = headers.get("Authorization");
    return authHeader ? (authHeader as UUID) : undefined;
};

const checkToken = (
    token: UUID | undefined,
    dev: boolean,
    tokens: Set<UUID>
): boolean => {
    if (dev) return true;
    return !!token && tokens.has(token);
};

const checkPath = (path: string, dev: boolean, allowed: string[]): boolean => {
    if (dev) return true;
    return allowed.includes(path);
};

const checkExec = (exec: string, dev: boolean, allowed: string[]): boolean => {
    if (dev) return true;
    return allowed.includes(exec);
};

const auth: MiddlewareHandler = async (ctx, next) => {
    const token = getToken(ctx.req.raw.headers);
    if (!checkToken(token as UUID, config.DEV, tokens)) {
        log("ERROR", ["Invalid token", token]);
        return ctx.text("Invalid token", 403);
    }
    return await next();
};

export const app = new Hono()
    .get("/health", async (ctx) => {
        log("INFO", ["Health Checked"]);
        return ctx.text("OK", 200);
    })
    .get("/auth/:code?", async (ctx) => {
        const { code } = ctx.req.param();
        if (!config.TOTP_SECRET) {
            const secret = authenticator.generateSecret();
            log("WARN", ["TOTP_SECRET does not exist, generated", secret]);
            return ctx.text(secret, 200);
        }

        if (!code || !authenticator.check(code, config.TOTP_SECRET)) {
            log("ERROR", ["Invalid code", code]);
            return ctx.text("Invalid code", 403);
        }

        const token = randomUUID();
        tokens.add(token);
        setTimeout(() => tokens.delete(token), config.TOKEN_EXPIRATION);

        log("INFO", ["Authenticated", token]);
        return ctx.json({
            token,
            expiration: config.TOKEN_EXPIRATION,
        });
    })
    .get("/file/:path{.+}", auth, async (ctx) => {
        const path = resolve("/", ctx.req.param("path"));
        if (!checkPath(path, config.DEV, config.ALLOWED_FILE_PATHS)) {
            log("ERROR", ["Not allowed", path]);
            return ctx.text("Not allowed", 403);
        }

        return stream(
            ctx,
            (stream) =>
                new Promise((resolve, reject) => {
                    log("INFO", ["Reading file", path]);

                    const file = createReadStream(path);

                    file.on("data", stream.write.bind(stream));
                    file.on("close", resolve);
                    file.on("error", reject);
                }),
            async (err, stream) => {
                await stream.write(err.message);
                stream.abort();
            }
        );
    })
    .post("/file/:path{.+}", auth, async (ctx) => {
        const path = resolve("/", ctx.req.param("path"));
        if (!checkPath(path, config.DEV, config.ALLOWED_FILE_PATHS)) {
            log("ERROR", ["Not allowed", path]);
            return ctx.text("Not allowed", 403);
        }

        const content = await ctx.req.text();
        try {
            log("INFO", ["Writing file", path]);
            await writeFile(path, content, "utf8");
            return ctx.status(200);
        } catch (err) {
            log("ERROR", ["Write file error", err]);
            return ctx.status(500);
        }
    })
    .get("/exec/:exec/:args{.+}", auth, async (ctx) => {
        try {
            const { exec, args } = ctx.req.param();

            if (!checkExec(exec, config.DEV, config.ALLOWED_EXECUTABLES)) {
                log("ERROR", ["Not allowed executable", exec]);
                return ctx.text("Not allowed", 403);
            }

            const { stdout, stderr } = ctx.req.query();

            return streamText(
                ctx,
                (stream) =>
                    new Promise((resolve, reject) => {
                        log("INFO", ["Executing", exec, ...args]);
                        const child = spawn(
                            exec,
                            args.split("/").map(decodeURIComponent),
                            {
                                env: process.env,
                            }
                        );
                        const timeout = setTimeout(
                            () => stream.abort(),
                            config.EXEC_TIMEOUT
                        );

                        child.on("close", () => {
                            clearTimeout(timeout);
                            resolve();
                        });
                        child.on("error", () => {
                            clearTimeout(timeout);
                            reject();
                        });

                        let last: Promise<any> = Promise.resolve();

                        const handler = (data: Buffer) => {
                            last = new Promise<void>(async (resolve) => {
                                await last;
                                stream.write(data.toString()).finally(resolve);
                            });
                        };

                        (!stdout || stdout === stderr) &&
                            child.stdout.on("data", handler);
                        (!stderr || stderr === stdout) &&
                            child.stderr.on("data", handler);
                    }),
                async (err, stream) => {
                    await stream.write(err.message);
                    stream.abort();
                }
            );
        } catch (e) {
            log("ERROR", ["Execution error", (e as any).message]);
            return ctx.text((e as any).message, 500);
        }
    });
