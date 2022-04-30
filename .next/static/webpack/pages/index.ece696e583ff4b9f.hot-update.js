"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var _components_product_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/product/ProductItem */ \"./components/product/ProductItem.js\");\n/* harmony import */ var _utils_filterSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/filterSearch */ \"./utils/filterSearch.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.products), products = ref[0], setProducts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isCheck = ref1[0], setIsCheck = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), page = ref2[0], setPage = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__.DataContext), state = ref3.state, dispatch = ref3.dispatch;\n    var auth = state.auth;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setProducts(props.products);\n    }, [\n        props.products\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (Object.keys(router.query).length === 0) setPage(1);\n    }, [\n        router.query\n    ]);\n    var handleCheck = function(id) {\n        products.forEach(function(product) {\n            if (product._id === id) product.checked = !product.checked;\n        });\n        setProducts(_toConsumableArray(products));\n    };\n    var handleCheckALL = function() {\n        products.forEach(function(product) {\n            return product.checked = !isCheck;\n        });\n        setProducts(_toConsumableArray(products));\n        setIsCheck(!isCheck);\n    };\n    var handleDeleteAll = function() {\n        var deleteArr = [];\n        products.forEach(function(product) {\n            if (product.checked) {\n                deleteArr.push({\n                    data: '',\n                    id: product._id,\n                    title: 'Delete all selected products?',\n                    type: 'DELETE_PRODUCT'\n                });\n            }\n        });\n        dispatch({\n            type: 'ADD_MODAL',\n            payload: deleteArr\n        });\n    };\n    var handleLoadmore = function() {\n        setPage(page + 1);\n        (0,_utils_filterSearch__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            router: router,\n            page: page + 1\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home_page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home Page\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                state: state\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            auth.user && auth.user.role === 'admin' && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"delete_all btn btn-danger mt-2\",\n                style: {\n                    marginBottom: '-10px'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        checked: isCheck,\n                        onChange: handleCheckALL,\n                        style: {\n                            width: '25px',\n                            height: '25px',\n                            transform: 'translateY(8px)'\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn d btn-danger ml-2\",\n                        \"data-toggle\": \"modal\",\n                        \"data-target\": \"#exampleModal\",\n                        onClick: handleDeleteAll,\n                        children: \"DELETE ALL\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products\",\n                children: products.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"No Products\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, _this) : products.map(function(product) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_product_ProductItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        product: product,\n                        handleCheck: handleCheck\n                    }, product._id, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            props.result < page * 8 ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-outline-info d-block mx-auto mb-4\",\n                onClick: handleLoadmore,\n                children: \"Load more\"\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n                lineNumber: 98,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\reactapp\\\\clothing\\\\pages\\\\index.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this));\n};\n_s(Home, \"J+2+RmF98vpmUH2VFu30PE5MTlM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjlCLFFBQVEsQ0FBQ2EsTUFBTSxLQUFLLENBQUMsK0VBQ2xCK0IsQ0FBRTs4QkFBQyxDQUFXOzs7Ozs0QkFFZjVDLFFBQVEsQ0FBQzZDLEdBQUcsQ0FBQzVCLFFBQVEsQ0FBUkEsT0FBTztrQ0FDcEIsTUFBTSwrREFBTHZCLHVFQUFXO3dCQUFtQnVCLE9BQU8sRUFBRUEsT0FBTzt3QkFBRUgsV0FBVyxFQUFFQSxXQUFXO3VCQUF2REcsT0FBTyxDQUFDQyxHQUFHOzs7Ozs7Ozs7OztZQU1qQ25CLEtBQUssQ0FBQytDLE1BQU0sR0FBRzFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBRSxnRkFDekJvQyxDQUFNO2dCQUFDVixTQUFTLEVBQUMsQ0FBMkM7Z0JBQy9EYSxPQUFPLEVBQUVmLGNBQWM7MEJBQUUsQ0FFekI7Ozs7Ozs7Ozs7OztBQUtSLENBQUM7R0EvRks5QixJQUFJOztRQUtPRixrREFBUzs7O0tBTHBCRSxJQUFJOztBQW9IViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xuXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0SXRlbSdcbmltcG9ydCBmaWx0ZXJTZWFyY2ggZnJvbSAnLi4vdXRpbHMvZmlsdGVyU2VhcmNoJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcidcblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKHByb3BzLnByb2R1Y3RzKVxuXG4gIGNvbnN0IFtpc0NoZWNrLCBzZXRJc0NoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgY29uc3Qge2F1dGh9ID0gc3RhdGVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFByb2R1Y3RzKHByb3BzLnByb2R1Y3RzKVxuICB9LFtwcm9wcy5wcm9kdWN0c10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCA9PT0gMCkgc2V0UGFnZSgxKVxuICB9LFtyb3V0ZXIucXVlcnldKVxuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGlkKSA9PiB7XG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgIGlmKHByb2R1Y3QuX2lkID09PSBpZCkgcHJvZHVjdC5jaGVja2VkID0gIXByb2R1Y3QuY2hlY2tlZFxuICAgIH0pXG4gICAgc2V0UHJvZHVjdHMoWy4uLnByb2R1Y3RzXSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoZWNrQUxMID0gKCkgPT4ge1xuICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiBwcm9kdWN0LmNoZWNrZWQgPSAhaXNDaGVjaylcbiAgICBzZXRQcm9kdWN0cyhbLi4ucHJvZHVjdHNdKVxuICAgIHNldElzQ2hlY2soIWlzQ2hlY2spXG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGVBbGwgPSAoKSA9PiB7XG4gICAgbGV0IGRlbGV0ZUFyciA9IFtdO1xuICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICBpZihwcm9kdWN0LmNoZWNrZWQpe1xuICAgICAgICAgIGRlbGV0ZUFyci5wdXNoKHtcbiAgICAgICAgICAgIGRhdGE6ICcnLCBcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0Ll9pZCwgXG4gICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBhbGwgc2VsZWN0ZWQgcHJvZHVjdHM/JywgXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFX1BST0RVQ1QnXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfTU9EQUwnLCBwYXlsb2FkOiBkZWxldGVBcnJ9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTG9hZG1vcmUgPSAoKSA9PiB7XG4gICAgc2V0UGFnZShwYWdlICsgMSlcbiAgICBmaWx0ZXJTZWFyY2goe3JvdXRlciwgcGFnZTogcGFnZSArIDF9KVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9wYWdlXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgUGFnZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxGaWx0ZXIgc3RhdGU9e3N0YXRlfSAvPlxuXG4gICAgICB7XG4gICAgICAgIGF1dGgudXNlciAmJiBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbGV0ZV9hbGwgYnRuIGJ0bi1kYW5nZXIgbXQtMlwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnLTEwcHgnfX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2lzQ2hlY2t9IG9uQ2hhbmdlPXtoYW5kbGVDaGVja0FMTH1cbiAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMjVweCcsIGhlaWdodDogJzI1cHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDhweCknfX0gLz5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGQgYnRuLWRhbmdlciBtbC0yXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVBbGx9PlxuICAgICAgICAgICAgREVMRVRFIEFMTFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxuICAgICAgICB7XG4gICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID09PSAwIFxuICAgICAgICAgID8gPGgyPk5vIFByb2R1Y3RzPC9oMj5cblxuICAgICAgICAgIDogcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RJdGVtIGtleT17cHJvZHVjdC5faWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IGhhbmRsZUNoZWNrPXtoYW5kbGVDaGVja30gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAge1xuICAgICAgICBwcm9wcy5yZXN1bHQgPCBwYWdlICogOCA/IFwiXCJcbiAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1pbmZvIGQtYmxvY2sgbXgtYXV0byBtYi00XCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZG1vcmV9PlxuICAgICAgICAgIExvYWQgbW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3F1ZXJ5fSkge1xuICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSB8fCAxXG4gIGNvbnN0IGNhdGVnb3J5ID0gcXVlcnkuY2F0ZWdvcnkgfHwgJ2FsbCdcbiAgY29uc3Qgc29ydCA9IHF1ZXJ5LnNvcnQgfHwgJydcbiAgY29uc3Qgc2VhcmNoID0gcXVlcnkuc2VhcmNoIHx8ICdhbGwnXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YShcbiAgICBgcHJvZHVjdD9saW1pdD0ke3BhZ2UgKiA4fSZjYXRlZ29yeT0ke2NhdGVnb3J5fSZzb3J0PSR7c29ydH0mdGl0bGU9JHtzZWFyY2h9YFxuICApXG4gIC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0czogcmVzLnByb2R1Y3RzLFxuICAgICAgcmVzdWx0OiByZXMucmVzdWx0XG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRGF0YUNvbnRleHQiLCJQcm9kdWN0SXRlbSIsImZpbHRlclNlYXJjaCIsInVzZVJvdXRlciIsIkZpbHRlciIsIkhvbWUiLCJwcm9wcyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJpc0NoZWNrIiwic2V0SXNDaGVjayIsInBhZ2UiLCJzZXRQYWdlIiwicm91dGVyIiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJPYmplY3QiLCJrZXlzIiwicXVlcnkiLCJsZW5ndGgiLCJoYW5kbGVDaGVjayIsImlkIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJfaWQiLCJjaGVja2VkIiwiaGFuZGxlQ2hlY2tBTEwiLCJoYW5kbGVEZWxldGVBbGwiLCJkZWxldGVBcnIiLCJwdXNoIiwiZGF0YSIsInRpdGxlIiwidHlwZSIsInBheWxvYWQiLCJoYW5kbGVMb2FkbW9yZSIsImRpdiIsImNsYXNzTmFtZSIsInVzZXIiLCJyb2xlIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsIm9uQ2hhbmdlIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJidXR0b24iLCJkYXRhLXRvZ2dsZSIsImRhdGEtdGFyZ2V0Iiwib25DbGljayIsImgyIiwibWFwIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});