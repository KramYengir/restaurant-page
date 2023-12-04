/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ID: () => (/* binding */ DEFAULT_ID),
/* harmony export */   Loader: () => (/* binding */ Loader),
/* harmony export */   LoaderStatus: () => (/* binding */ LoaderStatus)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
    createUrl() {
        let url = this.url;
        url += `?callback=__googleMapsCallback`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    importLibrary(name) {
        this.execute();
        return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        var _a, _b;
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const params = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy,
        };
        // keep the URL minimal:
        Object.keys(params).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key) => !params[key] && delete params[key]);
        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
            // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
            // which also sets the base url, the id, and the nonce
            /* eslint-disable */
            ((g) => {
                // @ts-ignore
                let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
                // @ts-ignore
                b = b[c] || (b[c] = {});
                // @ts-ignore
                const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => 
                // @ts-ignore
                h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    yield (a = m.createElement("script"));
                    a.id = this.id;
                    e.set("libraries", [...r] + "");
                    // @ts-ignore
                    for (k in g)
                        e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = this.url + `?` + e;
                    d[q] = f;
                    a.onerror = () => (h = n(Error(p + " could not load.")));
                    // @ts-ignore
                    a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                    m.head.append(a);
                })));
                // @ts-ignore
                d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
            })(params);
            /* eslint-enable */
        }
        // While most libraries populate the global namespace when loaded via bootstrap params,
        // this is not the case for "marker" when used with the inline bootstrap loader
        // (and maybe others in the future). So ensure there is an importLibrary for each:
        const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
        // ensure at least one library, to kick off loading...
        if (!libraryPromises.length) {
            libraryPromises.push(this.importLibrary("core"));
        }
        Promise.all(libraryPromises).then(() => this.callback(), (error) => {
            const event = new ErrorEvent("error", { error }); // for backwards compat
            this.loadErrorCallback(event);
        });
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/about.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/about.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Mulish&family=Open+Sans:wght@500&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#about-container {
  flex-grow: 1;
  align-self: center;
  padding: 0 0;
  margin-block: 2.5vh;
  width: clamp(300px, 95vw, 1000px);
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  grid-row-gap: 2rem;
  line-height: 1.6;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(42, 42, 42, 0.9);
  border-radius: 10px;
}

.section:nth-child(even) {
  flex-direction: row-reverse;
}

.img {
  padding: 10px;
  aspect-ratio: 4/3;
  width: clamp(300px, 55vw, 350px);
  border-radius: 15px;
  object-fit: cover;
}

.text-container {
  /* aspect-ratio: 4/3; */
  width: clamp(300px, 60vw, 450px);
  padding: 1rem min(5rem, 3vw);
  text-align: center;
  text-wrap: balance;
}
.text-container h3,
.text-container p {
  font-family: "Roboto", sans-serif;
}
.text-container h3 {
  color: #ebd693;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
}
.text-container p {
  font-size: calc(12px + 0.390625vw);
  color: white;
}

@media only screen and (max-width: 800px) {
  .section,
  .section:nth-child(even) {
    flex-direction: column;
    min-width: 95vw;
    gap: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/about.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAYA;EACE,YAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EAEA,iCAAA;EAEA,aAAA;EACA,2BAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAEA,gBAAA;AAbF;;AAgBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EAEA,uCCjCmB;EDkCnB,mBAAA;AAdF;;AAiBA;EACE,2BAAA;AAdF;;AAiBA;EACE,aAAA;EACA,iBAAA;EACA,gCAtCS;EAuCT,mBAAA;EACA,iBAAA;AAdF;;AAiBA;EACE,uBAAA;EACA,gCA5CoB;EA6CpB,4BAAA;EACA,kBAAA;EACA,kBAAA;AAdF;AAgBE;;EAIE,iCAAA;AAhBJ;AAmBE;EACE,cC5DS;ED6DT,yBAAA;EACA,qBAAA;EACA,mBAAA;AAjBJ;AAoBE;EACE,kCA/DQ;EAgER,YArES;AAmDb;;AAsBA;EACE;;IAEE,sBAAA;IACA,eAAA;IACA,SAAA;EAnBF;AACF","sourcesContent":["@import \"./colors.scss\";\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Mulish&family=Open+Sans:wght@500&family=Roboto&display=swap\");\n\n//COLORS\n$background-color: $background-dark-90;\n$font-color: white;\n\n//SIZES\n$img-size: clamp(300px, 55vw, 350px);\n$text-container-size: clamp(300px, 60vw, 450px);\n$font-size: calc(12px + 0.390625vw);\n\n#about-container {\n  flex-grow: 1;\n  align-self: center;\n  padding: 0 0;\n  margin-block: 2.5vh;\n\n  width: clamp(300px, 95vw, 1000px);\n\n  display: grid;\n  grid-template-columns: auto;\n  justify-content: center;\n  align-items: center;\n  grid-row-gap: 2rem;\n\n  line-height: 1.6;\n}\n\n.section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n\n  background-color: $background-color;\n  border-radius: 10px;\n}\n\n.section:nth-child(even) {\n  flex-direction: row-reverse;\n}\n\n.img {\n  padding: 10px;\n  aspect-ratio: 4/3;\n  width: $img-size;\n  border-radius: 15px;\n  object-fit: cover;\n}\n\n.text-container {\n  /* aspect-ratio: 4/3; */\n  width: $text-container-size;\n  padding: 1rem min(5rem, 3vw);\n  text-align: center;\n  text-wrap: balance;\n\n  h3,\n  p {\n    //font-family: 'Mulish', sans-serif;\n    //font-family: \"Open Sans\", sans-serif;\n    font-family: \"Roboto\", sans-serif;\n  }\n\n  h3 {\n    color: $gold-color;\n    text-transform: uppercase;\n    margin-bottom: 1.5rem;\n    letter-spacing: 3px;\n  }\n\n  p {\n    font-size: $font-size;\n    color: $font-color;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .section,\n  .section:nth-child(even) {\n    flex-direction: column;\n    min-width: 95vw;\n    gap: 1rem;\n  }\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
}

#contact-container {
  flex: 1;
  align-self: center;
  padding: 0 0;
  margin-top: 2.5vh;
  width: clamp(300px, 60vw, 1000px);
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: auto;
  text-align: center;
}

.contact-section {
  display: flex;
  padding: 0.5rem;
}

.box {
  flex: 1;
  min-width: 50%;
  height: 100%;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2a2a;
}

#contact-info-box {
  color: white;
  background-color: #2a2a2a;
}

.contact-info {
  font-size: clamp(0.8rem, 16px, 1rem);
}

.contact-heading {
  font-size: clamp(1rem, 20px, 1.2rem);
  color: #4fa9cc;
}

.contact-heading:not(:first-child) {
  margin-top: 1rem;
}

#map-box {
  width: clamp(200px, 80%, 450px);
  min-height: 300px;
  margin: auto;
  background-color: #2a2a2a;
}

#map {
  width: 90%;
  height: 90%;
  margin: auto;
  border: 2px solid #4fa9cc;
  border-radius: 10px;
}

#message-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#message-box .msg {
  font-size: clamp(0.8rem, 16px, 1rem);
  color: white;
  margin-bottom: 1.5rem;
  width: clamp(100px, 80%, 800px);
}
#message-box .msg-bold {
  font-size: clamp(0.9rem, 19px, 1.2rem);
  font-weight: 700;
  color: #4fa9cc;
}

#social-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#social-box .social-text {
  font-size: clamp(1rem, 22px, 1.2rem);
  color: #ebd693;
}
#social-box .social-name {
  font-size: calc(clamp(1rem, 22px, 1.2rem) * 1.2);
  font-weight: 700;
}
#social-box svg {
  max-width: 50px;
  margin-block: 2rem;
}

