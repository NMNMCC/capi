#!/usr/bin/env node

import { app } from ".";
import { serve } from "@hono/node-server";

const host = process.env["HOST"] || "[::]";
const port = Number(process.env["PORT"]) || 3000;

serve({
    fetch: app.fetch.bind(app),
    hostname: host,
    port: port,
});
