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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("dotenv");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bcrypt__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var userSchema = new __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema({
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

var userModel = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('User', userSchema);

// hash the password if it is ever saved to the DB.
userSchema.pre('save', function () {
	var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(callback) {
		var hash;
		return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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

/* harmony default export */ exports["a"] = userModel;

// module.exports = {
// 	users: [
// 		{
// 			username: 'rlindskog',
// 			email: 'r.lindskog17@gmail.com',
// 			admin: true,
// 			verified: true,
// 			href: `${process.env.API_URL}/api/rlindskog`
// 		},
// 		{
// 			username: 'john',
// 			email: 'john@gmail.com',
// 			admin: false,
// 			verified: false,
// 			href: `${process.env.API_URL}/api/john`
// 		},
// 		{
// 			username: 'jaccob',
// 			email: 'jaccob@gmail.com',
// 			admin: false,
// 			verified: true,
// 			href: `${process.env.API_URL}/api/jaccob`
// 		},
// 	]
// }

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("bcrypt");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(3).config();

module.exports = {
	head: {
		link: [{ href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', rel: 'stylesheet' },
		// <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet" type="text/css">
		{ href: 'https://unpkg.com/vuetify/dist/vuetify.min.css', rel: 'stylesheet' }],
		script: [{ src: 'https://unpkg.com/vuetify/dist/vuetify.min.js' }]
	},
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
		API_URL: 'http://127.0.0.1:3000'
	},
	vue: {
		middleware: 'vuetify'
	}
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_routes__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_routes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routes__ = __webpack_require__(22);




var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use('/admin', __WEBPACK_IMPORTED_MODULE_3__admin_routes__["a" /* default */]);
router.use('/users', __WEBPACK_IMPORTED_MODULE_1__users_routes__["a" /* default */]);
router.use('/articles', __WEBPACK_IMPORTED_MODULE_2__articles_routes__["a" /* default */]);
router.use('/admin', __WEBPACK_IMPORTED_MODULE_3__admin_routes__["a" /* default */]);

router.get('/', function (req, res) {
	res.json({
		users: process.env.API_URL + '/api/users'
	});
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("cors");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return articles; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return articleId; });


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var articles = {
	get: function () {
		var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
			var _articles;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].find({});

						case 3:
							_articles = _context.sent;

							res.json(_articles);
							_context.next = 11;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context['catch'](0);

							console.log(_context.t0);
							res.status(500).json({ message: 'Internal server error.' });

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
		var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
			var _req$body, author, pub_date, publication, title, url, mixed, newArticle, article;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_req$body = req.body, author = _req$body.author, pub_date = _req$body.pub_date, publication = _req$body.publication, title = _req$body.title, url = _req$body.url, mixed = _req$body.mixed;
							newArticle = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */]({
								author: author,
								pub_date: pub_date,
								publication: publication,
								title: title,
								url: url,
								mixed: mixed
							});
							_context2.next = 5;
							return newArticle.save();

						case 5:
							article = _context2.sent;

							res.json(article);
							_context2.next = 14;
							break;

						case 9:
							_context2.prev = 9;
							_context2.t0 = _context2['catch'](0);

							console.log(_context2.t0);
							if (_context2.t0.code === 11000) {
								res.status(202).json({ message: 'Already exists' });
							}
							res.status(500).json({ message: 'Internal server error.' });

						case 14:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 9]]);
		}));

		function post(_x3, _x4) {
			return _ref2.apply(this, arguments);
		}

		return post;
	}()
};

