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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("dotenv");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcrypt__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var usersSchema = new __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	email: {
		type: String,
		unique: true,
		require: true
	},
	password: {
		type: String,
		unique: true,
		require: true
	}
}, {
	timestamps: true
});

var usersModel = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User', usersSchema);

// hash the password if it is ever saved to the DB.
usersSchema.pre('save', function () {
	var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(callback) {
		var hash;
		return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						if (this.isModified('password')) {
							_context.next = 2;
							break;
						}

						return _context.abrupt('return', callback());

					case 2:
						_context.next = 4;
						return __WEBPACK_IMPORTED_MODULE_2_bcrypt___default.a.hash(this.password, 10);

					case 4:
						hash = _context.sent;

						this.password = hash;
						callback();

					case 7:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}());

/* harmony default export */ exports["a"] = usersModel;

// module.exports = {
// 	users: [
// 		{
// 			username: 'rlindskog',
// 			email: 'r.lindskog17@gmail.com',
// 			admin: true,
// 			verified: true,
// 			href: `${process.env.API_URL}/rlindskog`
// 		},
// 		{
// 			username: 'john',
// 			email: 'john@gmail.com',
// 			admin: false,
// 			verified: false,
// 			href: `${process.env.API_URL}/john`
// 		},
// 		{
// 			username: 'jaccob',
// 			email: 'jaccob@gmail.com',
// 			admin: false,
// 			verified: true,
// 			href: `${process.env.API_URL}/jaccob`
// 		},
// 	]
// }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("bcrypt");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(1).config();

module.exports = {
  css: ['assets/main.css', 'assets/normalize.css'],
  build: {
    vendor: ['axios']
  },
  env: {
    HOST: '127.0.0.1',
    PORT: 3000,
    URL: 'http://127.0.0.1:3000',

    API_HOST: '127.0.0.1',
    API_PORT: 3000,
    API_URL: 'http://127.0.0.1:3000/api'
  }
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_routes__ = __webpack_require__(11);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use('/users', __WEBPACK_IMPORTED_MODULE_1__users_routes__["a" /* default */]);

router.get('/', function (req, res) {
	res.json({
		users: process.env.API_URL + '/users'
	});
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcrypt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_filtersensative__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return username; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return signIn; });


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var users = {
	get: function () {
		var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
			var _users;

			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].find({});

						case 3:
							_users = _context.sent;

							res.json(_users);
							_context.next = 11;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);
							res.status(500).json({ error: 'Error 500. Internal server error' });

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 7]]);
		}));

		function get(_x, _x2) {
			return _ref.apply(this, arguments);
		}

		return get;
	}(),
	post: function () {
		var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
			var hash, newUser, user;
			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;


							console.log(req.body);
							_context2.next = 4;
							return __WEBPACK_IMPORTED_MODULE_3_bcrypt___default.a.hash(password, 10);

						case 4:
							hash = _context2.sent;
							newUser = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */]({ username: username, email: email, password: hash });
							_context2.next = 8;
							return newUser.save();

						case 8:
							user = _context2.sent;

							res.json(user);
							_context2.next = 16;
							break;

						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);
							res.status(500).json({ error: 'Error 500. Internal server error' });

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 12]]);
		}));

		function post(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return post;
	}()
};

