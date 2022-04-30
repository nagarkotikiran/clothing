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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"(api)/./models/userModel.js\");\n\n\nconst auth = async (req, res)=>{\n    const token = req.headers.authorization;\n    if (!token) return res.status(400).json({\n        err: 'Invalid Authentication.'\n    });\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"J&5D8.`*35d}/r6r>~k;:`%S/)-]w6jt,2D3pRgzb$GZH[S<\");\n    if (!decoded) return res.status(400).json({\n        err: 'Invalid Authentication.'\n    });\n    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        _id: decoded.id\n    });\n    return {\n        id: user._id,\n        role: user.role,\n        root: user.root\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNTO0FBR3ZDLEtBQUssQ0FBQ0UsSUFBSSxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsYUFBYTtJQUN2QyxFQUFFLEdBQUVGLEtBQUssRUFBRSxNQUFNLENBQUNELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO1FBQUFBLEdBQUcsRUFBRSxDQUF5QjtJQUFBLENBQUM7SUFFdkUsS0FBSyxDQUFDQyxPQUFPLEdBQUdYLDBEQUFVLENBQUNLLEtBQUssRUFBRVEsa0RBQStCO0lBQ2pFLEVBQUUsR0FBRUYsT0FBTyxFQUFFLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7UUFBQUEsR0FBRyxFQUFFLENBQXlCO0lBQUEsQ0FBQztJQUV6RSxLQUFLLENBQUNNLElBQUksR0FBRyxLQUFLLENBQUNmLGlFQUFhLENBQUMsQ0FBQ2lCO1FBQUFBLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxFQUFFO0lBQUEsQ0FBQztJQUVsRCxNQUFNLENBQUMsQ0FBQ0E7UUFBQUEsRUFBRSxFQUFFSCxJQUFJLENBQUNFLEdBQUc7UUFBRUUsSUFBSSxFQUFFSixJQUFJLENBQUNJLElBQUk7UUFBRUMsSUFBSSxFQUFFTCxJQUFJLENBQUNLLElBQUk7SUFBQSxDQUFDO0FBQzNELENBQUM7QUFHRCxpRUFBZW5CLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG90aGluZy8uL21pZGRsZXdhcmUvYXV0aC5qcz8xYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXG5cblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcblxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7X2lkOiBkZWNvZGVkLmlkfSlcblxuICAgIHJldHVybiB7aWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYXV0aCJdLCJuYW1lcyI6WyJqd3QiLCJVc2VycyIsImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwianNvbiIsImVyciIsImRlY29kZWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsInVzZXIiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middleware/auth.js\n");

/***/ }),

