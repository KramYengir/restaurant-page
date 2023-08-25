/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fish.jpg */ "./src/assets/fish.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#about-container {
  flex-grow: 1;
  min-width: 80vw;
  max-width: 90vw;
  align-self: center;
  padding: 0 0;
  margin-top: 2vh;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  grid-row-gap: 3rem;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding: 1rem;
  background-color: rgba(42, 42, 42, 0.9);
}

.img-container {
  aspect-ratio: 4/3;
  width: clamp(300px, 80vw, 650px);
  background-position: center;
  background-size: contain;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  /* border: 2px solid \$blue-color;
  border-radius: 10px; */
}

.text-container {
  /* aspect-ratio: 4/3; */
  width: clamp(300px, 40vw, 650px);
  padding: 2rem 1rem;
  justify-self: center;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  text-align: center;
  color: #ebd693;
}

@media only screen and (max-width: 800px) {
  .section {
    flex-direction: column;
    min-width: 95vw;
    gap: 2rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/about.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAWA;EACI,YAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EAEA,aAAA;EACA,2BAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAXJ;;AAcA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EAEA,uCC/BiB;ADmBrB;;AAgBA;EACI,iBAAA;EACA,gCAhCO;EAkCP,2BAAA;EACA,wBAAA;EAEA,yDAAA;EAEA;wBAAA;AAfJ;;AAoBA;EACI,uBAAA;EACA,gCA7CkB;EA8ClB,kBAAA;EAEA,oBAAA;EAEA,qCAjDQ;EAkDR,kBAAA;EACA,cCtDS;ADmCb;;AAwBA;EAEI;IACI,sBAAA;IACA,eAAA;IACA,SAAA;EAtBN;AACF","sourcesContent":["@import './colors.scss';\n\n//COLORS\n$background-color: $background-dark-90;\n$font-color: $gold-color;\n\n//SIZES\n$img-size: clamp(300px, 80vw, 650px);\n$text-container-size: clamp(300px, 40vw, 650px);\n$font-size: clamp(1.2rem, 2vw, 1.5rem);\n\n#about-container{\n    flex-grow: 1;\n    min-width: 80vw;\n    max-width: 90vw;\n    align-self: center;\n    padding: 0 0;\n    margin-top: 2vh;\n    \n    display: grid;\n    grid-template-columns: auto;\n    justify-content: center;\n    align-items: center;\n    grid-row-gap: 3rem;\n}\n\n.section{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 100%;\n    padding: 1rem;\n\n    background-color: $background-color;\n}\n\n\n.img-container{\n    aspect-ratio: 4/3;\n    width: $img-size;\n    \n    background-position: center;\n    background-size: contain;\n    //all the same img for now...\n    background-image: url('../assets/fish.jpg');\n    \n    /* border: 2px solid $blue-color;\n    border-radius: 10px; */\n    \n}\n\n.text-container{\n    /* aspect-ratio: 4/3; */\n    width: $text-container-size;\n    padding: 2rem 1rem;\n    \n    justify-self: center;\n    \n    font-size: $font-size;\n    text-align: center;\n    color: $font-color;\n    \n}\n\n\n@media only screen and (max-width: 800px){\n   \n    .section{\n        flex-direction: column;\n        min-width: 95vw;\n        gap: 2rem;\n   }\n\n}","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `#contact-container {
  flex: 1.5;
  /* background-color: rgb(163, 163, 233); */
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/contact.scss"],"names":[],"mappings":"AAEA;EACI,SAAA;EACA,0CAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAFJ","sourcesContent":["@import './colors.scss';\n\n#contact-container{\n    flex: 1.5;\n    /* background-color: rgb(163, 163, 233); */\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
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
  border-top: 2px solid #ebd693;
}`, "",{"version":3,"sources":["webpack://./src/styles/footer.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAEA;EACI,eAAA;EACA,SAAA;EACA,gBAAA;EAEA,WAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAGA,cCRS;EDST,yBCfc;EDgBd,6BAAA;AAJJ","sourcesContent":["@import './colors.scss';\n\nfooter{\n    position: fixed;\n    bottom: 0;\n    min-height: 50px;\n\n    width: 100%;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n\n    color: $gold-color;\n    background-color: $background-dark;\n    border-top: 2px solid $gold-color ;\n}\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
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
  min-height: 95px;
  z-index: 40;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-family: Georgia, 'Times New Roman', Times, serif; */
  color: #ebd693;
  background-color: #2a2a2a;
  /* background: \$gradient-background; */
  border-bottom: 2px solid #ebd693;
}

a {
  font-size: 1rem;
  background-color: none;
  margin: 0 1.5rem;
  cursor: pointer;
}

#home-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
}
#home-tab #home-heading {
  /* font-family: 'Rozha One', serif; */
  color: #a3771f;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;
  text-shadow: 0.8px 0.8px #4fa9cc;
  letter-spacing: 1.8px;
}
#home-tab #home-sub-heading {
  font-size: 1rem;
  color: white;
  margin-top: -0.15rem;
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
  z-index: -5;
}

#dropdown-box.active {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 1;
  min-width: 100vw;
  top: 95px;
  padding: 0.5rem 0;
  gap: 0.9rem;
  background-color: #2a2a2a;
  border: 1px solid #ebd693;
  border-top: none;
  border-right: none;
  border-left: none;
  transition: background-color 0.2s, top 0.2s, z-index 0.2s;
}
#dropdown-box.active a {
  color: #ebd693;
  font-size: 1.5rem;
  text-transform: uppercase;
  min-width: 100vw;
  margin-left: 0;
}

@media only screen and (max-width: 650px) {
  #right-side {
    display: none;
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
    cursor: pointer;
  }
  #menu-button .line {
    width: 3rem;
    height: 0.3rem;
    border-radius: 100px;
    background-color: #ebd693;
    transform-origin: left center;
    transition: rotate 0.5s, width 0.5s, translate 0.5s, opacity 0.5s, background-color 0.5s;
  }
  #menu-button.active #line2 {
    width: 0;
    opacity: 0;
  }
  #menu-button.active #line1, #menu-button.active #line3 {
    background-color: #4fa9cc;
  }
  #menu-button.active #line1 {
    translate: 0 -0.15rem;
    width: 2.4038rem;
    rotate: 45deg;
  }
  #menu-button.active #line3 {
    translate: 0 0.15rem;
    width: 2.4038rem;
    rotate: -45deg;
  }
  #home-tab {
    margin-left: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AACA;EAAA;AAuBA;EACI,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EAEA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EAEA,2DAAA;EACA,cC9BS;ED+BT,yBCrCc;EDsCd,sCAAA;EACA,gCAAA;AAvBJ;;AA0BA;EACI,eAjCe;EAkCf,sBAAA;EACA,gBAAA;EAEA,eAAA;AAxBJ;;AA2BA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;AAxBJ;AA0BI;EACI,qCAAA;EACA,cCnDU;EDoDV,yBAAA;EACA,gBAAA;EACA,eArDK;EAsDL,gCAAA;EACA,qBAAA;AAxBR;AA4BI;EACI,eA3DS;EA4DT,YAAA;EACA,oBAAA;AA1BR;;AA8BA;EACI,mBAAA;AA3BJ;;AA8BA;EACI,yBAAA;AA3BJ;;AA8BA;EACI,gCAAA;EACA,yCAAA;AA3BJ;;AA8BA;EACI,aAAA;AA3BJ;;AA8BA;EACI,kBAAA;EACA,MAAA;EACA,WAAA;AA3BJ;;AA8BA;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EAEA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EAEA,iBAAA;EACA,WAAA;EAEA,yBChHc;EDiHd,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EAEA,yDAAA;AA/BJ;AAmCI;EACI,cCrHK;EDsHL,iBAjHa;EAkHb,yBAAA;EACA,gBAAA;EACA,cAAA;AAjCR;;AAsCA;EACI;IACI,aAAA;EAnCN;EAsCE;IACI,aAAA;IACA,sBAAA;IACA,WA9HU;IA+HV,oBAAA;IAEA,kBAAA;IACA,mBAAA;IACA,yBCjJU;IDkJV,YAAA;IAEA,eAAA;EAtCN;EAwCM;IACI,WAxIC;IAyID,cAxIE;IA0IF,oBAAA;IAEA,yBCtJC;IDyJD,6BAAA;IAGA,wFAAA;EA5CV;EAsDM;IACI,QAAA;IACA,UAAA;EApDV;EAuDM;IACI,yBC1KC;EDqHX;EAwDM;IACI,qBAAA;IACA,gBArKO;IAsKP,aAAA;EAtDV;EAyDM;IACI,oBAAA;IACA,gBA3KO;IA4KP,cAAA;EAvDV;EA4DE;IACI,iBAAA;EA1DN;AACF","sourcesContent":["@import './colors.scss';\n/* @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');\n */\n \n //COLORS\n $gradient-background: linear-gradient(180deg, rgba(42,42,42,0.9) 90%, rgba(175,175,175,1) 110%);\n\n//FONT SIZES\n$title-size: 2rem;\n$sub-title-size: 1rem;\n$header-link-size: 1rem;\n$dropdown-link-size: 1.5rem;\n\n//MENU BUTTON SIZES\n$menu-button-gap: 0.4rem;\n$line-width: 3rem;\n$line-height: 0.3rem;\n$menu-button-height: calc(calc($menu-button-gap*2) + calc($line-height*3));\n$line-cross-width: calc($menu-button-height * 1.414);\n\n//ANIMATE TIMES\n$lines-animate-time: 0.5s;\n$dropbox-animate-time: 0.2s;\n\nheader{\n    position: fixed;\n    padding: 0.5rem 0;\n    min-height: 95px;\n    z-index: 40;\n    \n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n    /* font-family: Georgia, 'Times New Roman', Times, serif; */\n    color: $gold-color;\n    background-color: $background-dark;\n    /* background: $gradient-background; */\n    border-bottom: 2px solid $gold-color;\n}\n\na{\n    font-size: $header-link-size;\n    background-color: none;\n    margin: 0 1.5rem;\n    \n    cursor: pointer;\n}\n\n#home-tab{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-left: 5rem;\n    \n    #home-heading{\n        /* font-family: 'Rozha One', serif; */\n        color: $gold-dark-color;\n        text-transform: uppercase;\n        font-weight: 600;\n        font-size: $title-size;\n        text-shadow: 0.8px 0.8px $blue-color;\n        letter-spacing: 1.8px;\n\n    }\n    \n    #home-sub-heading{\n        font-size: $sub-title-size;\n        color: white;\n        margin-top: -0.15rem;\n    }\n}\n\n#right-side{\n    padding-right: 2rem;\n}\n\n#right-side a{\n    text-transform: uppercase;\n}\n\n#right-side a.active{\n    border-bottom: 4px solid $blue-color;\n    transition: border-width 0.2s ease-in-out;\n}\n\n#menu-button{\n    display: none;\n}\n\n#dropdown-box{\n    position: absolute;\n    top: 0;\n    z-index: -5;\n}\n\n#dropdown-box.active{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n    text-align: center;\n    \n    position: absolute;\n    z-index: 1;\n    min-width: 100vw;\n    top: 95px;\n    \n    padding: 0.5rem 0;\n    gap: 0.9rem;\n\n    background-color: $background-dark;\n    border: 1px solid $gold-color;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n\n    transition: background-color $dropbox-animate-time,\n                top $dropbox-animate-time,\n                z-index $dropbox-animate-time;\n\n    a{\n        color: $gold-color;\n        font-size: $dropdown-link-size;\n        text-transform: uppercase;\n        min-width: 100vw;\n        margin-left: 0;\n    }\n}\n\n\n@media only screen and (max-width: 650px){\n    #right-side{\n        display: none;    \n    }\n\n    #menu-button{\n        display: flex;\n        flex-direction: column;\n        gap: $menu-button-gap;\n        margin-right: 2.5rem;\n\n        width: max-content;\n        height: max-content; \n        background-color: $background-dark;\n        border: none;\n\n        cursor: pointer;\n\n        .line{\n            width: $line-width;\n            height: $line-height;\n\n            border-radius: 100px;\n\n            background-color: $gold-color;\n\n            //for rotation\n            transform-origin: left center;\n\n            //animation\n            transition: rotate $lines-animate-time,\n                        width $lines-animate-time,\n                        translate $lines-animate-time,\n                        opacity $lines-animate-time,\n                        background-color $lines-animate-time;\n        }\n\n    }\n\n    #menu-button.active{\n        #line2{\n            width: 0;\n            opacity: 0;\n        }\n\n        #line1, #line3{\n            background-color: $blue-color;\n        }\n\n        #line1{\n            translate: 0 calc($line-height / -2);\n            width: $line-cross-width;\n            rotate: 45deg;\n        }\n\n        #line3{\n            translate: 0 calc($line-height / 2);\n            width: $line-cross-width;\n            rotate: -45deg;\n        }\n    }\n    \n\n    #home-tab{\n        margin-left: 3rem;\n    }\n\n}\n\n","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fish.jpg */ "./src/assets/fish.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#homepage-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0.8fr, 1fr));
  place-items: center;
  gap: 1rem;
}
#homepage-container > div {
  /* width: clamp(85vw, 90vw, 95vw); */
  width: min(1200px, 100vw);
  min-height: 600px;
  /*  background-color: rgba(255, 255, 255, 0.05); */
}

#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-size: cover;
  /* font-family: 'Merriweather', serif; */
}
#welcome #welcome-title {
  font-size: clamp(2.8rem, 5vw, 6.5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: #4fa9cc;
}
#welcome #welcome-msg {
  margin-top: 2rem;
  font-size: clamp(1.2rem, 1.8vw, 4rem);
  max-width: 80%;
  color: white;
  text-transform: uppercase;
}

#hours {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #2a2a2a;
  /* border-top: 1px solid \$gold-color; */
}
#hours #hours-msg {
  padding: 10%;
  flex: 1;
  font-size: clamp(1.3rem, 1.5vw, 5rem);
  color: #ebd693;
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
  font-size: clamp(1.6rem, 2vw, 4rem);
  padding: 0 1rem;
  border: 2px solid #4fa9cc;
  border-radius: 10px;
  color: white;
}
#hours #hours-info .heading {
  font-size: clamp(1.4rem, 1.6vw, 3.5rem);
  border-bottom: 1px solid #4fa9cc;
}
#hours #hours-info .days {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: white;
}
#hours #hours-info .times {
  font-size: clamp(1rem, 1.3vw, 2rem);
  color: white;
}

@media only screen and (max-width: 800px) {
  #hours {
    flex-direction: column;
  }
  #hours #hours-info {
    max-width: 100%;
    padding: 2.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/homepage.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAwBA;EACI,aAAA;EACA,2DAAA;EACA,mBAAA;EACA,SAAA;AAvBJ;AA0BI;EACI,oCAAA;EACA,yBAAA;EACA,iBAAA;EACD,kDAAA;AAxBP;;AA6BA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAEA,8GACI;EAMJ,2BAAA;EACA,sBAAA;EAEA,wCAAA;AAlCJ;AAoCI;EACI,qCA3Ca;EA4Cb,gBAAA;EACA,yBAAA;EACA,cCvDK;ADqBb;AAqCI;EACI,gBAAA;EACA,qCAlDW;EAmDX,cAAA;EACA,YAlEY;EAmEZ,yBAAA;AAnCR;;AAwCA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EAEA,yBCnFc;EDoFd,uCAAA;AAtCJ;AAwCI;EACI,YAAA;EACA,OAAA;EACA,qCAtES;EAuET,cCpFK;AD8Cb;AAyCI;EACI,OAAA;AAvCR;AA0CI;EACI,cAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBCtGU;AD8DlB;AA0CQ;EACI,mCArFO;EAsFP,eAAA;EACA,yBAAA;EACA,mBAAA;EACA,YAvGQ;AA+DpB;AA2CQ;EACI,uCA5FM;EA6FN,gCAAA;AAzCZ;AA4CQ;EACI,gBAAA;EACA,qBAAA;EACA,YAjHO;AAuEnB;AA6CQ;EACI,mCAtGO;EAuGP,YArHQ;AA0EpB;;AAgDA;EACI;IACI,sBAAA;EA7CN;EA+CM;IACI,eAAA;IACA,eAAA;EA7CV;AACF","sourcesContent":["@import './colors.scss';\n\n//FONT COLORS\n$welcome-title-color: $blue-color;\n$welcome-msg-color: white;\n$hours-msg-color: $gold-color;\n$hours-title-color: white;\n$hours-days-color: white;\n$hours-times-color: white;\n\n//BORDER & BACKGROUND COLORS\n$hours-background-color: $background-dark;\n$hours-times-background-color: $background-dark;\n$hours-title-border-color: $blue-color;\n$days-border-color: $blue-color;\n\n//FONTSIZES\n$welcome-title-size: clamp(2.8rem, 5vw, 6.5rem);\n$welcome-msg-size: clamp(1.2rem, 1.8vw, 4rem);\n$hours-msg-size: clamp(1.3rem, 1.5vw, 5rem);\n$hours-title-size: clamp(1.6rem, 2vw, 4rem);\n$hours-days-size: clamp(1.4rem, 1.6vw, 3.5rem);\n$hours-times-size: clamp(1rem, 1.3vw, 2rem);\n\n#homepage-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(0.8fr, 1fr));\n    place-items: center;\n    gap: 1rem;\n    \n\n    >div{\n        /* width: clamp(85vw, 90vw, 95vw); */\n        width: min(1200px, 100vw);\n        min-height: 600px;\n       /*  background-color: rgba(255, 255, 255, 0.05); */\n\n    }\n}\n\n#welcome{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    background:\n        linear-gradient(\n            rgba(0, 0, 0, 0.55),\n            rgba(0, 0, 0, 0.55)\n        ),\n        url('../assets/fish.jpg');\n\n    background-position: center;\n    background-size: cover;\n\n    /* font-family: 'Merriweather', serif; */\n\n    #welcome-title{\n        font-size: $welcome-title-size;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: $welcome-title-color\n    }\n\n    #welcome-msg{\n        margin-top: 2rem;\n        font-size: $welcome-msg-size;\n        max-width: 80%;\n        color: $welcome-msg-color;\n        text-transform: uppercase;\n\n    }\n}\n\n#hours{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 1rem;\n\n    background-color: $hours-background-color;\n    /* border-top: 1px solid $gold-color; */\n    \n    #hours-msg{\n        padding: 10%;\n        flex: 1;\n        font-size: $hours-msg-size;\n        color: $hours-msg-color\n    }\n\n    #hours-div{\n        flex: 1;\n    }\n\n    #hours-info{\n        max-width: 80%;\n        padding: 2rem;\n        border: 1px solid $blue-color;\n        border-radius: 10px;\n        background-color: $hours-times-background-color;\n\n        #title{\n            font-size: $hours-title-size;\n            padding: 0 1rem;\n            border: 2px solid $hours-title-border-color;\n            border-radius: 10px;\n            color: $hours-title-color;\n        }\n\n        .heading{\n            font-size: $hours-days-size;\n            border-bottom: 1px solid $days-border-color;\n        }\n        \n        .days{\n            margin-top: 1rem;\n            margin-bottom: 0.5rem;\n            color: $hours-days-color;\n        }\n\n        .times{\n            font-size: $hours-times-size;\n            color: $hours-times-color;\n        }\n    }\n}\n\n@media only screen and (max-width: 800px){    \n    #hours{\n        flex-direction: column;\n\n        #hours-info{\n            max-width: 100%;\n            padding: 2.5rem;\n        }\n    }\n}","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
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
}

#content, #content-main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

#content {
  justify-content: space-between;
  width: 100%;
  /* background-color: \$background-dark; */
}

#content-main {
  margin-top: 95px;
  margin-bottom: 50px;
  background-color: #357088;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAKA;EACI,SAAA;EACA,sBAAA;EACA,kCAAA;AAFJ;;AAKA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;AAFJ;;AAMA;EACI,8BAAA;EACA,WAAA;EACA,wCAAA;AAHJ;;AAOA;EACI,gBAAA;EACA,mBAAA;EACA,yBC3Bc;ADuBlB","sourcesContent":["@import './colors.scss';\n@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');\n\n\n*{\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Merriweather', serif;\n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content, #content-main{\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    \n}\n\n#content{\n    justify-content: space-between;\n    width: 100%;\n    /* background-color: $background-dark; */\n\n}\n\n#content-main{\n    margin-top: 95px;\n    margin-bottom: 50px; \n    background-color: $blue-dark-color;\n}","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
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
  width: 80vw;
  min-height: 95%;
  background-color: rgba(42, 42, 42, 0.9);
  padding: 5vh 10vw;
  margin: 5vh 0;
}

@media only screen and (max-width: 600px) {
  #menu-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.9fr));
  }
}
.menu-section {
  max-width: 80vw;
}

.section-heading {
  text-transform: uppercase;
  color: #4fa9cc;
  border-bottom: 1px solid #4fa9cc;
  font-size: clamp(2rem, 2.8vw, 2.5rem);
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
  font-size: clamp(1rem, 1.8vw, 1.5rem);
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
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
}

.item-option-text::before {
  content: " ";
  white-space: pre;
}

.menu-item-price {
  color: #ebd693;
  font-size: clamp(1rem, 1.8vw, 1.4rem);
}

.menu-item-price::before {
  content: "£";
}`, "",{"version":3,"sources":["webpack://./src/styles/menu.scss","webpack://./src/styles/colors.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAiBhB;EACI,aAAA;EACA,6DAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EAEA,uCCzBiB;ED0BjB,iBAAA;EACA,aAAA;AAhBJ;;AAmBA;EACI;IACI,6DAAA;EAhBN;AACF;AAoBA;EACI,eAAA;AAlBJ;;AAqBA;EACI,yBAAA;EACA,cCrCS;EDsCT,gCA5Ca;EA6Cb,qCAnCmB;AAiBvB;;AAqBA;EACI,cAAA;AAlBJ;;AAqBA;EACI,UAAA;AAlBJ;;AAqBA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AAlBJ;;AAqBA;EACI,gBAAA;EACA,qCArDQ;AAmCZ;;AAqBA;EACI,cChES;EDiET,0BAAA;AAlBJ;;AAqBA;EACI,aAAA;EACA,qBAAA;AAlBJ;;AAqBA;EACI,YAAA;EACA,uCAnEU;AAiDd;;AAqBA;EACI,YAAA;EACA,gBAAA;AAlBJ;;AAqBA;EACI,cCpFS;EDqFT,qCA5ES;AA0Db;;AAqBA;EACI,YAAA;AAlBJ","sourcesContent":["@import './colors.scss';\n\n$heading-border: 1px solid $blue-color;\n\n//-COLORS\n$container-background-color: $background-dark-90;\n$section-background-color: $gold-dark-color;\n$heading-color: $blue-color;\n$item-name-color: $gold-color;\n$item-price-color: $gold-color;;\n\n//-SIZES\n$section-heading-size: clamp(2rem, 2.8vw, 2.5rem);\n$item-size: clamp(1rem, 1.8vw, 1.5rem);\n$option-size: clamp(0.8rem, 1.5vw, 1.2rem);\n$price-size: clamp(1rem, 1.8vw, 1.4rem);\n\n#menu-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 0.9fr));\n    justify-content: center;\n    align-self: center;\n    gap: 3rem;\n    /* flex-grow: 1; */\n    width: clamp(80vw, 60vw, 95vw);\n    min-height: 95%;\n    \n    background-color: $container-background-color;\n    padding: 5vh 10vw;\n    margin: 5vh 0;\n}\n\n@media only screen and (max-width: 600px){\n    #menu-container{\n        grid-template-columns: repeat(auto-fit, minmax(300px, 0.9fr));\n    }\n\n}\n\n.menu-section{\n    max-width: 80vw;\n}\n\n.section-heading{\n    text-transform: uppercase;\n    color: $heading-color;\n    border-bottom: $heading-border;\n    font-size: $section-heading-size;\n}\n\n.section-heading, .menu-item{\n    margin: 0.5rem;\n}\n\n.menu-item ~ div:not(.menu-option){\n    color: red;\n}\n\n.menu-item{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-item:not(.item-option){\n    margin-top: 1rem;\n    font-size: $item-size;\n}\n\n.menu-item-name{\n    color: $item-name-color;\n    text-transform: capitalize;\n}\n\n.item-option{\n    margin-top: 0;\n    margin-bottom: 0.4rem;\n}\n\n.item-option-text{\n    color: white;\n    font-size: $option-size;\n}\n\n.item-option-text::before{\n    content: ' ';\n    white-space: pre;\n}\n\n.menu-item-price{\n    color: $item-price-color;\n    font-size: $price-size;\n}\n\n.menu-item-price::before{\n    content: '£';\n}","$background-dark: #2a2a2a;\n$background-darkish: rgb(58, 58, 58);\n$background-dark-90: rgba(42, 42, 42, 0.9);\n$background-dark-80: rgba(42, 42, 42, 0.8);\n$background-light: #f5f1de;\n$background-light-2: #cccccc;\n$gold-color: #ebd693;\n$gold-dark-color: #a3771f;\n$blue-color: #4fa9cc;\n$blue-dark-color: #357088;"],"sourceRoot":""}]);
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


