require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  css: ['assets/main.css', 'assets/normalize.css'],
  build: {
    vendor: ['axios']
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var express = __webpack_require__(0);
var usersRoutes = __webpack_require__(6);
var router = express.Router();

router.use('/users', usersRoutes);

router.get('/', function (req, res) {
	res.json({
		users: process.env.API_URL + '/users'
	});
});

module.exports = router;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("dotenv");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/');

router.get('/:user', function (req, res) {
	var user = usersModels.users.filter(function (user) {
		return req.params.user === user.username;
	});
	res.json(user);
});

module.exports = router;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__api_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nuxt__);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();





var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api_index___default.a);

// Connect to DB
__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(process.env.DB_URL);

// Import and Set Nuxt.js options
var config = __webpack_require__(1);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_4_nuxt___default.a(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev) {
  nuxt.build().catch(function (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.listen(process.env.PORT, process.env.HOST, function (err) {
  if (err) throw err;
  console.log('\uD83C\uDF0E listening at http://' + process.env.HOST + ':' + process.env.PORT);
});

/***/ }
/******/ ]);
//# sourceMappingURL=main.map