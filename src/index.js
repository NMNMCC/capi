#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var hono_1 = require("hono");
var streaming_1 = require("hono/streaming");
var node_child_process_1 = require("node:child_process");
var node_crypto_1 = require("node:crypto");
var OTPAuth = require("otpauth");
var ALLOWED_EXECUTABLES = (_b = (_a = process.env["ALLOWED_EXECUTABLES"]) === null || _a === void 0 ? void 0 : _a.split(",")) !== null && _b !== void 0 ? _b : [];
var TIMEOUT = Number(process.env["TIMEOUT"]) || 10000;
var SECRET = process.env["SECRET"];
var tokens = new Set();
var server = new hono_1.Hono()
    .get("/health", function (ctx) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, ctx.text("OK")];
}); }); })
    .get("/auth/:code?", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var code, secret, totp, token;
    return __generator(this, function (_a) {
        code = ctx.req.param().code;
        if (!SECRET || !code) {
            secret = new OTPAuth.Secret().base32;
            return [2 /*return*/, ctx.text(secret)];
        }
        totp = new OTPAuth.TOTP({ secret: SECRET });
        if (!totp.validate({ token: code })) {
            return [2 /*return*/, ctx.text("Invalid code", 403)];
        }
        token = (0, node_crypto_1.randomUUID)();
        tokens.add(token);
        setTimeout(function () { return tokens.delete(token); }, 1800000);
        return [2 /*return*/, ctx.text(token)];
    });
}); })
    .get("/:exec/*", function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var exec_1, args_1, _a, stdout_1, stderr_1, token;
    return __generator(this, function (_b) {
        try {
            exec_1 = ctx.req.param().exec;
            if (!ALLOWED_EXECUTABLES.includes(exec_1)) {
                return [2 /*return*/, ctx.text("Not allowed", 403)];
            }
            args_1 = ctx.req.url
                .split("/")
                .slice(4)
                .map(function (arg) { return decodeURIComponent(arg); });
            _a = ctx.req.query(), stdout_1 = _a.stdout, stderr_1 = _a.stderr, token = _a.token;
            if (token && !tokens.has(token)) {
                return [2 /*return*/, ctx.text("Invalid token", 403)];
            }
            return [2 /*return*/, (0, streaming_1.streamText)(ctx, function (stream) {
                    return new Promise(function (resolve, reject) {
                        var child = (0, node_child_process_1.spawn)(exec_1, args_1, {
                            env: process.env,
                        });
                        var timeout = setTimeout(function () {
                            stream.abort();
                        }, TIMEOUT);
                        child.on("close", function () {
                            clearTimeout(timeout);
                            resolve();
                        });
                        child.on("error", function () {
                            clearTimeout(timeout);
                            reject();
                        });
                        var last = Promise.resolve();
                        var handler = function (data) {
                            last = new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, last];
                                        case 1:
                                            _a.sent();
                                            stream.write(data.toString()).finally(resolve);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        };
                        (stdout_1 !== undefined || stdout_1 === stderr_1) &&
                            child.stdout.on("data", handler);
                        (stderr_1 !== undefined || stdout_1 === stderr_1) &&
                            child.stderr.on("data", handler);
                    });
                }, function (err, stream) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, stream.write(String(err))];
                            case 1:
                                _a.sent();
                                stream.abort();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        }
        catch (e) {
            return [2 /*return*/, ctx.text(e.message, 500)];
        }
        return [2 /*return*/];
    });
}); });
var port = Number(process.env["PORT"]) || 3000;
(0, node_server_1.serve)({
    fetch: server.fetch.bind(server),
    port: port,
});