@media only screen and (max-width: 950px) {
  #contact-container {
    min-width: 95vw;
  }
  .contact-section {
    flex-direction: column;
    min-width: 95vw;
  }
  .box {
    min-width: 100%;
    height: 50%;
  }
  .box:not(:first-child) {
    border-top: 1px solid #ebd693;
    border-top-style: hidden;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/contact.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAcA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,gBAAA;AAbF;;AAgBA;EACE,OAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,iCAAA;EAEA,aAAA;EACA,2BAAA;EACA,oBAAA;EAEA,kBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,eAAA;AAfF;;AAkBA;EACE,OAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,uBAAA;EAEA,yBClDgB;ADiClB;;AAoBA;EACE,YAlDmB;EAmDnB,yBCvDgB;ADsClB;;AAoBA;EACE,oCAjDS;AAgCX;;AAoBA;EACE,oCAtDQ;EAuDR,cCxDW;ADuCb;;AAoBA;EACE,gBAAA;AAjBF;;AAoBA;EACE,+BAAA;EACA,iBAAA;EACA,YAAA;EAEA,yBC5EgB;AD0DlB;;AAqBA;EACE,UAAA;EACA,WAAA;EACA,YAAA;EAEA,yBAAA;EACA,mBAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAnBF;AAqBE;EACE,oCArFO;EAsFP,YA3Fa;EA4Fb,qBAAA;EAEA,+BAAA;AApBJ;AAuBE;EACE,sCA5FQ;EA6FR,gBAAA;EACA,cCjGS;AD4Eb;;AAyBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AAtBF;AAwBE;EACE,oCAvGa;EAwGb,cC9GS;ADwFb;AAyBE;EACE,gDAAA;EACA,gBAAA;AAvBJ;AA0BE;EACE,eAAA;EACA,kBAAA;AAxBJ;;AA4BA;EACE;IACE,eAAA;EAzBF;EA4BA;IACE,sBAAA;IACA,eAAA;EA1BF;EA6BA;IACE,eAAA;IACA,WAAA;EA3BF;EA8BA;IACE,6BAAA;IACA,wBAAA;EA5BF;AACF","sourcesContent":["@import \"./colors.scss\";\n\n//COLORS\n$section-bg-color: $background-dark;\n$address-font-color: white;\n$msg-font-color: white;\n$msg-bold-color: $blue-color;\n\n//FONT SIZES\n$heading: clamp(1rem, 20px, 1.2rem);\n$standard: clamp(0.8rem, 16px, 1rem);\n$highlight: clamp(0.9rem, 19px, 1.2rem);\n$social-heading: clamp(1rem, 22px, 1.2rem);\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n\n#contact-container {\n  flex: 1;\n  align-self: center;\n  padding: 0 0;\n  margin-top: 2.5vh;\n  width: clamp(300px, 60vw, 1000px);\n\n  display: grid;\n  grid-template-columns: auto;\n  grid-auto-rows: auto;\n\n  text-align: center;\n}\n\n.contact-section {\n  display: flex;\n  padding: 0.5rem;\n}\n\n.box {\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n  padding-block: 2rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  background-color: $section-bg-color;\n}\n\n#contact-info-box {\n  color: $address-font-color;\n  background-color: $section-bg-color;\n}\n\n.contact-info {\n  font-size: $standard;\n}\n\n.contact-heading {\n  font-size: $heading;\n  color: $blue-color;\n}\n\n.contact-heading:not(:first-child) {\n  margin-top: 1rem;\n}\n\n#map-box {\n  width: clamp(200px, 80%, 450px);\n  min-height: 300px;\n  margin: auto;\n\n  background-color: $section-bg-color;\n}\n\n#map {\n  width: 90%;\n  height: 90%;\n  margin: auto;\n\n  border: 2px solid $blue-color;\n  border-radius: 10px;\n}\n\n#message-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .msg {\n    font-size: $standard;\n    color: $msg-font-color;\n    margin-bottom: 1.5rem;\n\n    width: clamp(100px, 80%, 800px);\n  }\n\n  .msg-bold {\n    font-size: $highlight;\n    font-weight: 700;\n    color: $msg-bold-color;\n  }\n}\n\n#social-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .social-text {\n    font-size: $social-heading;\n    color: $gold-color;\n  }\n\n  .social-name {\n    font-size: calc($social-heading * 1.2);\n    font-weight: 700;\n  }\n\n  svg {\n    max-width: 50px;\n    margin-block: 2rem;\n  }\n}\n\n@media only screen and (max-width: 950px) {\n  #contact-container {\n    min-width: 95vw;\n  }\n\n  .contact-section {\n    flex-direction: column;\n    min-width: 95vw;\n  }\n\n  .box {\n    min-width: 100%;\n    height: 50%;\n  }\n\n  .box:not(:first-child) {\n    border-top: 1px solid $gold-color;\n    border-top-style: hidden;\n  }\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  position: fixed;
  bottom: 0;
  min-height: 50px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ebd693;
  background-color: #2a2a2a;
  border-top: 1px solid #ebd693;
  font-size: 0.7rem;
  padding-inline: 10px;
  /*   img {
    max-height: 25px;
  }

  .seagull-img {
    max-height: 10px;
  } */
}
footer p {
  color: #ebd693;
}`, "",{"version":3,"sources":["webpack://./src/styles/footer.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;EACA,SAAA;EACA,gBAAA;EAEA,WAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,cCPW;EDQX,yBCdgB;EDehB,6BAAA;EACA,iBAAA;EAEA,oBAAA;EAMA;;;;;;KAAA;AAHF;AADE;EACE,cCfS;ADkBb","sourcesContent":["@import \"./colors.scss\";\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  min-height: 50px;\n\n  width: 100%;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: $gold-color;\n  background-color: $background-dark;\n  border-top: 1px solid $gold-color;\n  font-size: 0.7rem;\n\n  padding-inline: 10px;\n\n  p {\n    color: $gold-color;\n  }\n\n  /*   img {\n    max-height: 25px;\n  }\n\n  .seagull-img {\n    max-height: 10px;\n  } */\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');
 */
header {
  position: fixed;
  padding: 0.5rem 0;
  min-height: 90px;
  z-index: 40;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ebd693;
  background-color: #2a2a2a;
  border-bottom: 1px solid #ebd693;
}
header a:hover {
  color: #4fa9cc;
}

a {
  font-size: calc(12px + 0.3vw);
  background-color: none;
  margin: 0 1.5rem;
  cursor: pointer;
}

#home-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
  position: relative;
}
#home-tab #home-heading {
  /* font-family: 'Rozha One', serif; */
  color: #a3771f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: calc(22px + 0.5vw);
  text-shadow: 0.8px 0.8px #4fa9cc;
  letter-spacing: 1.8px;
}
#home-tab #home-sub-heading {
  font-size: calc(12px + 0.3vw);
  color: white;
  margin-top: -0.15rem;
}
#home-tab #seagull-icon-a {
  display: block;
  position: absolute;
  top: 60%;
  left: 0;
  width: calc(1.5rem + 0.3vw);
}
#home-tab #seagull-icon-b {
  display: block;
  position: absolute;
  top: 65%;
  right: 0.4rem;
  width: calc(1.5rem + 0.3vw);
}

#right-side {
  padding-right: 2rem;
}

#right-side a {
  text-transform: uppercase;
}

#right-side a.active {
  border-bottom: 4px solid #4fa9cc;
  transition: border-width 0.2s ease-in-out;
}

#menu-button {
  display: none;
}

#dropdown-box {
  position: absolute;
  top: 0;
  transition: all 0.33s;
}

#dropdown-box.active {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  z-index: 1;
  min-width: 100vw;
  min-height: 100vh;
  padding: min(30vh, 250px) 0;
  gap: calc(2.5rem + 0.33vh);
  background: rgba(42, 42, 42, 0.7058823529);
  backdrop-filter: blur(10px);
}
#dropdown-box.active a {
  color: #ebd693;
  font-size: 1.14rem;
  text-transform: uppercase;
  min-width: 100vw;
  margin-left: 0;
}
#dropdown-box.active #seagull-icon-a,
#dropdown-box.active #seagull-icon-b {
  display: none;
}

@media only screen and (max-width: 650px) {
  #dropdown-box.active > #home-tab > #home-heading {
    /* font-family: 'Rozha One', serif; */
    color: #ebd693;
    text-transform: uppercase;
    font-size: 1.14rem;
    text-shadow: none;
    letter-spacing: 0;
    font-weight: 400;
  }
  #right-side {
    display: none;
  }
  #dropdown-box.active a.active {
    text-decoration: underline;
    text-decoration-color: #4fa9cc;
    text-decoration-thickness: 3px;
  }
  #menu-button {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-right: 2.5rem;
    width: max-content;
    height: max-content;
    background-color: #2a2a2a;
    border: none;
    z-index: 999;
    cursor: pointer;
  }
  #menu-button .line {
    width: calc(2rem + 0.3vw);
    height: calc(0.2rem + 0.3vw);
    border-radius: 100px;
    background-color: #ebd693;
    transform-origin: left center;
    transition: rotate 0.5s, width 0.5s, translate 0.5s, opacity 0.5s, background-color 0.5s;
  }
  #menu-button.active #line2 {
    width: 0;
    opacity: 0;
  }
  #menu-button.active #line1,
  #menu-button.active #line3 {
    background-color: #4fa9cc;
  }
  #menu-button.active #line1 {
    translate: 0 calc((0.2rem + 0.3vw) / -2);
    width: calc((0.8rem + (0.2rem + 0.3vw) * 3) * 1.414);
    rotate: 45deg;
  }
  #menu-button.active #line3 {
    translate: 0 calc((0.2rem + 0.3vw) / 2);
    width: calc((0.8rem + (0.2rem + 0.3vw) * 3) * 1.414);
    rotate: -45deg;
  }
  #home-tab {
    margin-left: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AACA;EAAA;AA2BA;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EAEA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,cCjCW;EDkCX,yBCxCgB;EDyChB,gCAAA;AA3BF;AA6BE;EACE,cCpCS;ADSb;;AA+BA;EACE,6BAnCiB;EAoCjB,sBAAA;EACA,gBAAA;EAEA,eAAA;AA7BF;;AAgCA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;EAEA,kBAAA;AA9BF;AAgCE;EACE,qCAAA;EACA,cC3Dc;ED4Dd,yBAAA;EACA,gBAAA;EACA,6BAzDS;EA0DT,gCAAA;EACA,qBAAA;AA9BJ;AAiCE;EACE,6BA9Da;EA+Db,YAAA;EACA,oBAAA;AA/BJ;AAkCE;EACE,cAAA;EACA,kBAAA;EACA,QAAA;EACA,OAAA;EACA,2BAAA;AAhCJ;AAmCE;EACE,cAAA;EACA,kBAAA;EACA,QAAA;EACA,aAAA;EACA,2BAAA;AAjCJ;;AAqCA;EACE,mBAAA;AAlCF;;AAqCA;EACE,yBAAA;AAlCF;;AAqCA;EACE,gCAAA;EACA,yCAAA;AAlCF;;AAqCA;EACE,aAAA;AAlCF;;AAqCA;EACE,kBAAA;EACA,MAAA;EAIA,qBAAA;AArCF;;AAwCA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EAEA,UAAA;EACA,gBAAA;EACA,iBAAA;EAEA,2BAAA;EACA,0BAAA;EAEA,0CAAA;EACA,2BAAA;AAxCF;AA0CE;EACE,cCvIS;EDwIT,kBA/HiB;EAgIjB,yBAAA;EACA,gBAAA;EACA,cAAA;AAxCJ;AA2CE;;EAEE,aAAA;AAzCJ;;AA6CA;EACE;IACE,qCAAA;IACA,cCvJS;IDwJT,yBAAA;IACA,kBAhJiB;IAiJjB,iBAAA;IACA,iBAAA;IACA,gBAAA;EA1CF;EA6CA;IACE,aAAA;EA3CF;EA8CA;IACE,0BAAA;IACA,8BCnKS;IDoKT,8BAAA;EA5CF;EA+CA;IACE,aAAA;IACA,sBAAA;IACA,WAhKc;IAiKd,oBAAA;IAEA,kBAAA;IACA,mBAAA;IACA,yBCvLc;IDwLd,YAAA;IAEA,YAAA;IAEA,eAAA;EAhDF;EAkDE;IACE,yBA5KO;IA6KP,4BA5KQ;IA8KR,oBAAA;IAEA,yBC9LO;IDiMP,6BAAA;IAGA,wFACE;EAvDN;EAgEE;IACE,QAAA;IACA,UAAA;EA9DJ;EAiEE;;IAEE,yBCnNO;EDoJX;EAkEE;IACE,wCAAA;IACA,oDA1Ma;IA2Mb,aAAA;EAhEJ;EAmEE;IACE,uCAAA;IACA,oDAhNa;IAiNb,cAAA;EAjEJ;EAqEA;IACE,iBAAA;EAnEF;AACF","sourcesContent":["@import \"./colors.scss\";\n/* @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');\n */\n\n//COLORS\n$gradient-background: linear-gradient(\n  180deg,\n  rgba(42, 42, 42, 0.9) 90%,\n  rgba(175, 175, 175, 1) 110%\n);\n\n//FONT SIZES\n$title-size: calc(22px + 0.5vw);\n$sub-title-size: calc(12px + 0.3vw);\n$header-link-size: calc(12px + 0.3vw);\n$dropdown-link-size: 1.14rem;\n\n//MENU BUTTON SIZES\n$menu-button-gap: 0.4rem;\n$line-width: calc(2rem + 0.3vw);\n$line-height: calc(0.2rem + 0.3vw);\n$menu-button-height: calc(calc($menu-button-gap * 2) + calc($line-height * 3));\n$line-cross-width: calc($menu-button-height * 1.414);\n\n//ANIMATE TIMES\n$lines-animate-time: 0.5s;\n$dropbox-animate-time: 0.33s;\n\nheader {\n  position: fixed;\n  padding: 0.5rem 0;\n  min-height: 90px;\n  z-index: 40;\n\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: $gold-color;\n  background-color: $background-dark;\n  border-bottom: 1px solid $gold-color;\n\n  a:hover {\n    color: $blue-color;\n  }\n}\n\na {\n  font-size: $header-link-size;\n  background-color: none;\n  margin: 0 1.5rem;\n\n  cursor: pointer;\n}\n\n#home-tab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 5rem;\n\n  position: relative;\n\n  #home-heading {\n    /* font-family: 'Rozha One', serif; */\n    color: $gold-dark-color;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: $title-size;\n    text-shadow: 0.8px 0.8px $blue-color;\n    letter-spacing: 1.8px;\n  }\n\n  #home-sub-heading {\n    font-size: $sub-title-size;\n    color: white;\n    margin-top: -0.15rem;\n  }\n\n  #seagull-icon-a {\n    display: block;\n    position: absolute;\n    top: 60%;\n    left: 0;\n    width: calc(1.5rem + 0.3vw);\n  }\n\n  #seagull-icon-b {\n    display: block;\n    position: absolute;\n    top: 65%;\n    right: 0.4rem;\n    width: calc(1.5rem + 0.3vw);\n  }\n}\n\n#right-side {\n  padding-right: 2rem;\n}\n\n#right-side a {\n  text-transform: uppercase;\n}\n\n#right-side a.active {\n  border-bottom: 4px solid $blue-color;\n  transition: border-width 0.2s ease-in-out;\n}\n\n#menu-button {\n  display: none;\n}\n\n#dropdown-box {\n  position: absolute;\n  top: 0;\n  //z-index: -5;\n  //transform: translateY(-90px);\n\n  transition: all $dropbox-animate-time;\n}\n\n#dropdown-box.active {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-items: center;\n  text-align: center;\n\n  z-index: 1;\n  min-width: 100vw;\n  min-height: 100vh;\n\n  padding: min(30vh, 250px) 0;\n  gap: calc(2.5rem + 0.33vh);\n\n  background: #2a2a2ab4;\n  backdrop-filter: blur(10px);\n\n  a {\n    color: $gold-color;\n    font-size: $dropdown-link-size;\n    text-transform: uppercase;\n    min-width: 100vw;\n    margin-left: 0;\n  }\n\n  #seagull-icon-a,\n  #seagull-icon-b {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 650px) {\n  #dropdown-box.active > #home-tab > #home-heading {\n    /* font-family: 'Rozha One', serif; */\n    color: $gold-color;\n    text-transform: uppercase;\n    font-size: $dropdown-link-size;\n    text-shadow: none;\n    letter-spacing: 0;\n    font-weight: 400;\n  }\n\n  #right-side {\n    display: none;\n  }\n\n  #dropdown-box.active a.active {\n    text-decoration: underline;\n    text-decoration-color: $blue-color;\n    text-decoration-thickness: 3px;\n  }\n\n  #menu-button {\n    display: flex;\n    flex-direction: column;\n    gap: $menu-button-gap;\n    margin-right: 2.5rem;\n\n    width: max-content;\n    height: max-content;\n    background-color: $background-dark;\n    border: none;\n\n    z-index: 999;\n\n    cursor: pointer;\n\n    .line {\n      width: $line-width;\n      height: $line-height;\n\n      border-radius: 100px;\n\n      background-color: $gold-color;\n\n      //for rotation\n      transform-origin: left center;\n\n      //animation\n      transition:\n        rotate $lines-animate-time,\n        width $lines-animate-time,\n        translate $lines-animate-time,\n        opacity $lines-animate-time,\n        background-color $lines-animate-time;\n    }\n  }\n\n  #menu-button.active {\n    #line2 {\n      width: 0;\n      opacity: 0;\n    }\n\n    #line1,\n    #line3 {\n      background-color: $blue-color;\n    }\n\n    #line1 {\n      translate: 0 calc($line-height / -2);\n      width: $line-cross-width;\n      rotate: 45deg;\n    }\n\n    #line3 {\n      translate: 0 calc($line-height / 2);\n      width: $line-cross-width;\n      rotate: -45deg;\n    }\n  }\n\n  #home-tab {\n    margin-left: 3rem;\n  }\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/homepage.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/homepage.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/FH_packed.png */ "./src/assets/FH_packed.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/FH_front.png */ "./src/assets/FH_front.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,400;1,500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Mulish&family=Open+Sans:wght@500&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#homepage-container *:not(i) {
  font-family: "Poppins", sans-serif;
}

#homepage-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0.8fr, 1fr));
  place-items: center;
  gap: 1rem;
  margin-block: 1rem;
}
#homepage-container > div {
  width: clamp(300px, 95vw, 1000px);
  /* width: min(1200px, 100vw); */
  min-height: 350px;
  border-radius: 10px;
}

#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-inline: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-size: cover;
  /* font-family: 'Merriweather', serif; */
}
#welcome #welcome-title {
  font-size: calc(32px + 0.390625vw);
  font-weight: 700;
  text-transform: uppercase;
  color: #ebd693;
}
#welcome #welcome-msg {
  font-size: calc(14px + 0.390625vw);
  text-wrap: balance;
  margin-block: 1rem;
  max-width: 80%;
  color: white;
}
#welcome .button-container {
  display: flex;
  gap: 15px;
}
#welcome .button-container .inverted-btn {
  background-color: #357088;
}
#welcome .button-container .inverted-btn:hover,
#welcome .button-container .inverted-btn:focus {
  border-color: #ebd693;
}

#hours {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  /* border-top: 1px solid \$gold-color; */
}
#hours .msg-and-btn-container {
  padding: 30px;
  flex: 1;
  font-size: calc(14px + 0.390625vw);
  text-wrap: balance;
  color: white;
  border-radius: 10px;
  align-self: center;
}
#hours .msg-and-btn-container button:hover,
#hours .msg-and-btn-container button:focus {
  border-color: #ebd693;
  color: #ebd693;
}
#hours #hours-msg {
  margin-bottom: 25px;
}
#hours #hours-div {
  flex: 1;
}
#hours #hours-info {
  max-width: 80%;
  padding: 2rem;
  border: 1px solid #4fa9cc;
  border-radius: 10px;
  background-color: #2a2a2a;
}
#hours #hours-info #title {
  font-size: calc(16px + 0.390625vw);
  padding: 0 1rem;
  border: 2px solid #4fa9cc;
  border-radius: 10px;
  color: white;
}
#hours #hours-info .heading {
  font-size: calc(14px + 0.390625vw);
  border-bottom: 1px solid #4fa9cc;
}
#hours #hours-info .days {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: white;
}
#hours #hours-info .times {
  font-size: calc(12px + 0.390625vw);
  color: white;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  border: 2px solid #4fa9cc;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

button:hover,
button:focus {
  border-color: #ebd693;
  color: #ebd693;
}

@media only screen and (max-width: 800px) {
  #hours {
    flex-direction: column;
  }
  #hours #hours-info {
    max-width: 100%;
    padding: 2.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/homepage.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AA8BA;EACE,kCAAA;AA3BF;;AA8BA;EACE,aAAA;EACA,2DAAA;EACA,mBAAA;EACA,SAAA;EAEA,kBAAA;AA5BF;AA8BE;EACE,iCAAA;EACA,+BAAA;EACA,iBAAA;EACA,mBAAA;AA5BJ;;AAgCA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAEA,oBAAA;EAEA,4GA9Ce;EAgDf,2BAAA;EACA,sBAAA;EAEA,wCAAA;AAjCF;AAmCE;EACE,kCA5CiB;EA6CjB,gBAAA;EACA,yBAAA;EACA,cChES;AD+Bb;AAoCE;EACE,kCAlDe;EAmDf,kBAAA;EAEA,kBAAA;EACA,cAAA;EACA,YAzEgB;AAsCpB;AAsCE;EACE,aAAA;EACA,SAAA;AApCJ;AAsCI;EACE,yBC9EY;AD0ClB;AAuCI;;EAEE,qBCtFO;ADiDb;;AA0CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;EAGA,4GAAA;EAEA,uCAAA;AA1CF;AA4CE;EACE,aAAA;EACA,OAAA;EACA,kCAxFa;EAyFb,kBAAA;EAEA,YA7Gc;EAgHd,mBAAA;EAEA,kBAAA;AA9CJ;AAgDI;;EAEE,qBCvHO;EDwHP,cCxHO;AD0Eb;AAkDE;EACE,mBAAA;AAhDJ;AAmDE;EACE,OAAA;AAjDJ;AAoDE;EACE,cAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBC/Ic;AD6FlB;AAoDI;EACE,kCAxHa;EAyHb,eAAA;EACA,yBAAA;EACA,mBAAA;EACA,YA9Ic;AA4FpB;AAqDI;EACE,kCA/HY;EAgIZ,gCAAA;AAnDN;AAsDI;EACE,gBAAA;EACA,qBAAA;EACA,YAxJa;AAoGnB;AAuDI;EACE,kCAzIa;EA0Ib,YA5Jc;AAuGpB;;AA0DA;EACE,gBAAA;EACA,kBAAA;EACA,6BAAA;EACA,YAxKgB;EAyKhB,yBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;AAvDF;;AA0DA;;EAEE,qBCnLW;EDoLX,cCpLW;AD6Hb;;AA0DA;EACE;IACE,sBAAA;EAvDF;EAyDE;IACE,eAAA;IACA,eAAA;EAvDJ;AACF","sourcesContent":["@import \"./colors.scss\";\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,400;1,500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Mulish&family=Open+Sans:wght@500&family=Roboto&display=swap\");\n\n//FONT COLORS\n$welcome-title-color: $gold-color;\n$welcome-msg-color: white;\n$hours-msg-color: white;\n$hours-title-color: white;\n$hours-days-color: white;\n$hours-times-color: white;\n\n//BACKGROUND IMAGE\n$welcome-bg-img: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n  url(\"../assets/FH_packed.png\");\n\n//BORDER & BACKGROUND COLORS\n$hours-background-color: $background-dark;\n$hours-times-background-color: $background-dark;\n$hours-title-border-color: $blue-color;\n$days-border-color: $blue-color;\n\n//FONTSIZES\n$welcome-title-size: calc(32px + 0.390625vw);\n$welcome-msg-size: calc(14px + 0.390625vw);\n$hours-msg-size: calc(14px + 0.390625vw);\n$hours-title-size: calc(16px + 0.390625vw);\n$hours-days-size: calc(14px + 0.390625vw);\n$hours-times-size: calc(12px + 0.390625vw);\n\n#homepage-container *:not(i) {\n  font-family: \"Poppins\", sans-serif;\n}\n\n#homepage-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0.8fr, 1fr));\n  place-items: center;\n  gap: 1rem;\n\n  margin-block: 1rem;\n\n  > div {\n    width: clamp(300px, 95vw, 1000px);\n    /* width: min(1200px, 100vw); */\n    min-height: 350px;\n    border-radius: 10px;\n  }\n}\n\n#welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  padding-inline: 2rem;\n\n  background: $welcome-bg-img;\n\n  background-position: center;\n  background-size: cover;\n\n  /* font-family: 'Merriweather', serif; */\n\n  #welcome-title {\n    font-size: $welcome-title-size;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: $welcome-title-color;\n  }\n\n  #welcome-msg {\n    font-size: $welcome-msg-size;\n    text-wrap: balance;\n\n    margin-block: 1rem;\n    max-width: 80%;\n    color: $welcome-msg-color;\n  }\n\n  .button-container {\n    display: flex;\n    gap: 15px;\n\n    .inverted-btn {\n      background-color: $blue-dark-color;\n    }\n\n    .inverted-btn:hover,\n    .inverted-btn:focus {\n      border-color: $gold-color;\n    }\n  }\n}\n\n#hours {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 1rem 1.5rem;\n  gap: 1rem;\n\n  //background-color: $hours-background-color;\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),\n    url(\"../assets/FH_front.png\");\n  /* border-top: 1px solid $gold-color; */\n\n  .msg-and-btn-container {\n    padding: 30px;\n    flex: 1;\n    font-size: $hours-msg-size;\n    text-wrap: balance;\n\n    color: $hours-msg-color;\n\n    //background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n\n    align-self: center;\n\n    button:hover,\n    button:focus {\n      border-color: $welcome-title-color;\n      color: $welcome-title-color;\n    }\n  }\n\n  #hours-msg {\n    margin-bottom: 25px;\n  }\n\n  #hours-div {\n    flex: 1;\n  }\n\n  #hours-info {\n    max-width: 80%;\n    padding: 2rem;\n    border: 1px solid $blue-color;\n    border-radius: 10px;\n    background-color: $hours-times-background-color;\n\n    #title {\n      font-size: $hours-title-size;\n      padding: 0 1rem;\n      border: 2px solid $hours-title-border-color;\n      border-radius: 10px;\n      color: $hours-title-color;\n    }\n\n    .heading {\n      font-size: $hours-days-size;\n      border-bottom: 1px solid $days-border-color;\n    }\n\n    .days {\n      margin-top: 1rem;\n      margin-bottom: 0.5rem;\n      color: $hours-days-color;\n    }\n\n    .times {\n      font-size: $hours-times-size;\n      color: $hours-times-color;\n    }\n  }\n}\n\nbutton {\n  margin-top: 10px;\n  padding: 10px 15px;\n  background-color: transparent;\n  color: $hours-msg-color;\n  border: 2px solid $hours-title-border-color;\n  border-radius: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  border-color: $welcome-title-color;\n  color: $welcome-title-color;\n}\n\n@media only screen and (max-width: 800px) {\n  #hours {\n    flex-direction: column;\n\n    #hours-info {\n      max-width: 100%;\n      padding: 2.5rem;\n    }\n  }\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rozha+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Merriweather", serif;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #357088;
}

#content,
#content-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

#content {
  justify-content: space-between;
  width: 100%;
}

#content-main {
  margin-top: 90px;
  margin-bottom: 50px;
  background-color: #357088;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAIA;EACE,SAAA;EACA,sBAAA;EACA,kCAAA;AADF;;AAIA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBCPgB;ADMlB;;AAIA;;EAEE,aAAA;EACA,sBAAA;EACA,YAAA;AADF;;AAIA;EACE,8BAAA;EACA,WAAA;AADF;;AAIA;EACE,gBAAA;EACA,mBAAA;EACA,yBCzBgB;ADwBlB","sourcesContent":["@import \"./colors.scss\";\n@import url(\"https://fonts.googleapis.com/css2?family=Rozha+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap\");\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Merriweather\", serif;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: $blue-dark-color;\n}\n\n#content,\n#content-main {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n#content {\n  justify-content: space-between;\n  width: 100%;\n}\n\n#content-main {\n  margin-top: 90px;\n  margin-bottom: 50px;\n  background-color: $blue-dark-color;\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
#menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 0.9fr));
  justify-content: center;
  align-self: center;
  gap: 3rem;
  /* flex-grow: 1; */
  width: min(85vw, 1000px);
  min-height: 95%;
  background-color: rgba(42, 42, 42, 0.9);
  padding: 5vh 10vw;
  margin: 5vh 0;
  border: 1px solid #ebd693;
}

@media only screen and (max-width: 600px) {
  #menu-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.9fr));
  }
}
/* .menu-section{
    max-width: 80%;
} */
.section-heading {
  text-transform: uppercase;
  color: #4fa9cc;
  border-bottom: 1px solid #4fa9cc;
  font-size: calc(18px + 0.390625vw);
}

.section-heading, .menu-item {
  margin: 0.5rem;
}

.menu-item ~ div:not(.menu-option) {
  color: red;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item:not(.item-option) {
  margin-top: 1rem;
  font-size: calc(14px + 0.390625vw);
}

.menu-item-name {
  color: #ebd693;
  text-transform: capitalize;
}

.item-option {
  margin-top: 0;
  margin-bottom: 0.4rem;
}

.item-option-text {
  color: white;
  font-size: calc(10px + 0.390625vw);
}

.item-option-text::before {
  content: " ";
  white-space: pre;
}

.menu-item-price {
  color: white;
  font-size: calc(12px + 0.390625vw);
}

.menu-item-price::before {
  content: "£";
}`, "",{"version":3,"sources":["webpack://./src/styles/menu.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAiBhB;EACI,aAAA;EACA,6DAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;EACA,wBAAA;EACA,eAAA;EAEA,uCCzBiB;ED0BjB,iBAAA;EACA,aAAA;EAEA,yBAAA;AAjBJ;;AAoBA;EACI;IACI,6DAAA;EAjBN;AACF;AAqBA;;GAAA;AAIA;EACI,yBAAA;EACA,cCvCS;EDwCT,gCA9Ca;EA+Cb,kCArCmB;AAiBvB;;AAuBA;EACI,cAAA;AApBJ;;AAuBA;EACI,UAAA;AApBJ;;AAuBA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AApBJ;;AAuBA;EACI,gBAAA;EACA,kCAvDQ;AAmCZ;;AAuBA;EACI,cClES;EDmET,0BAAA;AApBJ;;AAuBA;EACI,aAAA;EACA,qBAAA;AApBJ;;AAuBA;EACI,YAAA;EACA,kCArEU;AAiDd;;AAuBA;EACI,YAAA;EACA,gBAAA;AApBJ;;AAuBA;EACI,YAnFe;EAoFf,kCA9ES;AA0Db;;AAuBA;EACI,YAAA;AApBJ","sourcesContent":["@import './colors.scss';\n\n$heading-border: 1px solid $blue-color;\n\n//-COLORS\n$container-background-color: $background-dark-90;\n$section-background-color: $gold-dark-color;\n$heading-color: $blue-color;\n$item-name-color: $gold-color;\n$item-price-color: white;\n\n//-SIZES\n$section-heading-size: calc(18px + 0.390625vw);\n$item-size: calc(14px + 0.390625vw);\n$option-size: calc(10px + 0.390625vw);;\n$price-size: calc(12px + 0.390625vw);;\n\n#menu-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 0.9fr));\n    justify-content: center;\n    align-self: center;\n    gap: 3rem;\n    /* flex-grow: 1; */\n    width: min(85vw, 1000px);\n    min-height: 95%;\n    \n    background-color: $container-background-color;\n    padding: 5vh 10vw;\n    margin: 5vh 0;\n\n    border: 1px solid $gold-color;\n}\n\n@media only screen and (max-width: 600px){\n    #menu-container{\n        grid-template-columns: repeat(auto-fit, minmax(300px, 0.9fr));\n    }\n\n}\n\n/* .menu-section{\n    max-width: 80%;\n} */\n\n.section-heading{\n    text-transform: uppercase;\n    color: $heading-color;\n    border-bottom: $heading-border;\n    font-size: $section-heading-size;\n}\n\n.section-heading, .menu-item{\n    margin: 0.5rem;\n}\n\n.menu-item ~ div:not(.menu-option){\n    color: red;\n}\n\n.menu-item{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-item:not(.item-option){\n    margin-top: 1rem;\n    font-size: $item-size;\n}\n\n.menu-item-name{\n    color: $item-name-color;\n    text-transform: capitalize;\n}\n\n.item-option{\n    margin-top: 0;\n    margin-bottom: 0.4rem;\n}\n\n.item-option-text{\n    color: white;\n    font-size: $option-size;\n}\n\n.item-option-text::before{\n    content: ' ';\n    white-space: pre;\n}\n\n.menu-item-price{\n    color: $item-price-color;\n    font-size: $price-size;\n}\n\n.menu-item-price::before{\n    content: '£';\n}","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slider.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slider.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fried-fish.png */ "./src/assets/fried-fish.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/FH_potatoes.png */ "./src/assets/FH_potatoes.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fish-in-oil.png */ "./src/assets/fish-in-oil.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fish-and-chips.jpg */ "./src/assets/fish-and-chips.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.slider-container {
  position: relative;
  min-height: 500px !important;
}
.slider-container .slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  transition: all 0.3s;
  transition-delay: 0.2s;
}
.slider-container .slide.active-slide {
  opacity: 100;
}
.slider-container .slide > div {
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  color: rgb(226, 219, 219);
  background-color: rgba(44, 42, 42, 0.5647058824);
  max-width: min(80%, 400px);
  min-height: 50%;
  border-radius: 20px;
  padding: 20px;
  font-size: calc(16px + 0.33vw);
  text-transform: capitalize;
  text-align: center;
  text-wrap: balance;
}
.slider-container .slide > div i {
  font-size: calc(18px + 0.33vw);
}
.slider-container .slide > div .fa-lines-leaning {
  transform: rotate(180deg);
}
.slider-container .slide > div span {
  color: #4fa9cc;
  font-size: calc(18px + 0.33vw);
}
.slider-container button {
  position: absolute;
  top: 85%;
  width: 60px;
  height: 50px;
  background-color: transparent;
  border: none;
  opacity: 80%;
  cursor: pointer;
}
.slider-container button i {
  font-family: "Font Awesome 6 Free";
  color: #fff;
  font-size: calc(24px + 1vw);
}
.slider-container button:hover,
.slider-container button:focus {
  opacity: 100;
}
.slider-container button:active {
  transform: scale(1.08);
}
.slider-container .prev-btn {
  left: 1%;
}
.slider-container .next-btn {
  right: 1%;
}
.slider-container .dot {
  position: absolute;
  bottom: 4%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 10px;
  opacity: 30%;
  cursor: pointer;
}
.slider-container .dot.active-dot {
  opacity: 100%;
}
.slider-container #dot0 {
  left: 42.5%;
}
.slider-container #dot1 {
  left: 47.5%;
}
.slider-container #dot2 {
  left: 52.5%;
}
.slider-container #dot3 {
  left: 57.5%;
}

