import { Hono } from "hono";
import { stream, streamText } from "hono/streaming";
import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { logger, LogLevel } from "@intzaaa/logger";
import { MiddlewareHandler } from "hono";

type Config = {
    NAME: string;
    DEV: boolean;
    ALLOWED_EXECUTABLES: string[];
    ALLOWED_FILE_PATHS: string[];
    MAX_PENDING_REQUESTS: number;
    RATE_LIMIT: number;
    EXEC_TIMEOUT: number;
    USERS: [string, string][];
    LOGLEVEL: LogLevel;
};

const config: Config = {
    NAME: process.env["NAME"] || "CAPI",
    DEV: process.env["NODE_ENV"] === "development",
    ALLOWED_EXECUTABLES: process.env["ALLOWED_EXECUTABLES"]?.split(",") ?? [],
    ALLOWED_FILE_PATHS: process.env["ALLOWED_FILE_PATHS"]?.split(",") ?? [],
    EXEC_TIMEOUT: Number(process.env["EXEC_TIMEOUT"]) || 10000,
    RATE_LIMIT: Number(process.env["RATE_LIMIT"]) || 1000,
    MAX_PENDING_REQUESTS: Number(process.env["MAX_PENDING_REQUESTS"]) || 10,
    USERS:
        (
            process.env["USERS"]?.split(",").map((user) => user.split(":")) as [
                string,
                string
            ][]
        ).map(([username, password]) => [
            decodeURIComponent(username.trim()),
            decodeURIComponent(password.trim()),
        ]) ?? [],
    LOGLEVEL: (process.env["LOGLEVEL"] || "INFO") as LogLevel,
};

const log = logger(config.LOGLEVEL, config.NAME);

const checkPath = (path: string, dev: boolean, allowed: string[]): boolean => {
    if (dev) return true;
    return allowed.includes(path);
};

const checkExec = (exec: string, dev: boolean, allowed: string[]): boolean => {
    if (dev) return true;
    return allowed.includes(exec);
};

const auth: MiddlewareHandler = async (ctx, next) => {
    const [username, password] =
        ctx.req.header("Authorization")?.split(":").map(decodeURIComponent) ??
        [];

    if (
        !username ||
        !password ||
        !config.USERS.some(([u, p]) => u === username && p === password)
    ) {
        log("ERROR", ["Invalid credentials", username, password]);
        return ctx.text("Invalid credentials", 403);
    }

    return await next();
};

let pending = 0;
let last = 0;
const throttle: MiddlewareHandler = (ctx, next) =>
    new Promise(async (resolve) => {
        if (pending >= config.MAX_PENDING_REQUESTS) {
            return ctx.status(429);
        }

        pending++;
        setTimeout(async () => {
            last = Date.now();
            resolve(await next());
            pending--;
        }, config.RATE_LIMIT - (Date.now() - last));
    });

export const app = new Hono()
    .get("/health", throttle, async (ctx) => {
        log("INFO", ["Health Checked"]);
        return ctx.text("OK", 200);
    })
    .get("/file/:path{.+}", auth, throttle, async (ctx) => {
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
    .post("/file/:path{.+}", auth, throttle, async (ctx) => {
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
    .get("/exec/:exec/:args{.+}", auth, throttle, async (ctx) => {
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
