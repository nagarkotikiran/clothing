"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__.DataContext), state = ref.state, dispatch = ref.dispatch;\n    var auth = state.auth, cart = state.cart;\n    var isActive = function(r) {\n        if (r === router.pathname) {\n            return \" active\";\n        } else {\n            return \"\";\n        }\n    };\n    var handleLogout = function() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_5___default().remove('refreshtoken', {\n            path: 'api/auth/accessToken'\n        });\n        localStorage.removeItem('firstLogin');\n        dispatch({\n            type: 'AUTH',\n            payload: {}\n        });\n        dispatch({\n            type: 'NOTIFY',\n            payload: {\n                success: 'Logged out!'\n            }\n        });\n        return router.push('/');\n    };\n    var adminRouter = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/users\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"dropdown-item\",\n                        children: \"Users\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/create\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"dropdown-item\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/categories\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"dropdown-item\",\n                        children: \"Categories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true));\n    };\n    var loggedRouter = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item dropdown\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav-link dropdown-toggle\",\n                    href: \"#\",\n                    id: \"navbarDropdownMenuLink\",\n                    \"data-toggle\": \"dropdown\",\n                    \"aria-haspopup\": \"true\",\n                    \"aria-expanded\": \"false\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: auth.user.avatar,\n                            alt: auth.user.avatar,\n                            style: {\n                                borderRadius: '50%',\n                                width: '30px',\n                                height: '30px',\n                                transform: 'translateY(-3px)',\n                                marginRight: '3px'\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, _this),\n                        \" \",\n                        auth.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown-menu\",\n                    \"aria-labelledby\": \"navbarDropdownMenuLink\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"dropdown-item\",\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, _this),\n                        auth.user.role === 'admin' && adminRouter(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-divider\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"dropdown-item\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, _this));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    children: \"CLOTHING\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"navbar-toggler\",\n                type: \"button\",\n                \"data-toggle\": \"collapse\",\n                \"data-target\": \"#navbarNavDropdown\",\n                \"aria-controls\": \"navbarNavDropdown\",\n                \"aria-expanded\": \"false\",\n                \"aria-label\": \"Toggle navigation\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"navbar-toggler-icon\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse navbar-collapse justify-content-end\",\n                id: \"navbarNavDropdown\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"navbar-nav p-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/cart\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\" + isActive('/cart'),\n                                    children: [\n                                        \"CART\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-shopping-cart position-relative\",\n                                            \"aria-hidden\": \"true\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"position-absolute\",\n                                                style: {\n                                                    padding: '3px 6px',\n                                                    background: '#ed143dc2',\n                                                    borderRadius: '50%',\n                                                    top: '-10px',\n                                                    right: '-10px',\n                                                    color: 'white',\n                                                    fontSize: '14px'\n                                                },\n                                                children: cart.length\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        Object.keys(auth).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"nav-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/signin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link\" + isActive('/signin'),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-user\",\n                                            \"aria-hidden\": \"true\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 37\n                                        }, this),\n                                        \" Sign in\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                                lineNumber: 104,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                            lineNumber: 103,\n                            columnNumber: 27\n                        }, this) : loggedRouter()\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\reactapp\\\\clothing\\\\components\\\\NavBar.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this));\n}\n_s(NavBar, \"naLG9Mn+JS7aGK2Pmc0ze5tcf2E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQUk7Z0NBQUN1QixJQUFJLEVBQUMsQ0FBTztzSEFDYkMsQ0FBQztvQ0FBQ0MsU0FBUyxFQUFFLENBQVUsWUFBR2YsUUFBUSxDQUFDLENBQU87O3dDQUFHLENBQzFDO29IQUFDNkMsQ0FBQzs0Q0FBQzlCLFNBQVMsRUFBQyxDQUF3Qzs0Q0FBQytCLENBQVcsY0FBQyxDQUFNO2tJQUNuRUgsQ0FBSTtnREFBQzVCLFNBQVMsRUFBQyxDQUFtQjtnREFDbkNZLEtBQUssRUFBRSxDQUFDO29EQUNKb0IsT0FBTyxFQUFFLENBQVM7b0RBQ2xCQyxVQUFVLEVBQUUsQ0FBVztvREFDdkJwQixZQUFZLEVBQUUsQ0FBSztvREFDbkJxQixHQUFHLEVBQUUsQ0FBTztvREFDWkMsS0FBSyxFQUFFLENBQU87b0RBQ2RDLEtBQUssRUFBRSxDQUFPO29EQUNkQyxRQUFRLEVBQUUsQ0FBTTtnREFDcEIsQ0FBQzswREFDSXJELElBQUksQ0FBQ3NELE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFPNUJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDekQsSUFBSSxFQUFFdUQsTUFBTSxLQUFLLENBQUMsK0VBQzNCcEMsQ0FBRTs0QkFBQ0YsU0FBUyxFQUFDLENBQVU7a0hBQ3JCekIsa0RBQUk7Z0NBQUN1QixJQUFJLEVBQUMsQ0FBUztzSEFDZkMsQ0FBQztvQ0FBQ0MsU0FBUyxFQUFFLENBQVUsWUFBR2YsUUFBUSxDQUFDLENBQVM7O29IQUN4QzZDLENBQUM7NENBQUM5QixTQUFTLEVBQUMsQ0FBYTs0Q0FBQytCLENBQVcsY0FBQyxDQUFNOzs7Ozs7d0NBQUssQ0FDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR045QixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEMsQ0FBQztHQTdHUXRCLE1BQU07O1FBQ0lILGtEQUFTOzs7S0FEbkJHLE1BQU07QUErR2YsK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSdcblxuZnVuY3Rpb24gTmF2QmFyKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIGNvbnN0IHsgYXV0aCwgY2FydCB9ID0gc3RhdGVcblxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSAocikgPT4ge1xuICAgICAgICBpZihyID09PSByb3V0ZXIucGF0aG5hbWUpe1xuICAgICAgICAgICAgcmV0dXJuIFwiIGFjdGl2ZVwiXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgQ29va2llLnJlbW92ZSgncmVmcmVzaHRva2VuJywge3BhdGg6ICdhcGkvYXV0aC9hY2Nlc3NUb2tlbid9KVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlyc3RMb2dpbicpXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FVVEgnLCBwYXlsb2FkOiB7fSB9KVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogJ0xvZ2dlZCBvdXQhJ30gfSlcbiAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG5cbiAgICBjb25zdCBhZG1pblJvdXRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnNcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+VXNlcnM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Qcm9kdWN0czwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5DYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBsb2dnZWRSb3V0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgaWQ9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdXRoLnVzZXIuYXZhdGFyfSBhbHQ9e2F1dGgudXNlci5hdmF0YXJ9IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTNweCknLCBtYXJnaW5SaWdodDogJzNweCdcbiAgICAgICAgICAgICAgICAgICAgfX0gLz4ge2F1dGgudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+UHJvZmlsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiBhZG1pblJvdXRlcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyAgXCI+XG4gICAgICAgICAgICA8TGluayAgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5DTE9USElORzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkRyb3Bkb3duXCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZFwiIGlkPVwibmF2YmFyTmF2RHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArIGlzQWN0aXZlKCcvY2FydCcpfT5DQVJUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2VkMTQzZGMyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJy0xMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJy0xMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydC5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggPT09IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgaXNBY3RpdmUoJy9zaWduaW4nKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbG9nZ2VkUm91dGVyKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJMaW5rIiwidXNlUm91dGVyIiwiRGF0YUNvbnRleHQiLCJDb29raWUiLCJOYXZCYXIiLCJyb3V0ZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsImNhcnQiLCJpc0FjdGl2ZSIsInIiLCJwYXRobmFtZSIsImhhbmRsZUxvZ291dCIsInJlbW92ZSIsInBhdGgiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidHlwZSIsInBheWxvYWQiLCJzdWNjZXNzIiwicHVzaCIsImFkbWluUm91dGVyIiwiaHJlZiIsImEiLCJjbGFzc05hbWUiLCJsb2dnZWRSb3V0ZXIiLCJsaSIsImlkIiwiZGF0YS10b2dnbGUiLCJhcmlhLWhhc3BvcHVwIiwiYXJpYS1leHBhbmRlZCIsImltZyIsInNyYyIsInVzZXIiLCJhdmF0YXIiLCJhbHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwibWFyZ2luUmlnaHQiLCJuYW1lIiwiZGl2IiwiYXJpYS1sYWJlbGxlZGJ5Iiwicm9sZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJkYXRhLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWxhYmVsIiwic3BhbiIsInVsIiwiaSIsImFyaWEtaGlkZGVuIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0b3AiLCJyaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});