#slide0 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#slide1 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#slide2 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#slide3 {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

#slide0,
#slide1,
#slide2,
#slide3 {
  background-size: cover;
  background-position: center;
}

.flex-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/slider.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,4BAAA;AADF;AAGE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EAEA,UAAA;EAEA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,oBAAA;EACA,sBAAA;AAHJ;AAME;EACE,YAAA;AAJJ;AAOE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EAEA,yBAAA;EACA,gDAAA;EAEA,0BAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EAEA,8BAAA;EACA,0BAAA;EACA,kBAAA;EACA,kBAAA;AARJ;AAUI;EACE,8BAAA;AARN;AAWI;EACE,yBAAA;AATN;AAYI;EACE,cC9CO;ED+CP,8BAAA;AAVN;AAcE;EACE,kBAAA;EACA,QAAA;EAEA,WAAA;EACA,YAAA;EAEA,6BAAA;EACA,YAAA;EACA,YAAA;EAEA,eAAA;AAfJ;AAiBI;EACE,kCAAA;EACA,WAAA;EACA,2BAAA;AAfN;AAmBE;;EAEE,YAAA;AAjBJ;AAoBE;EACE,sBAAA;AAlBJ;AAqBE;EACE,QAAA;AAnBJ;AAsBE;EACE,SAAA;AApBJ;AAuBE;EACE,kBAAA;EACA,UAAA;EAEA,WAAA;EACA,YAAA;EACA,sBAAA;EAEA,mBAAA;EAEA,YAAA;EAEA,eAAA;AAzBJ;AA4BE;EACE,aAAA;AA1BJ;AA6BE;EACE,WAAA;AA3BJ;AA8BE;EACE,WAAA;AA5BJ;AA+BE;EACE,WAAA;AA7BJ;AAgCE;EACE,WAAA;AA9BJ;;AAoCA;EACE,4GAAA;AAjCF;;AAqCA;EACE,4GAAA;AAlCF;;AAsCA;EACE,4GAAA;AAnCF;;AAuCA;EACE,4GAAA;AApCF;;AAwCA;;;;EAIE,sBAAA;EACA,2BAAA;AArCF;;AA0CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAvCF","sourcesContent":["@import \"./colors.scss\";\n\n.slider-container {\n  position: relative;\n  min-height: 500px !important;\n\n  .slide {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n\n    opacity: 0;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 10px;\n    transition: all 0.3s;\n    transition-delay: 0.2s;\n  }\n\n  .slide.active-slide {\n    opacity: 100;\n  }\n\n  .slide > div {\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 20px;\n\n    color: rgb(226, 219, 219);\n    background-color: #2c2a2a90;\n\n    max-width: min(80%, 400px);\n    min-height: 50%;\n    border-radius: 20px;\n    padding: 20px;\n\n    font-size: calc(16px + 0.33vw);\n    text-transform: capitalize;\n    text-align: center;\n    text-wrap: balance;\n\n    i {\n      font-size: calc(18px + 0.33vw);\n    }\n\n    .fa-lines-leaning {\n      transform: rotate(180deg);\n    }\n\n    span {\n      color: $blue-color;\n      font-size: calc(18px + 0.33vw);\n    }\n  }\n\n  button {\n    position: absolute;\n    top: 85%;\n\n    width: 60px;\n    height: 50px;\n\n    background-color: transparent;\n    border: none;\n    opacity: 80%;\n\n    cursor: pointer;\n\n    i {\n      font-family: \"Font Awesome 6 Free\";\n      color: #fff;\n      font-size: calc(24px + 1vw);\n    }\n  }\n\n  button:hover,\n  button:focus {\n    opacity: 100;\n  }\n\n  button:active {\n    transform: scale(1.08);\n  }\n\n  .prev-btn {\n    left: 1%;\n  }\n\n  .next-btn {\n    right: 1%;\n  }\n\n  .dot {\n    position: absolute;\n    bottom: 4%;\n\n    width: 10px;\n    height: 10px;\n    background-color: #fff;\n\n    border-radius: 10px;\n\n    opacity: 30%;\n\n    cursor: pointer;\n  }\n\n  .dot.active-dot {\n    opacity: 100%;\n  }\n\n  #dot0 {\n    left: 42.5%;\n  }\n\n  #dot1 {\n    left: 47.5%;\n  }\n\n  #dot2 {\n    left: 52.5%;\n  }\n\n  #dot3 {\n    left: 57.5%;\n  }\n}\n\n// set slide backgrounds\n\n#slide0 {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n    url(\"../assets/fried-fish.png\");\n}\n\n#slide1 {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n    url(\"../assets/FH_potatoes.png\");\n}\n\n#slide2 {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n    url(\"../assets/fish-in-oil.png\");\n}\n\n#slide3 {\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n    url(\"../assets/fish-and-chips.jpg\");\n}\n\n#slide0,\n#slide1,\n#slide2,\n#slide3 {\n  background-size: cover;\n  background-position: center;\n}\n\n// utility classes\n\n.flex-centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/about.scss":
/*!*******************************!*\
  !*** ./src/styles/about.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/contact.scss":
/*!*********************************!*\
  !*** ./src/styles/contact.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/contact.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/homepage.scss":
/*!**********************************!*\
  !*** ./src/styles/homepage.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./homepage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/homepage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homepage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/slider.scss":
/*!********************************!*\
  !*** ./src/styles/slider.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./slider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/slider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContent: () => (/* binding */ loadContent)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homepage.js */ "./src/modules/homepage.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/footer.js */ "./src/modules/footer.js");








