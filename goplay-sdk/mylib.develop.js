(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riversun/simple-date-format"));
	else if(typeof define === 'function' && define.amd)
		define(["@riversun/simple-date-format"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@riversun/simple-date-format")) : factory(root["SimpleDateFormat"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_SDF__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/family.js":
/*!***********************!*\
  !*** ./src/family.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tom; });
/* harmony import */ var SDF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! SDF */ "SDF");
/* harmony import */ var SDF__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(SDF__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// (3-4) library source code


var Tom =
/*#__PURE__*/
function () {
  function Tom() {
    _classCallCheck(this, Tom);
  }

  _createClass(Tom, [{
    key: "sayHello",
    value: function sayHello() {
      var date = new Date();
      var sdf = new SDF__WEBPACK_IMPORTED_MODULE_0___default.a();
      return "Hi, I am Tom. Today is ".concat(sdf.formatWith("yyyy-MM-dd'T'HH:mm:ssXXX", date));
    }
  }]);

  return Tom;
}();



/***/ }),

/***/ "./src/h5Sdk.js":
/*!**********************!*\
  !*** ./src/h5Sdk.js ***!
  \**********************/
/*! exports provided: EVENT_TYPES, H5SDK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5SDK", function() { return H5SDK; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EVENT_TYPES = {
  INIT: 'INIT',
  START: 'START',
  SUBMIT: 'SUBMIT',
  QUIT: 'QUIT'
}; // window.H5SDK = (function() {

var H5SDK =
/*#__PURE__*/
function () {
  function H5SDK() {
    _classCallCheck(this, H5SDK);
  }

  _createClass(H5SDK, [{
    key: "_send",
    value: function _send(data, extraData) {
      console.log('send data: ', data);
      console.log('send extraData: ', extraData);

      try {
        var stringData = JSON.stringify(Object.assign(data, _typeof(extraData) === 'object' && extraData || {}));

        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(stringData);
        }

        if (window.postMessage) {
          window.postMessage(stringData, window.origin);

          if (document.referrer) {
            var origin = new URL(document.referrer).origin;

            if (origin && (/^http[s]?:\/\/(.+\.)?storms\.com(:\d{2,6})?[/]?$/gi.test(origin) || /^http[s]?:\/\/localhost(:\d{2,6})?[/]?$/gi.test(origin))) {
              window.parent.postMessage(stringData, origin);
            }
          }
        }
      } catch (err) {
        console.error('H5SDK._send Error: ', err);
      }
    }
  }, {
    key: "init",
    value: function init(extraData) {
      console.error('init extraData: ', extraData);

      this._send({
        eventName: EVENT_TYPES.INIT
      }, extraData);

      return 'hello djay';
    }
  }, {
    key: "start",
    value: function start(extraData) {
      _send({
        eventName: EVENT_TYPES.START
      }, extraData);
    }
  }, {
    key: "submit",
    value: function submit(extraData) {
      if (extraData.hasOwnProperty('SCORE')) {
        extraData.SCORE = parseInt(extraData.SCORE);
      }

      _send({
        eventName: EVENT_TYPES.SUBMIT
      }, extraData);
    }
  }, {
    key: "quit",
    value: function quit(extraData) {
      _send({
        eventName: EVENT_TYPES.QUIT
      }, extraData);
    }
  }, {
    key: "debug",
    value: function debug() {
      window.addEventListener('message', function (event) {
        console.debug('PostMessage event: ', event);

        if (event.data) {
          console.debug('event.data: ', event.data);
        }
      }, false);
    } // function H5SDK() {}
    // H5SDK.prototype.init = function (extraData) {
    //   _send({ eventName: EVENT_TYPES.INIT }, extraData);
    // }
    // H5SDK.prototype.start = function (extraData) {
    //   _send({ eventName: EVENT_TYPES.START }, extraData);
    // }
    // H5SDK.prototype.submit = function (extraData) {
    //   if(extraData.hasOwnProperty('SCORE')) {
    //     extraData.SCORE = parseInt(extraData.SCORE);
    //   }
    //   _send({ eventName: EVENT_TYPES.SUBMIT }, extraData);
    // }
    // H5SDK.prototype.quit = function (extraData) {
    //   _send({ eventName: EVENT_TYPES.QUIT }, extraData);
    // }
    // H5SDK.prototype.debug = function () {
    //   window.addEventListener('message', function(event) {
    //     console.debug('PostMessage event: ', event);
    //     if (event.data) {
    //       console.debug('event.data: ', event.data);
    //     }
    //   }, false);
    // }
    // return new H5SDK();
    // })();

  }]);

  return H5SDK;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Tom, H5SDK, EVENT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _family__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./family */ "./src/family.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tom", function() { return _family__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _h5Sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h5Sdk */ "./src/h5Sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H5SDK", function() { return _h5Sdk__WEBPACK_IMPORTED_MODULE_1__["H5SDK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return _h5Sdk__WEBPACK_IMPORTED_MODULE_1__["EVENT_TYPES"]; });



 // export default Tom;

 // export { Tom, H5SDK, EVENT_TYPES };

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "SDF":
/*!**********************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@riversun/simple-date-format","commonjs2":"@riversun/simple-date-format","amd":"@riversun/simple-date-format","root":"SimpleDateFormat"} ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_SDF__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvZmFtaWx5LmpzIiwid2VicGFjazovLy8uL3NyYy9oNVNkay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJAcml2ZXJzdW4vc2ltcGxlLWRhdGUtZm9ybWF0XCIsXCJjb21tb25qczJcIjpcIkByaXZlcnN1bi9zaW1wbGUtZGF0ZS1mb3JtYXRcIixcImFtZFwiOlwiQHJpdmVyc3VuL3NpbXBsZS1kYXRlLWZvcm1hdFwiLFwicm9vdFwiOlwiU2ltcGxlRGF0ZUZvcm1hdFwifSJdLCJuYW1lcyI6WyJUb20iLCJkYXRlIiwiRGF0ZSIsInNkZiIsIlNpbXBsZURhdGVGb3JtYXQiLCJmb3JtYXRXaXRoIiwiRVZFTlRfVFlQRVMiLCJJTklUIiwiU1RBUlQiLCJTVUJNSVQiLCJRVUlUIiwiSDVTREsiLCJkYXRhIiwiZXh0cmFEYXRhIiwiY29uc29sZSIsImxvZyIsInN0cmluZ0RhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiT2JqZWN0IiwiYXNzaWduIiwid2luZG93IiwiUmVhY3ROYXRpdmVXZWJWaWV3IiwicG9zdE1lc3NhZ2UiLCJvcmlnaW4iLCJkb2N1bWVudCIsInJlZmVycmVyIiwiVVJMIiwidGVzdCIsInBhcmVudCIsImVyciIsImVycm9yIiwiX3NlbmQiLCJldmVudE5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsIlNDT1JFIiwicGFyc2VJbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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aWIuZGV2ZWxvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkByaXZlcnN1bi9zaW1wbGUtZGF0ZS1mb3JtYXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHJpdmVyc3VuL3NpbXBsZS1kYXRlLWZvcm1hdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQHJpdmVyc3VuL3NpbXBsZS1kYXRlLWZvcm1hdFwiKSkgOiBmYWN0b3J5KHJvb3RbXCJTaW1wbGVEYXRlRm9ybWF0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfU0RGX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyAoMy00KSBsaWJyYXJ5IHNvdXJjZSBjb2RlXG5pbXBvcnQgU2ltcGxlRGF0ZUZvcm1hdCBmcm9tIFwiU0RGXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvbSB7XG4gICAgc2F5SGVsbG8oKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBzZGYgPSBuZXcgU2ltcGxlRGF0ZUZvcm1hdCgpO1xuICAgICAgICByZXR1cm4gYEhpLCBJIGFtIFRvbS4gVG9kYXkgaXMgJHtzZGYuZm9ybWF0V2l0aChcInl5eXktTU0tZGQnVCdISDptbTpzc1hYWFwiLCBkYXRlKX1gO1xuICAgIH1cbn0iLCJjb25zdCBFVkVOVF9UWVBFUyA9IHtcbiAgSU5JVDogJ0lOSVQnLFxuICBTVEFSVDogJ1NUQVJUJyxcbiAgU1VCTUlUOiAnU1VCTUlUJyxcbiAgUVVJVDogJ1FVSVQnXG59O1xuXG4vLyB3aW5kb3cuSDVTREsgPSAoZnVuY3Rpb24oKSB7XG5jbGFzcyBINVNESyB7XG5cbiAgX3NlbmQoZGF0YSwgZXh0cmFEYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ3NlbmQgZGF0YTogJywgZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ3NlbmQgZXh0cmFEYXRhOiAnLCBleHRyYURhdGEpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdHJpbmdEYXRhID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICB0eXBlb2YgZXh0cmFEYXRhID09PSAnb2JqZWN0JyAmJiBleHRyYURhdGEgfHwge31cbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgaWYgKHdpbmRvdy5SZWFjdE5hdGl2ZVdlYlZpZXcpIHtcbiAgICAgICAgd2luZG93LlJlYWN0TmF0aXZlV2ViVmlldy5wb3N0TWVzc2FnZShzdHJpbmdEYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5wb3N0TWVzc2FnZSkge1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoc3RyaW5nRGF0YSwgd2luZG93Lm9yaWdpbik7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luID0gKG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpKS5vcmlnaW47XG5cbiAgICAgICAgICBpZiAob3JpZ2luICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIC9eaHR0cFtzXT86XFwvXFwvKC4rXFwuKT9zdG9ybXNcXC5jb20oOlxcZHsyLDZ9KT9bL10/JC9naS50ZXN0KG9yaWdpbikgfHxcbiAgICAgICAgICAgICAgL15odHRwW3NdPzpcXC9cXC9sb2NhbGhvc3QoOlxcZHsyLDZ9KT9bL10/JC9naS50ZXN0KG9yaWdpbilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoc3RyaW5nRGF0YSwgb3JpZ2luKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignSDVTREsuX3NlbmQgRXJyb3I6ICcsIGVycik7XG4gICAgfVxuICB9XG5cbiAgaW5pdCAoZXh0cmFEYXRhKXtcbiAgICBjb25zb2xlLmVycm9yKCdpbml0IGV4dHJhRGF0YTogJywgZXh0cmFEYXRhKTtcbiAgICB0aGlzLl9zZW5kKHsgZXZlbnROYW1lOiBFVkVOVF9UWVBFUy5JTklUIH0sIGV4dHJhRGF0YSk7XG4gICAgcmV0dXJuICdoZWxsbyBkamF5JztcbiAgfVxuXG4gIHN0YXJ0IChleHRyYURhdGEpIHtcbiAgICBfc2VuZCh7IGV2ZW50TmFtZTogRVZFTlRfVFlQRVMuU1RBUlQgfSwgZXh0cmFEYXRhKTtcbiAgfVxuXG4gIHN1Ym1pdCAoZXh0cmFEYXRhKSB7XG4gICAgaWYoZXh0cmFEYXRhLmhhc093blByb3BlcnR5KCdTQ09SRScpKSB7XG4gICAgICBleHRyYURhdGEuU0NPUkUgPSBwYXJzZUludChleHRyYURhdGEuU0NPUkUpO1xuICAgIH1cbiAgICBfc2VuZCh7IGV2ZW50TmFtZTogRVZFTlRfVFlQRVMuU1VCTUlUIH0sIGV4dHJhRGF0YSk7XG4gIH1cblxuICBxdWl0IChleHRyYURhdGEpIHtcbiAgICBfc2VuZCh7IGV2ZW50TmFtZTogRVZFTlRfVFlQRVMuUVVJVCB9LCBleHRyYURhdGEpO1xuICB9XG5cbiAgZGVidWcgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1Bvc3RNZXNzYWdlIGV2ZW50OiAnLCBldmVudCk7XG5cbiAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2V2ZW50LmRhdGE6ICcsIGV2ZW50LmRhdGEpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIEg1U0RLKCkge31cblxuICAvLyBINVNESy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChleHRyYURhdGEpIHtcbiAgLy8gICBfc2VuZCh7IGV2ZW50TmFtZTogRVZFTlRfVFlQRVMuSU5JVCB9LCBleHRyYURhdGEpO1xuICAvLyB9XG5cbiAgLy8gSDVTREsucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGV4dHJhRGF0YSkge1xuICAvLyAgIF9zZW5kKHsgZXZlbnROYW1lOiBFVkVOVF9UWVBFUy5TVEFSVCB9LCBleHRyYURhdGEpO1xuICAvLyB9XG5cbiAgLy8gSDVTREsucHJvdG90eXBlLnN1Ym1pdCA9IGZ1bmN0aW9uIChleHRyYURhdGEpIHtcbiAgLy8gICBpZihleHRyYURhdGEuaGFzT3duUHJvcGVydHkoJ1NDT1JFJykpIHtcbiAgLy8gICAgIGV4dHJhRGF0YS5TQ09SRSA9IHBhcnNlSW50KGV4dHJhRGF0YS5TQ09SRSk7XG4gIC8vICAgfVxuICAvLyAgIF9zZW5kKHsgZXZlbnROYW1lOiBFVkVOVF9UWVBFUy5TVUJNSVQgfSwgZXh0cmFEYXRhKTtcbiAgLy8gfVxuXG4gIC8vIEg1U0RLLnByb3RvdHlwZS5xdWl0ID0gZnVuY3Rpb24gKGV4dHJhRGF0YSkge1xuICAvLyAgIF9zZW5kKHsgZXZlbnROYW1lOiBFVkVOVF9UWVBFUy5RVUlUIH0sIGV4dHJhRGF0YSk7XG4gIC8vIH1cblxuICAvLyBINVNESy5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAvLyAgICAgY29uc29sZS5kZWJ1ZygnUG9zdE1lc3NhZ2UgZXZlbnQ6ICcsIGV2ZW50KTtcblxuICAvLyAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgLy8gICAgICAgY29uc29sZS5kZWJ1ZygnZXZlbnQuZGF0YTogJywgZXZlbnQuZGF0YSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSwgZmFsc2UpO1xuICAvLyB9XG5cbiAgLy8gcmV0dXJuIG5ldyBINVNESygpO1xuLy8gfSkoKTtcblxufVxuXG5leHBvcnQge1xuICBFVkVOVF9UWVBFUyxcbiAgSDVTREtcbn07IiwiaW1wb3J0IFRvbSBmcm9tICcuL2ZhbWlseSc7XG5cbmltcG9ydCB7IEg1U0RLLCBFVkVOVF9UWVBFU30gZnJvbSAnLi9oNVNkayc7XG5cbmV4cG9ydCB7IFRvbSB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgVG9tO1xuXG5leHBvcnQgeyBINVNESywgRVZFTlRfVFlQRVMgfTtcblxuLy8gZXhwb3J0IHsgVG9tLCBINVNESywgRVZFTlRfVFlQRVMgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfU0RGX187Il0sInNvdXJjZVJvb3QiOiIifQ==