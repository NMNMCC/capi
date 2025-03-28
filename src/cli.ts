#!/usr/bin/env node

import { app } from ".";
import { serve } from "@hono/node-server";

const port = Number(process.env["PORT"]) || 3000;

serve({
    fetch: app.fetch.bind(app),
    port: port,
});