const pages = [_modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_about_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"]];

const content = document.getElementById("content");
const contentMain = document.createElement("div");
let currentPage = _modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"];

// keep current page after reload
let lastPageIndex = sessionStorage.getItem("lastPageIndex");

if (lastPageIndex) {
  currentPage = pages[lastPageIndex];
}

contentMain.id = "content-main";
contentMain.appendChild(currentPage);
content.appendChild(_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
content.appendChild(contentMain);
content.appendChild(_modules_footer_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

const tabLinks = document.querySelectorAll("a");

const loadContent = (index) => {
  contentMain.removeChild(currentPage);
  contentMain.appendChild(pages[index]);
  toggleActiveTab(index);
  currentPage = pages[index];
  lastPageIndex = index;
  sessionStorage.setItem("lastPageIndex", index);
  window.scrollTo(0, 0);
};

const toggleActiveTab = (index) => {
  tabLinks.forEach((el, i) => {
    if (i === index) {
      tabLinks[index].classList.add("active");
    } else {
      tabLinks[i].classList.remove("active");
      console.log("matching index");
    }
  });
};

tabLinks.forEach((el, i) => {
  el.addEventListener("click", () => {
    loadContent(el.dataset.index);
  });
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
  loadContent(lastPageIndex);
});




/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.scss */ "./src/styles/about.scss");
/* harmony import */ var _assets_FH_christos_pitchside_cropped_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/FH_christos-pitchside-cropped.jpg */ "./src/assets/FH_christos-pitchside-cropped.jpg");
/* harmony import */ var _assets_FH_christos_cropped_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/FH_christos-cropped.jpeg */ "./src/assets/FH_christos-cropped.jpeg");
/* harmony import */ var _assets_painting_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/painting.jpg */ "./src/assets/painting.jpg");
/* harmony import */ var _assets_FH_fish_meal_1_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/FH_fish-meal-1.jpeg */ "./src/assets/FH_fish-meal-1.jpeg");






