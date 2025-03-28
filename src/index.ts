#!/usr/bin/env node

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { streamText } from "hono/streaming";
import { spawn } from "node:child_process";
import { randomUUID, UUID } from "node:crypto";
import { authenticator } from "otplib";

const ALLOWED_EXECUTABLES =
    process.env["ALLOWED_EXECUTABLES"]?.split(",") ?? [];
const TIMEOUT = Number(process.env["TIMEOUT"]) || 10000;
const SECRET = process.env["SECRET"];

const tokens: Set<UUID> = new Set();

const server = new Hono()
    .get("/health", async (ctx) => ctx.text("OK"))
    .get("/auth/:code?", async (ctx) => {
        const { code } = ctx.req.param();
        if (!SECRET || !code) {
            const secret = authenticator.generateSecret();
            return ctx.text(secret);
        }

        if (!authenticator.check(SECRET, code)) {
            return ctx.text("Invalid code", 403);
        }

        const token = randomUUID();
        tokens.add(token);
        setTimeout(() => tokens.delete(token), 1_800_000);
        return ctx.text(token);
    })
    .get("/:exec/*", async (ctx) => {
        try {
            const { exec } = ctx.req.param();
            if (!ALLOWED_EXECUTABLES.includes(exec)) {
                return ctx.text("Not allowed", 403);
            }

            const args = ctx.req.url
                .split("/")
                .slice(4)
                .map((arg) => decodeURIComponent(arg));
            const { stdout, stderr, token } = ctx.req.query();
            if (token && !tokens.has(token as UUID)) {
                return ctx.text("Invalid token", 403);
            }

            return streamText(
                ctx,
                (stream) =>
                    new Promise((resolve, reject) => {
                        const child = spawn(exec, args, {
                            env: process.env,
                        });
                        const timeout = setTimeout(() => {
                            stream.abort();
                        }, TIMEOUT);

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
                    await stream.write(String(err));
                    stream.abort();
                }
            );
        } catch (e) {
            return ctx.text((e as any).message, 500);
        }
    });

const port = Number(process.env["PORT"]) || 3000;

serve({
    fetch: server.fetch.bind(server),
    port: port,
});