/***/ "(api)/./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: 'user'\n    },\n    address: String,\n    mobile: String,\n    cart: Array,\n    total: Number,\n    paymentId: String,\n    method: String,\n    delivered: {\n        type: Boolean,\n        default: false\n    },\n    paid: {\n        type: Boolean,\n        default: false\n    },\n    dateOfPayment: Date\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('order', orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvb3JkZXJNb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsS0FBSyxDQUFDQyxXQUFXLEdBQUcsR0FBRyxDQUFDRCx3REFBZSxDQUFDLENBQUM7SUFDckNHLElBQUksRUFBRSxDQUFDO1FBQ0hDLElBQUksRUFBRUosZ0VBQXVCO1FBQzdCTyxHQUFHLEVBQUUsQ0FBTTtJQUNmLENBQUM7SUFDREMsT0FBTyxFQUFFQyxNQUFNO0lBQ2ZDLE1BQU0sRUFBRUQsTUFBTTtJQUNkRSxJQUFJLEVBQUVDLEtBQUs7SUFDWEMsS0FBSyxFQUFFQyxNQUFNO0lBQ2JDLFNBQVMsRUFBRU4sTUFBTTtJQUNqQk8sTUFBTSxFQUFFUCxNQUFNO0lBQ2RRLFNBQVMsRUFBRSxDQUFDO1FBQ1JiLElBQUksRUFBRWMsT0FBTztRQUNiQyxPQUFPLEVBQUUsS0FBSztJQUNsQixDQUFDO0lBQ0RDLElBQUksRUFBRSxDQUFDO1FBQ0hoQixJQUFJLEVBQUVjLE9BQU87UUFDYkMsT0FBTyxFQUFFLEtBQUs7SUFDbEIsQ0FBQztJQUNERSxhQUFhLEVBQUVDLElBQUk7QUFDdkIsQ0FBQyxFQUFFLENBQUM7SUFDQUMsVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHeEIsOERBQXFCLElBQUlBLHFEQUFjLENBQUMsQ0FBTyxRQUFFQyxXQUFXO0FBQzFFLGlFQUFldUIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb3RoaW5nLy4vbW9kZWxzL29yZGVyTW9kZWwuanM/MWIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAndXNlcidcbiAgICB9LFxuICAgIGFkZHJlc3M6IFN0cmluZyxcbiAgICBtb2JpbGU6IFN0cmluZyxcbiAgICBjYXJ0OiBBcnJheSxcbiAgICB0b3RhbDogTnVtYmVyLFxuICAgIHBheW1lbnRJZDogU3RyaW5nLFxuICAgIG1ldGhvZDogU3RyaW5nLFxuICAgIGRlbGl2ZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcGFpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZGF0ZU9mUGF5bWVudDogRGF0ZVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLm9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdvcmRlcicsIG9yZGVyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm9yZGVyU2NoZW1hIiwiU2NoZW1hIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiYWRkcmVzcyIsIlN0cmluZyIsIm1vYmlsZSIsImNhcnQiLCJBcnJheSIsInRvdGFsIiwiTnVtYmVyIiwicGF5bWVudElkIiwibWV0aG9kIiwiZGVsaXZlcmVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJwYWlkIiwiZGF0ZU9mUGF5bWVudCIsIkRhdGUiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsIm9yZGVyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/orderModel.js\n");

/***/ }),