const buildAboutpage = (() => {
  const images = [_assets_painting_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_FH_christos_cropped_jpeg__WEBPACK_IMPORTED_MODULE_2__, _assets_FH_fish_meal_1_jpeg__WEBPACK_IMPORTED_MODULE_4__, _assets_FH_christos_pitchside_cropped_jpg__WEBPACK_IMPORTED_MODULE_1__];
  const headings = [
    "Our Beginnings...",
    "Our Standards...",
    "Our Food...",
    "Our Community...",
  ];

  const textContent = [];
  textContent[0] = `Ferryhill Fish and Chips, a family-run establishment since 2013, 
            leverages over 30 years of industry expertise. Our commitment is to bring
             a blend of knowledge and passion, ensuring our customers experience
              top-notch food and warm, friendly service.`;
  textContent[1] = `Under the stewardship of Christos since 2020, our shop has 
        flourished, garnering consistent 5-star reviews on Google. 
        Our menu continues to evolve, and we are proud to have been voted 
        the best chippy in Manchester by readers of salfordnow.co.uk in 2023.`;
  textContent[2] = `Our ever-expanding menu continues to add a 
        diverse selection of vegan, vegetarian, and gluten-free options, 
        catering to a wide range of dietary preferences. Crafted with care and the 
        finest ingredients, our dishes maintain the high standards our 
        customers have come to expect.`;
  textContent[3] = `We're deeply rooted in our local community, actively supporting 
        charitable causes through fundraisers, participating in local events, and 
        proudly backing our local football team.`;

  const container = document.createElement("div");
  container.id = "about-container";

  for (let i = 0; i < textContent.length; i++) {
    let img = document.createElement("img");
    img.classList.add("img");
    img.id = `img-${i}`;
    img.src = images[i];

    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    textContainer.id = `text-${i}`;
    let heading = document.createElement("h3");
    heading.textContent = headings[i];
    let paragraph = document.createElement("p");
    paragraph.textContent = `${textContent[i]}`;
    textContainer.appendChild(heading);
    textContainer.appendChild(paragraph);

    let section = document.createElement("div");
    section.classList.add("section");

    section.appendChild(img);
    section.appendChild(textContainer);

    section.id = `section-${i}`;

    container.appendChild(section);
  }

  return container;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildAboutpage);


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contact.scss */ "./src/styles/contact.scss");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");



const API_KEY = "AIzaSyALqs75llImmdtIhHQ2jopv08LW5cleUYs";

const ADDRESS = `<div class='contact-info contact-heading' id='adrss-heading'>Ferryhill Fish & Chips</div>
                <div class='contact-info'>50 Ferryhill Road,</div>
                <div class='contact-info'>Irlam,</div>
                <div class='contact-info'>Manchester,</div>
                <div class='contact-info'>United Kingdom</div>
                <div class='contact-info contact-heading'>Tel:</div>
                <div class='contact-info'>0161 775 4738</div>
                <div class='contact-info contact-heading'>Email:</div>
                <div class='contact-info'>ferryhillfishandchips@gmail.com</div>
                `
;

const MESSAGE = 
`<div class='msg'><span class='msg-bold'>If you have any enquiries, </span>
  you can give us a call during opening hours and we'll be glad to help!</div>
<div class='msg'>If you're not in a rush, then 
  <span class='msg-bold'>send us an email!</span></div>
<div class='msg'><span class='msg-bold'>To keep up-to-date </span>
  with changes to our menu, opening hours or any announcements, please check our 
  <span class='msg-bold'>Instagram, </span>which is updated frequently, or our 
  <span class='msg-bold'>Facebook </span>page!</div>
`
;