var articleId = {
	get: function () {
		var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
			var _id, article;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_id = req.params._id;

							console.log(req.params);
							_context3.next = 5;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].find({ _id: _id });

						case 5:
							article = _context3.sent;

							res.json(article);
							_context3.next = 13;
							break;

						case 9:
							_context3.prev = 9;
							_context3.t0 = _context3['catch'](0);

							console.log(_context3.t0);
							res.status(500).json({ error: 'Internal Server Error.' });

						case 13:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 9]]);
		}));

		function get(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return get;
	}(),
	post: function () {
		var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
			var _req$body2, author, pub_date, publication, title, url, mixed, _id, article;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_req$body2 = req.body, author = _req$body2.author, pub_date = _req$body2.pub_date, publication = _req$body2.publication, title = _req$body2.title, url = _req$body2.url, mixed = _req$body2.mixed, _id = _req$body2._id;
							// let payload = Object.keys(req.body).reduce((acc, item) => {	
							// }, {})

							_context4.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findOneAndUpdate({ _id: _id }, {
								author: author,
								pub_date: pub_date,
								publication: publication,
								title: title,
								url: url,
								mixed: mixed
							});

						case 4:
							article = _context4.sent;

							res.status(200).json(article);
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
	delete: function () {
		var _ref5 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
			var _id, article;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_id = req.params._id;
							_context5.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findByIdAndRemove({ _id: _id });

						case 4:
							article = _context5.sent;

							res.json({ article: article, message: 'Successfully deleted.' });
							_context5.next = 12;
							break;

						case 8:
							_context5.prev = 8;
							_context5.t0 = _context5['catch'](0);

							console.log(_context5.t0);
							res.status(500).json({ error: 'Internal Server Error.' });

						case 12:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this, [[0, 8]]);
		}));

		function _delete(_x9, _x10) {
			return _ref5.apply(this, arguments);
		}

		return _delete;
	}()
};

// {
// 	 'author': u'David Remnick',
//   'pub_date': u'2017-03-19T02:53:06Z',
//   'publication': u'The New Yorker',
//   'title': u'Remembering Chuck Berry, Who Died at Ninety',
//   'url': u'http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss'
// }


// router.get('/', articles.get)
// router.post('/', articles.post)

// router.get('/:articleId', articleId.get)
// router.post('/:articleId', articleId.post)
// router.delete('/:articleId', articleId.delete)

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var articleSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
	author: {
		type: [String],
		require: true
	},
	title: {
		type: String,
		require: true
	},
	publication: {
		type: String,
		required: true
	},
	url: {
		type: String,
		require: true,
		unique: true
	},
	body: {
		type: String,
		require: true
	},
	pub_date: {
		type: String
	},
	misc: {
		type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.Mixed
	}
});

var articleModel = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Article', articleSchema);

/* harmony default export */ exports["a"] = articleModel;

// {
// 	"author": "David Remnick",
//   "pub_date": "2017-03-19T02:53:06Z",
//   "publication": "The New Yorker",
//   "title": "Remembering Chuck Berry, Who Died at Ninety",
//   "url": "http://www.newyorker.com/culture/culture-desk/remembering-chuck-berry-who-died-at-ninety?mbid=rss",
//   "mixed": "{ \"dog\": \"Sayllu\" }" 
// }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(13);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* articles */].get);
router.post('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* articles */].post);

router.get('/:_id', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* articleId */].get);
router.post('/:_id', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* articleId */].post);
router.delete('/:_id', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* articleId */].delete);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcrypt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_filtersensative__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return username; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return signIn; });
/* unused harmony export singOut */


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var users = {
	get: function () {
		var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
			var _users;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
		var _ref2 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(req, res) {
			var _req$body, _username, email, password, hash, newUser, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_req$body = req.body, _username = _req$body.username, email = _req$body.email, password = _req$body.password;
							_context2.next = 4;
							return __WEBPACK_IMPORTED_MODULE_3_bcrypt___default.a.hash(password, 10);

						case 4:
							hash = _context2.sent;
							newUser = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */]({ username: _username, email: email, password: hash });
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
		var _ref3 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
			var _username2, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							_username2 = req.params.username;

							console.log(_username2);
							_context3.next = 5;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].find({ username: _username2 });

						case 5:
							user = _context3.sent;

							res.json(user);
							_context3.next = 13;
							break;

						case 9:
							_context3.prev = 9;
							_context3.t0 = _context3['catch'](0);

							console.log(_context3.t0);
							res.status(500).json({ error: 'Error 500. Internal server error' });

						case 13:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[0, 9]]);
		}));

		function get(_x5, _x6) {
			return _ref3.apply(this, arguments);
		}

		return get;
	}(),
	post: function () {
		var _ref4 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(req, res) {
			var _req$body2, _username3, email, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							_req$body2 = req.body, _username3 = _req$body2.username, email = _req$body2.email;
							_context4.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findOneAndUpdate({ username: _username3 }, { username: _username3, email: email });

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
		var _ref5 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
			var _req$body3, _username4, email, user;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_req$body3 = req.body, _username4 = _req$body3.username, email = _req$body3.email;
							_context5.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findOneAndUpdate({ username: _username4 }, { username: _username4, email: email });

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
		var _ref6 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
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
		var _ref7 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(req, res) {
			var _req$body4, _username5, password, user, hashedPassword, matched, token;

			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.prev = 0;
							_req$body4 = req.body, _username5 = _req$body4.username, password = _req$body4.password;
							_context7.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__models__["a" /* default */].findOne({ username: _username5 });

						case 4:
							user = _context7.sent;
							hashedPassword = user.password;
							_context7.next = 8;
							return __WEBPACK_IMPORTED_MODULE_3_bcrypt___default.a.compare(password, hashedPassword);

						case 8:
							matched = _context7.sent;

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
								token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign(user, process.env.SECRET, {
									expiresIn: 60 * 60 * 24 * 30 // 30 days 
								});

								res.status(200).json({
									message: 'Enjoy your token!',
									token: token,
									user: user
								});
							}
							_context7.next = 16;
							break;

						case 12:
							_context7.prev = 12;
							_context7.t0 = _context7['catch'](0);

							console.log(_context7.t0);
							res.status(500).json({
								error: 'Internal Server Error.'
							});

						case 16:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, this, [[0, 12]]);
		}));

		function post(_x13, _x14) {
			return _ref7.apply(this, arguments);
		}

		return post;
	}()
};

