"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/hooks/useTrades.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useTrades.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TradesContext\": () => (/* binding */ TradesContext),\n/* harmony export */   \"TradesProvider\": () => (/* binding */ TradesProvider),\n/* harmony export */   \"useTrades\": () => (/* binding */ useTrades)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nconst TradesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction TradesProvider({ children  }) {\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)('http://localhost:3333/');\n    /*   useEffect(() => {\n    const getStorage = localStorage.getItem('trades') || '[]'\n    setTrades(JSON.parse(getStorage));\n  }, []);\n\n  useEffect(() => {\n    localStorage.setItem('trades', JSON.stringify(trades))\n  }, [trades]); */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TradesContext.Provider, {\n        value: {\n            socket\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/usr/app/src/hooks/useTrades.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n}\nfunction useTrades() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TradesContext);\n    return context;\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVHJhZGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQVV0QyxLQUFLLENBQUNHLGFBQWEsaUJBQUdILG9EQUFhLENBQUMsQ0FBQyxDQUFDO0FBRXRDLFNBQVNJLGNBQWMsQ0FBQyxDQUFDQyxDQUFBQSxRQUFRLEVBQXFCLENBQUMsRUFBZSxDQUFDO0lBQzVFLEtBQUssQ0FBQ0MsTUFBTSxHQUFXSixvREFBRSxDQUFDLENBQXdCO0lBRXBELEVBT2tCOzs7Ozs7O2dCQUFBLEdBRWhCLE1BQU0sNkVBQ0hDLGFBQWEsQ0FBQ0ksUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDRixNQUFNO1FBQUMsQ0FBQztrQkFDdENELFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFTSxTQUFTSSxTQUFTLEdBQWEsQ0FBQztJQUNyQyxLQUFLLENBQUNDLE9BQU8sR0FBR1QsaURBQVUsQ0FBQ0UsYUFBYTtJQUN4QyxNQUFNLENBQUNPLE9BQU87QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9ob29rcy91c2VUcmFkZXMudHN4PzE2NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW8sIFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5pbnRlcmZhY2UgSUNvbnRleHQge1xuICBzb2NrZXQ6IFNvY2tldFxufVxuXG5pbnRlcmZhY2UgVHJhZGVzUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFRyYWRlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIElDb250ZXh0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWRlc1Byb3ZpZGVyKHtjaGlsZHJlbn06IFRyYWRlc1Byb3ZpZGVyUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHNvY2tldDogU29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy8nKTtcblxuLyogICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHJhZGVzJykgfHwgJ1tdJ1xuICAgIHNldFRyYWRlcyhKU09OLnBhcnNlKGdldFN0b3JhZ2UpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RyYWRlcycsIEpTT04uc3RyaW5naWZ5KHRyYWRlcykpXG4gIH0sIFt0cmFkZXNdKTsgKi9cblxuICByZXR1cm4gKFxuICAgIDxUcmFkZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNvY2tldCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RyYWRlc0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYWRlcygpOiBJQ29udGV4dCB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRyYWRlc0NvbnRleHQpO1xuICByZXR1cm4gY29udGV4dFxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiaW8iLCJUcmFkZXNDb250ZXh0IiwiVHJhZGVzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNvY2tldCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUcmFkZXMiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useTrades.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useTrades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useTrades */ \"./src/hooks/useTrades.tsx\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useTrades__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useTrades__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useTrades__WEBPACK_IMPORTED_MODULE_2__.TradesProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CssBaseline, {}, void 0, false, {\n                        fileName: \"/usr/app/src/pages/_app.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/usr/app/src/pages/_app.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/usr/app/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.appWithTranslation)(MyApp));\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzJDO0FBQ1E7QUFDRjtTQUV4Q0csS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFlLENBQUM7SUFDL0QsTUFBTTs4RkFFREosNERBQWM7OztnR0FFVkQsc0RBQVc7Ozs7O2dHQUNYSSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0FBRUQsaUVBQWVILGdFQUFrQixDQUFDQyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQ3NzQmFzZWxpbmUgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IFRyYWRlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlVHJhZGVzJztcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUcmFkZXNQcm92aWRlcj5cbiAgICAgICAgPD5cbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvPlxuICAgICAgPC9UcmFkZXNQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJDc3NCYXNlbGluZSIsIlRyYWRlc1Byb3ZpZGVyIiwiYXBwV2l0aFRyYW5zbGF0aW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();