const INSTAGRAM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 264.5833 264.5833" inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)" sodipodi:docname="Instagram_(2022).svg"><defs><radialGradient id="f" cx="158.429" cy="578.088" r="52.3515" xlink:href="#a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -4.03418 4.28018 0 -2332.2273 942.2356)" fx="158.429" fy="578.088"/><radialGradient inkscape:collect="always" xlink:href="#b" id="g" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.67441 -1.16203 1.51283 .87801 -814.3657 -47.8354)" cx="172.6149" cy="600.6924" fx="172.6149" fy="600.6924" r="65"/><radialGradient inkscape:collect="always" xlink:href="#c" id="h" cx="144.012" cy="51.3367" fx="144.012" fy="51.3367" r="67.081" gradientTransform="matrix(-2.3989 .67549 -.23008 -.81732 464.9957 -26.4035)" gradientUnits="userSpaceOnUse"/><radialGradient inkscape:collect="always" xlink:href="#d" id="e" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-3.10797 .87652 -.6315 -2.23914 1345.6503 1374.1983)" cx="199.7884" cy="628.4379" fx="199.7884" fy="628.4379" r="52.3515"/><linearGradient inkscape:collect="always" id="d"><stop offset="0" stop-color="#ff005f"/><stop offset="1" stop-color="#fc01d8"/></linearGradient><linearGradient id="c"><stop offset="0" stop-color="#780cff"/><stop stop-color="#820bff" offset="1" stop-opacity="0"/></linearGradient><linearGradient inkscape:collect="always" id="b"><stop offset="0" stop-color="#fc0"/><stop offset="1" stop-color="#fc0" stop-opacity="0"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fc0"/><stop offset=".1242" stop-color="#fc0"/><stop offset=".5672" stop-color="#fe4a05"/><stop offset=".6942" stop-color="#ff0f3f"/><stop offset="1" stop-color="#fe0657" stop-opacity="0"/></linearGradient></defs><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:zoom=".515" inkscape:cx="500" inkscape:cy="500" inkscape:document-units="mm" inkscape:current-layer="layer1" inkscape:document-rotation="0" showgrid="false" inkscape:window-width="1366" inkscape:window-height="705" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1"/><g inkscape:label="Layer 1" inkscape:groupmode="layer"><path d="M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z" inkscape:connector-curvature="0" fill="url(#e)" transform="translate(-71.8155 -18.1429)"/><path d="M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z" inkscape:connector-curvature="0" fill="url(#f)" transform="translate(-71.8155 -18.1429)"/><path d="M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z" inkscape:connector-curvature="0" fill="url(#g)" transform="translate(-71.8155 -18.1429)"/><path d="M204.1503 18.1429c-55.2305 0-71.3834.057-74.5232.3175-11.3342.9424-18.387 2.7275-26.0708 6.554-5.9214 2.9413-10.5915 6.3506-15.2005 11.1298-8.3938 8.7157-13.481 19.4383-15.3226 32.1842-.8953 6.1877-1.1558 7.4496-1.2087 39.0558-.0203 10.5354 0 24.4007 0 42.9984 0 55.2008.061 71.3418.3256 74.4764.9157 11.032 2.6453 17.9728 6.3081 25.565 7 14.5329 20.369 25.4428 36.119 29.5137 5.4535 1.4044 11.4767 2.1779 19.2092 2.5442 3.2762.1425 36.6684.2443 70.081.2443 33.4127 0 66.8253-.0407 70.02-.2035 8.9535-.4214 14.1526-1.1195 19.9011-2.6054 15.8517-4.0912 28.9767-14.8383 36.119-29.5748 3.5916-7.409 5.4128-14.6144 6.237-25.0704.179-2.2796.2543-38.6263.2543-74.924 0-36.304-.0814-72.5835-.2605-74.8632-.8343-10.6249-2.6555-17.7692-6.363-25.3207-3.0421-6.1816-6.42-10.798-11.324-15.518-8.752-8.3616-19.4555-13.4502-32.2101-15.2902-6.18-.8936-7.411-1.1582-39.033-1.2131z" inkscape:connector-curvature="0" fill="url(#h)" transform="translate(-71.8155 -18.1429)"/><path d="M132.3452 33.973c-26.7167 0-30.0696.1167-40.5629.5939-10.4727.4792-17.6212 2.136-23.8762 4.567-6.4701 2.5107-11.9586 5.8693-17.4265 11.3352-5.472 5.464-8.8332 10.9483-11.354 17.4116-2.4389 6.2524-4.099 13.3976-4.5703 23.8585-.4693 10.4854-.5923 13.8379-.5923 40.5348 0 26.697.1189 30.0371.5943 40.5225.4817 10.465 2.1397 17.6082 4.5703 23.8585 2.5147 6.4654 5.8758 11.9497 11.3458 17.4136 5.466 5.468 10.9544 8.8349 17.4204 11.3456 6.259 2.4309 13.4097 4.0877 23.8803 4.567 10.4933.477 13.8441.5938 40.5588.5938 26.7188 0 30.0615-.1167 40.5547-.5939 10.4728-.4792 17.6295-2.136 23.8885-4.567 6.4681-2.5106 11.9484-5.8775 17.4143-11.3455 5.472-5.4639 8.8332-10.9482 11.354-17.4115 2.4183-6.2524 4.0784-13.3976 4.5703-23.8585.4713-10.4854.5943-13.8277.5943-40.5246 0-26.697-.123-30.0473-.5943-40.5328-.4919-10.465-2.152-17.6081-4.5703-23.8584-2.5208-6.4654-5.882-11.9498-11.354-17.4137-5.4721-5.468-10.9442-8.8266-17.4204-11.3353-6.2714-2.4309-13.424-4.0877-23.8967-4.5669-10.4933-.4772-13.8339-.5939-40.5588-.5939zm-8.825 17.7147c2.6193-.0041 5.5418 0 8.825 0 26.2659 0 29.379.0942 39.7513.5652 9.5915.4383 14.7971 2.0397 18.2648 3.3852 4.5908 1.7817 7.8638 3.9116 11.3048 7.3521 3.4431 3.4406 5.5745 6.7173 7.3617 11.3046 1.3465 3.461 2.9512 8.6628 3.3877 18.2472.4714 10.3625.5739 13.4754.5739 39.7095 0 26.234-.1025 29.347-.5739 39.7095-.4386 9.5843-2.0412 14.7861-3.3877 18.2471-1.783 4.5874-3.9186 7.8539-7.3617 11.2923-3.443 3.4406-6.712 5.5704-11.3048 7.3521-3.4636 1.3517-8.6733 2.949-18.2648 3.3873-10.3702.471-13.4854.5734-39.7513.5734-26.2679 0-29.381-.1024-39.7513-.5734-9.5914-.4423-14.797-2.0438-18.2668-3.3893-4.5908-1.7817-7.87-3.9116-11.313-7.3521-3.4431-3.4405-5.5745-6.709-7.3617-11.2985-1.3465-3.461-2.9512-8.6628-3.3877-18.2471-.4714-10.3626-.5657-13.4754-.5657-39.7259 0-26.2504.0943-29.347.5657-39.7095.4386-9.5844 2.0412-14.7861 3.3877-18.2512 1.783-4.5874 3.9186-7.8641 7.3617-11.3046 3.443-3.4406 6.7222-5.5704 11.313-7.3562 3.4677-1.3517 8.6754-2.949 18.2668-3.3894 9.075-.4096 12.5919-.5324 30.9264-.553zm61.3363 16.322c-6.5173 0-11.805 5.2776-11.805 11.792 0 6.5125 5.2877 11.7962 11.805 11.7962 6.5172 0 11.8049-5.2837 11.8049-11.7962 0-6.5124-5.2877-11.796-11.805-11.796zm-52.5113 13.7826c-27.8993 0-50.5191 22.6031-50.5191 50.4817 0 27.8786 22.6198 50.4714 50.5191 50.4714s50.511-22.5928 50.511-50.4714c0-27.8786-22.6137-50.4817-50.513-50.4817zm0 17.7147c18.109 0 32.7914 14.6694 32.7914 32.767 0 18.0956-14.6824 32.767-32.7914 32.767-18.111 0-32.7913-14.6714-32.7913-32.767 0-18.0976 14.6803-32.767 32.7913-32.767z" inkscape:connector-curvature="0" fill="#fff"/></g></svg>`

