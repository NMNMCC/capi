#!/usr/bin/env node

import { pipe } from "fp-ts/lib/function";
import { Hono } from "hono";
import { streamText } from "hono/streaming";
import { spawn } from "node:child_process";
import { randomUUID, UUID } from "node:crypto";
import { resolve } from "node:path";
import * as OTPAuth from "otpauth";
import { promises as fs } from "node:fs";

const ALLOWED_EXECUTABLES =
    process.env["ALLOWED_EXECUTABLES"]?.split(",") ?? [];
const ALLOWED_FILE_PATHS = process.env["ALLOWED_FILE_PATHS"]?.split(",") ?? [];
const EXEC_TIMEOUT = Number(process.env["EXEC_TIMEOUT"]) || 10000;
const TOTP_SECRET = process.env["SECRET"];
const TOKEN_EXPIRATION = Number(process.env["TOKEN_EXPIRATION"]) || 1_800_000;

const tokens: Set<UUID> = new Set();

const isValidToken = (token?: UUID): boolean => {
    if (!token) return false;
    return tokens.has(token);
};

export const app = new Hono()
    .get("/health", async (ctx) => ctx.text("OK", 200))
    .get("/auth/:code?", async (ctx) => {
        const { code } = ctx.req.param();
        if (!TOTP_SECRET && !code) {
            const secret = new OTPAuth.Secret().base32;
            return ctx.text(secret);
        }

        if (
            !code ||
            !new OTPAuth.TOTP({ secret: TOTP_SECRET }).validate({ token: code })
        ) {
            return ctx.text("Invalid code", 403);
        }

        const token = randomUUID();
        tokens.add(token);
        setTimeout(() => tokens.delete(token), TOKEN_EXPIRATION);
        return ctx.text(token);
    })
    .get("/file/:path", async (ctx) => {
        const { token } = ctx.req.query();
        if (!isValidToken(token as UUID)) return ctx.text("Invalid token", 403);

        const path = pipe(ctx.req.param("path"), decodeURIComponent, resolve);
        if (!ALLOWED_FILE_PATHS.includes(path))
            return ctx.text("Not allowed", 403);

        return;
    })
    .post("/file/:path", async (ctx) => {
        const { token } = ctx.req.query();
        if (!isValidToken(token as UUID)) return ctx.text("Invalid token", 403);

        const path = pipe(ctx.req.param("path"), decodeURIComponent, resolve);
        if (!ALLOWED_FILE_PATHS.includes(path))
            return ctx.text("Not allowed", 403);

        const content = await ctx.req.text();
        try {
            await fs.writeFile(path, content, "utf8");
            return ctx.status(200);
        } catch (err) {
            return ctx.status(500);
        }
    })
    .get("/exec/:exec/*", async (ctx) => {
        try {
            const { exec } = ctx.req.param();
            if (!ALLOWED_EXECUTABLES.includes(exec))
                return ctx.text("Not allowed", 403);

            const args = ctx.req.url
                .split("/")
                .slice(4)
                .map((arg) => decodeURIComponent(arg));
            const { stdout, stderr, token } = ctx.req.query();
            if (!isValidToken(token as UUID))
                return ctx.text("Invalid token", 403);

            return streamText(
                ctx,
                (stream) =>
                    new Promise((resolve, reject) => {
                        const child = spawn(exec, args, {
                            env: process.env,
                        });
                        const timeout = setTimeout(
                            () => stream.abort(),
                            EXEC_TIMEOUT
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

                        (stdout !== undefined || stdout === stderr) &&
                            child.stdout.on("data", handler);
                        (stderr !== undefined || stdout === stderr) &&
                            child.stderr.on("data", handler);
                    }),
                async (err, stream) => {
                    await stream.write(err.message);
                    stream.abort();
                }
            );
        } catch (e) {
            return ctx.text((e as any).message, 500);
        }
    });
