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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"730fe2957a49\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvdGFpbHdpbmQuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3RhaWx3aW5kLmNzcz83N2IxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNzMwZmUyOTU3YTQ5XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/tailwind.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/root-layout.tsx":
/*!*********************************!*\
  !*** ./src/app/root-layout.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RootLayoutWrapper: function() { return /* binding */ RootLayoutWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @starknet-react/core */ \"(app-pages-browser)/./node_modules/@starknet-react/core/dist/index.js\");\n/* harmony import */ var starknet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! starknet */ \"(app-pages-browser)/./node_modules/starknet/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ RootLayoutWrapper auto */ \n\n\nconst chains = [\n    {\n        id: BigInt(\"0x534e5f474f45524c49\"),\n        name: \"Starknet Goerli\",\n        network: \"goerli-alpha\",\n        nativeCurrency: {\n            name: \"Ethereum\",\n            symbol: \"ETH\",\n            decimals: 18,\n            address: \"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7\"\n        },\n        rpcUrls: {\n            default: {\n                http: [\n                    \"https://alpha-mainnet.starknet.io\"\n                ]\n            }\n        }\n    }\n];\nconst connectors = [\n    new _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.InjectedConnector({\n        options: {\n            id: \"braavos\"\n        }\n    }),\n    new _starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.InjectedConnector({\n        options: {\n            id: \"argentX\"\n        }\n    })\n];\nfunction RootLayoutWrapper(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_starknet_react_core__WEBPACK_IMPORTED_MODULE_1__.StarknetConfig, {\n        chains: chains.map((chain)=>({\n                ...chain,\n                rpcUrls: {\n                    ...chain.rpcUrls,\n                    public: {\n                        http: chain.rpcUrls.default.http\n                    }\n                }\n            })),\n        connectors: connectors,\n        autoConnect: true,\n        provider: (param)=>{\n            let { chain } = param;\n            return new starknet__WEBPACK_IMPORTED_MODULE_2__.constants.NetworkProvider({\n                network: chain.network\n            });\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/julian/Documents/starknet/src/app/root-layout.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayoutWrapper;\nvar _c;\n$RefreshReg$(_c, \"RootLayoutWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vdC1sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR3lFO0FBQ2pCO0FBRXhELE1BQU1HLFNBQVM7SUFDYjtRQUNFQyxJQUFJQyxPQUFPO1FBQ1hDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxnQkFBZ0I7WUFDZEYsTUFBTTtZQUNORyxRQUFRO1lBQ1JDLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FDLFNBQVM7WUFDUEMsU0FBUztnQkFBRUMsTUFBTTtvQkFBQztpQkFBb0M7WUFBQztRQUN6RDtJQUNGO0NBQ0Q7QUFFRCxNQUFNQyxhQUFhO0lBQ2pCLElBQUlkLG1FQUFpQkEsQ0FBQztRQUFFZSxTQUFTO1lBQUVaLElBQUk7UUFBVTtJQUFDO0lBQ2xELElBQUlILG1FQUFpQkEsQ0FBQztRQUFFZSxTQUFTO1lBQUVaLElBQUk7UUFBVTtJQUFDO0NBQ25EO0FBRU0sU0FBU2Esa0JBQWtCLEtBSWpDO1FBSmlDLEVBQ2hDQyxRQUFRLEVBR1QsR0FKaUM7SUFLaEMscUJBQ0UsOERBQUNsQixnRUFBY0E7UUFDVEcsUUFBUUEsT0FBT2dCLEdBQUcsQ0FBQ0MsQ0FBQUEsUUFBVTtnQkFDekIsR0FBR0EsS0FBSztnQkFDUlIsU0FBUztvQkFDTCxHQUFHUSxNQUFNUixPQUFPO29CQUNoQlMsUUFBUTt3QkFBRVAsTUFBTU0sTUFBTVIsT0FBTyxDQUFDQyxPQUFPLENBQUNDLElBQUk7b0JBQUM7Z0JBQy9DO1lBQ0o7UUFDQUMsWUFBWUE7UUFDWk8sV0FBVztRQUNYQyxVQUFVO2dCQUFDLEVBQUVILEtBQUssRUFBRTtZQUNsQixPQUFPLElBQUlsQiwrQ0FBU0EsQ0FBQ3NCLGVBQWUsQ0FBQztnQkFDbkNqQixTQUFTYSxNQUFNYixPQUFPO1lBQ3hCO1FBQ0Y7a0JBRUhXOzs7Ozs7QUFHUDtLQXpCZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcm9vdC1sYXlvdXQudHN4PzU1ODIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgdHlwZSB7IENoYWluIH0gZnJvbSAnQHN0YXJrbmV0LXJlYWN0L2NoYWlucyc7XG5pbXBvcnQgeyBTdGFya25ldENvbmZpZywgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICdAc3RhcmtuZXQtcmVhY3QvY29yZSc7XG5pbXBvcnQgeyBjb25zdGFudHMsIFByb3ZpZGVySW50ZXJmYWNlIH0gZnJvbSAnc3RhcmtuZXQnO1xuXG5jb25zdCBjaGFpbnMgPSBbXG4gIHtcbiAgICBpZDogQmlnSW50KCcweDUzNGU1ZjQ3NGY0NTUyNGM0OScpLFxuICAgIG5hbWU6ICdTdGFya25ldCBHb2VybGknLFxuICAgIG5ldHdvcms6ICdnb2VybGktYWxwaGEnLFxuICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICBuYW1lOiAnRXRoZXJldW0nLFxuICAgICAgc3ltYm9sOiAnRVRIJyxcbiAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgIGFkZHJlc3M6ICcweDA0OWQzNjU3MGQ0ZTQ2ZjQ4ZTk5Njc0YmQzZmNjODQ2NDRkZGQ2Yjk2ZjdjNzQxYjE1NjJiODJmOWUwMDRkYzcnIGFzIGAweCR7c3RyaW5nfWBcbiAgICB9LFxuICAgIHJwY1VybHM6IHtcbiAgICAgIGRlZmF1bHQ6IHsgaHR0cDogWydodHRwczovL2FscGhhLW1haW5uZXQuc3RhcmtuZXQuaW8nXSB9XG4gICAgfVxuICB9XG5dO1xuXG5jb25zdCBjb25uZWN0b3JzID0gW1xuICBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBvcHRpb25zOiB7IGlkOiAnYnJhYXZvcycgfX0pLFxuICBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBvcHRpb25zOiB7IGlkOiAnYXJnZW50WCcgfX0pLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJvb3RMYXlvdXRXcmFwcGVyKHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8U3RhcmtuZXRDb25maWcgXG4gICAgICAgICAgY2hhaW5zPXtjaGFpbnMubWFwKGNoYWluID0+ICh7XG4gICAgICAgICAgICAgIC4uLmNoYWluLFxuICAgICAgICAgICAgICBycGNVcmxzOiB7XG4gICAgICAgICAgICAgICAgICAuLi5jaGFpbi5ycGNVcmxzLFxuICAgICAgICAgICAgICAgICAgcHVibGljOiB7IGh0dHA6IGNoYWluLnJwY1VybHMuZGVmYXVsdC5odHRwIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICBjb25uZWN0b3JzPXtjb25uZWN0b3JzfVxuICAgICAgICAgIGF1dG9Db25uZWN0XG4gICAgICAgICAgcHJvdmlkZXI9eyh7IGNoYWluIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgY29uc3RhbnRzLk5ldHdvcmtQcm92aWRlcih7XG4gICAgICAgICAgICAgIG5ldHdvcms6IGNoYWluLm5ldHdvcmsgYXMgY29uc3RhbnRzLk5ldHdvcmtOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YXJrbmV0Q29uZmlnPlxuICApO1xufSAiXSwibmFtZXMiOlsiU3RhcmtuZXRDb25maWciLCJJbmplY3RlZENvbm5lY3RvciIsImNvbnN0YW50cyIsImNoYWlucyIsImlkIiwiQmlnSW50IiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsInN5bWJvbCIsImRlY2ltYWxzIiwiYWRkcmVzcyIsInJwY1VybHMiLCJkZWZhdWx0IiwiaHR0cCIsImNvbm5lY3RvcnMiLCJvcHRpb25zIiwiUm9vdExheW91dFdyYXBwZXIiLCJjaGlsZHJlbiIsIm1hcCIsImNoYWluIiwicHVibGljIiwiYXV0b0Nvbm5lY3QiLCJwcm92aWRlciIsIk5ldHdvcmtQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/root-layout.tsx\n"));

/***/ })

});