const FACEBOOK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve">
<style type="text/css">
	.st0{fill:url(#SVGID_1_);}
	.st1{fill:#FFFFFF;}
</style>
<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-277.375" y1="406.6018" x2="-277.375" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)">
	<stop offset="0" style="stop-color:#0062E0"/>
	<stop offset="1" style="stop-color:#19AFFF"/>
</linearGradient>
<path class="st0" d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"/>
<path class="st1" d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"/>
</svg>`;

const FERRYHILL_INSTAGRAM_URL = 'https://www.instagram.com/ferryhill_fishchips/';
const FERRYHILL_FACEBOOK_URL = 'https://www.facebook.com/FerryhillFishChips/?ref=embed_page';

const buildContactpage = (()=>{
    const container = document.createElement('div');
    container.id = 'contact-container';

    //CREATE SECTIONS
    const locationSection = document.createElement('div');
    locationSection.classList.add('contact-section');
    locationSection.id = 'location-section';
    
    const socialSection = document.createElement('div');
    socialSection.classList.add('contact-section');
    socialSection.id = 'social-section';

    //CREATE BOXES
    const contactBox = document.createElement('div');
    contactBox.classList.add('box');
    contactBox.id = 'contact-info-box';
    contactBox.innerHTML = ADDRESS;
    
    const mapBox = document.createElement('div');
    mapBox.classList.add('box');
    mapBox.id = 'map-box';
    
    //A CONTAINER DIV FOR THE MAP
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    //APPEND TO MAPBOX
    mapBox.appendChild(mapContainer);

    const messageBox = document.createElement('div');
    messageBox.classList.add('box');
    messageBox.id = 'message-box';
    messageBox.innerHTML = MESSAGE;
   
    const socialBox = document.createElement('div');
    socialBox.classList.add('box');
    socialBox.id = 'social-box';
    
    const instagramMsg = document.createElement('div');
    instagramMsg.classList.add('social-text');
    instagramMsg.innerHTML = "Follow us on <span class='social-name'>Instagram</span>";

    const instaLinkContainer = document.createElement('div');
    const instagramLink = document.createElement('a');
    instagramLink.href = FERRYHILL_INSTAGRAM_URL;
    instagramLink.innerHTML = INSTAGRAM_SVG;
    instaLinkContainer.appendChild(instagramLink);
    
    const facebookMsg = document.createElement('div');
    facebookMsg.classList.add('social-text');
    facebookMsg.innerHTML = "Visit us on <span class='social-name'>Facebook</span>";

    const facebookLinkContainer = document.createElement('div');
    const facebookLink = document.createElement('a');
    facebookLink.href = FERRYHILL_FACEBOOK_URL;
    facebookLink.innerHTML = FACEBOOK_SVG;
    facebookLinkContainer.appendChild(facebookLink);
    
    socialBox.appendChild(instagramMsg);
    socialBox.appendChild(instaLinkContainer);

    socialBox.appendChild(facebookMsg);
    socialBox.appendChild(facebookLinkContainer);

    //APPEND BOXES TO RELEVANT SECTION
    locationSection.appendChild(contactBox);
    locationSection.appendChild(mapBox);

    socialSection.appendChild(messageBox);
    socialSection.appendChild(socialBox);


    //APPEND SECTIOSN TO CONTAINER
    container.appendChild(locationSection);
    container.appendChild(socialSection);

    //GOOGLE MAPS STUFF
    const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__.Loader({
        apiKey: API_KEY,
        version: "weekly",
      });
      
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
      
        let map = new Map(mapContainer, {
          center: { lat: 53.448156, lng: -2.415962 },
          zoom: 15,
        });

        let location = new google.maps.LatLng(53.448156,-2.415962 );
        let marker = new google.maps.Marker({
            position:location,
            map:map
        });
      });

    return container;

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildContactpage);

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/footer.scss */ "./src/styles/footer.scss");

/* import ship from "../assets/ship-logo.png";
import seagull from "../assets/seagull_2.png"; */

// copyright icon
// <i class="fa-regular fa-copyright"></i>;

const buildFooter = (() => {
  const footer = document.createElement("footer");
  const text = document.createElement("p");
  /*   const imgShip = document.createElement("img");
  const imgSeagull = document.createElement("img"); */

  /*   imgShip.src = ship;
  imgShip.alt = "ship outline";
  imgShip.classList.add("ship-img");

  imgSeagull.src = seagull;
  imgSeagull.alt = "seagull shape";
  imgSeagull.classList.add("seagull-img");
  
  /* footer.appendChild(imgSeagull);
  footer.appendChild(imgShip); */
  text.innerText = `Made by Rigney 2023`;
  footer.appendChild(text);

  return footer;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFooter);


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _assets_seagull_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/seagull_1.png */ "./src/assets/seagull_1.png");
/* harmony import */ var _assets_seagull_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/seagull_2.png */ "./src/assets/seagull_2.png");
/* harmony import */ var _assets_seagull_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/seagull_3.png */ "./src/assets/seagull_3.png");





const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line class="lines" x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

const buildHeader = (()=>{

    const headerContainer = document.createElement('div');
    const header = document.createElement('header');
    const left = document.createElement('div');
    const right = document.createElement('div');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');
    const contact = document.createElement('a');

    const menuButton = document.createElement('button');
    
    headerContainer.id = 'header-container'

    //instead, I'm going to use three divs inside the
    //button to create the hamburger effect
    const line1 = document.createElement('div');
    line1.classList.add('line');
    line1.id = 'line1';
    const line2 = document.createElement('div');
    line2.classList.add('line');
    line2.id = 'line2';
    const line3 = document.createElement('div');
    line3.classList.add('line');
    line3.id = 'line3';

    // seagull images
    const seagullIconA = document.createElement('img');
    seagullIconA.src = _assets_seagull_1_png__WEBPACK_IMPORTED_MODULE_1__;
    seagullIconA.id = 'seagull-icon-a';
    const seagullIconB = document.createElement('img');
    seagullIconB.src = _assets_seagull_3_png__WEBPACK_IMPORTED_MODULE_3__;
    seagullIconB.id = 'seagull-icon-b';


    menuButton.appendChild(line1);
    menuButton.appendChild(line2);
    menuButton.appendChild(line3);

    const homeHeading = document.createElement('div');
    homeHeading.id = 'home-heading';
    const homeSubHeading = document.createElement('div');
    homeSubHeading.id = 'home-sub-heading';
    homeHeading.textContent = 'Ferryhill'
    homeSubHeading.textContent = "Fish and Chips";

    left.id = 'left-side';
    right.id = 'right-side';

    home.id = 'home-tab';
    menu.id = 'menu-tab';
    about.id = 'about-tab';
    contact.id = 'contact-tab';

    menuButton.id = 'menu-button';

    //set the data-index attribute to we can associate each
    //header link to a page
    home.dataset.index = 0;
    menu.dataset.index = 1;
    about.dataset.index = 2;
    contact.dataset.index = 3;

    home.appendChild(homeHeading);
    home.appendChild(homeSubHeading);
    home.appendChild(seagullIconA);
    home.appendChild(seagullIconB);

    menu.textContent = 'Menu';
    about.textContent = 'About';
    contact.textContent = 'Contact';

    //dropdown box
    const dropDownBox = document.createElement('div');
    dropDownBox.id = 'dropdown-box'; 
    
    left.appendChild(home);
    right.appendChild(menu);
    right.appendChild(about);
    right.appendChild(contact);

    header.appendChild(left);
    header.appendChild(right);
    header.appendChild(menuButton);
    header.appendChild(dropDownBox);
    headerContainer.appendChild(header);
    
/*     home.addEventListener('click', ()=>{
        if(menuButton.classList.contains('active'))
            toggleDropbox();
    }) */

    //add eventlisteners to all links
    //to reset page position
    let headerLinks = [...header.querySelectorAll('a')];
    headerLinks.forEach(el =>{
        el.addEventListener('click', ()=>{
            window.scrollTo(0,0);
        })
    })

    menuButton.addEventListener('click', ()=>{
        toggleDropbox();
        
    })

    dropDownBox.addEventListener('click', ()=>{
        toggleDropbox();
    })

    const toggleDropbox = ()=>{
        dropDownBox.classList.toggle('active');
        menuButton.classList.toggle('active');

        toggleHomeLinkDisplay(dropDownBox.classList.contains('active'));

        if(dropDownBox.classList.contains('active')){
            dropDownBox.appendChild(home);
            dropDownBox.appendChild(menu);
            dropDownBox.appendChild(about);
            dropDownBox.appendChild(contact)

        }
        else{
            dropDownBox.removeChild(home);
            dropDownBox.removeChild(menu);
            dropDownBox.removeChild(about);
            dropDownBox.removeChild(contact);
            left.appendChild(home);
            right.appendChild(menu);
            right.appendChild(about);
            right.appendChild(contact);
        }
    }

    const toggleHomeLinkDisplay = (inDropbox)=>{
        if(inDropbox){
            homeHeading.textContent = 'Home';
            homeSubHeading.style.display = 'none';
        } else{
            homeHeading.textContent = 'Ferryhill';
            homeSubHeading.style.display = 'block';
        }
    }

    return headerContainer;

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_homepage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/homepage.scss */ "./src/styles/homepage.scss");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/modules/slider.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");





const WELCOME_TITLE = "Welcome to Ferryhill!";
const WELCOME_MSG =
  "Voted Salford's Best Chippy in 2023 by Salfordnow.co.uk readers";
const HOURS_MSG =
  "Be sure to check our social media pages or get in touch with us for any up-to-date changes";
const HOURS_INFO = `<div class='heading' id='title'>Opening Hours</div>
                    <div class='heading days'>Mon - Sat</div>
                    <div class='times'>11:30am  -  1:45pm</div>
                    <div class='times'>4:30pm  -  8:30pm</div>
                    <div class='heading days'>Fri</div>
                    <div class='times'>11:30am  -  2:00pm</div>
                    <div class='times'>4:30pm  -  8:30pm</div>
                    <div class='heading days'>Sunday</div>
                    <div class='times'>--closed--</div>
                    `;

const buildHomepage = (() => {
  const container = document.createElement("div");
  container.id = "homepage-container";

  //welcome section
  const welcomeDiv = document.createElement("div");
  welcomeDiv.id = "welcome";

  const welcomeTitle = document.createElement("div");
  welcomeTitle.innerText = WELCOME_TITLE;
  welcomeTitle.id = "welcome-title";

  const welcomeMsg = document.createElement("div");
  welcomeMsg.innerText = WELCOME_MSG;
  welcomeMsg.id = "welcome-msg";

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-container");

  const aboutBtn = document.createElement("button");
  aboutBtn.textContent = "Our Story";
  aboutBtn.classList.add("inverted-btn");
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Our Menu";

  aboutBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.loadContent)(2);
  });
  menuBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.loadContent)(1);
  });

  buttonDiv.appendChild(aboutBtn);
  buttonDiv.appendChild(menuBtn);

  welcomeDiv.appendChild(welcomeTitle);
  welcomeDiv.appendChild(welcomeMsg);
  welcomeDiv.appendChild(buttonDiv);

  //opening hours section
  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.id = "hours";

  const msgAndBtnContainer = document.createElement("div");
  msgAndBtnContainer.classList.add("msg-and-btn-container");

  const hoursMsg = document.createElement("div");
  hoursMsg.id = "hours-msg";
  hoursMsg.innerText = HOURS_MSG;

  const hoursDiv = document.createElement("div");
  hoursDiv.id = "hours-div";

  const hoursInfo = document.createElement("div");
  hoursInfo.id = "hours-info";
  hoursInfo.innerHTML = HOURS_INFO;

  const contactBtn = document.createElement("button");
  contactBtn.innerText = "Find Out More";
  contactBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.loadContent)(3);
  });

  hoursDiv.appendChild(hoursInfo);

  msgAndBtnContainer.appendChild(hoursMsg);
  msgAndBtnContainer.appendChild(contactBtn);

  openingHoursDiv.appendChild(msgAndBtnContainer);
  openingHoursDiv.appendChild(hoursDiv);

  container.appendChild(welcomeDiv);
  container.appendChild(_slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
  container.appendChild(openingHoursDiv);

  return container;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHomepage);


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.scss */ "./src/styles/menu.scss");


const menuiteams = {
    fish:{
        'haddock': '',
        '- large': '5.00',
        '- small': '3.20',
        'cod': '',
        '- large ': '5.00',
        '- small ': '3.20',
        'plaice': '5.20',
        'homemade fishcake': '1.70',
        'breaded fishcake': '2.00',
        'salmon & dill': '2.00',
        'calamari rings': '4.80',
        'salt & pepper squid': '4.80',
        'breaded scampi': '4.20',
        'fish barm': '',
        '- large  ': '5.40',
        '- small  ': '3.60',
        'fish bites': '2.20',
        '- 5 pieces': '',

    },
    'chips & more':{
        'chips': '',
        '- large': '3.40',
        '- regular': '2.30',
        '- small': '1.95',
        '- cheesy chips add £1': '',
        'chip barm': '2.50',
        'scallops': '2.30',
        '- or 50p each': '',
        'sausage': '',
        '- large ': '1.80',
        '- small ': '0.90',
    },
    'original holland pies':{
        'meat': '2.20',
        'meat & potato': '2.20',
        'cheese & onion': '2.20',
        'chicken & mushroom': '2.20',
        'pasty': '2.20',
        'steak & kidney pie': '2.20',
        'steak & kidney pudding': '2.20',
        'peppered steak': '2.20',
        '':'',
        'vegan pies': '',
        '- chicken & mushroom': '3.20',
        '- minced steak & onion': '3.20',
    },
    'chicken':{
        'chicken breast': '4.50',
        '100% chicken fillet burger': '3.50',
        'chicken nuggets': '3.80',
        '- portion of 8 or 50p each': '',
    },
    'extras':{
        'chicken curry': '5.20',
        '- served with rice/chips or half & half':'',
        'chilli con carne': '5.20',
        '- served with rice/chips or half & half ':'',
        '':'',
        'half rice / half chips & curry': '3.20',
        'sausage dinner':'5.80',
        '- sausage, chips, peas and gravy':'',
        'pie dinner': '6.20',
        '- any pie, chips, peas and gravy':'',
        'haggis': '3.00',
        'black pudding': '3.00',
        'minted pea fritters': '2.00',
        'spam fritters': '2.00',
        'haggis': '3.00',
        '- 4 in a portion': '',     
    },
    'sides & sauces':{
    'peas / gravy / spicy curry / fruity curry / beans':'',
    '- large':'1.40',
    '- small':'1.10',
    'rice': '2.50',
    'salt & pepper seasoning':'0.50',
    },
    'burgers':{
        'plain':'2.50',
        'double':'3.50',
        'cheese':'2.70',
        'double cheese':'4.20',
        'veggie':'3.00',
    },
    'kids menu':{
        '- each meal includes chips, drink, ketchup and toy':'',
        'chicken nuggets':'3.90',
        'breaded fishcake':'3.90',
        'fish bites':'3.90',
        'sausage':'3.90',
    },
    'gluten free monday & tuesday':{
        'fish':'',
        '- large':'5.20',
        '- small':'3.40',
        'homemade fishcake':'2.10',
        'scallops':'2.70',
        '- or 60p each':'',
        'onion rings':'2.70',
        '- or 60p each ':'',
        'sausage':'2.00',
        '- battered':'2.20',
        'bottle of vinegar':'1.50',
    },
    'vegan options':{
        'burgers':'3.00',
        'southern style goujons':'3.00',
        '- with chips':'3.50',
        'nuggets':'4.00',
        '- or 55p each':'',
        'pies':'',
        '- chicken & mushroom or minced steak & onion':'',
        'small sausage':'1.00',
    },
    'specials':{
        'sausage roll':'1.00',
        'chip barm special':'4.30',
        'battered chip barm':'3.00',
        'large spring rolls':'2.00',
        'minced beef & onion pie':'2.20',
        'halloumi fries':'3.40',
        'sweet potato fries':'3.20',
        'homemade chicken sticks':'3.00',

    },
    'lunchtime special':{
        'small fish, chips & peas':'5.50',
        '- served in a tray':'',
    }
}

const helper = (()=>{
    const isSizeOrOption = (value)=>{

        /* let numRegex = /\d/;

        if(value.includes('large') || value.includes('small') 
            || value.includes('regular') || (numRegex.test(value) && !(value.includes('%'))))
        {
            return true;                   
        }
        else return false; */

        if(value.includes('-')) return true;
        else return false;

    }

    const isEmptyPrice = (price)=>{
        if(price.length === 0){
            return true
        }
        else return false;
    }

    return{
        isSizeOrOption,
        isEmptyPrice,
    }
})();

const buildMenu = (()=>{
    const container = document.createElement('div');
    container.id = 'menu-container';

    let sections = Object.keys(menuiteams);

    sections.forEach( sectionHeading =>{

        //create a menu section
        let menuSection = document.createElement('div');
        menuSection.classList.add('menu-section');

        //each section has a heading
        let headingDiv = document.createElement('div');
        headingDiv.classList.add('section-heading');
        headingDiv.innerText = sectionHeading;

        menuSection.appendChild(headingDiv);
        
        let items = Object.keys(menuiteams[sectionHeading]);
        items.forEach(item =>{
            //create a div for each menu item
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            let itemName = document.createElement('div');
            //check if the item is an item or an option/size
            if(helper.isSizeOrOption(item)){
                itemDiv.classList.add('item-option')
                itemName.classList.add('item-option-text');
            }
            itemName.classList.add('menu-item-name');
            itemName.innerText = item;

            let itemPrice = document.createElement('div');
            let price = menuiteams[sectionHeading][item];

            //if the price is empty, we wont add the pound symbol
            if(!helper.isEmptyPrice(price)){
                itemPrice.classList.add('menu-item-price');
            }
            itemPrice.innerText = price;

            itemDiv.append(itemName, itemPrice);
            
            menuSection.appendChild(itemDiv);
        })

        container.appendChild(menuSection);

    })


    return container;

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildMenu);

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/slider.scss */ "./src/styles/slider.scss");


const msg0 = `Our <span>Fish</span> Are <span>Line Caught</span> From <span>Sustainable</span> Fishing Grounds, delivered <span>fresh</span> every day`;
const msg1 = `Our <span>Chips</span> Are Made Using <span>Quality Potatoes</span> Peeled & Chipped <span>Fresh</span> On The Day`;
const msg2 = `We <span>Fry</span> In <span>100%</span> Uncontaminated & <span>Sustainable</span> Palm Oil, <span>Filtered</span> Every Day`;
const msg3 = `All Of Our <span>Packaging</span> & Utensils Are <span>100%</span> Recyclable & <span>Biodegradable</span>`;

const icons = ["fa-fish", "fa-lines-leaning", "fa-droplet", "fa-leaf"];

const msgs = [msg0, msg1, msg2, msg3];

let startX;

const Slider = (() => {
  const sliderContainer = document.createElement("div");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  let slides = [];
  let dotEls = [];

  sliderContainer.classList.add("slider-container");
  prevBtn.classList.add("prev-btn");
  nextBtn.classList.add("next-btn");
  prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

  // create slide & dot elements
  for (let i = 0; i < msgs.length; i++) {
    // slide first
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.dataset.index = i;
    slide.id = `slide${i}`;

    // then textbox
    let textBox = document.createElement("div");
    textBox.classList.add("flex-centered");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add(`${icons[i]}`);
    let p = document.createElement("p");
    p.innerHTML = msgs[i];
    textBox.appendChild(p);
    textBox.appendChild(icon);
    slide.appendChild(textBox);

    // then dots
    let dot = document.createElement("div");
    dot.dataset.index = i;
    dot.classList.add("dot");
    dot.id = `dot${i}`;

    if (i === 0) {
      slide.classList.add("active-slide");
      dot.classList.add("active-dot");
    }

    slides.push(slide);
    dotEls.push(dot);
  }

  slides.forEach((el) => {
    sliderContainer.appendChild(el);
  });

  sliderContainer.appendChild(prevBtn);
  sliderContainer.appendChild(nextBtn);
  dotEls.forEach((el) => {
    sliderContainer.appendChild(el);
  });

  // functions
  nextBtn.addEventListener("click", () => {
    loadNextSlide();
    setCurrentDot();
  });

  prevBtn.addEventListener("click", () => {
    loadPrevSlide();
    setCurrentDot();
  });

  dotEls.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
      setCurrentDot();
    });
  });

  sliderContainer.addEventListener("touchstart", handleTouchStart);
  sliderContainer.addEventListener("touchmove", handleTouchMove);

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!startX) return;

    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX;

    // Adjust this threshold based on your needs
    if (Math.abs(diffX) > 50) {
      // Swipe right
      if (diffX > 0) {
        loadNextSlide();
      }
      // Swipe left
      else {
        loadPrevSlide();
      }

      setCurrentDot();

      // Reset startX to avoid rapid swiping
      startX = null;
    }
  }

  function loadNextSlide() {
    let currentSlide = getCurrentSlide();

    slides.forEach((slide, i) => {
      if (slide === currentSlide) {
        if (i === slides.length - 1) {
          slides[0].classList.add("active-slide");
        } else {
          slides[i + 1].classList.add("active-slide");
        }
      }
    });

    currentSlide.classList.remove("active-slide");
    console.log(getCurrentSlide());
  }

  function loadPrevSlide() {
    let currentSlide = getCurrentSlide();

    slides.forEach((slide, i) => {
      if (slide === currentSlide) {
        if (i === 0) {
          slides[slides.length - 1].classList.add("active-slide");
        } else {
          slides[i - 1].classList.add("active-slide");
        }
      }
    });

    currentSlide.classList.remove("active-slide");
    console.log(getCurrentSlide());
  }

  function getCurrentSlide() {
    return document.querySelector(".active-slide");
  }

  function setCurrentDot() {
    let currentSlide = getCurrentSlide();

    dotEls.forEach((dot, i) => {
      if (currentSlide.dataset.index == i) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      if (slide.dataset.index == index) {
        slide.classList.add("active-slide");
      } else {
        slide.classList.remove("active-slide");
      }
    });
  }

  function handleAutoNextImage() {
    loadNextSlide();
    setCurrentDot();
  }

  setInterval(handleAutoNextImage, 5000);

  return sliderContainer;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);


/***/ }),

/***/ "./src/assets/FH_christos-cropped.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/FH_christos-cropped.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FH_christos-cropped.jpeg";

/***/ }),

/***/ "./src/assets/FH_christos-pitchside-cropped.jpg":
/*!******************************************************!*\
  !*** ./src/assets/FH_christos-pitchside-cropped.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FH_christos-pitchside-cropped.jpg";

/***/ }),

/***/ "./src/assets/FH_fish-meal-1.jpeg":
/*!****************************************!*\
  !*** ./src/assets/FH_fish-meal-1.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FH_fish-meal-1.jpeg";

/***/ }),

/***/ "./src/assets/FH_front.png":
/*!*********************************!*\
  !*** ./src/assets/FH_front.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FH_front.png";

/***/ }),

/***/ "./src/assets/FH_packed.png":
/*!**********************************!*\
  !*** ./src/assets/FH_packed.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FH_packed.png";

/***/ }),

/***/ "./src/assets/FH_potatoes.png":
/*!************************************!*\
  !*** ./src/assets/FH_potatoes.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FH_potatoes.png";

/***/ }),

/***/ "./src/assets/fish-and-chips.jpg":
/*!***************************************!*\
  !*** ./src/assets/fish-and-chips.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fish-and-chips.jpg";

/***/ }),

/***/ "./src/assets/fish-in-oil.png":
/*!************************************!*\
  !*** ./src/assets/fish-in-oil.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fish-in-oil.png";

/***/ }),

/***/ "./src/assets/fried-fish.png":
/*!***********************************!*\
  !*** ./src/assets/fried-fish.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fried-fish.png";

/***/ }),

/***/ "./src/assets/painting.jpg":
/*!*********************************!*\
  !*** ./src/assets/painting.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "painting.jpg";

/***/ }),

/***/ "./src/assets/seagull_1.png":
/*!**********************************!*\
  !*** ./src/assets/seagull_1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "seagull_1.png";

/***/ }),

/***/ "./src/assets/seagull_2.png":
/*!**********************************!*\
  !*** ./src/assets/seagull_2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "seagull_2.png";

/***/ }),

/***/ "./src/assets/seagull_3.png":
/*!**********************************!*\
  !*** ./src/assets/seagull_3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "seagull_3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map