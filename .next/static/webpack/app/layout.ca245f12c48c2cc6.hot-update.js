"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/tailwind.css":
/*!*********************************!*\
  !*** ./src/styles/tailwind.css ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"fdbf21f059bb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvdGFpbHdpbmQuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3RhaWx3aW5kLmNzcz83N2IxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZmRiZjIxZjA1OWJiXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/tailwind.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/root-layout.tsx":
/*!*********************************!*\
  !*** ./src/app/root-layout.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RootLayoutWrapper: function() { return /* binding */ RootLayoutWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"(app-pages-browser)/./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var starknet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! starknet */ \"(app-pages-browser)/./node_modules/starknet/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ RootLayoutWrapper auto */ \n\n\nconst chains = [\n    {\n        id: BigInt(\"0x534e5f474f45524c49\"),\n        name: \"Starknet Goerli\",\n        network: \"goerli-alpha\",\n        nativeCurrency: {\n            name: \"Ethereum\",\n            symbol: \"ETH\",\n            decimals: 18,\n            address: \"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7\"\n        },\n        rpcUrls: {\n            default: {\n                http: [\n                    \"https://alpha-mainnet.starknet.io\"\n                ]\n            },\n            public: {\n                http: [\n                    \"https://alpha-mainnet.starknet.io\"\n                ]\n            }\n        }\n    }\n];\nconst connectors = [\n    new _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.InjectedConnector({\n        options: {\n            id: \"braavos\"\n        }\n    }),\n    new _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.InjectedConnector({\n        options: {\n            id: \"argentX\"\n        }\n    })\n];\nfunction RootLayoutWrapper(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.StarknetConfig, {\n        chains: chains.map((chain)=>({\n                ...chain,\n                rpcUrls: {\n                    ...chain.rpcUrls,\n                    public: {\n                        http: chain.rpcUrls.default.http\n                    }\n                }\n            })),\n        connectors: connectors,\n        autoConnect: true,\n        provider: (param)=>{\n            let { chain } = param;\n            return new starknet__WEBPACK_IMPORTED_MODULE_2__.SequencerProvider({\n                baseUrl: chain.rpcUrls.default.http[0]\n            });\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/julian/Documents/starknet/src/app/root-layout.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayoutWrapper;\nvar _c;\n$RefreshReg$(_c, \"RootLayoutWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vdC1sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR3lFO0FBQ2pCO0FBRXhELE1BQU1HLFNBQWtCO0lBQ3RCO1FBQ0VDLElBQUlDLE9BQU87UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLGdCQUFnQjtZQUNkRixNQUFNO1lBQ05HLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQUMsU0FBUztZQUNQQyxTQUFTO2dCQUFFQyxNQUFNO29CQUFDO2lCQUFvQztZQUFDO1lBQ3ZEQyxRQUFRO2dCQUFFRCxNQUFNO29CQUFDO2lCQUFvQztZQUFDO1FBQ3hEO0lBQ0Y7Q0FDRDtBQUVELE1BQU1FLGFBQWE7SUFDakIsSUFBSWYsbUVBQWlCQSxDQUFDO1FBQUVnQixTQUFTO1lBQUViLElBQUk7UUFBVTtJQUFDO0lBQ2xELElBQUlILG1FQUFpQkEsQ0FBQztRQUFFZ0IsU0FBUztZQUFFYixJQUFJO1FBQVU7SUFBQztDQUNuRDtBQUVNLFNBQVNjLGtCQUFrQixLQUlqQztRQUppQyxFQUNoQ0MsUUFBUSxFQUdULEdBSmlDO0lBS2hDLHFCQUNFLDhEQUFDbkIsZ0VBQWNBO1FBQ1RHLFFBQVFBLE9BQU9pQixHQUFHLENBQUNDLENBQUFBLFFBQVU7Z0JBQ3pCLEdBQUdBLEtBQUs7Z0JBQ1JULFNBQVM7b0JBQ0wsR0FBR1MsTUFBTVQsT0FBTztvQkFDaEJHLFFBQVE7d0JBQUVELE1BQU1PLE1BQU1ULE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJO29CQUFDO2dCQUMvQztZQUNKO1FBQ0FFLFlBQVlBO1FBQ1pNLFdBQVc7UUFDWEMsVUFBVTtnQkFBQyxFQUFFRixLQUFLLEVBQUU7WUFDbEIsT0FBTyxJQUFJbkIsdURBQWlCQSxDQUFDO2dCQUMzQnNCLFNBQVNILE1BQU1ULE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsRUFBRTtZQUN4QztRQUNGO2tCQUVISzs7Ozs7O0FBR1A7S0F6QmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Jvb3QtbGF5b3V0LnRzeD81NTgyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHR5cGUgeyBDaGFpbiB9IGZyb20gJ0BzdGFya25ldC1yZWFjdC9jaGFpbnMnO1xuaW1wb3J0IHsgU3RhcmtuZXRDb25maWcsIEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnQHN0YXJrbmV0LXJlYWN0L2NvcmUnO1xuaW1wb3J0IHsgY29uc3RhbnRzLCBTZXF1ZW5jZXJQcm92aWRlciB9IGZyb20gJ3N0YXJrbmV0JztcblxuY29uc3QgY2hhaW5zOiBDaGFpbltdID0gW1xuICB7XG4gICAgaWQ6IEJpZ0ludCgnMHg1MzRlNWY0NzRmNDU1MjRjNDknKSxcbiAgICBuYW1lOiAnU3RhcmtuZXQgR29lcmxpJyxcbiAgICBuZXR3b3JrOiAnZ29lcmxpLWFscGhhJyxcbiAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgbmFtZTogJ0V0aGVyZXVtJyxcbiAgICAgIHN5bWJvbDogJ0VUSCcsXG4gICAgICBkZWNpbWFsczogMTgsXG4gICAgICBhZGRyZXNzOiAnMHgwNDlkMzY1NzBkNGU0NmY0OGU5OTY3NGJkM2ZjYzg0NjQ0ZGRkNmI5NmY3Yzc0MWIxNTYyYjgyZjllMDA0ZGM3JyBhcyBgMHgke3N0cmluZ31gXG4gICAgfSxcbiAgICBycGNVcmxzOiB7XG4gICAgICBkZWZhdWx0OiB7IGh0dHA6IFsnaHR0cHM6Ly9hbHBoYS1tYWlubmV0LnN0YXJrbmV0LmlvJ10gfSxcbiAgICAgIHB1YmxpYzogeyBodHRwOiBbJ2h0dHBzOi8vYWxwaGEtbWFpbm5ldC5zdGFya25ldC5pbyddIH1cbiAgICB9XG4gIH1cbl07XG5cbmNvbnN0IGNvbm5lY3RvcnMgPSBbXG4gIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IG9wdGlvbnM6IHsgaWQ6ICdicmFhdm9zJyB9fSksXG4gIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IG9wdGlvbnM6IHsgaWQ6ICdhcmdlbnRYJyB9fSksXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gUm9vdExheW91dFdyYXBwZXIoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxTdGFya25ldENvbmZpZyBcbiAgICAgICAgICBjaGFpbnM9e2NoYWlucy5tYXAoY2hhaW4gPT4gKHtcbiAgICAgICAgICAgICAgLi4uY2hhaW4sXG4gICAgICAgICAgICAgIHJwY1VybHM6IHtcbiAgICAgICAgICAgICAgICAgIC4uLmNoYWluLnJwY1VybHMsXG4gICAgICAgICAgICAgICAgICBwdWJsaWM6IHsgaHR0cDogY2hhaW4ucnBjVXJscy5kZWZhdWx0Lmh0dHAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSkpfVxuICAgICAgICAgIGNvbm5lY3RvcnM9e2Nvbm5lY3RvcnN9XG4gICAgICAgICAgYXV0b0Nvbm5lY3RcbiAgICAgICAgICBwcm92aWRlcj17KHsgY2hhaW4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZXF1ZW5jZXJQcm92aWRlcih7XG4gICAgICAgICAgICAgIGJhc2VVcmw6IGNoYWluLnJwY1VybHMuZGVmYXVsdC5odHRwWzBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YXJrbmV0Q29uZmlnPlxuICApO1xufSAiXSwibmFtZXMiOlsiU3RhcmtuZXRDb25maWciLCJJbmplY3RlZENvbm5lY3RvciIsIlNlcXVlbmNlclByb3ZpZGVyIiwiY2hhaW5zIiwiaWQiLCJCaWdJbnQiLCJuYW1lIiwibmV0d29yayIsIm5hdGl2ZUN1cnJlbmN5Iiwic3ltYm9sIiwiZGVjaW1hbHMiLCJhZGRyZXNzIiwicnBjVXJscyIsImRlZmF1bHQiLCJodHRwIiwicHVibGljIiwiY29ubmVjdG9ycyIsIm9wdGlvbnMiLCJSb290TGF5b3V0V3JhcHBlciIsImNoaWxkcmVuIiwibWFwIiwiY2hhaW4iLCJhdXRvQ29ubmVjdCIsInByb3ZpZGVyIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/root-layout.tsx\n"));

/***/ })

});