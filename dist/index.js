#!/usr/bin/env node
import './sourcemap-register.cjs';import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({});
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__nccwpck_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__nccwpck_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__nccwpck_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nccwpck_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "http"
const external_http_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("http");
;// CONCATENATED MODULE: external "http2"
const external_http2_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("http2");
;// CONCATENATED MODULE: external "stream"
const external_stream_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("stream");
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("crypto");
;// CONCATENATED MODULE: ./node_modules/.pnpm/@hono+node-server@1.14.0_hono@4.7.5/node_modules/@hono/node-server/dist/index.mjs
// src/server.ts


// src/request.ts


var RequestError = class extends Error {
  static name = "RequestError";
  constructor(message, options) {
    super(message, options);
  }
};
var toRequestError = (e) => {
  if (e instanceof RequestError) {
    return e;
  }
  return new RequestError(e.message, { cause: e });
};
var GlobalRequest = global.Request;
var dist_Request = class extends GlobalRequest {
  constructor(input, options) {
    if (typeof input === "object" && getRequestCache in input) {
      input = input[getRequestCache]();
    }
    if (typeof options?.body?.getReader !== "undefined") {
      ;
      options.duplex ??= "half";
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
    const req = new dist_Request(url, init);
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
      init.body = external_stream_namespaceObject.Readable.toWeb(incoming);
    }
  }
  return new dist_Request(url, init);
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
    this[abortControllerKey] ||= new AbortController();
    return this[requestCache] ||= newRequestFromIncoming(
      this.method,
      this[urlKey],
      this[incomingKey],
      this[abortControllerKey]
    );
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
Object.setPrototypeOf(requestPrototype, dist_Request.prototype);
var newRequest = (incoming, defaultHostname) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  const incomingUrl = incoming.url || "";
  if (incomingUrl[0] !== "/" && // short-circuit for performance. most requests are relative URL.
  (incomingUrl.startsWith("http://") || incomingUrl.startsWith("https://"))) {
    if (incoming instanceof external_http2_namespaceObject.Http2ServerRequest) {
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
  const host = (incoming instanceof external_http2_namespaceObject.Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  let scheme;
  if (incoming instanceof external_http2_namespaceObject.Http2ServerRequest) {
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

// src/utils.ts
function writeFromReadableStream(stream, writable) {
  if (stream.locked) {
    throw new TypeError("ReadableStream is locked.");
  } else if (writable.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
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
  const res = {};
  if (!(headers instanceof Headers)) {
    headers = new Headers(headers ?? void 0);
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
  res["content-type"] ??= "text/plain; charset=UTF-8";
  return res;
};

// src/response.ts
var responseCache = Symbol("responseCache");
var getResponseCache = Symbol("getResponseCache");
var cacheKey = Symbol("cache");
var GlobalResponse = global.Response;
var Response2 = class _Response {
  #body;
  #init;
  [getResponseCache]() {
    delete this[cacheKey];
    return this[responseCache] ||= new GlobalResponse(this.#body, this.#init);
  }
  constructor(body, init) {
    this.#body = body;
    if (init instanceof _Response) {
      const cachedGlobalResponse = init[responseCache];
      if (cachedGlobalResponse) {
        this.#init = cachedGlobalResponse;
        this[getResponseCache]();
        return;
      } else {
        this.#init = init.#init;
      }
    } else {
      this.#init = init;
    }
    if (typeof body === "string" || typeof body?.getReader !== "undefined") {
      let headers = init?.headers || { "content-type": "text/plain; charset=UTF-8" };
      if (headers instanceof Headers) {
        headers = buildOutgoingHttpHeaders(headers);
      }
      ;
      this[cacheKey] = [init?.status || 200, body, headers];
    }
  }
};
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

// src/utils/response/constants.ts
var X_ALREADY_SENT = "x-hono-already-sent";

// src/globals.ts

var webFetch = global.fetch;
if (typeof global.crypto === "undefined") {
  global.crypto = external_crypto_namespaceObject;
}
global.fetch = (info, init) => {
  init = {
    // Disable compression handling so people can return the result of a fetch
    // directly in the loader without messing with the Content-Encoding header.
    compress: false,
    ...init
  };
  return webFetch(info, init);
};

// src/listener.ts
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
  const [status, body, header] = res[cacheKey];
  if (typeof body === "string") {
    header["Content-Length"] = Buffer.byteLength(body);
    outgoing.writeHead(status, header);
    outgoing.end(body);
  } else {
    outgoing.writeHead(status, header);
    return writeFromReadableStream(body, outgoing)?.catch(
      (e) => handleResponseError(e, outgoing)
    );
  }
};
var responseViaResponseObject = async (res, outgoing, options = {}) => {
  if (res instanceof Promise) {
    if (options.errorHandler) {
      try {
        res = await res;
      } catch (err) {
        const errRes = await options.errorHandler(err);
        if (!errRes) {
          return;
        }
        res = errRes;
      }
    } else {
      res = await res.catch(handleFetchError);
    }
  }
  if (cacheKey in res) {
    return responseViaCache(res, outgoing);
  }
  const resHeaderRecord = buildOutgoingHttpHeaders(res.headers);
  const internalBody = getInternalBody(res);
  if (internalBody) {
    const { length, source, stream } = internalBody;
    if (source instanceof Uint8Array && source.byteLength !== length) {
    } else {
      if (length) {
        resHeaderRecord["content-length"] = length;
      }
      outgoing.writeHead(res.status, resHeaderRecord);
      if (typeof source === "string" || source instanceof Uint8Array) {
        outgoing.end(source);
      } else if (source instanceof Blob) {
        outgoing.end(new Uint8Array(await source.arrayBuffer()));
      } else {
        await writeFromReadableStream(stream, outgoing);
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
      await writeFromReadableStream(res.body, outgoing);
    } else {
      const buffer = await res.arrayBuffer();
      resHeaderRecord["content-length"] = buffer.byteLength;
      outgoing.writeHead(res.status, resHeaderRecord);
      outgoing.end(new Uint8Array(buffer));
    }
  } else if (resHeaderRecord[X_ALREADY_SENT]) {
  } else {
    outgoing.writeHead(res.status, resHeaderRecord);
    outgoing.end();
  }
};
var getRequestListener = (fetchCallback, options = {}) => {
  if (options.overrideGlobalObjects !== false && global.Request !== dist_Request) {
    Object.defineProperty(global, "Request", {
      value: dist_Request
    });
    Object.defineProperty(global, "Response", {
      value: Response2
    });
  }
  return async (incoming, outgoing) => {
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
          res = await options.errorHandler(req ? e : toRequestError(e));
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
  };
};

// src/server.ts
var createAdaptorServer = (options) => {
  const fetchCallback = options.fetch;
  const requestListener = getRequestListener(fetchCallback, {
    hostname: options.hostname,
    overrideGlobalObjects: options.overrideGlobalObjects
  });
  const createServer = options.createServer || external_http_namespaceObject.createServer;
  const server = createServer(options.serverOptions || {}, requestListener);
  return server;
};
var serve = (options, listeningListener) => {
  const server = createAdaptorServer(options);
  server.listen(options?.port ?? 3e3, options.hostname, () => {
    const serverInfo = server.address();
    listeningListener && listeningListener(serverInfo);
  });
  return server;
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/compose.js
// src/compose.ts
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
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
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/body.js
// src/utils/body.ts

var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
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


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/url.js
// src/utils/url.ts
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
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
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
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
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
  encoded ??= /[%+]/.test(url);
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
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/request.js
// src/request.ts


var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw } = this;
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
    return bodyCache[key] = raw[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/html.js
// src/utils/html.ts
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
var escapeRe = /[&<>'"]/;
var stringBufferToString = async (buffer, callbacks) => {
  let str = "";
  callbacks ||= [];
  const resolvedBuffer = await Promise.all(buffer);
  for (let i = resolvedBuffer.length - 1; ; i--) {
    str += resolvedBuffer[i];
    i--;
    if (i < 0) {
      break;
    }
    let r = resolvedBuffer[i];
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    const isEscaped = r.isEscaped;
    r = await (typeof r === "object" ? r.toString() : r);
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    if (r.isEscaped ?? isEscaped) {
      str += r;
    } else {
      const buf = [str];
      escapeToBuffer(r, buf);
      str = buf[0];
    }
  }
  return raw(str, callbacks);
};
var escapeToBuffer = (str, buffer) => {
  const match = str.search(escapeRe);
  if (match === -1) {
    buffer[0] += str;
    return;
  }
  let escape;
  let index;
  let lastIndex = 0;
  for (index = match; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escape = "&quot;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    buffer[0] += str.substring(lastIndex, index) + escape;
    lastIndex = index + 1;
  }
  buffer[0] += str.substring(lastIndex, index);
};
var resolveCallbackSync = (str) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return str;
  }
  const buffer = [str];
  const context = {};
  callbacks.forEach((c) => c({ phase: HtmlEscapedCallbackPhase.Stringify, buffer, context }));
  return buffer[0];
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
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
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/context.js
// src/context.ts


var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router.js
// src/router.ts
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/constants.js
// src/utils/constants.ts
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/hono-base.js
// src/hono-base.ts





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
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
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
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
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
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/node.js
// src/router/reg-exp-router/node.ts
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
var Node = class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
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
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/trie.js
// src/router/reg-exp-router/trie.ts

var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node();
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
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
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
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/router.js
// src/router/reg-exp-router/router.ts




var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
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
      const map = handlerData[i][j]?.[1];
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
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
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
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
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
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
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
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
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
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/reg-exp-router/index.js
// src/router/reg-exp-router/index.ts



;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/smart-router/router.js
// src/router/smart-router/router.ts

var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
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
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/trie-router/node.js
// src/router/trie-router/node.ts


var emptyParams = /* @__PURE__ */ Object.create(null);
var node_Node = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (Object.keys(curNode.#children).includes(key)) {
        curNode = curNode.#children[key];
        const pattern2 = getPattern(p, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[key] = new node_Node();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
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
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/trie-router/router.js
// src/router/trie-router/router.ts


var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new node_Node();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/router/trie-router/index.js
// src/router/trie-router/index.ts



;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/hono.js
// src/hono.ts




var hono_Hono = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/index.js
// src/index.ts



;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/utils/stream.js
// src/utils/stream.ts
var StreamingApi = class {
  writer;
  encoder;
  writable;
  abortSubscribers = [];
  responseReadable;
  aborted = false;
  closed = false;
  constructor(writable, _readable) {
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder();
    const reader = _readable.getReader();
    this.abortSubscribers.push(async () => {
      await reader.cancel();
    });
    this.responseReadable = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        done ? controller.close() : controller.enqueue(value);
      },
      cancel: () => {
        this.abort();
      }
    });
  }
  async write(input) {
    try {
      if (typeof input === "string") {
        input = this.encoder.encode(input);
      }
      await this.writer.write(input);
    } catch {
    }
    return this;
  }
  async writeln(input) {
    await this.write(input + "\n");
    return this;
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async close() {
    try {
      await this.writer.close();
    } catch {
    }
    this.closed = true;
  }
  async pipe(body) {
    this.writer.releaseLock();
    await body.pipeTo(this.writable, { preventClose: true });
    this.writer = this.writable.getWriter();
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


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/utils.js
// src/helper/streaming/utils.ts
var utils_isOldBunVersion = () => {
  const version = typeof Bun !== "undefined" ? Bun.version : void 0;
  if (version === void 0) {
    return false;
  }
  const result = version.startsWith("1.1") || version.startsWith("1.0") || version.startsWith("0.");
  utils_isOldBunVersion = () => result;
  return result;
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/stream.js
// src/helper/streaming/stream.ts


var contextStash = /* @__PURE__ */ new WeakMap();
var stream = (c, cb, onError) => {
  const { readable, writable } = new TransformStream();
  const stream2 = new StreamingApi(writable, readable);
  if (utils_isOldBunVersion()) {
    c.req.raw.signal.addEventListener("abort", () => {
      if (!stream2.closed) {
        stream2.abort();
      }
    });
  }
  contextStash.set(stream2.responseReadable, c);
  (async () => {
    try {
      await cb(stream2);
    } catch (e) {
      if (e === void 0) {
      } else if (e instanceof Error && onError) {
        await onError(e, stream2);
      } else {
        console.error(e);
      }
    } finally {
      stream2.close();
    }
  })();
  return c.newResponse(stream2.responseReadable);
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/sse.js
// src/helper/streaming/sse.ts



var SSEStreamingApi = class extends StreamingApi {
  constructor(writable, readable) {
    super(writable, readable);
  }
  async writeSSE(message) {
    const data = await resolveCallback(message.data, HtmlEscapedCallbackPhase.Stringify, false, {});
    const dataLines = data.split("\n").map((line) => {
      return `data: ${line}`;
    }).join("\n");
    const sseData = [
      message.event && `event: ${message.event}`,
      dataLines,
      message.id && `id: ${message.id}`,
      message.retry && `retry: ${message.retry}`
    ].filter(Boolean).join("\n") + "\n\n";
    await this.write(sseData);
  }
};
var run = async (stream, cb, onError) => {
  try {
    await cb(stream);
  } catch (e) {
    if (e instanceof Error && onError) {
      await onError(e, stream);
      await stream.writeSSE({
        event: "error",
        data: e.message
      });
    } else {
      console.error(e);
    }
  } finally {
    stream.close();
  }
};
var sse_contextStash = /* @__PURE__ */ new WeakMap();
var streamSSE = (c, cb, onError) => {
  const { readable, writable } = new TransformStream();
  const stream = new SSEStreamingApi(writable, readable);
  if (isOldBunVersion()) {
    c.req.raw.signal.addEventListener("abort", () => {
      if (!stream.closed) {
        stream.abort();
      }
    });
  }
  sse_contextStash.set(stream.responseReadable, c);
  c.header("Transfer-Encoding", "chunked");
  c.header("Content-Type", "text/event-stream");
  c.header("Cache-Control", "no-cache");
  c.header("Connection", "keep-alive");
  run(stream, cb, onError);
  return c.newResponse(stream.responseReadable);
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/text.js
// src/helper/streaming/text.ts


var streamText = (c, cb, onError) => {
  c.header("Content-Type", TEXT_PLAIN);
  c.header("X-Content-Type-Options", "nosniff");
  c.header("Transfer-Encoding", "chunked");
  return stream(c, cb, onError);
};


;// CONCATENATED MODULE: ./node_modules/.pnpm/hono@4.7.5/node_modules/hono/dist/helper/streaming/index.js
// src/helper/streaming/index.ts





;// CONCATENATED MODULE: external "node:child_process"
const external_node_child_process_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:child_process");
;// CONCATENATED MODULE: external "node:crypto"
const external_node_crypto_namespaceObject = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:crypto");
var external_node_crypto_namespaceObject_0 = /*#__PURE__*/__nccwpck_require__.t(external_node_crypto_namespaceObject, 2);
;// CONCATENATED MODULE: ./node_modules/.pnpm/otpauth@9.3.6/node_modules/otpauth/dist/otpauth.node.mjs
//! otpauth 9.3.6 | (c) Héctor Molinero Fernández | MIT | https://github.com/hectorm/otpauth
/// <reference types="./otpauth.d.ts" />
// @ts-nocheck


/**
 * Converts an integer to an Uint8Array.
 * @param {number} num Integer.
 * @returns {Uint8Array} Uint8Array.
 */ const uintDecode = (num)=>{
    const buf = new ArrayBuffer(8);
    const arr = new Uint8Array(buf);
    let acc = num;
    for(let i = 7; i >= 0; i--){
        if (acc === 0) break;
        arr[i] = acc & 255;
        acc -= arr[i];
        acc /= 256;
    }
    return arr;
};

/**
 * "globalThis" ponyfill.
 * @see [A horrifying globalThis polyfill in universal JavaScript](https://mathiasbynens.be/notes/globalthis)
 * @type {Object.<string, *>}
 */ const globalScope = (()=>{
    if (typeof globalThis === "object") return globalThis;
    else {
        Object.defineProperty(Object.prototype, "__GLOBALTHIS__", {
            get () {
                return this;
            },
            configurable: true
        });
        try {
            // @ts-expect-error
            // eslint-disable-next-line no-undef
            if (typeof __GLOBALTHIS__ !== "undefined") return __GLOBALTHIS__;
        } finally{
            // @ts-expect-error
            delete Object.prototype.__GLOBALTHIS__;
        }
    }
    // Still unable to determine "globalThis", fall back to a naive method.
    if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else if (typeof global !== "undefined") return global;
    return undefined;
})();

/**
 * Canonicalizes a hash algorithm name.
 * @param {string} algorithm Hash algorithm name.
 * @returns {"SHA1"|"SHA224"|"SHA256"|"SHA384"|"SHA512"|"SHA3-224"|"SHA3-256"|"SHA3-384"|"SHA3-512"} Canonicalized hash algorithm name.
 */ const canonicalizeAlgorithm = (algorithm)=>{
    switch(true){
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
/**
 * Calculates an HMAC digest.
 * @param {string} algorithm Algorithm.
 * @param {Uint8Array} key Key.
 * @param {Uint8Array} message Message.
 * @returns {Uint8Array} Digest.
 */ const hmacDigest = (algorithm, key, message)=>{
    if (external_node_crypto_namespaceObject_0?.createHmac) {
        const hmac = external_node_crypto_namespaceObject.createHmac(algorithm, globalScope.Buffer.from(key));
        hmac.update(globalScope.Buffer.from(message));
        return hmac.digest();
    } else {
        throw new Error("Missing HMAC function");
    }
};

/**
 * RFC 4648 base32 alphabet without pad.
 * @type {string}
 */ const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
/**
 * Converts a base32 string to an Uint8Array (RFC 4648).
 * @see [LinusU/base32-decode](https://github.com/LinusU/base32-decode)
 * @param {string} str Base32 string.
 * @returns {Uint8Array} Uint8Array.
 */ const base32Decode = (str)=>{
    // Remove spaces (although they are not allowed by the spec, some issuers add them for readability).
    str = str.replace(/ /g, "");
    // Canonicalize to all upper case and remove padding if it exists.
    let end = str.length;
    while(str[end - 1] === "=")--end;
    str = (end < str.length ? str.substring(0, end) : str).toUpperCase();
    const buf = new ArrayBuffer(str.length * 5 / 8 | 0);
    const arr = new Uint8Array(buf);
    let bits = 0;
    let value = 0;
    let index = 0;
    for(let i = 0; i < str.length; i++){
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
/**
 * Converts an Uint8Array to a base32 string (RFC 4648).
 * @see [LinusU/base32-encode](https://github.com/LinusU/base32-encode)
 * @param {Uint8Array} arr Uint8Array.
 * @returns {string} Base32 string.
 */ const base32Encode = (arr)=>{
    let bits = 0;
    let value = 0;
    let str = "";
    for(let i = 0; i < arr.length; i++){
        value = value << 8 | arr[i];
        bits += 8;
        while(bits >= 5){
            str += ALPHABET[value >>> bits - 5 & 31];
            bits -= 5;
        }
    }
    if (bits > 0) {
        str += ALPHABET[value << 5 - bits & 31];
    }
    return str;
};

/**
 * Converts a hexadecimal string to an Uint8Array.
 * @param {string} str Hexadecimal string.
 * @returns {Uint8Array} Uint8Array.
 */ const hexDecode = (str)=>{
    // Remove spaces (although they are not allowed by the spec, some issuers add them for readability).
    str = str.replace(/ /g, "");
    const buf = new ArrayBuffer(str.length / 2);
    const arr = new Uint8Array(buf);
    for(let i = 0; i < str.length; i += 2){
        arr[i / 2] = parseInt(str.substring(i, i + 2), 16);
    }
    return arr;
};
/**
 * Converts an Uint8Array to a hexadecimal string.
 * @param {Uint8Array} arr Uint8Array.
 * @returns {string} Hexadecimal string.
 */ const hexEncode = (arr)=>{
    let str = "";
    for(let i = 0; i < arr.length; i++){
        const hex = arr[i].toString(16);
        if (hex.length === 1) str += "0";
        str += hex;
    }
    return str.toUpperCase();
};

/**
 * Converts a Latin-1 string to an Uint8Array.
 * @param {string} str Latin-1 string.
 * @returns {Uint8Array} Uint8Array.
 */ const latin1Decode = (str)=>{
    const buf = new ArrayBuffer(str.length);
    const arr = new Uint8Array(buf);
    for(let i = 0; i < str.length; i++){
        arr[i] = str.charCodeAt(i) & 0xff;
    }
    return arr;
};
/**
 * Converts an Uint8Array to a Latin-1 string.
 * @param {Uint8Array} arr Uint8Array.
 * @returns {string} Latin-1 string.
 */ const latin1Encode = (arr)=>{
    let str = "";
    for(let i = 0; i < arr.length; i++){
        str += String.fromCharCode(arr[i]);
    }
    return str;
};

/**
 * TextEncoder instance.
 * @type {TextEncoder|null}
 */ const ENCODER = globalScope.TextEncoder ? new globalScope.TextEncoder() : null;
/**
 * TextDecoder instance.
 * @type {TextDecoder|null}
 */ const DECODER = globalScope.TextDecoder ? new globalScope.TextDecoder() : null;
/**
 * Converts an UTF-8 string to an Uint8Array.
 * @param {string} str String.
 * @returns {Uint8Array} Uint8Array.
 */ const utf8Decode = (str)=>{
    if (!ENCODER) {
        throw new Error("Encoding API not available");
    }
    return ENCODER.encode(str);
};
/**
 * Converts an Uint8Array to an UTF-8 string.
 * @param {Uint8Array} arr Uint8Array.
 * @returns {string} String.
 */ const utf8Encode = (arr)=>{
    if (!DECODER) {
        throw new Error("Encoding API not available");
    }
    return DECODER.decode(arr);
};

/**
 * Returns random bytes.
 * @param {number} size Size.
 * @returns {Uint8Array} Random bytes.
 */ const randomBytes = (size)=>{
    if (external_node_crypto_namespaceObject_0?.randomBytes) {
        return external_node_crypto_namespaceObject.randomBytes(size);
    } else if (globalScope.crypto?.getRandomValues) {
        return globalScope.crypto.getRandomValues(new Uint8Array(size));
    } else {
        throw new Error("Cryptography API not available");
    }
};

/**
 * OTP secret key.
 */ class Secret {
    /**
   * Converts a Latin-1 string to a Secret object.
   * @param {string} str Latin-1 string.
   * @returns {Secret} Secret object.
   */ static fromLatin1(str) {
        return new Secret({
            buffer: latin1Decode(str).buffer
        });
    }
    /**
   * Converts an UTF-8 string to a Secret object.
   * @param {string} str UTF-8 string.
   * @returns {Secret} Secret object.
   */ static fromUTF8(str) {
        return new Secret({
            buffer: utf8Decode(str).buffer
        });
    }
    /**
   * Converts a base32 string to a Secret object.
   * @param {string} str Base32 string.
   * @returns {Secret} Secret object.
   */ static fromBase32(str) {
        return new Secret({
            buffer: base32Decode(str).buffer
        });
    }
    /**
   * Converts a hexadecimal string to a Secret object.
   * @param {string} str Hexadecimal string.
   * @returns {Secret} Secret object.
   */ static fromHex(str) {
        return new Secret({
            buffer: hexDecode(str).buffer
        });
    }
    /**
   * Secret key buffer.
   * @deprecated For backward compatibility, the "bytes" property should be used instead.
   * @type {ArrayBufferLike}
   */ get buffer() {
        return this.bytes.buffer;
    }
    /**
   * Latin-1 string representation of secret key.
   * @type {string}
   */ get latin1() {
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
   */ get utf8() {
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
   */ get base32() {
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
   */ get hex() {
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
   */ constructor({ buffer, size = 20 } = {}){
        /**
     * Secret key.
     * @type {Uint8Array}
     * @readonly
     */ this.bytes = typeof buffer === "undefined" ? randomBytes(size) : new Uint8Array(buffer);
        // Prevent the "bytes" property from being modified.
        Object.defineProperty(this, "bytes", {
            enumerable: true,
            writable: false,
            configurable: false,
            value: this.bytes
        });
    }
}

/**
 * Returns true if a is equal to b, without leaking timing information that would allow an attacker to guess one of the values.
 * @param {string} a String a.
 * @param {string} b String b.
 * @returns {boolean} Equality result.
 */ const timingSafeEqual = (a, b)=>{
    if (external_node_crypto_namespaceObject_0?.timingSafeEqual) {
        return external_node_crypto_namespaceObject.timingSafeEqual(globalScope.Buffer.from(a), globalScope.Buffer.from(b));
    } else {
        if (a.length !== b.length) {
            throw new TypeError("Input strings must have the same length");
        }
        let i = -1;
        let out = 0;
        while(++i < a.length){
            out |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return out === 0;
    }
};

/**
 * HOTP: An HMAC-based One-time Password Algorithm.
 * @see [RFC 4226](https://datatracker.ietf.org/doc/html/rfc4226)
 */ class HOTP {
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
   */ static get defaults() {
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
   */ static generate({ secret, algorithm = HOTP.defaults.algorithm, digits = HOTP.defaults.digits, counter = HOTP.defaults.counter }) {
        const digest = hmacDigest(algorithm, secret.bytes, uintDecode(counter));
        const offset = digest[digest.byteLength - 1] & 15;
        const otp = ((digest[offset] & 127) << 24 | (digest[offset + 1] & 255) << 16 | (digest[offset + 2] & 255) << 8 | digest[offset + 3] & 255) % 10 ** digits;
        return otp.toString().padStart(digits, "0");
    }
    /**
   * Generates an HOTP token.
   * @param {Object} [config] Configuration options.
   * @param {number} [config.counter=this.counter++] Counter value.
   * @returns {string} Token.
   */ generate({ counter = this.counter++ } = {}) {
        return HOTP.generate({
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
   */ static validate({ token, secret, algorithm, digits = HOTP.defaults.digits, counter = HOTP.defaults.counter, window = HOTP.defaults.window }) {
        // Return early if the token length does not match the digit number.
        if (token.length !== digits) return null;
        let delta = null;
        const check = (/** @type {number} */ i)=>{
            const generatedToken = HOTP.generate({
                secret,
                algorithm,
                digits,
                counter: i
            });
            if (timingSafeEqual(token, generatedToken)) {
                delta = i - counter;
            }
        };
        check(counter);
        for(let i = 1; i <= window && delta === null; ++i){
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
   */ validate({ token, counter = this.counter, window }) {
        return HOTP.validate({
            token,
            secret: this.secret,
            algorithm: this.algorithm,
            digits: this.digits,
            counter,
            window
        });
    }
    /**
   * Returns a Google Authenticator key URI.
   * @returns {string} URI.
   */ toString() {
        const e = encodeURIComponent;
        return "otpauth://hotp/" + `${this.issuer.length > 0 ? this.issuerInLabel ? `${e(this.issuer)}:${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?`}` + `secret=${e(this.secret.base32)}&` + `algorithm=${e(this.algorithm)}&` + `digits=${e(this.digits)}&` + `counter=${e(this.counter)}`;
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
   */ constructor({ issuer = HOTP.defaults.issuer, label = HOTP.defaults.label, issuerInLabel = HOTP.defaults.issuerInLabel, secret = new Secret(), algorithm = HOTP.defaults.algorithm, digits = HOTP.defaults.digits, counter = HOTP.defaults.counter } = {}){
        /**
     * Account provider.
     * @type {string}
     */ this.issuer = issuer;
        /**
     * Account label.
     * @type {string}
     */ this.label = label;
        /**
     * Include issuer prefix in label.
     * @type {boolean}
     */ this.issuerInLabel = issuerInLabel;
        /**
     * Secret key.
     * @type {Secret}
     */ this.secret = typeof secret === "string" ? Secret.fromBase32(secret) : secret;
        /**
     * HMAC hashing algorithm.
     * @type {string}
     */ this.algorithm = canonicalizeAlgorithm(algorithm);
        /**
     * Token length.
     * @type {number}
     */ this.digits = digits;
        /**
     * Initial counter value.
     * @type {number}
     */ this.counter = counter;
    }
}

/**
 * TOTP: Time-Based One-Time Password Algorithm.
 * @see [RFC 6238](https://datatracker.ietf.org/doc/html/rfc6238)
 */ class TOTP {
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
   */ static get defaults() {
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
   */ static generate({ secret, algorithm, digits, period = TOTP.defaults.period, timestamp = Date.now() }) {
        return HOTP.generate({
            secret,
            algorithm,
            digits,
            counter: Math.floor(timestamp / 1000 / period)
        });
    }
    /**
   * Generates a TOTP token.
   * @param {Object} [config] Configuration options.
   * @param {number} [config.timestamp=Date.now] Timestamp value in milliseconds.
   * @returns {string} Token.
   */ generate({ timestamp = Date.now() } = {}) {
        return TOTP.generate({
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
   */ static validate({ token, secret, algorithm, digits, period = TOTP.defaults.period, timestamp = Date.now(), window }) {
        return HOTP.validate({
            token,
            secret,
            algorithm,
            digits,
            counter: Math.floor(timestamp / 1000 / period),
            window
        });
    }
    /**
   * Validates a TOTP token.
   * @param {Object} config Configuration options.
   * @param {string} config.token Token value.
   * @param {number} [config.timestamp=Date.now] Timestamp value in milliseconds.
   * @param {number} [config.window=1] Window of counter values to test.
   * @returns {number|null} Token delta or null if it is not found in the search window, in which case it should be considered invalid.
   */ validate({ token, timestamp, window }) {
        return TOTP.validate({
            token,
            secret: this.secret,
            algorithm: this.algorithm,
            digits: this.digits,
            period: this.period,
            timestamp,
            window
        });
    }
    /**
   * Returns a Google Authenticator key URI.
   * @returns {string} URI.
   */ toString() {
        const e = encodeURIComponent;
        return "otpauth://totp/" + `${this.issuer.length > 0 ? this.issuerInLabel ? `${e(this.issuer)}:${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?issuer=${e(this.issuer)}&` : `${e(this.label)}?`}` + `secret=${e(this.secret.base32)}&` + `algorithm=${e(this.algorithm)}&` + `digits=${e(this.digits)}&` + `period=${e(this.period)}`;
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
   */ constructor({ issuer = TOTP.defaults.issuer, label = TOTP.defaults.label, issuerInLabel = TOTP.defaults.issuerInLabel, secret = new Secret(), algorithm = TOTP.defaults.algorithm, digits = TOTP.defaults.digits, period = TOTP.defaults.period } = {}){
        /**
     * Account provider.
     * @type {string}
     */ this.issuer = issuer;
        /**
     * Account label.
     * @type {string}
     */ this.label = label;
        /**
     * Include issuer prefix in label.
     * @type {boolean}
     */ this.issuerInLabel = issuerInLabel;
        /**
     * Secret key.
     * @type {Secret}
     */ this.secret = typeof secret === "string" ? Secret.fromBase32(secret) : secret;
        /**
     * HMAC hashing algorithm.
     * @type {string}
     */ this.algorithm = canonicalizeAlgorithm(algorithm);
        /**
     * Token length.
     * @type {number}
     */ this.digits = digits;
        /**
     * Token time-step duration.
     * @type {number}
     */ this.period = period;
    }
}

/**
 * Key URI regex (otpauth://TYPE/[ISSUER:]LABEL?PARAMETERS).
 * @type {RegExp}
 */ const OTPURI_REGEX = /^otpauth:\/\/([ht]otp)\/(.+)\?([A-Z0-9.~_-]+=[^?&]*(?:&[A-Z0-9.~_-]+=[^?&]*)*)$/i;
/**
 * RFC 4648 base32 alphabet with pad.
 * @type {RegExp}
 */ const SECRET_REGEX = /^[2-7A-Z]+=*$/i;
/**
 * Regex for supported algorithms.
 * @type {RegExp}
 */ const ALGORITHM_REGEX = /^SHA(?:1|224|256|384|512|3-224|3-256|3-384|3-512)$/i;
/**
 * Integer regex.
 * @type {RegExp}
 */ const INTEGER_REGEX = /^[+-]?\d+$/;
/**
 * Positive integer regex.
 * @type {RegExp}
 */ const POSITIVE_INTEGER_REGEX = /^\+?[1-9]\d*$/;
/**
 * HOTP/TOTP object/string conversion.
 * @see [Key URI Format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)
 */ class URI {
    /**
   * Parses a Google Authenticator key URI and returns an HOTP/TOTP object.
   * @param {string} uri Google Authenticator Key URI.
   * @returns {HOTP|TOTP} HOTP/TOTP object.
   */ static parse(uri) {
        let uriGroups;
        try {
            uriGroups = uri.match(OTPURI_REGEX);
        // eslint-disable-next-line no-unused-vars
        } catch (_) {
        /* Handled below */ }
        if (!Array.isArray(uriGroups)) {
            throw new URIError("Invalid URI format");
        }
        // Extract URI groups.
        const uriType = uriGroups[1].toLowerCase();
        const uriLabel = uriGroups[2].split(/(?::|%3A) *(.+)/i, 2).map(decodeURIComponent);
        /** @type {Object.<string, string>} */ const uriParams = uriGroups[3].split("&").reduce((acc, cur)=>{
            const pairArr = cur.split(/=(.*)/, 2).map(decodeURIComponent);
            const pairKey = pairArr[0].toLowerCase();
            const pairVal = pairArr[1];
            /** @type {Object.<string, string>} */ const pairAcc = acc;
            pairAcc[pairKey] = pairVal;
            return pairAcc;
        }, {});
        // 'OTP' will be instantiated with 'config' argument.
        let OTP;
        const config = {};
        if (uriType === "hotp") {
            OTP = HOTP;
            // Counter: required
            if (typeof uriParams.counter !== "undefined" && INTEGER_REGEX.test(uriParams.counter)) {
                config.counter = parseInt(uriParams.counter, 10);
            } else {
                throw new TypeError("Missing or invalid 'counter' parameter");
            }
        } else if (uriType === "totp") {
            OTP = TOTP;
            // Period: optional
            if (typeof uriParams.period !== "undefined") {
                if (POSITIVE_INTEGER_REGEX.test(uriParams.period)) {
                    config.period = parseInt(uriParams.period, 10);
                } else {
                    throw new TypeError("Invalid 'period' parameter");
                }
            }
        } else {
            throw new TypeError("Unknown OTP type");
        }
        // Label: required
        // Issuer: optional
        if (typeof uriParams.issuer !== "undefined") {
            config.issuer = uriParams.issuer;
        }
        if (uriLabel.length === 2) {
            config.label = uriLabel[1];
            if (typeof config.issuer === "undefined" || config.issuer === "") {
                config.issuer = uriLabel[0];
            } else if (uriLabel[0] === "") {
                config.issuerInLabel = false;
            }
        } else {
            config.label = uriLabel[0];
            if (typeof config.issuer !== "undefined" && config.issuer !== "") {
                config.issuerInLabel = false;
            }
        }
        // Secret: required
        if (typeof uriParams.secret !== "undefined" && SECRET_REGEX.test(uriParams.secret)) {
            config.secret = uriParams.secret;
        } else {
            throw new TypeError("Missing or invalid 'secret' parameter");
        }
        // Algorithm: optional
        if (typeof uriParams.algorithm !== "undefined") {
            if (ALGORITHM_REGEX.test(uriParams.algorithm)) {
                config.algorithm = uriParams.algorithm;
            } else {
                throw new TypeError("Invalid 'algorithm' parameter");
            }
        }
        // Digits: optional
        if (typeof uriParams.digits !== "undefined") {
            if (POSITIVE_INTEGER_REGEX.test(uriParams.digits)) {
                config.digits = parseInt(uriParams.digits, 10);
            } else {
                throw new TypeError("Invalid 'digits' parameter");
            }
        }
        return new OTP(config);
    }
    /**
   * Converts an HOTP/TOTP object to a Google Authenticator key URI.
   * @param {HOTP|TOTP} otp HOTP/TOTP object.
   * @returns {string} Google Authenticator Key URI.
   */ static stringify(otp) {
        if (otp instanceof HOTP || otp instanceof TOTP) {
            return otp.toString();
        }
        throw new TypeError("Invalid 'HOTP/TOTP' object");
    }
}

/**
 * Library version.
 * @type {string}
 */ const version = "9.3.6";



;// CONCATENATED MODULE: ./src/index.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;






const ALLOWED_EXECUTABLES = (_b = (_a = process.env["ALLOWED_EXECUTABLES"]) === null || _a === void 0 ? void 0 : _a.split(",")) !== null && _b !== void 0 ? _b : [];
const TIMEOUT = Number(process.env["TIMEOUT"]) || 10000;
const SECRET = process.env["SECRET"];
const tokens = new Set();
const server = new hono_Hono()
    .get("/health", (ctx) => __awaiter(void 0, void 0, void 0, function* () { return ctx.text("OK"); }))
    .get("/auth/:code?", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = ctx.req.param();
    if (!SECRET || !code) {
        const secret = new Secret().base32;
        return ctx.text(secret);
    }
    const totp = new TOTP({ secret: SECRET });
    if (!totp.validate({ token: code })) {
        return ctx.text("Invalid code", 403);
    }
    const token = (0,external_node_crypto_namespaceObject.randomUUID)();
    tokens.add(token);
    setTimeout(() => tokens.delete(token), 1800000);
    return ctx.text(token);
}))
    .get("/:exec/*", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
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
        if (token && !tokens.has(token)) {
            return ctx.text("Invalid token", 403);
        }
        return streamText(ctx, (stream) => new Promise((resolve, reject) => {
            const child = (0,external_node_child_process_namespaceObject.spawn)(exec, args, {
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
            let last = Promise.resolve();
            const handler = (data) => {
                last = new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
                    yield last;
                    stream.write(data.toString()).finally(resolve);
                }));
            };
            (stdout !== undefined || stdout === stderr) &&
                child.stdout.on("data", handler);
            (stderr !== undefined || stdout === stderr) &&
                child.stderr.on("data", handler);
        }), (err, stream) => __awaiter(void 0, void 0, void 0, function* () {
            yield stream.write(String(err));
            stream.abort();
        }));
    }
    catch (e) {
        return ctx.text(e.message, 500);
    }
}));
const port = Number(process.env["PORT"]) || 3000;
serve({
    fetch: server.fetch.bind(server),
    port: port,
});


//# sourceMappingURL=index.js.map