var username = {
	get: function () {
		var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
			var _username, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_username = req.body.username;
							_context3.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].find({ username: _username });

						case 4:
							user = _context3.sent;

							res.json(user);
							_context3.next = 12;
							break;

						case 8:
							_context3.prev = 8;
							_context3.t0 = _context3['catch'](0);

							console.log(_context3.t0);
							res.status(500).json({ error: 'Error 500. Internal server error' });

						case 12:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 8]]);
		}));

		function get(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return get;
	}(),
	post: function () {
		var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
			var _req$body, _username2, _email, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_req$body = req.body, _username2 = _req$body.username, _email = _req$body.email;
							_context4.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findOneAndUpdate({ username: _username2 }, { username: _username2, email: _email });

						case 4:
							user = _context4.sent;

							res.status(200).json(user);
							_context4.next = 12;
							break;

						case 8:
							_context4.prev = 8;
							_context4.t0 = _context4['catch'](0);

							console.log(_context4.t0);
							res.status(500).json({ error: 'Error 500. Internal server error' });

						case 12:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[0, 8]]);
		}));

		function post(_x7, _x8) {
			return _ref4.apply(this, arguments);
		}

		return post;
	}(),
	put: function () {
		var _ref5 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
			var _req$body2, _username3, _email2, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_req$body2 = req.body, _username3 = _req$body2.username, _email2 = _req$body2.email;
							_context5.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findOneAndUpdate({ username: _username3 }, { username: _username3, email: _email2 });

						case 4:
							user = _context5.sent;

							res.status(201).json(user);
							_context5.next = 12;
							break;

						case 8:
							_context5.prev = 8;
							_context5.t0 = _context5['catch'](0);

							console.log(_context5.t0);
							res.status(500).json({ error: 'Error 500. Internal server error' });

						case 12:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this, [[0, 8]]);
		}));

		function put(_x9, _x10) {
			return _ref5.apply(this, arguments);
		}

		return put;
	}(),
	delete: function () {
		var _ref6 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, this);
		}));

		function _delete(_x11, _x12) {
			return _ref6.apply(this, arguments);
		}

		return _delete;
	}()
};

var signIn = {
	post: function () {
		var _ref7 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
			var _req$body3, username, password;

			return __WEBPACK_IMPORTED_MODULE_0__Users_rlindskog_Programming_nuxt_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_req$body3 = req.body, username = _req$body3.username, password = _req$body3.password;

							User.findOne({ username: username }).then(function (user) {
								// console.log(user)
								var hashedPassword = user.password;
								__WEBPACK_IMPORTED_MODULE_3_bcrypt___default.a.compare(password, hashedPassword).then(function (matched) {
									if (!user) {
										res.status(404).json({
											message: 'Authentication failed, can\'t find user'
										});
									} else if (!matched) {
										res.status(404).json({
											message: 'Authntication failed. Wrong password'
										});
									} else {
										user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_filtersensative__["a" /* filterSensative */])(user);
										var token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign(user, process.env.SECRET, {
											expiresIn: 60 * 60 * 24 * 30 // 30 days 
										});
										res.status(200).json({
											message: 'Enjoy your token!',
											token: token,
											user: user
										});
									}
								}).catch(function (error) {
									console.log(error);
									res.status(500).json({
										error: error
									});
								});
							});

						case 2:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, this);
		}));

		function post(_x13, _x14) {
			return _ref7.apply(this, arguments);
		}

		return post;
	}()
};

// export singOut = {
// 	async post(req, res) {

// 	}
// }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers__ = __webpack_require__(10);




var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/', __WEBPACK_IMPORTED_MODULE_2__controllers__["a" /* users */].get);
router.post('/', __WEBPACK_IMPORTED_MODULE_2__controllers__["a" /* users */].post);

router.get('/:user', __WEBPACK_IMPORTED_MODULE_2__controllers__["b" /* username */].get);
router.post('/:user', __WEBPACK_IMPORTED_MODULE_2__controllers__["b" /* username */].post);
router.put('/:user', __WEBPACK_IMPORTED_MODULE_2__controllers__["b" /* username */].put);
router.delete('/:user', __WEBPACK_IMPORTED_MODULE_2__controllers__["b" /* username */].delete);

router.post('/signin', __WEBPACK_IMPORTED_MODULE_2__controllers__["c" /* signIn */].post);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nuxt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nuxt__);


__WEBPACK_IMPORTED_MODULE_1_dotenv___default.a.config();





var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());

app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api_index__["a" /* default */]);

// Connect to DB
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(process.env.DB_URL);

// Import and Set Nuxt.js options
var config = __webpack_require__(6);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_5_nuxt___default.a(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev) {
  nuxt.build().catch(function (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.listen(process.env.API_PORT, process.env.API_HOST, function (err) {
  if (err) throw err;
  console.log('\uD83C\uDF0E API listening at http://' + process.env.API_HOST + ':' + process.env.API_PORT);
});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = filterSensative;
function filterSensative(user) {
	var newUser = Object.keys(user.toObject()).reduce(function (acc, item) {
		if (item !== 'password' && item !== 'createdAt' && item !== 'updatedAt') {
			acc[item] = user[item];
		}
		return acc;
	}, {});
	return newUser;
}

/***/ }
/******/ ]);
//# sourceMappingURL=main.map