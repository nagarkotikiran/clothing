"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/Actions */ \"./store/Actions.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar DetailProduct = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.product), product = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), tab = ref1[0], setTab = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__.DataContext), state = ref2.state, dispatch = ref2.dispatch;\n    var cart = state.cart;\n    var isActive = function(index) {\n        if (tab === index) return \" active\";\n        return \"\";\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row details-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Detail Product\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: product.images[tab].url,\n                    alt: product.images[tab].url,\n                    className: \"d-block img-thumbnail rounded mt-4\",\n                    style: {\n                        height: '100%',\n                        width: '100%'\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-0\",\n                        style: {\n                            cursor: 'pointer'\n                        },\n                        children: product.images.map(function(img, index) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: img.url,\n                                alt: img.url,\n                                className: \"img-thumbnail rounded \".concat(isActive(index)),\n                                style: {\n                                    height: '60px',\n                                    width: '15%'\n                                },\n                                onClick: function() {\n                                    return setTab(index);\n                                }\n                            }, index, false, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-uppercase\",\n                        children: product.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-danger\",\n                        children: [\n                            \"NRP.\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-0 d-flex justify-content-between\",\n                        children: [\n                            product.inStock > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-danger\",\n                                children: [\n                                    \"In Stock: \",\n                                    product.inStock\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                                lineNumber: 50,\n                                columnNumber: 27\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-danger\",\n                                children: \"Out Stock\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                                lineNumber: 51,\n                                columnNumber: 27\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-danger\",\n                                children: [\n                                    \"Sold: \",\n                                    product.sold\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-2\",\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-2\",\n                        children: product.content\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \" my-4 px-5\",\n                        onClick: function() {\n                            return dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_4__.addToCart)(product, cart));\n                        },\n                        children: \"Buy\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\product\\\\[id].js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this));\n};\n_s(DetailProduct, \"QcGrr2cfiNS4BfGtw2Pd/A9c2f0=\");\n_c = DetailProduct;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailProduct);\nvar _c;\n$RefreshReg$(_c, \"DetailProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2pCLFNBQVMsRUFBQyxDQUFhOzBDQUFDLENBQVM7Ozs7Ozt3R0FHMUNpQixDQUFFO2dDQUFDakIsU0FBUyxFQUFDLENBQWE7O29DQUFDLENBQU07b0NBQUNULE9BQU8sQ0FBQzJCLElBQUk7Ozs7Ozs7Ozs7Ozs7Z0dBR2xEbkIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU07a0NBQUVULE9BQU8sQ0FBQzRCLFdBQVc7Ozs7OztnR0FDekNwQixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTTtrQ0FDaEJULE9BQU8sQ0FBQzZCLE9BQU87Ozs7OztnR0FHbkJDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDdEIsU0FBUyxFQUFDLENBQVk7d0JBQzVDWSxPQUFPLEVBQUUsUUFBUTs0QkFBRmpCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDUCx5REFBUyxDQUFDRyxPQUFPLEVBQUVLLElBQUk7O2tDQUFLLENBRXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEIsQ0FBQztHQS9ES1AsYUFBYTtLQUFiQSxhQUFhOztBQTJFbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzP2Y2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaERhdGEnXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvQWN0aW9ucydcblxuY29uc3QgRGV0YWlsUHJvZHVjdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtwcm9kdWN0XSA9IHVzZVN0YXRlKHByb3BzLnByb2R1Y3QpXG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlXG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZih0YWIgPT09IGluZGV4KSByZXR1cm4gXCIgYWN0aXZlXCI7XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkZXRhaWxzLXBhZ2VcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5EZXRhaWwgUHJvZHVjdDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2R1Y3QuaW1hZ2VzW3RhYl0udXJsIH0gYWx0PXsgcHJvZHVjdC5pbWFnZXNbdGFiXS51cmwgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgaW1nLXRodW1ibmFpbCByb3VuZGVkIG10LTRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHdpZHRoOicxMDAlJ319IC8+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC0wXCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319ID5cblxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17aW1nLnVybH0gYWx0PXtpbWcudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLXRodW1ibmFpbCByb3VuZGVkICR7aXNBY3RpdmUoaW5kZXgpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzYwcHgnLCB3aWR0aDogJzE1JSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKGluZGV4KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj57cHJvZHVjdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPk5SUC57cHJvZHVjdC5wcmljZX08L2g1PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pblN0b2NrID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5JbiBTdG9jazoge3Byb2R1Y3QuaW5TdG9ja308L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5PdXQgU3RvY2s8L2g2PlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+U29sZDoge3Byb2R1Y3Quc29sZH08L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCIgbXktNCBweC01XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpfSA+XG4gICAgICAgICAgICAgICAgICAgIEJ1eVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6IHtpZH19KSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXREYXRhKGBwcm9kdWN0LyR7aWR9YClcbiAgICAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgcHJvZHVjdDogcmVzLnByb2R1Y3QgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbFByb2R1Y3QiXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiYWRkVG9DYXJ0IiwiRGV0YWlsUHJvZHVjdCIsInByb3BzIiwicHJvZHVjdCIsInRhYiIsInNldFRhYiIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXJ0IiwiaXNBY3RpdmUiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwidXJsIiwiYWx0Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImN1cnNvciIsIm1hcCIsIm9uQ2xpY2siLCJoMiIsImg1IiwicHJpY2UiLCJpblN0b2NrIiwiaDYiLCJzb2xkIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ })

});