const buildAboutpage = (()=>{

    const textContent = [
        'Ferryhill, what a place to be, bal blab blabadfdf dfdf dfdf dlb',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg dffdffdf fdfdf',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg fdfdfd dffdfd df fdfdf f',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hdfdf dfdf dfdf ddffddfsg jdhg f',    
    ]

    const container = document.createElement('div');
    container.id = 'about-container';

    
    for(let i = 1; i<4; i++){

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        imgContainer.id = `img-${i}`;

        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        textContainer.id = `text-${i}`;
        textContainer.textContent = `${textContent[i-1]}`;

        let section = document.createElement('div');
        section.classList.add('section')

        section.appendChild(imgContainer);
        section.appendChild(textContainer);

        /* let seperator = document.createElement('div');
        seperator.classList.add('seperator'); */

        container.appendChild(section);
        /* container.appendChild(textContainer); */
        /* container.appendChild(seperator); */
        
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


const buildContactpage = (()=>{
    const container = document.createElement('div');
    container.id = 'contact-container';


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


const buildFooter = (()=>{

    const footer = document.createElement('footer');
 
    footer.innerText = 'Created by Rigney Web Designs 2023'

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


const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line class="lines" x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

const buildHeader = (()=>{

    const header = document.createElement('header');
    const left = document.createElement('div');
    const right = document.createElement('div');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');
    const contact = document.createElement('a');


    const menuButton = document.createElement('button');
    //add svg to menu button
    /* menuButton.innerHTML = SVG; */

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
    
    menuButton.addEventListener('click', ()=>{
        toggleDropbox();
    })

    dropDownBox.addEventListener('click', ()=>{
        toggleDropbox();
    })

    const toggleDropbox = ()=>{
        dropDownBox.classList.toggle('active');
        menuButton.classList.toggle('active');
        if(dropDownBox.classList.contains('active')){
            dropDownBox.appendChild(menu);
            dropDownBox.appendChild(about);
            dropDownBox.appendChild(contact)

        }
        else{
            dropDownBox.removeChild(menu);
            dropDownBox.removeChild(about);
            dropDownBox.removeChild(contact);
            right.appendChild(menu);
            right.appendChild(about);
            right.appendChild(contact);
        }
    }

    return header;

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


const WELCOME_TITLE = 'Welcome to Ferryhill!';
const WELCOME_MSG = "Voted Salford's Best Chippy IN 2023 by Salfordnow.co.uk readers";
const HOURS_MSG = 'Be sure to check our social media pages or get in touch with us for up-to-date changes';
const HOURS_INFO = `<div class='heading' id='title'>Opening Hours</div>
                    <div class='heading days'>Mon - Sat</div>
                    <div class='times'>11:30am  -  1:45pm</div>
                    <div class='times'>4:30pm  -  8:30pm</div>
                    <div class='heading days'>Fri</div>
                    <div class='times'>11:30am  -  2:00pm</div>
                    <div class='times'>4:30pm  -  8:30pm</div>
                    <div class='heading days'>Sunday</div>
                    <div class='times'>--closed--</div>
                    `
                    ;


const buildHomepage = (()=>{
    const container = document.createElement('div');
    container.id = 'homepage-container';
   
    //welcome section
    const welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcome';

    const welcomeTitle = document.createElement('div');
    welcomeTitle.innerText = WELCOME_TITLE;
    welcomeTitle.id = 'welcome-title';
    
    const welcomeMsg = document.createElement('div');
    welcomeMsg.innerText = WELCOME_MSG;
    welcomeMsg.id = 'welcome-msg';

    welcomeDiv.appendChild(welcomeTitle);
    welcomeDiv.appendChild(welcomeMsg);

    //opening hours section
    const openingHoursDiv = document.createElement('div');
    openingHoursDiv.id = 'hours';

    const hoursMsg = document.createElement('div');
    hoursMsg.id = 'hours-msg';
    hoursMsg.innerText = HOURS_MSG;

    const hoursDiv = document.createElement('div');
    hoursDiv.id = 'hours-div';


    const hoursInfo = document.createElement('div');
    hoursInfo.id = 'hours-info';
    hoursInfo.innerHTML = HOURS_INFO;

    hoursDiv.appendChild(hoursInfo);

    openingHoursDiv.appendChild(hoursMsg);
    openingHoursDiv.appendChild(hoursDiv);


    container.appendChild(welcomeDiv);
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
    'gluten free moday & tuesday':{
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

/***/ "./src/assets/fish.jpg":
/*!*****************************!*\
  !*** ./src/assets/fish.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fish.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homepage.js */ "./src/modules/homepage.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/footer.js */ "./src/modules/footer.js");








let currentPage = _modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"];

const pages = [_modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_about_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"]];

const content = document.getElementById('content');
const contentMain = document.createElement('div');
contentMain.id = 'content-main';
contentMain.appendChild(currentPage);

content.appendChild(_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
content.appendChild(contentMain);
content.appendChild(_modules_footer_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

const tabLinks = document.querySelectorAll('a');

const loadContent = (index)=>{
    console.log(index);
    contentMain.removeChild(currentPage);
    contentMain.appendChild(pages[index]);
    currentPage = pages[index];
}

const toggleActiveTab = (index)=>{
    tabLinks.forEach((el,i)=>{
        if(i === index){
            tabLinks[index].classList.add('active')
        }
        else{
            tabLinks[i].classList.remove('active')
            console.log('matching index');
        }
    })
}

tabLinks.forEach((el, i) =>{
    el.addEventListener('click', ()=>{
        loadContent(el.dataset.index);
        toggleActiveTab(i);
    })
})


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map