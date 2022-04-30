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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
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

/***/ "(api)/./models/categoriesModel.js":
/*!***********************************!*\
  !*** ./models/categoriesModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategoriesSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.categories) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('categories', CategoriesSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvY2F0ZWdvcmllc01vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQ0Qsd0RBQWUsQ0FBQyxDQUFDO0lBQzFDRyxJQUFJLEVBQUUsQ0FBQztRQUNIQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFLElBQUk7SUFDZCxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDQUMsVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHVCxtRUFBMEIsSUFBSUEscURBQWMsQ0FBQyxDQUFZLGFBQUVDLGdCQUFnQjtBQUN6RixpRUFBZVEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb3RoaW5nLy4vbW9kZWxzL2NhdGVnb3JpZXNNb2RlbC5qcz9mZTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgQ2F0ZWdvcmllc1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KVxuXG5sZXQgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5jYXRlZ29yaWVzIHx8IG1vbmdvb3NlLm1vZGVsKCdjYXRlZ29yaWVzJywgQ2F0ZWdvcmllc1NjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDYXRlZ29yaWVzU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsImNhdGVnb3JpZXMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/categoriesModel.js\n");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: 'user'\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    avatar: {\n        type: String,\n        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUNwQ0csSUFBSSxFQUFFLENBQUM7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDSkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7UUFDUEwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREksSUFBSSxFQUFFLENBQUM7UUFDSE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDSFIsSUFBSSxFQUFFUyxPQUFPO1FBQ2JGLE9BQU8sRUFBRSxLQUFLO0lBQ2xCLENBQUM7SUFDREcsTUFBTSxFQUFFLENBQUM7UUFDTFYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUEyRjtJQUN4RyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDQUksVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHaEIsNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsQ0FBTSxPQUFFQyxVQUFVO0FBQ3ZFLGlFQUFlZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvdGhpbmcvLi9tb2RlbHMvdXNlck1vZGVsLmpzPzk2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndXNlcidcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJyb290IiwiQm9vbGVhbiIsImF2YXRhciIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwidXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/categories/index.js":
/*!***************************************!*\
  !*** ./pages/api/categories/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/categoriesModel */ \"(api)/./models/categoriesModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ \"(api)/./middleware/auth.js\");\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"POST\":\n            await createCategory(req, res);\n            break;\n        case \"GET\":\n            await getCategories(req, res);\n            break;\n    }\n});\nconst createCategory = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n        if (result.role !== 'admin') return res.status(400).json({\n            err: \"Authentication is not valid.\"\n        });\n        const { name  } = req.body;\n        if (!name) return res.status(400).json({\n            err: \"Name can not be left blank.\"\n        });\n        const newCategory = new _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            name\n        });\n        await newCategory.save();\n        res.json({\n            msg: 'Success! Created a new category.',\n            newCategory\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\nconst getCategories = async (req, res)=>{\n    try {\n        const categories = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        res.json({\n            categories\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBQ1E7QUFDYjtBQUUzQ0EsNERBQVM7QUFFVCxpRUFBTSxPQUFnQkcsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsTUFBTTtRQUNiLElBQUksQ0FBQyxDQUFNO1lBQ1AsS0FBSyxDQUFDQyxjQUFjLENBQUNILEdBQUcsRUFBRUMsR0FBRztZQUM3QixLQUFLO1FBQ1QsSUFBSSxDQUFDLENBQUs7WUFDTixLQUFLLENBQUNHLGFBQWEsQ0FBQ0osR0FBRyxFQUFFQyxHQUFHO1lBQzVCLEtBQUs7O0FBRWpCLENBQUM7QUFFRCxLQUFLLENBQUNFLGNBQWMsVUFBVUgsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUN4QyxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ0ksTUFBTSxHQUFHLEtBQUssQ0FBQ04sNERBQUksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ2xDLEVBQUUsRUFBQ0ksTUFBTSxDQUFDQyxJQUFJLEtBQUssQ0FBTyxRQUMxQixNQUFNLENBQUNMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO1lBQUFBLEdBQUcsRUFBRSxDQUE4QjtRQUFBLENBQUM7UUFFakUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR1YsR0FBRyxDQUFDVyxJQUFJO1FBQ3pCLEVBQUUsR0FBRUQsSUFBSSxFQUFFLE1BQU0sQ0FBQ1QsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsR0FBRyxFQUFFLENBQTZCO1FBQUEsQ0FBQztRQUUxRSxLQUFLLENBQUNHLFdBQVcsR0FBRyxHQUFHLENBQUNkLCtEQUFVLENBQUMsQ0FBQ1k7WUFBQUEsSUFBSTtRQUFBLENBQUM7UUFFekMsS0FBSyxDQUFDRSxXQUFXLENBQUNDLElBQUk7UUFDdEJaLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7WUFDTk0sR0FBRyxFQUFFLENBQWtDO1lBQ3ZDRixXQUFXO1FBQ2YsQ0FBQztJQUVMLENBQUMsQ0FBQyxLQUFLLEVBQUVILEdBQUcsRUFBRSxDQUFDO1FBQ1gsTUFBTSxDQUFDUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztZQUFBQSxHQUFHLEVBQUVBLEdBQUcsQ0FBQ00sT0FBTztRQUFBLENBQUM7SUFDbEQsQ0FBQztBQUNMLENBQUM7QUFFRCxLQUFLLENBQUNYLGFBQWEsVUFBVUosR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUN2QyxHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ2UsVUFBVSxHQUFHLEtBQUssQ0FBQ2xCLG9FQUFlO1FBRXhDRyxHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDUTtZQUFBQSxVQUFVO1FBQUEsQ0FBQztJQUV6QixDQUFDLENBQUMsS0FBSyxFQUFFUCxHQUFHLEVBQUUsQ0FBQztRQUNYLE1BQU0sQ0FBQ1IsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUNNLE9BQU87UUFBQSxDQUFDO0lBQ2xELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvdGhpbmcvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcz8yN2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdERCJ1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3JpZXNNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlQ2F0ZWdvcnkocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgYXdhaXQgZ2V0Q2F0ZWdvcmllcyhyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnkgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuICAgICAgICBpZihyZXN1bHQucm9sZSAhPT0gJ2FkbWluJylcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6IFwiQXV0aGVudGljYXRpb24gaXMgbm90IHZhbGlkLlwifSlcblxuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5XG4gICAgICAgIGlmKCFuYW1lKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJOYW1lIGNhbiBub3QgYmUgbGVmdCBibGFuay5cIn0pXG5cbiAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcmllcyh7bmFtZX0pXG5cbiAgICAgICAgYXdhaXQgbmV3Q2F0ZWdvcnkuc2F2ZSgpXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1zZzogJ1N1Y2Nlc3MhIENyZWF0ZWQgYSBuZXcgY2F0ZWdvcnkuJyxcbiAgICAgICAgICAgIG5ld0NhdGVnb3J5XG4gICAgICAgIH0pXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgQ2F0ZWdvcmllcy5maW5kKClcblxuICAgICAgICByZXMuanNvbih7Y2F0ZWdvcmllc30pXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIkNhdGVnb3JpZXMiLCJhdXRoIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY3JlYXRlQ2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwicmVzdWx0Iiwicm9sZSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJuYW1lIiwiYm9keSIsIm5ld0NhdGVnb3J5Iiwic2F2ZSIsIm1zZyIsIm1lc3NhZ2UiLCJjYXRlZ29yaWVzIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/index.js"));
module.exports = __webpack_exports__;

})();