/***/ "(api)/./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    price: {\n        type: Number,\n        required: true,\n        trim: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    images: {\n        type: Array,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    checked: {\n        type: Boolean,\n        default: false\n    },\n    inStock: {\n        type: Number,\n        default: 0\n    },\n    sold: {\n        type: Number,\n        default: 0\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('product', productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLGFBQWEsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUN2Q0csS0FBSyxFQUFFLENBQUM7UUFDSkMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLElBQUksRUFBRSxJQUFJO0lBQ2QsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztRQUNKSixJQUFJLEVBQUVLLE1BQU07UUFDWkgsUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDZCxDQUFDO0lBQ0RHLFdBQVcsRUFBRSxDQUFDO1FBQ1ZOLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0RLLE9BQU8sRUFBRSxDQUFDO1FBQ05QLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0RNLE1BQU0sRUFBRSxDQUFDO1FBQ0xSLElBQUksRUFBRVMsS0FBSztRQUNYUCxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0RRLFFBQVEsRUFBRSxDQUFDO1FBQ1BWLElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDO0lBQ0RTLE9BQU8sRUFBRSxDQUFDO1FBQ05YLElBQUksRUFBRVksT0FBTztRQUNiQyxPQUFPLEVBQUUsS0FBSztJQUNsQixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUFDO1FBQ05kLElBQUksRUFBRUssTUFBTTtRQUNaUSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDREUsSUFBSSxFQUFFLENBQUM7UUFDSGYsSUFBSSxFQUFFSyxNQUFNO1FBQ1pRLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUNMLENBQUMsRUFBRSxDQUFDO0lBQ0FHLFVBQVUsRUFBRSxJQUFJO0FBQ3BCLENBQUM7QUFFRCxHQUFHLENBQUNDLE9BQU8sR0FBR3JCLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLENBQVMsVUFBRUMsYUFBYTtBQUNoRixpRUFBZW9CLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG90aGluZy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanM/NjY1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0cmltOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGltYWdlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNhdGVnb3J5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGluU3RvY2s6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBzb2xkOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/productModel.js\n");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: 'user'\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    avatar: {\n        type: String,\n        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUNwQ0csSUFBSSxFQUFFLENBQUM7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDSkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7UUFDUEwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREksSUFBSSxFQUFFLENBQUM7UUFDSE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDSFIsSUFBSSxFQUFFUyxPQUFPO1FBQ2JGLE9BQU8sRUFBRSxLQUFLO0lBQ2xCLENBQUM7SUFDREcsTUFBTSxFQUFFLENBQUM7UUFDTFYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUEyRjtJQUN4RyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDQUksVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHaEIsNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsQ0FBTSxPQUFFQyxVQUFVO0FBQ3ZFLGlFQUFlZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvdGhpbmcvLi9tb2RlbHMvdXNlck1vZGVsLmpzPzk2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndXNlcidcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ \"(api)/./models/orderModel.js\");\n/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ \"(api)/./models/productModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ \"(api)/./middleware/auth.js\");\n\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"POST\":\n            await createOrder(req, res);\n            break;\n        case \"GET\":\n            await getOrders(req, res);\n            break;\n    }\n});\nconst getOrders = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n        let orders;\n        if (result.role !== 'admin') {\n            orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n                user: result.id\n            }).populate(\"user\", \"-password\");\n        } else {\n            orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().populate(\"user\", \"-password\");\n        }\n        res.json({\n            orders\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\nconst createOrder = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n        const { address , mobile , cart , total  } = req.body;\n        const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            user: result.id,\n            address,\n            mobile,\n            cart,\n            total\n        });\n        cart.filter((item)=>{\n            return sold(item._id, item.quantity, item.inStock, item.sold);\n        });\n        await newOrder.save();\n        res.json({\n            msg: 'Order success! We will contact you to confirm the order.',\n            newOrder\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\nconst sold = async (id, quantity, oldInStock, oldSold)=>{\n    await _models_productModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({\n        _id: id\n    }, {\n        inStock: oldInStock - quantity,\n        sold: quantity + oldSold\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFDO0lBQ2xELENBQUM7QUFDTCxDQUFDO0FBRUQsS0FBSyxDQUFDUyxJQUFJLFVBQVVkLEVBQUUsRUFBRWdCLFFBQVEsRUFBRUksVUFBVSxFQUFFQyxPQUFPLEdBQUssQ0FBQztJQUN2RCxLQUFLLENBQUNqQyw2RUFBeUIsQ0FBQyxDQUFDMkI7UUFBQUEsR0FBRyxFQUFFZixFQUFFO0lBQUEsQ0FBQyxFQUFFLENBQUM7UUFDeENpQixPQUFPLEVBQUVHLFVBQVUsR0FBR0osUUFBUTtRQUM5QkYsSUFBSSxFQUFFRSxRQUFRLEdBQUdLLE9BQU87SUFDNUIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG90aGluZy8uL3BhZ2VzL2FwaS9vcmRlci9pbmRleC5qcz84ODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJ1xuaW1wb3J0IE9yZGVycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCdcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVPcmRlcihyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBhd2FpdCBnZXRPcmRlcnMocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IGdldE9yZGVycyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG5cbiAgICAgICAgbGV0IG9yZGVycztcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpe1xuICAgICAgICAgICAgb3JkZXJzID0gYXdhaXQgT3JkZXJzLmZpbmQoe3VzZXI6IHJlc3VsdC5pZH0pLnBvcHVsYXRlKFwidXNlclwiLCBcIi1wYXNzd29yZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG9yZGVycyA9IGF3YWl0IE9yZGVycy5maW5kKCkucG9wdWxhdGUoXCJ1c2VyXCIsIFwiLXBhc3N3b3JkXCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXMuanNvbih7b3JkZXJzfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU9yZGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsIH0gPSByZXEuYm9keVxuXG4gICAgICAgIGNvbnN0IG5ld09yZGVyID0gbmV3IE9yZGVycyh7XG4gICAgICAgICAgICB1c2VyOiByZXN1bHQuaWQsIGFkZHJlc3MsIG1vYmlsZSwgY2FydCwgdG90YWxcbiAgICAgICAgfSlcblxuICAgICAgICBjYXJ0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzb2xkKGl0ZW0uX2lkLCBpdGVtLnF1YW50aXR5LCBpdGVtLmluU3RvY2ssIGl0ZW0uc29sZClcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBuZXdPcmRlci5zYXZlKClcblxuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICBtc2c6ICdPcmRlciBzdWNjZXNzISBXZSB3aWxsIGNvbnRhY3QgeW91IHRvIGNvbmZpcm0gdGhlIG9yZGVyLicsXG4gICAgICAgICAgICBuZXdPcmRlclxuICAgICAgICB9KVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufVxuXG5jb25zdCBzb2xkID0gYXN5bmMgKGlkLCBxdWFudGl0eSwgb2xkSW5TdG9jaywgb2xkU29sZCkgPT4ge1xuICAgIGF3YWl0IFByb2R1Y3RzLmZpbmRPbmVBbmRVcGRhdGUoe19pZDogaWR9LCB7XG4gICAgICAgIGluU3RvY2s6IG9sZEluU3RvY2sgLSBxdWFudGl0eSxcbiAgICAgICAgc29sZDogcXVhbnRpdHkgKyBvbGRTb2xkXG4gICAgfSlcbn0iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiT3JkZXJzIiwiUHJvZHVjdHMiLCJhdXRoIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY3JlYXRlT3JkZXIiLCJnZXRPcmRlcnMiLCJyZXN1bHQiLCJvcmRlcnMiLCJyb2xlIiwiZmluZCIsInVzZXIiLCJpZCIsInBvcHVsYXRlIiwianNvbiIsImVyciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJhZGRyZXNzIiwibW9iaWxlIiwiY2FydCIsInRvdGFsIiwiYm9keSIsIm5ld09yZGVyIiwiZmlsdGVyIiwiaXRlbSIsInNvbGQiLCJfaWQiLCJxdWFudGl0eSIsImluU3RvY2siLCJzYXZlIiwibXNnIiwib2xkSW5TdG9jayIsIm9sZFNvbGQiLCJmaW5kT25lQW5kVXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/index.js\n");