var singOut = {
	post: function () {
		var _ref8 = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(req, res) {
			return __WEBPACK_IMPORTED_MODULE_0__Users_Puroof_Github_sift_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
						case 'end':
							return _context8.stop();
					}
				}
			}, _callee8, this);
		}));

		function post(_x15, _x16) {
			return _ref8.apply(this, arguments);
		}

		return post;
	}()
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__middleware_authenticate__ = __webpack_require__(18);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.get('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* users */].get);
router.post('/', __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* users */].post);

router.post('/signin', __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* signIn */].post);
// router.get('/signin', signIn.post)

router.get('/:username', __WEBPACK_IMPORTED_MODULE_2__middleware_authenticate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* username */].get);
router.post('/:username', __WEBPACK_IMPORTED_MODULE_2__middleware_authenticate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* username */].post);
router.put('/:username', __WEBPACK_IMPORTED_MODULE_2__middleware_authenticate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* username */].put);
router.delete('/:username', __WEBPACK_IMPORTED_MODULE_2__middleware_authenticate__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* username */].delete);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var jwt = __webpack_require__(6);

var authenticate = function authenticate(req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
	if (token) {
		jwt.verify(token, process.env.SECRET, function (error, decoded) {
			if (error) {
				return res.status(400).json({
					message: 'Failed to authenticate token.'
				});
			} else {
				req.user = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({
			message: 'No token provided.'
		});
	}
};

/* harmony default export */ exports["a"] = authenticate;

/***/ },
/* 19 */
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

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nuxt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_nuxt__);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();







var app = __WEBPACK_IMPORTED_MODULE_4_express___default()();

// app.use(cors({
// 	origin: process.env.URL
// }))
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());

app.use('/api', __WEBPACK_IMPORTED_MODULE_5__api_index__["a" /* default */]);

// Connect to DB
__WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.Promise = global.Promise;
__WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connect(process.env.DB_URL);

// Import and Set Nuxt.js options
var config = __webpack_require__(7);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_7_nuxt___default.a(config);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_child_process__);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.post('/author', function (req, res) {
	var author = req.body.author;

	console.log(req.body);
	var process = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_child_process__["spawn"])('python', ['./puller/APIPullers.py', author]);
	var dataString = '';
	process.stdout.on('data', function (data) {
		dataString += data.toString();
	});
	process.stdout.on('end', function (data) {
		console.log(dataString);
		res.json(dataString);
	});
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("child_process");

/***/ }
/******/ ]);
//# sourceMappingURL=main.map