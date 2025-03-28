#!/usr/bin/env node
require('./sourcemap-register.cjs');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 317:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 611:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 203:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/@hono+node-server@1.14.0_hono@4.7.5/node_modules/@hono/node-server/dist/index.mjs
var import_http = __nccwpck_require__(611);
var import_http2 = __nccwpck_require__(675);
var import_stream = __nccwpck_require__(203);
var import_crypto = __toESM(__nccwpck_require__(982), 1);
var _a;
var RequestError = (_a = class extends Error {
  constructor(message, options) {
    super(message, options);
  }
}, __publicField(_a, "name", "RequestError"), _a);
var toRequestError = (e) => {
  if (e instanceof RequestError) {
    return e;
  }
  return new RequestError(e.message, { cause: e });
};
var GlobalRequest = global.Request;
var Request2 = class extends GlobalRequest {
  constructor(input, options) {
    var _a13, _b2;
    if (typeof input === "object" && getRequestCache in input) {
      input = input[getRequestCache]();
    }
    if (typeof ((_a13 = options == null ? void 0 : options.body) == null ? void 0 : _a13.getReader) !== "undefined") {
      ;
      (_b2 = options.duplex) != null ? _b2 : options.duplex = "half";
    }
    super(input, options);
  }
};
var newRequestFromIncoming = (method, url, incoming, abortController) => {
  const headerRecord = [];
  const rawHeaders = incoming.rawHeaders;
  for (let i = 0; i < rawHeaders.length; i += 2) {
    const { [i]: key, [i + 1]: value } = rawHeaders;
    if (key.charCodeAt(0) !== /*:*/
    58) {
      headerRecord.push([key, value]);
    }
  }
  const init = {
    method,
    headers: headerRecord,
    signal: abortController.signal
  };
  if (method === "TRACE") {
    init.method = "GET";
    const req = new Request2(url, init);
    Object.defineProperty(req, "method", {
      get() {
        return "TRACE";
      }
    });
    return req;
  }
  if (!(method === "GET" || method === "HEAD")) {
    if ("rawBody" in incoming && incoming.rawBody instanceof Buffer) {
      init.body = new ReadableStream({
        start(controller) {
          controller.enqueue(incoming.rawBody);
          controller.close();
        }
      });
    } else {
      init.body = import_stream.Readable.toWeb(incoming);
    }
  }
  return new Request2(url, init);
};
var getRequestCache = Symbol("getRequestCache");
var requestCache = Symbol("requestCache");
var incomingKey = Symbol("incomingKey");
var urlKey = Symbol("urlKey");
var abortControllerKey = Symbol("abortControllerKey");
var getAbortController = Symbol("getAbortController");
var requestPrototype = {
  get method() {
    return this[incomingKey].method || "GET";
  },
  get url() {
    return this[urlKey];
  },
  [getAbortController]() {
    this[getRequestCache]();
    return this[abortControllerKey];
  },
  [getRequestCache]() {
    this[abortControllerKey] || (this[abortControllerKey] = new AbortController());
    return this[requestCache] || (this[requestCache] = newRequestFromIncoming(
      this.method,
      this[urlKey],
      this[incomingKey],
      this[abortControllerKey]
    ));
  }
};
[
  "body",
  "bodyUsed",
  "cache",
  "credentials",
  "destination",
  "headers",
  "integrity",
  "mode",
  "redirect",
  "referrer",
  "referrerPolicy",
  "signal",
  "keepalive"
].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    get() {
      return this[getRequestCache]()[k];
    }
  });
});
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    value: function() {
      return this[getRequestCache]()[k]();
    }
  });
});
Object.setPrototypeOf(requestPrototype, Request2.prototype);
var newRequest = (incoming, defaultHostname) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  const incomingUrl = incoming.url || "";
  if (incomingUrl[0] !== "/" && // short-circuit for performance. most requests are relative URL.
  (incomingUrl.startsWith("http://") || incomingUrl.startsWith("https://"))) {
    if (incoming instanceof import_http2.Http2ServerRequest) {
      throw new RequestError("Absolute URL for :path is not allowed in HTTP/2");
    }
    try {
      const url2 = new URL(incomingUrl);
      req[urlKey] = url2.href;
    } catch (e) {
      throw new RequestError("Invalid absolute URL", { cause: e });
    }
    return req;
  }
  const host = (incoming instanceof import_http2.Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  let scheme;
  if (incoming instanceof import_http2.Http2ServerRequest) {
    scheme = incoming.scheme;
    if (!(scheme === "http" || scheme === "https")) {
      throw new RequestError("Unsupported scheme");
    }
  } else {
    scheme = incoming.socket && incoming.socket.encrypted ? "https" : "http";
  }
  const url = new URL(`${scheme}://${host}${incomingUrl}`);
  if (url.hostname.length !== host.length && url.hostname !== host.replace(/:\d+$/, "")) {
    throw new RequestError("Invalid host header");
  }
  req[urlKey] = url.href;
  return req;
};
function writeFromReadableStream(stream2, writable) {
  if (stream2.locked) {
    throw new TypeError("ReadableStream is locked.");
  } else if (writable.destroyed) {
    stream2.cancel();
    return;
  }
  const reader = stream2.getReader();
  writable.on("close", cancel);
  writable.on("error", cancel);
  reader.read().then(flow, cancel);
  return reader.closed.finally(() => {
    writable.off("close", cancel);
    writable.off("error", cancel);
  });
  function cancel(error) {
    reader.cancel(error).catch(() => {
    });
    if (error) {
      writable.destroy(error);
    }
  }
  function onDrain() {
    reader.read().then(flow, cancel);
  }
  function flow({ done, value }) {
    try {
      if (done) {
        writable.end();
      } else if (!writable.write(value)) {
        writable.once("drain", onDrain);
      } else {
        return reader.read().then(flow, cancel);
      }
    } catch (e) {
      cancel(e);
    }
  }
}
var buildOutgoingHttpHeaders = (headers) => {
  var _a13;
  const res = {};
  if (!(headers instanceof Headers)) {
    headers = new Headers(headers != null ? headers : void 0);
  }
  const cookies = [];
  for (const [k, v] of headers) {
    if (k === "set-cookie") {
      cookies.push(v);
    } else {
      res[k] = v;
    }
  }
  if (cookies.length > 0) {
    res["set-cookie"] = cookies;
  }
  (_a13 = res["content-type"]) != null ? _a13 : res["content-type"] = "text/plain; charset=UTF-8";
  return res;
};
var responseCache = Symbol("responseCache");
var getResponseCache = Symbol("getResponseCache");
var cacheKey = Symbol("cache");
var GlobalResponse = global.Response;
var _body, _init, _a2;
var Response2 = (_a2 = class {
  constructor(body, init) {
    __privateAdd(this, _body);
    __privateAdd(this, _init);
    __privateSet(this, _body, body);
    if (init instanceof _a2) {
      const cachedGlobalResponse = init[responseCache];
      if (cachedGlobalResponse) {
        __privateSet(this, _init, cachedGlobalResponse);
        this[getResponseCache]();
        return;
      } else {
        __privateSet(this, _init, __privateGet(init, _init));
      }
    } else {
      __privateSet(this, _init, init);
    }
    if (typeof body === "string" || typeof (body == null ? void 0 : body.getReader) !== "undefined") {
      let headers = (init == null ? void 0 : init.headers) || { "content-type": "text/plain; charset=UTF-8" };
      if (headers instanceof Headers) {
        headers = buildOutgoingHttpHeaders(headers);
      }
      ;
      this[cacheKey] = [(init == null ? void 0 : init.status) || 200, body, headers];
    }
  }
  [getResponseCache]() {
    delete this[cacheKey];
    return this[responseCache] || (this[responseCache] = new GlobalResponse(__privateGet(this, _body), __privateGet(this, _init)));
  }
}, _body = new WeakMap(), _init = new WeakMap(), _a2);
[
  "body",
  "bodyUsed",
  "headers",
  "ok",
  "redirected",
  "status",
  "statusText",
  "trailers",
  "type",
  "url"
].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    get() {
      return this[getResponseCache]()[k];
    }
  });
});
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    value: function() {
      return this[getResponseCache]()[k]();
    }
  });
});
Object.setPrototypeOf(Response2, GlobalResponse);
Object.setPrototypeOf(Response2.prototype, GlobalResponse.prototype);
var stateKey = Reflect.ownKeys(new GlobalResponse()).find(
  (k) => typeof k === "symbol" && k.toString() === "Symbol(state)"
);
if (!stateKey) {
  console.warn("Failed to find Response internal state key");
}
function getInternalBody(response) {
  if (!stateKey) {
    return;
  }
  if (response instanceof Response2) {
    response = response[getResponseCache]();
  }
  const state = response[stateKey];
  return state && state.body || void 0;
}
var X_ALREADY_SENT = "x-hono-already-sent";
var webFetch = global.fetch;
if (typeof global.crypto === "undefined") {
  global.crypto = import_crypto.default;
}
global.fetch = (info, init) => {
  init = __spreadValues({
    // Disable compression handling so people can return the result of a fetch
    // directly in the loader without messing with the Content-Encoding header.
    compress: false
  }, init);
  return webFetch(info, init);
};
var regBuffer = /^no$/i;
var regContentType = /^(application\/json\b|text\/(?!event-stream\b))/i;
var handleRequestError = () => new Response(null, {
  status: 400
});
var handleFetchError = (e) => new Response(null, {
  status: e instanceof Error && (e.name === "TimeoutError" || e.constructor.name === "TimeoutError") ? 504 : 500
});
var handleResponseError = (e, outgoing) => {
  const err = e instanceof Error ? e : new Error("unknown error", { cause: e });
  if (err.code === "ERR_STREAM_PREMATURE_CLOSE") {
    console.info("The user aborted a request.");
  } else {
    console.error(e);
    if (!outgoing.headersSent) {
      outgoing.writeHead(500, { "Content-Type": "text/plain" });
    }
    outgoing.end(`Error: ${err.message}`);
    outgoing.destroy(err);
  }
};
var responseViaCache = (res, outgoing) => {
  var _a13;
  const [status, body, header] = res[cacheKey];
  if (typeof body === "string") {
    header["Content-Length"] = Buffer.byteLength(body);
    outgoing.writeHead(status, header);
    outgoing.end(body);
  } else {
    outgoing.writeHead(status, header);
    return (_a13 = writeFromReadableStream(body, outgoing)) == null ? void 0 : _a13.catch(
      (e) => handleResponseError(e, outgoing)
    );
  }
};
var responseViaResponseObject = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (res, outgoing, options = {}) {
  if (res instanceof Promise) {
    if (options.errorHandler) {
      try {
        res = yield res;
      } catch (err) {
        const errRes = yield options.errorHandler(err);
        if (!errRes) {
          return;
        }
        res = errRes;
      }
    } else {
      res = yield res.catch(handleFetchError);
    }
  }
  if (cacheKey in res) {
    return responseViaCache(res, outgoing);
  }
  const resHeaderRecord = buildOutgoingHttpHeaders(res.headers);
  const internalBody = getInternalBody(res);
  if (internalBody) {
    const { length, source, stream: stream2 } = internalBody;
    if (source instanceof Uint8Array && source.byteLength !== length) {
    } else {
      if (length) {
        resHeaderRecord["content-length"] = length;
      }
      outgoing.writeHead(res.status, resHeaderRecord);
      if (typeof source === "string" || source instanceof Uint8Array) {
        outgoing.end(source);
      } else if (source instanceof Blob) {
        outgoing.end(new Uint8Array(yield source.arrayBuffer()));
      } else {
        yield writeFromReadableStream(stream2, outgoing);
      }
      return;
    }
  }
  if (res.body) {
    const {
      "transfer-encoding": transferEncoding,
      "content-encoding": contentEncoding,
      "content-length": contentLength,
      "x-accel-buffering": accelBuffering,
      "content-type": contentType
    } = resHeaderRecord;
    if (transferEncoding || contentEncoding || contentLength || // nginx buffering variant
    accelBuffering && regBuffer.test(accelBuffering) || !regContentType.test(contentType)) {
      outgoing.writeHead(res.status, resHeaderRecord);
      yield writeFromReadableStream(res.body, outgoing);
    } else {
      const buffer = yield res.arrayBuffer();
      resHeaderRecord["content-length"] = buffer.byteLength;
      outgoing.writeHead(res.status, resHeaderRecord);
      outgoing.end(new Uint8Array(buffer));
    }
  } else if (resHeaderRecord[X_ALREADY_SENT]) {
  } else {
    outgoing.writeHead(res.status, resHeaderRecord);
    outgoing.end();
  }
});
var getRequestListener = (fetchCallback, options = {}) => {
  if (options.overrideGlobalObjects !== false && global.Request !== Request2) {
    Object.defineProperty(global, "Request", {
      value: Request2
    });
    Object.defineProperty(global, "Response", {
      value: Response2
    });
  }
  return (incoming, outgoing) => __async(void 0, null, function* () {
    let res, req;
    try {
      req = newRequest(incoming, options.hostname);
      outgoing.on("close", () => {
        const abortController = req[abortControllerKey];
        if (!abortController) {
          return;
        }
        if (incoming.errored) {
          req[abortControllerKey].abort(incoming.errored.toString());
        } else if (!outgoing.writableFinished) {
          req[abortControllerKey].abort("Client connection prematurely closed.");
        }
      });
      res = fetchCallback(req, { incoming, outgoing });
      if (cacheKey in res) {
        return responseViaCache(res, outgoing);
      }
    } catch (e) {
      if (!res) {
        if (options.errorHandler) {
          res = yield options.errorHandler(req ? e : toRequestError(e));
          if (!res) {
            return;
          }
        } else if (!req) {
          res = handleRequestError();
        } else {
          res = handleFetchError(e);
        }
      } else {
        return handleResponseError(e, outgoing);
      }
    }
    try {
      return responseViaResponseObject(res, outgoing, options);
    } catch (e) {
      return handleResponseError(e, outgoing);
    }
  });
};
var createAdaptorServer = (options) => {
  const fetchCallback = options.fetch;
  const requestListener = getRequestListener(fetchCallback, {
    hostname: options.hostname,
    overrideGlobalObjects: options.overrideGlobalObjects
  });
  const createServer = options.createServer || import_http.createServer;
  const server2 = createServer(options.serverOptions || {}, requestListener);
  return server2;
};
var serve = (options, listeningListener) => {
  var _a13;
  const server2 = createAdaptorServer(options);
  server2.listen((_a13 = options == null ? void 0 : options.port) != null ? _a13 : 3e3, options.hostname, () => {
    const serverInfo = server2.address();
    listeningListener && listeningListener(serverInfo);
  });
  return server2;
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      return __async(this, null, function* () {
        if (i <= index) {
          throw new Error("next() called multiple times");
        }
        index = i;
        let res;
        let isError = false;
        let handler;
        if (middleware[i]) {
          handler = middleware[i][0][0];
          context.req.routeIndex = i;
        } else {
          handler = i === middleware.length && next || void 0;
        }
        if (handler) {
          try {
            res = yield handler(context, () => dispatch(i + 1));
          } catch (err) {
            if (err instanceof Error && onError) {
              context.error = err;
              res = yield onError(err, context);
              isError = true;
            } else {
              throw err;
            }
          }
        } else {
          if (context.finalized === false && onNotFound) {
            res = yield onNotFound(context);
          }
        }
        if (res && (context.finalized === false || isError)) {
          context.res = res;
        }
        return context;
      });
    }
  };
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/body.js
var parseBody = (_0, ..._1) => __async(void 0, [_0, ..._1], function* (request, options = /* @__PURE__ */ Object.create(null)) {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if ((contentType == null ? void 0 : contentType.startsWith("multipart/form-data")) || (contentType == null ? void 0 : contentType.startsWith("application/x-www-form-urlencoded"))) {
    return parseFormData(request, { all, dot });
  }
  return {};
});
function parseFormData(request, options) {
  return __async(this, null, function* () {
    const formData = yield request.formData();
    if (formData) {
      return convertFormDataToBodyData(formData, options);
    }
    return {};
  });
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey2 = `${label}#${next}`;
    if (!patternCache[cacheKey2]) {
      if (match[2]) {
        patternCache[cacheKey2] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey2, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey2] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey2];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch (e) {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch (e2) {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${(base == null ? void 0 : base[0]) === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${(base == null ? void 0 : base.at(-1)) === "/" ? "" : "/"}${(sub == null ? void 0 : sub[0]) === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  var _a13;
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded != null ? encoded : encoded = /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      (_a13 = results[name]) != null ? _a13 : results[name] = value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var _validatedData, _matchResult, _HonoRequest_instances, getDecodedParam_fn, getAllDecodedParams_fn, getParamValue_fn, _cachedBody, _a3;
var HonoRequest = (_a3 = class {
  constructor(request, path = "/", matchResult = [[]]) {
    __privateAdd(this, _HonoRequest_instances);
    __publicField(this, "raw");
    __privateAdd(this, _validatedData);
    __privateAdd(this, _matchResult);
    __publicField(this, "routeIndex", 0);
    __publicField(this, "path");
    __publicField(this, "bodyCache", {});
    __privateAdd(this, _cachedBody, (key) => {
      const { bodyCache, raw: raw2 } = this;
      const cachedBody = bodyCache[key];
      if (cachedBody) {
        return cachedBody;
      }
      const anyCachedKey = Object.keys(bodyCache)[0];
      if (anyCachedKey) {
        return bodyCache[anyCachedKey].then((body) => {
          if (anyCachedKey === "json") {
            body = JSON.stringify(body);
          }
          return new Response(body)[key]();
        });
      }
      return bodyCache[key] = raw2[key]();
    });
    this.raw = request;
    this.path = path;
    __privateSet(this, _matchResult, matchResult);
    __privateSet(this, _validatedData, {});
  }
  param(key) {
    return key ? __privateMethod(this, _HonoRequest_instances, getDecodedParam_fn).call(this, key) : __privateMethod(this, _HonoRequest_instances, getAllDecodedParams_fn).call(this);
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    var _a13;
    if (name) {
      return (_a13 = this.raw.headers.get(name)) != null ? _a13 : void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  parseBody(options) {
    return __async(this, null, function* () {
      var _a13, _b2;
      return (_b2 = (_a13 = this.bodyCache).parsedBody) != null ? _b2 : _a13.parsedBody = yield parseBody(this, options);
    });
  }
  json() {
    return __privateGet(this, _cachedBody).call(this, "json");
  }
  text() {
    return __privateGet(this, _cachedBody).call(this, "text");
  }
  arrayBuffer() {
    return __privateGet(this, _cachedBody).call(this, "arrayBuffer");
  }
  blob() {
    return __privateGet(this, _cachedBody).call(this, "blob");
  }
  formData() {
    return __privateGet(this, _cachedBody).call(this, "formData");
  }
  addValidatedData(target, data) {
    __privateGet(this, _validatedData)[target] = data;
  }
  valid(target) {
    return __privateGet(this, _validatedData)[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return __privateGet(this, _matchResult)[0].map(([[, route]]) => route);
  }
  get routePath() {
    return __privateGet(this, _matchResult)[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, _validatedData = new WeakMap(), _matchResult = new WeakMap(), _HonoRequest_instances = new WeakSet(), getDecodedParam_fn = function(key) {
  const paramKey = __privateGet(this, _matchResult)[0][this.routeIndex][1][key];
  const param = __privateMethod(this, _HonoRequest_instances, getParamValue_fn).call(this, paramKey);
  return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
}, getAllDecodedParams_fn = function() {
  const decoded = {};
  const keys = Object.keys(__privateGet(this, _matchResult)[0][this.routeIndex][1]);
  for (const key of keys) {
    const value = __privateMethod(this, _HonoRequest_instances, getParamValue_fn).call(this, __privateGet(this, _matchResult)[0][this.routeIndex][1][key]);
    if (value && typeof value === "string") {
      decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
    }
  }
  return decoded;
}, getParamValue_fn = function(paramKey) {
  return __privateGet(this, _matchResult)[1] ? __privateGet(this, _matchResult)[1][paramKey] : paramKey;
}, _cachedBody = new WeakMap(), _a3);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = (str, phase, preserveCallbacks, context, buffer) => __async(void 0, null, function* () {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = yield str;
    }
  }
  const callbacks = str.callbacks;
  if (!(callbacks == null ? void 0 : callbacks.length)) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(yield resStr, callbacks);
  } else {
    return resStr;
  }
});

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var _rawRequest, _req, _var, _status, _executionCtx, _headers, _preparedHeaders, _res, _isFresh, _layout, _renderer, _notFoundHandler, _matchResult2, _path, _Context_instances, newResponse_fn, _a4;
var Context = (_a4 = class {
  constructor(req, options) {
    __privateAdd(this, _Context_instances);
    __privateAdd(this, _rawRequest);
    __privateAdd(this, _req);
    __publicField(this, "env", {});
    __privateAdd(this, _var);
    __publicField(this, "finalized", false);
    __publicField(this, "error");
    __privateAdd(this, _status, 200);
    __privateAdd(this, _executionCtx);
    __privateAdd(this, _headers);
    __privateAdd(this, _preparedHeaders);
    __privateAdd(this, _res);
    __privateAdd(this, _isFresh, true);
    __privateAdd(this, _layout);
    __privateAdd(this, _renderer);
    __privateAdd(this, _notFoundHandler);
    __privateAdd(this, _matchResult2);
    __privateAdd(this, _path);
    __publicField(this, "render", (...args) => {
      var _a13;
      (_a13 = __privateGet(this, _renderer)) != null ? _a13 : __privateSet(this, _renderer, (content) => this.html(content));
      return __privateGet(this, _renderer).call(this, ...args);
    });
    __publicField(this, "setLayout", (layout) => __privateSet(this, _layout, layout));
    __publicField(this, "getLayout", () => __privateGet(this, _layout));
    __publicField(this, "setRenderer", (renderer) => {
      __privateSet(this, _renderer, renderer);
    });
    __publicField(this, "header", (name, value, options) => {
      var _a13;
      if (value === void 0) {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).delete(name);
        } else if (__privateGet(this, _preparedHeaders)) {
          delete __privateGet(this, _preparedHeaders)[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options == null ? void 0 : options.append) {
        if (!__privateGet(this, _headers)) {
          __privateSet(this, _isFresh, false);
          __privateSet(this, _headers, new Headers(__privateGet(this, _preparedHeaders)));
          __privateSet(this, _preparedHeaders, {});
        }
        __privateGet(this, _headers).append(name, value);
      } else {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).set(name, value);
        } else {
          (_a13 = __privateGet(this, _preparedHeaders)) != null ? _a13 : __privateSet(this, _preparedHeaders, {});
          __privateGet(this, _preparedHeaders)[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options == null ? void 0 : options.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    });
    __publicField(this, "status", (status) => {
      __privateSet(this, _isFresh, false);
      __privateSet(this, _status, status);
    });
    __publicField(this, "set", (key, value) => {
      var _a13;
      (_a13 = __privateGet(this, _var)) != null ? _a13 : __privateSet(this, _var, /* @__PURE__ */ new Map());
      __privateGet(this, _var).set(key, value);
    });
    __publicField(this, "get", (key) => {
      return __privateGet(this, _var) ? __privateGet(this, _var).get(key) : void 0;
    });
    __publicField(this, "newResponse", (...args) => __privateMethod(this, _Context_instances, newResponse_fn).call(this, ...args));
    __publicField(this, "body", (data, arg, headers) => {
      return typeof arg === "number" ? __privateMethod(this, _Context_instances, newResponse_fn).call(this, data, arg, headers) : __privateMethod(this, _Context_instances, newResponse_fn).call(this, data, arg);
    });
    __publicField(this, "text", (text, arg, headers) => {
      if (!__privateGet(this, _preparedHeaders)) {
        if (__privateGet(this, _isFresh) && !headers && !arg) {
          return new Response(text);
        }
        __privateSet(this, _preparedHeaders, {});
      }
      __privateGet(this, _preparedHeaders)["content-type"] = TEXT_PLAIN;
      if (typeof arg === "number") {
        return __privateMethod(this, _Context_instances, newResponse_fn).call(this, text, arg, headers);
      }
      return __privateMethod(this, _Context_instances, newResponse_fn).call(this, text, arg);
    });
    __publicField(this, "json", (object, arg, headers) => {
      var _a13;
      const body = JSON.stringify(object);
      (_a13 = __privateGet(this, _preparedHeaders)) != null ? _a13 : __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "application/json";
      return typeof arg === "number" ? __privateMethod(this, _Context_instances, newResponse_fn).call(this, body, arg, headers) : __privateMethod(this, _Context_instances, newResponse_fn).call(this, body, arg);
    });
    __publicField(this, "html", (html, arg, headers) => {
      var _a13;
      (_a13 = __privateGet(this, _preparedHeaders)) != null ? _a13 : __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "text/html; charset=UTF-8";
      if (typeof html === "object") {
        return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
          return typeof arg === "number" ? __privateMethod(this, _Context_instances, newResponse_fn).call(this, html2, arg, headers) : __privateMethod(this, _Context_instances, newResponse_fn).call(this, html2, arg);
        });
      }
      return typeof arg === "number" ? __privateMethod(this, _Context_instances, newResponse_fn).call(this, html, arg, headers) : __privateMethod(this, _Context_instances, newResponse_fn).call(this, html, arg);
    });
    __publicField(this, "redirect", (location, status) => {
      var _a13;
      (_a13 = __privateGet(this, _headers)) != null ? _a13 : __privateSet(this, _headers, new Headers());
      __privateGet(this, _headers).set("Location", String(location));
      return this.newResponse(null, status != null ? status : 302);
    });
    __publicField(this, "notFound", () => {
      var _a13;
      (_a13 = __privateGet(this, _notFoundHandler)) != null ? _a13 : __privateSet(this, _notFoundHandler, () => new Response());
      return __privateGet(this, _notFoundHandler).call(this, this);
    });
    __privateSet(this, _rawRequest, req);
    if (options) {
      __privateSet(this, _executionCtx, options.executionCtx);
      this.env = options.env;
      __privateSet(this, _notFoundHandler, options.notFoundHandler);
      __privateSet(this, _path, options.path);
      __privateSet(this, _matchResult2, options.matchResult);
    }
  }
  get req() {
    var _a13;
    (_a13 = __privateGet(this, _req)) != null ? _a13 : __privateSet(this, _req, new HonoRequest(__privateGet(this, _rawRequest), __privateGet(this, _path), __privateGet(this, _matchResult2)));
    return __privateGet(this, _req);
  }
  get event() {
    if (__privateGet(this, _executionCtx) && "respondWith" in __privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (__privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    __privateSet(this, _isFresh, false);
    return __privateGet(this, _res) || __privateSet(this, _res, new Response("404 Not Found", { status: 404 }));
  }
  set res(_res2) {
    __privateSet(this, _isFresh, false);
    if (__privateGet(this, _res) && _res2) {
      try {
        for (const [k, v] of __privateGet(this, _res).headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = __privateGet(this, _res).headers.getSetCookie();
            _res2.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res2.headers.append("set-cookie", cookie);
            }
          } else {
            _res2.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res2.body, {
            headers: _res2.headers,
            status: _res2.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    __privateSet(this, _res, _res2);
    this.finalized = true;
  }
  get var() {
    if (!__privateGet(this, _var)) {
      return {};
    }
    return Object.fromEntries(__privateGet(this, _var));
  }
}, _rawRequest = new WeakMap(), _req = new WeakMap(), _var = new WeakMap(), _status = new WeakMap(), _executionCtx = new WeakMap(), _headers = new WeakMap(), _preparedHeaders = new WeakMap(), _res = new WeakMap(), _isFresh = new WeakMap(), _layout = new WeakMap(), _renderer = new WeakMap(), _notFoundHandler = new WeakMap(), _matchResult2 = new WeakMap(), _path = new WeakMap(), _Context_instances = new WeakSet(), newResponse_fn = function(data, arg, headers) {
  var _a13, _b2, _c;
  if (__privateGet(this, _isFresh) && !headers && !arg && __privateGet(this, _status) === 200) {
    return new Response(data, {
      headers: __privateGet(this, _preparedHeaders)
    });
  }
  if (arg && typeof arg !== "number") {
    const header = new Headers(arg.headers);
    if (__privateGet(this, _headers)) {
      __privateGet(this, _headers).forEach((v, k) => {
        if (k === "set-cookie") {
          header.append(k, v);
        } else {
          header.set(k, v);
        }
      });
    }
    const headers2 = setHeaders(header, __privateGet(this, _preparedHeaders));
    return new Response(data, {
      headers: headers2,
      status: (_a13 = arg.status) != null ? _a13 : __privateGet(this, _status)
    });
  }
  const status = typeof arg === "number" ? arg : __privateGet(this, _status);
  (_b2 = __privateGet(this, _preparedHeaders)) != null ? _b2 : __privateSet(this, _preparedHeaders, {});
  (_c = __privateGet(this, _headers)) != null ? _c : __privateSet(this, _headers, new Headers());
  setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
  if (__privateGet(this, _res)) {
    __privateGet(this, _res).headers.forEach((v, k) => {
      var _a14, _b3;
      if (k === "set-cookie") {
        (_a14 = __privateGet(this, _headers)) == null ? void 0 : _a14.append(k, v);
      } else {
        (_b3 = __privateGet(this, _headers)) == null ? void 0 : _b3.set(k, v);
      }
    });
    setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
  }
  headers != null ? headers : headers = {};
  for (const [k, v] of Object.entries(headers)) {
    if (typeof v === "string") {
      __privateGet(this, _headers).set(k, v);
    } else {
      __privateGet(this, _headers).delete(k);
      for (const v2 of v) {
        __privateGet(this, _headers).append(k, v2);
      }
    }
  }
  return new Response(data, {
    status,
    headers: __privateGet(this, _headers)
  });
}, _a4);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var _path2, _Hono_instances, clone_fn, _notFoundHandler2, addRoute_fn, handleError_fn, dispatch_fn, _a5;
var Hono = (_a5 = class {
  constructor(options = {}) {
    __privateAdd(this, _Hono_instances);
    __publicField(this, "get");
    __publicField(this, "post");
    __publicField(this, "put");
    __publicField(this, "delete");
    __publicField(this, "options");
    __publicField(this, "patch");
    __publicField(this, "all");
    __publicField(this, "on");
    __publicField(this, "use");
    __publicField(this, "router");
    __publicField(this, "getPath");
    __publicField(this, "_basePath", "/");
    __privateAdd(this, _path2, "/");
    __publicField(this, "routes", []);
    __privateAdd(this, _notFoundHandler2, notFoundHandler);
    __publicField(this, "errorHandler", errorHandler);
    __publicField(this, "onError", (handler) => {
      this.errorHandler = handler;
      return this;
    });
    __publicField(this, "notFound", (handler) => {
      __privateSet(this, _notFoundHandler2, handler);
      return this;
    });
    __publicField(this, "fetch", (request, ...rest) => {
      return __privateMethod(this, _Hono_instances, dispatch_fn).call(this, request, rest[1], rest[0], request.method);
    });
    __publicField(this, "request", (input, requestInit, Env, executionCtx) => {
      if (input instanceof Request) {
        return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
      }
      input = input.toString();
      return this.fetch(
        new Request(
          /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
          requestInit
        ),
        Env,
        executionCtx
      );
    });
    __publicField(this, "fire", () => {
      addEventListener("fetch", (event) => {
        event.respondWith(__privateMethod(this, _Hono_instances, dispatch_fn).call(this, event.request, event, void 0, event.request.method));
      });
    });
    var _b2;
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          __privateSet(this, _path2, args1);
        } else {
          __privateMethod(this, _Hono_instances, addRoute_fn).call(this, method, __privateGet(this, _path2), args1);
        }
        args.forEach((handler) => {
          __privateMethod(this, _Hono_instances, addRoute_fn).call(this, method, __privateGet(this, _path2), handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        __privateSet(this, _path2, p);
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            __privateMethod(this, _Hono_instances, addRoute_fn).call(this, m.toUpperCase(), __privateGet(this, _path2), handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        __privateSet(this, _path2, arg1);
      } else {
        __privateSet(this, _path2, "*");
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        __privateMethod(this, _Hono_instances, addRoute_fn).call(this, METHOD_NAME_ALL, __privateGet(this, _path2), handler);
      });
      return this;
    };
    const _a13 = options, { strict } = _a13, optionsWithoutStrict = __objRest(_a13, ["strict"]);
    Object.assign(this, optionsWithoutStrict);
    this.getPath = (strict != null ? strict : true) ? (_b2 = options.getPath) != null ? _b2 : getPath : getPathNoStrict;
  }
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      var _a13;
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = (c, next) => __async(this, null, function* () {
          return (yield compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        });
        handler[COMPOSED_HANDLER] = r.handler;
      }
      __privateMethod(_a13 = subApp, _Hono_instances, addRoute_fn).call(_a13, r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = __privateMethod(this, _Hono_instances, clone_fn).call(this);
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch (e) {
      }
      return [c.env, executionContext];
    };
    replaceRequest || (replaceRequest = (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })());
    const handler = (c, next) => __async(this, null, function* () {
      const res = yield applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      yield next();
    });
    __privateMethod(this, _Hono_instances, addRoute_fn).call(this, METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
}, _path2 = new WeakMap(), _Hono_instances = new WeakSet(), clone_fn = function() {
  const clone = new Hono({
    router: this.router,
    getPath: this.getPath
  });
  clone.routes = this.routes;
  return clone;
}, _notFoundHandler2 = new WeakMap(), addRoute_fn = function(method, path, handler) {
  method = method.toUpperCase();
  path = mergePath(this._basePath, path);
  const r = { path, method, handler };
  this.router.add(method, path, [handler, r]);
  this.routes.push(r);
}, handleError_fn = function(err, c) {
  if (err instanceof Error) {
    return this.errorHandler(err, c);
  }
  throw err;
}, dispatch_fn = function(request, executionCtx, env, method) {
  if (method === "HEAD") {
    return (() => __async(this, null, function* () {
      return new Response(null, yield __privateMethod(this, _Hono_instances, dispatch_fn).call(this, request, executionCtx, env, "GET"));
    }))();
  }
  const path = this.getPath(request, { env });
  const matchResult = this.router.match(method, path);
  const c = new Context(request, {
    path,
    matchResult,
    env,
    executionCtx,
    notFoundHandler: __privateGet(this, _notFoundHandler2)
  });
  if (matchResult[0].length === 1) {
    let res;
    try {
      res = matchResult[0][0][0][0](c, () => __async(this, null, function* () {
        c.res = yield __privateGet(this, _notFoundHandler2).call(this, c);
      }));
    } catch (err) {
      return __privateMethod(this, _Hono_instances, handleError_fn).call(this, err, c);
    }
    return res instanceof Promise ? res.then(
      (resolved) => resolved || (c.finalized ? c.res : __privateGet(this, _notFoundHandler2).call(this, c))
    ).catch((err) => __privateMethod(this, _Hono_instances, handleError_fn).call(this, err, c)) : res != null ? res : __privateGet(this, _notFoundHandler2).call(this, c);
  }
  const composed = compose(matchResult[0], this.errorHandler, __privateGet(this, _notFoundHandler2));
  return (() => __async(this, null, function* () {
    try {
      const context = yield composed(c);
      if (!context.finalized) {
        throw new Error(
          "Context is not finalized. Did you forget to return a Response object or `await next()`?"
        );
      }
      return context.res;
    } catch (err) {
      return __privateMethod(this, _Hono_instances, handleError_fn).call(this, err, c);
    }
  }))();
}, _a5);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var _index, _varIndex, _children, _a6;
var Node = (_a6 = class {
  constructor() {
    __privateAdd(this, _index);
    __privateAdd(this, _varIndex);
    __privateAdd(this, _children, /* @__PURE__ */ Object.create(null));
  }
  insert(tokens2, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens2.length === 0) {
      if (__privateGet(this, _index) !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      __privateSet(this, _index, index);
      return;
    }
    const [token, ...restTokens] = tokens2;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = __privateGet(this, _children)[regexpStr];
      if (!node) {
        if (Object.keys(__privateGet(this, _children)).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = __privateGet(this, _children)[regexpStr] = new Node();
        if (name !== "") {
          __privateSet(node, _varIndex, context.varIndex++);
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, __privateGet(node, _varIndex)]);
      }
    } else {
      node = __privateGet(this, _children)[token];
      if (!node) {
        if (Object.keys(__privateGet(this, _children)).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = __privateGet(this, _children)[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(__privateGet(this, _children)).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = __privateGet(this, _children)[k];
      return (typeof __privateGet(c, _varIndex) === "number" ? `(${k})@${__privateGet(c, _varIndex)}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof __privateGet(this, _index) === "number") {
      strList.unshift(`#${__privateGet(this, _index)}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, _index = new WeakMap(), _varIndex = new WeakMap(), _children = new WeakMap(), _a6);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/trie.js
var _context, _root, _a7;
var Trie = (_a7 = class {
  constructor() {
    __privateAdd(this, _context, { varIndex: 0 });
    __privateAdd(this, _root, new Node());
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens2 = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens2.length - 1; j >= 0; j--) {
        if (tokens2[j].indexOf(mark) !== -1) {
          tokens2[j] = tokens2[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    __privateGet(this, _root).insert(tokens2, index, paramAssoc, __privateGet(this, _context), pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = __privateGet(this, _root).buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, _context = new WeakMap(), _root = new WeakMap(), _a7);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  var _a13;
  return (_a13 = wildcardRegExpCache[path]) != null ? _a13 : wildcardRegExpCache[path] = new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  var _a13;
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = (_a13 = handlerData[i][j]) == null ? void 0 : _a13[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var _middleware, _routes, _RegExpRouter_instances, buildAllMatchers_fn, buildMatcher_fn, _a8;
var RegExpRouter = (_a8 = class {
  constructor() {
    __privateAdd(this, _RegExpRouter_instances);
    __publicField(this, "name", "RegExpRouter");
    __privateAdd(this, _middleware);
    __privateAdd(this, _routes);
    __privateSet(this, _middleware, { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) });
    __privateSet(this, _routes, { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) });
  }
  add(method, path, handler) {
    var _a13;
    const middleware = __privateGet(this, _middleware);
    const routes = __privateGet(this, _routes);
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a14;
          (_a14 = middleware[m])[path] || (_a14[path] = findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
        });
      } else {
        (_a13 = middleware[method])[path] || (_a13[path] = findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        var _a14;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a14 = routes[m])[path2] || (_a14[path2] = [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ]);
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = __privateMethod(this, _RegExpRouter_instances, buildAllMatchers_fn).call(this);
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
}, _middleware = new WeakMap(), _routes = new WeakMap(), _RegExpRouter_instances = new WeakSet(), buildAllMatchers_fn = function() {
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.keys(__privateGet(this, _routes)).concat(Object.keys(__privateGet(this, _middleware))).forEach((method) => {
    matchers[method] || (matchers[method] = __privateMethod(this, _RegExpRouter_instances, buildMatcher_fn).call(this, method));
  });
  __privateSet(this, _middleware, __privateSet(this, _routes, void 0));
  return matchers;
}, buildMatcher_fn = function(method) {
  const routes = [];
  let hasOwnRoute = method === METHOD_NAME_ALL;
  [__privateGet(this, _middleware), __privateGet(this, _routes)].forEach((r) => {
    const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
    if (ownRoute.length !== 0) {
      hasOwnRoute || (hasOwnRoute = true);
      routes.push(...ownRoute);
    } else if (method !== METHOD_NAME_ALL) {
      routes.push(
        ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
      );
    }
  });
  if (!hasOwnRoute) {
    return null;
  } else {
    return buildMatcherFromPreprocessedRoutes(routes);
  }
}, _a8);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/smart-router/router.js
var _routers, _routes2, _a9;
var SmartRouter = (_a9 = class {
  constructor(init) {
    __publicField(this, "name", "SmartRouter");
    __privateAdd(this, _routers, []);
    __privateAdd(this, _routes2, []);
    __privateSet(this, _routers, init.routers);
  }
  add(method, path, handler) {
    if (!__privateGet(this, _routes2)) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    __privateGet(this, _routes2).push([method, path, handler]);
  }
  match(method, path) {
    if (!__privateGet(this, _routes2)) {
      throw new Error("Fatal error");
    }
    const routers = __privateGet(this, _routers);
    const routes = __privateGet(this, _routes2);
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      __privateSet(this, _routers, [router]);
      __privateSet(this, _routes2, void 0);
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (__privateGet(this, _routes2) || __privateGet(this, _routers).length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return __privateGet(this, _routers)[0];
  }
}, _routers = new WeakMap(), _routes2 = new WeakMap(), _a9);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var _methods, _children2, _patterns, _order, _params, _Node_instances, getHandlerSets_fn, _a10;
var Node2 = (_a10 = class {
  constructor(method, handler, children) {
    __privateAdd(this, _Node_instances);
    __privateAdd(this, _methods);
    __privateAdd(this, _children2);
    __privateAdd(this, _patterns);
    __privateAdd(this, _order, 0);
    __privateAdd(this, _params, emptyParams);
    __privateSet(this, _children2, children || /* @__PURE__ */ Object.create(null));
    __privateSet(this, _methods, []);
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      __privateSet(this, _methods, [m]);
    }
    __privateSet(this, _patterns, []);
  }
  insert(method, path, handler) {
    __privateSet(this, _order, ++__privateWrapper(this, _order)._);
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (Object.keys(__privateGet(curNode, _children2)).includes(key)) {
        curNode = __privateGet(curNode, _children2)[key];
        const pattern2 = getPattern(p, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      __privateGet(curNode, _children2)[key] = new Node2();
      if (pattern) {
        __privateGet(curNode, _patterns).push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = __privateGet(curNode, _children2)[key];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: __privateGet(this, _order)
    };
    m[method] = handlerSet;
    __privateGet(curNode, _methods).push(m);
    return curNode;
  }
  search(method, path) {
    var _a13, _b2, _c;
    const handlerSets = [];
    __privateSet(this, _params, emptyParams);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = __privateGet(node, _children2)[part];
        if (nextNode) {
          __privateSet(nextNode, _params, __privateGet(node, _params));
          if (isLast) {
            if (__privateGet(nextNode, _children2)["*"]) {
              handlerSets.push(
                ...__privateMethod(this, _Node_instances, getHandlerSets_fn).call(this, __privateGet(nextNode, _children2)["*"], method, __privateGet(node, _params))
              );
            }
            handlerSets.push(...__privateMethod(this, _Node_instances, getHandlerSets_fn).call(this, nextNode, method, __privateGet(node, _params)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = __privateGet(node, _patterns).length; k < len3; k++) {
          const pattern = __privateGet(node, _patterns)[k];
          const params = __privateGet(node, _params) === emptyParams ? {} : __spreadValues({}, __privateGet(node, _params));
          if (pattern === "*") {
            const astNode = __privateGet(node, _children2)["*"];
            if (astNode) {
              handlerSets.push(...__privateMethod(this, _Node_instances, getHandlerSets_fn).call(this, astNode, method, __privateGet(node, _params)));
              __privateSet(astNode, _params, params);
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = __privateGet(node, _children2)[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...__privateMethod(this, _Node_instances, getHandlerSets_fn).call(this, child, method, __privateGet(node, _params), params));
              if (Object.keys(__privateGet(child, _children2)).length) {
                __privateSet(child, _params, params);
                const componentCount = (_b2 = (_a13 = m[0].match(/\//)) == null ? void 0 : _a13.length) != null ? _b2 : 0;
                const targetCurNodes = curNodesQueue[componentCount] || (curNodesQueue[componentCount] = []);
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...__privateMethod(this, _Node_instances, getHandlerSets_fn).call(this, child, method, params, __privateGet(node, _params)));
              if (__privateGet(child, _children2)["*"]) {
                handlerSets.push(
                  ...__privateMethod(this, _Node_instances, getHandlerSets_fn).call(this, __privateGet(child, _children2)["*"], method, params, __privateGet(node, _params))
                );
              }
            } else {
              __privateSet(child, _params, params);
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat((_c = curNodesQueue.shift()) != null ? _c : []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
}, _methods = new WeakMap(), _children2 = new WeakMap(), _patterns = new WeakMap(), _order = new WeakMap(), _params = new WeakMap(), _Node_instances = new WeakSet(), getHandlerSets_fn = function(node, method, nodeParams, params) {
  var _a13;
  const handlerSets = [];
  for (let i = 0, len = __privateGet(node, _methods).length; i < len; i++) {
    const m = __privateGet(node, _methods)[i];
    const handlerSet = m[method] || m[METHOD_NAME_ALL];
    const processedSet = {};
    if (handlerSet !== void 0) {
      handlerSet.params = /* @__PURE__ */ Object.create(null);
      handlerSets.push(handlerSet);
      if (nodeParams !== emptyParams || params && params !== emptyParams) {
        for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
          const key = handlerSet.possibleKeys[i2];
          const processed = processedSet[handlerSet.score];
          handlerSet.params[key] = (params == null ? void 0 : params[key]) && !processed ? params[key] : (_a13 = nodeParams[key]) != null ? _a13 : params == null ? void 0 : params[key];
          processedSet[handlerSet.score] = true;
        }
      }
    }
  }
  return handlerSets;
}, _a10);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/trie-router/router.js
var _node, _a11;
var TrieRouter = (_a11 = class {
  constructor() {
    __publicField(this, "name", "TrieRouter");
    __privateAdd(this, _node);
    __privateSet(this, _node, new Node2());
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        __privateGet(this, _node).insert(method, results[i], handler);
      }
      return;
    }
    __privateGet(this, _node).insert(method, path, handler);
  }
  match(method, path) {
    return __privateGet(this, _node).search(method, path);
  }
}, _node = new WeakMap(), _a11);

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    var _a13;
    super(options);
    this.router = (_a13 = options.router) != null ? _a13 : new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/stream.js
var StreamingApi = class {
  constructor(writable, _readable) {
    __publicField(this, "writer");
    __publicField(this, "encoder");
    __publicField(this, "writable");
    __publicField(this, "abortSubscribers", []);
    __publicField(this, "responseReadable");
    __publicField(this, "aborted", false);
    __publicField(this, "closed", false);
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder();
    const reader = _readable.getReader();
    this.abortSubscribers.push(() => __async(this, null, function* () {
      yield reader.cancel();
    }));
    this.responseReadable = new ReadableStream({
      pull(controller) {
        return __async(this, null, function* () {
          const { done, value } = yield reader.read();
          done ? controller.close() : controller.enqueue(value);
        });
      },
      cancel: () => {
        this.abort();
      }
    });
  }
  write(input) {
    return __async(this, null, function* () {
      try {
        if (typeof input === "string") {
          input = this.encoder.encode(input);
        }
        yield this.writer.write(input);
      } catch (e) {
      }
      return this;
    });
  }
  writeln(input) {
    return __async(this, null, function* () {
      yield this.write(input + "\n");
      return this;
    });
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  close() {
    return __async(this, null, function* () {
      try {
        yield this.writer.close();
      } catch (e) {
      }
      this.closed = true;
    });
  }
  pipe(body) {
    return __async(this, null, function* () {
      this.writer.releaseLock();
      yield body.pipeTo(this.writable, { preventClose: true });
      this.writer = this.writable.getWriter();
    });
  }
  onAbort(listener) {
    this.abortSubscribers.push(listener);
  }
  abort() {
    if (!this.aborted) {
      this.aborted = true;
      this.abortSubscribers.forEach((subscriber) => subscriber());
    }
  }
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/utils.js
var isOldBunVersion = () => {
  const version = typeof Bun !== "undefined" ? Bun.version : void 0;
  if (version === void 0) {
    return false;
  }
  const result = version.startsWith("1.1") || version.startsWith("1.0") || version.startsWith("0.");
  isOldBunVersion = () => result;
  return result;
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/stream.js
var contextStash = /* @__PURE__ */ new WeakMap();
var stream = (c, cb, onError) => {
  const { readable, writable } = new TransformStream();
  const stream2 = new StreamingApi(writable, readable);
  if (isOldBunVersion()) {
    c.req.raw.signal.addEventListener("abort", () => {
      if (!stream2.closed) {
        stream2.abort();
      }
    });
  }
  contextStash.set(stream2.responseReadable, c);
  (() => __async(void 0, null, function* () {
    try {
      yield cb(stream2);
    } catch (e) {
      if (e === void 0) {
      } else if (e instanceof Error && onError) {
        yield onError(e, stream2);
      } else {
        console.error(e);
      }
    } finally {
      stream2.close();
    }
  }))();
  return c.newResponse(stream2.responseReadable);
};

// node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/text.js
var streamText = (c, cb, onError) => {
  c.header("Content-Type", TEXT_PLAIN);
  c.header("X-Content-Type-Options", "nosniff");
  c.header("Transfer-Encoding", "chunked");
  return stream(c, cb, onError);
};

// src/index.ts
var import_node_child_process = __nccwpck_require__(317);
var import_node_crypto = __nccwpck_require__(982);

// node_modules/.pnpm/otpauth@9.3.6/node_modules/otpauth/dist/otpauth.node.mjs
var crypto2 = __toESM(__nccwpck_require__(982), 1);
var uintDecode = (num) => {
  const buf = new ArrayBuffer(8);
  const arr = new Uint8Array(buf);
  let acc = num;
  for (let i = 7; i >= 0; i--) {
    if (acc === 0) break;
    arr[i] = acc & 255;
    acc -= arr[i];
    acc /= 256;
  }
  return arr;
};
var globalScope = (() => {
  if (typeof globalThis === "object") return globalThis;
  else {
    Object.defineProperty(Object.prototype, "__GLOBALTHIS__", {
      get() {
        return this;
      },
      configurable: true
    });
    try {
      if (typeof __GLOBALTHIS__ !== "undefined") return __GLOBALTHIS__;
    } finally {
      delete Object.prototype.__GLOBALTHIS__;
    }
  }
  if (typeof self !== "undefined") return self;
  else if (typeof window !== "undefined") return window;
  else if (typeof global !== "undefined") return global;
  return void 0;
})();
var canonicalizeAlgorithm = (algorithm) => {
  switch (true) {
    case /^(?:SHA-?1|SSL3-SHA1)$/i.test(algorithm):
      return "SHA1";
    case /^SHA(?:2?-)?224$/i.test(algorithm):
      return "SHA224";
    case /^SHA(?:2?-)?256$/i.test(algorithm):
      return "SHA256";
    case /^SHA(?:2?-)?384$/i.test(algorithm):
      return "SHA384";
    case /^SHA(?:2?-)?512$/i.test(algorithm):
      return "SHA512";
    case /^SHA3-224$/i.test(algorithm):
      return "SHA3-224";
    case /^SHA3-256$/i.test(algorithm):
      return "SHA3-256";
    case /^SHA3-384$/i.test(algorithm):
      return "SHA3-384";
    case /^SHA3-512$/i.test(algorithm):
      return "SHA3-512";
    default:
      throw new TypeError(`Unknown hash algorithm: ${algorithm}`);
  }
};
var hmacDigest = (algorithm, key, message) => {
  if (crypto2 == null ? void 0 : crypto2.createHmac) {
    const hmac = crypto2.createHmac(algorithm, globalScope.Buffer.from(key));
    hmac.update(globalScope.Buffer.from(message));
    return hmac.digest();
  } else {
    throw new Error("Missing HMAC function");
  }
};
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
var base32Decode = (str) => {
  str = str.replace(/ /g, "");
  let end = str.length;
  while (str[end - 1] === "=") --end;
  str = (end < str.length ? str.substring(0, end) : str).toUpperCase();
  const buf = new ArrayBuffer(str.length * 5 / 8 | 0);
  const arr = new Uint8Array(buf);
  let bits = 0;
  let value = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    const idx = ALPHABET.indexOf(str[i]);
    if (idx === -1) throw new TypeError(`Invalid character found: ${str[i]}`);
    value = value << 5 | idx;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      arr[index++] = value >>> bits;
    }
  }
  return arr;
};
var base32Encode = (arr) => {
  let bits = 0;
  let value = 0;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    value = value << 8 | arr[i];
    bits += 8;
    while (bits >= 5) {
      str += ALPHABET[value >>> bits - 5 & 31];
      bits -= 5;
    }
  }
  if (bits > 0) {
    str += ALPHABET[value << 5 - bits & 31];
  }
  return str;
};
var hexDecode = (str) => {
  str = str.replace(/ /g, "");
  const buf = new ArrayBuffer(str.length / 2);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < str.length; i += 2) {
    arr[i / 2] = parseInt(str.substring(i, i + 2), 16);
  }
  return arr;
};
var hexEncode = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const hex = arr[i].toString(16);
    if (hex.length === 1) str += "0";
    str += hex;
  }
  return str.toUpperCase();
};
var latin1Decode = (str) => {
  const buf = new ArrayBuffer(str.length);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i) & 255;
  }
  return arr;
};
var latin1Encode = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += String.fromCharCode(arr[i]);
  }
  return str;
};
var ENCODER = globalScope.TextEncoder ? new globalScope.TextEncoder() : null;
var DECODER = globalScope.TextDecoder ? new globalScope.TextDecoder() : null;
var utf8Decode = (str) => {
  if (!ENCODER) {
    throw new Error("Encoding API not available");
  }
  return ENCODER.encode(str);
};
var utf8Encode = (arr) => {
  if (!DECODER) {
    throw new Error("Encoding API not available");
  }
  return DECODER.decode(arr);
};
var randomBytes2 = (size) => {
  var _a13;
  if (crypto2 == null ? void 0 : crypto2.randomBytes) {
    return crypto2.randomBytes(size);
  } else if ((_a13 = globalScope.crypto) == null ? void 0 : _a13.getRandomValues) {
    return globalScope.crypto.getRandomValues(new Uint8Array(size));
  } else {
    throw new Error("Cryptography API not available");
  }
};
var Secret = class _Secret {
  /**
  * Converts a Latin-1 string to a Secret object.
  * @param {string} str Latin-1 string.
  * @returns {Secret} Secret object.
  */
  static fromLatin1(str) {
    return new _Secret({
      buffer: latin1Decode(str).buffer
    });
  }
  /**
  * Converts an UTF-8 string to a Secret object.
  * @param {string} str UTF-8 string.
  * @returns {Secret} Secret object.
  */
  static fromUTF8(str) {
    return new _Secret({
      buffer: utf8Decode(str).buffer
    });
  }
  /**
  * Converts a base32 string to a Secret object.
  * @param {string} str Base32 string.
  * @returns {Secret} Secret object.
  */
  static fromBase32(str) {
    return new _Secret({
      buffer: base32Decode(str).buffer
    });
  }
  /**
  * Converts a hexadecimal string to a Secret object.
  * @param {string} str Hexadecimal string.
  * @returns {Secret} Secret object.
  */
  static fromHex(str) {
    return new _Secret({
      buffer: hexDecode(str).buffer
    });
  }
  /**
  * Secret key buffer.
  * @deprecated For backward compatibility, the "bytes" property should be used instead.
  * @type {ArrayBufferLike}
  */
  get buffer() {
    return this.bytes.buffer;
  }
  /**
  * Latin-1 string representation of secret key.
  * @type {string}
  */
  get latin1() {
    Object.defineProperty(this, "latin1", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: latin1Encode(this.bytes)
    });
    return this.latin1;
  }
  /**
  * UTF-8 string representation of secret key.
  * @type {string}
  */
  get utf8() {
    Object.defineProperty(this, "utf8", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: utf8Encode(this.bytes)
    });
    return this.utf8;
  }
  /**
  * Base32 string representation of secret key.
  * @type {string}
  */
  get base32() {
    Object.defineProperty(this, "base32", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: base32Encode(this.bytes)
    });
    return this.base32;
  }
  /**
  * Hexadecimal string representation of secret key.
  * @type {string}
  */
  get hex() {
    Object.defineProperty(this, "hex", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: hexEncode(this.bytes)
    });
    return this.hex;
  }
  /**
  * Creates a secret key object.
  * @param {Object} [config] Configuration options.
  * @param {ArrayBufferLike} [config.buffer] Secret key buffer.
  * @param {number} [config.size=20] Number of random bytes to generate, ignored if 'buffer' is provided.
  */
  constructor({ buffer, size = 20 } = {}) {
    this.bytes = typeof buffer === "undefined" ? randomBytes2(size) : new Uint8Array(buffer);
    Object.defineProperty(this, "bytes", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: this.bytes
    });
  }
};
var timingSafeEqual2 = (a, b) => {
  if (crypto2 == null ? void 0 : crypto2.timingSafeEqual) {
    return crypto2.timingSafeEqual(globalScope.Buffer.from(a), globalScope.Buffer.from(b));
  } else {
    if (a.length !== b.length) {
      throw new TypeError("Input strings must have the same length");
    }
    let i = -1;
    let out = 0;
    while (++i < a.length) {
      out |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return out === 0;
  }
};
var HOTP = class _HOTP {
  /**
  * Default configuration.
  * @type {{
  *   issuer: string,
  *   label: string,
  *   issuerInLabel: boolean,
  *   algorithm: string,
  *   digits: number,
  *   counter: number
  *   window: number
  * }}
  */
  static get defaults() {
    return {
      issuer: "",
      label: "OTPAuth",
      issuerInLabel: true,
      algorithm: "SHA1",
      digits: 6,
      counter: 0,
      window: 1
    };
  }
  /**
  * Generates an HOTP token.
  * @param {Object} config Configuration options.
  * @param {Secret} config.secret Secret key.
  * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
  * @param {number} [config.digits=6] Token length.
  * @param {number} [config.counter=0] Counter value.
  * @returns {string} Token.
  */
  static generate({ secret, algorithm = _HOTP.defaults.algorithm, digits = _HOTP.defaults.digits, counter = _HOTP.defaults.counter }) {
    const digest = hmacDigest(algorithm, secret.bytes, uintDecode(counter));
    const offset = digest[digest.byteLength - 1] & 15;
    const otp = ((digest[offset] & 127) << 24 | (digest[offset + 1] & 255) << 16 | (digest[offset + 2] & 255) << 8 | digest[offset + 3] & 255) % __pow(10, digits);
    return otp.toString().padStart(digits, "0");
  }
  /**
  * Generates an HOTP token.
  * @param {Object} [config] Configuration options.
  * @param {number} [config.counter=this.counter++] Counter value.
  * @returns {string} Token.
  */
  generate({ counter = this.counter++ } = {}) {
    return _HOTP.generate({
      secret: this.secret,
      algorithm: this.algorithm,
      digits: this.digits,
      counter
    });
  }
  /**
  * Validates an HOTP token.
  * @param {Object} config Configuration options.
  * @param {string} config.token Token value.
  * @param {Secret} config.secret Secret key.
  * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
  * @param {number} [config.digits=6] Token length.
  * @param {number} [config.counter=0] Counter value.
  * @param {number} [config.window=1] Window of counter values to test.
  * @returns {number|null} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
  */
  static validate({ token, secret, algorithm, digits = _HOTP.defaults.digits, counter = _HOTP.defaults.counter, window: window2 = _HOTP.defaults.window }) {
    if (token.length !== digits) return null;
    let delta = null;
    const check = (i) => {
      const generatedToken = _HOTP.generate({
        secret,
        algorithm,
        digits,
        counter: i
      });
      if (timingSafeEqual2(token, generatedToken)) {
        delta = i - counter;
      }
    };
    check(counter);
    for (let i = 1; i <= window2 && delta === null; ++i) {
      check(counter - i);
      if (delta !== null) break;
      check(counter + i);
      if (delta !== null) break;
    }
    return delta;
  }
  /**
  * Validates an HOTP token.
  * @param {Object} config Configuration options.
  * @param {string} config.token Token value.
  * @param {number} [config.counter=this.counter] Counter value.
  * @param {number} [config.window=1] Window of counter values to test.
  * @returns {number|null} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
  */
  validate({ token, counter = this.counter, window: window2 }) {
    return _HOTP.validate({
      token,
      secret: this.secret,
      algorithm: this.algorithm,
      digits: this.digits,
      counter,
      window: window2
    });
  }
  /**
  * Returns a Google Authenticator key URI.
  * @returns {string} URI.
  */
  toString() {
    const e = encodeURIComponent;
    return `otpauth://hotp/${this.issuer.length > 0 ? this.issuerInLabel ? `${e(this.issuer)}:${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?`}secret=${e(this.secret.base32)}&algorithm=${e(this.algorithm)}&digits=${e(this.digits)}&counter=${e(this.counter)}`;
  }
  /**
  * Creates an HOTP object.
  * @param {Object} [config] Configuration options.
  * @param {string} [config.issuer=''] Account provider.
  * @param {string} [config.label='OTPAuth'] Account label.
  * @param {boolean} [config.issuerInLabel=true] Include issuer prefix in label.
  * @param {Secret|string} [config.secret=Secret] Secret key.
  * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
  * @param {number} [config.digits=6] Token length.
  * @param {number} [config.counter=0] Initial counter value.
  */
  constructor({ issuer = _HOTP.defaults.issuer, label = _HOTP.defaults.label, issuerInLabel = _HOTP.defaults.issuerInLabel, secret = new Secret(), algorithm = _HOTP.defaults.algorithm, digits = _HOTP.defaults.digits, counter = _HOTP.defaults.counter } = {}) {
    this.issuer = issuer;
    this.label = label;
    this.issuerInLabel = issuerInLabel;
    this.secret = typeof secret === "string" ? Secret.fromBase32(secret) : secret;
    this.algorithm = canonicalizeAlgorithm(algorithm);
    this.digits = digits;
    this.counter = counter;
  }
};
var TOTP = class _TOTP {
  /**
  * Default configuration.
  * @type {{
  *   issuer: string,
  *   label: string,
  *   issuerInLabel: boolean,
  *   algorithm: string,
  *   digits: number,
  *   period: number
  *   window: number
  * }}
  */
  static get defaults() {
    return {
      issuer: "",
      label: "OTPAuth",
      issuerInLabel: true,
      algorithm: "SHA1",
      digits: 6,
      period: 30,
      window: 1
    };
  }
  /**
  * Generates a TOTP token.
  * @param {Object} config Configuration options.
  * @param {Secret} config.secret Secret key.
  * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
  * @param {number} [config.digits=6] Token length.
  * @param {number} [config.period=30] Token time-step duration.
  * @param {number} [config.timestamp=Date.now] Timestamp value in milliseconds.
  * @returns {string} Token.
  */
  static generate({ secret, algorithm, digits, period = _TOTP.defaults.period, timestamp = Date.now() }) {
    return HOTP.generate({
      secret,
      algorithm,
      digits,
      counter: Math.floor(timestamp / 1e3 / period)
    });
  }
  /**
  * Generates a TOTP token.
  * @param {Object} [config] Configuration options.
  * @param {number} [config.timestamp=Date.now] Timestamp value in milliseconds.
  * @returns {string} Token.
  */
  generate({ timestamp = Date.now() } = {}) {
    return _TOTP.generate({
      secret: this.secret,
      algorithm: this.algorithm,
      digits: this.digits,
      period: this.period,
      timestamp
    });
  }
  /**
  * Validates a TOTP token.
  * @param {Object} config Configuration options.
  * @param {string} config.token Token value.
  * @param {Secret} config.secret Secret key.
  * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
  * @param {number} [config.digits=6] Token length.
  * @param {number} [config.period=30] Token time-step duration.
  * @param {number} [config.timestamp=Date.now] Timestamp value in milliseconds.
  * @param {number} [config.window=1] Window of counter values to test.
  * @returns {number|null} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
  */
  static validate({ token, secret, algorithm, digits, period = _TOTP.defaults.period, timestamp = Date.now(), window: window2 }) {
    return HOTP.validate({
      token,
      secret,
      algorithm,
      digits,
      counter: Math.floor(timestamp / 1e3 / period),
      window: window2
    });
  }
  /**
  * Validates a TOTP token.
  * @param {Object} config Configuration options.
  * @param {string} config.token Token value.
  * @param {number} [config.timestamp=Date.now] Timestamp value in milliseconds.
  * @param {number} [config.window=1] Window of counter values to test.
  * @returns {number|null} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
  */
  validate({ token, timestamp, window: window2 }) {
    return _TOTP.validate({
      token,
      secret: this.secret,
      algorithm: this.algorithm,
      digits: this.digits,
      period: this.period,
      timestamp,
      window: window2
    });
  }
  /**
  * Returns a Google Authenticator key URI.
  * @returns {string} URI.
  */
  toString() {
    const e = encodeURIComponent;
    return `otpauth://totp/${this.issuer.length > 0 ? this.issuerInLabel ? `${e(this.issuer)}:${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?`}secret=${e(this.secret.base32)}&algorithm=${e(this.algorithm)}&digits=${e(this.digits)}&period=${e(this.period)}`;
  }
  /**
  * Creates a TOTP object.
  * @param {Object} [config] Configuration options.
  * @param {string} [config.issuer=''] Account provider.
  * @param {string} [config.label='OTPAuth'] Account label.
  * @param {boolean} [config.issuerInLabel=true] Include issuer prefix in label.
  * @param {Secret|string} [config.secret=Secret] Secret key.
  * @param {string} [config.algorithm='SHA1'] HMAC hashing algorithm.
  * @param {number} [config.digits=6] Token length.
  * @param {number} [config.period=30] Token time-step duration.
  */
  constructor({ issuer = _TOTP.defaults.issuer, label = _TOTP.defaults.label, issuerInLabel = _TOTP.defaults.issuerInLabel, secret = new Secret(), algorithm = _TOTP.defaults.algorithm, digits = _TOTP.defaults.digits, period = _TOTP.defaults.period } = {}) {
    this.issuer = issuer;
    this.label = label;
    this.issuerInLabel = issuerInLabel;
    this.secret = typeof secret === "string" ? Secret.fromBase32(secret) : secret;
    this.algorithm = canonicalizeAlgorithm(algorithm);
    this.digits = digits;
    this.period = period;
  }
};

// src/index.ts
var _a12, _b;
var ALLOWED_EXECUTABLES = (_b = (_a12 = process.env["ALLOWED_EXECUTABLES"]) == null ? void 0 : _a12.split(",")) != null ? _b : [];
var TIMEOUT = Number(process.env["TIMEOUT"]) || 1e4;
var SECRET = process.env["SECRET"];
var tokens = /* @__PURE__ */ new Set();
var server = new Hono2().get("/health", (ctx) => __async(void 0, null, function* () {
  return ctx.text("OK");
})).get("/auth/:code?", (ctx) => __async(void 0, null, function* () {
  const { code } = ctx.req.param();
  if (!SECRET || !code) {
    const secret = new Secret().base32;
    return ctx.text(secret);
  }
  const totp = new TOTP({ secret: SECRET });
  if (!totp.validate({ token: code })) {
    return ctx.text("Invalid code", 403);
  }
  const token = (0, import_node_crypto.randomUUID)();
  tokens.add(token);
  setTimeout(() => tokens.delete(token), 18e5);
  return ctx.text(token);
})).get("/:exec/*", (ctx) => __async(void 0, null, function* () {
  try {
    const { exec } = ctx.req.param();
    if (!ALLOWED_EXECUTABLES.includes(exec)) {
      return ctx.text("Not allowed", 403);
    }
    const args = ctx.req.url.split("/").slice(4).map((arg) => decodeURIComponent(arg));
    const { stdout, stderr, token } = ctx.req.query();
    if (token && !tokens.has(token)) {
      return ctx.text("Invalid token", 403);
    }
    return streamText(
      ctx,
      (stream2) => new Promise((resolve, reject) => {
        const child = (0, import_node_child_process.spawn)(exec, args, {
          env: process.env
        });
        const timeout = setTimeout(() => {
          stream2.abort();
        }, TIMEOUT);
        child.on("close", () => {
          clearTimeout(timeout);
          resolve();
        });
        child.on("error", () => {
          clearTimeout(timeout);
          reject();
        });
        let last = Promise.resolve();
        const handler = (data) => {
          last = new Promise((resolve2) => __async(void 0, null, function* () {
            yield last;
            stream2.write(data.toString()).finally(resolve2);
          }));
        };
        (stdout !== void 0 || stdout === stderr) && child.stdout.on("data", handler);
        (stderr !== void 0 || stdout === stderr) && child.stderr.on("data", handler);
      }),
      (err, stream2) => __async(void 0, null, function* () {
        yield stream2.write(String(err));
        stream2.abort();
      })
    );
  } catch (e) {
    return ctx.text(e.message, 500);
  }
}));
var port = Number(process.env["PORT"]) || 3e3;
serve({
  fetch: server.fetch.bind(server),
  port
});
/*! Bundled license information:

otpauth/dist/otpauth.node.mjs:
  (*! otpauth 9.3.6 | (c) Héctor Molinero Fernández | MIT | https://github.com/hectorm/otpauth *)
*/

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.cjs.js.map