/***/ }),

/***/ "(api)/./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log('Already connected.');\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://kirannagarkoti:kirannagarkoti@clothing-ecommerce.rde93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n        useCreateIndex: true,\n        useFindAndModify: false,\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    }, (err)=>{\n        if (err) throw err;\n        console.log('Connected to mongodb.');\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsU0FBUyxPQUFTLENBQUM7SUFDckIsRUFBRSxFQUFDRCwyRUFBa0MsRUFBQyxDQUFDO1FBQ25DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFvQjtRQUNoQyxNQUFNO0lBQ1YsQ0FBQztJQUNETCx1REFBZ0IsQ0FBQ08sOEhBQXVCLEVBQUUsQ0FBQztRQUN2Q0csY0FBYyxFQUFFLElBQUk7UUFDcEJDLGdCQUFnQixFQUFFLEtBQUs7UUFDdkJDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzVCLENBQUMsR0FBRUMsR0FBRyxHQUFJLENBQUM7UUFDUCxFQUFFLEVBQUNBLEdBQUcsRUFBRSxLQUFLLENBQUNBLEdBQUc7UUFDakJWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVCO0lBQ3ZDLENBQUM7QUFDTCxDQUFDO0FBR0QsaUVBQWVKLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG90aGluZy8uL3V0aWxzL2Nvbm5lY3REQi5qcz9jNjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXG4gICAgfSlcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/connectDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/index.js"));
module.exports = __webpack_exports__;

})();