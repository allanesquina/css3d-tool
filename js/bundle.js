/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function (win, doc) {\n\n  'use strict';\n\n  var $tab = doc.getElementById('tabs');\n  var $code = doc.getElementById('code');\n  var INTERVAL;\n\n  var props = {\n    rx: 5,\n    ry: 340,\n    rz: 0,\n    tz: 0,\n    tx: 0,\n    ty: 0,\n    sx: 1.30,\n    sy: 1.30,\n    perspective: 0\n  };\n\n  function init() {\n    bindEvent();\n    applyStyles();\n  }\n\n  function bindEvent() {\n    var els = doc.querySelectorAll('.ctrls');\n    els.forEach(function (el) {\n      el.addEventListener('input', change, false);\n    });\n  }\n\n  function change(e) {\n    e.preventDefault();\n\n    var el = e.target;\n    var type = el.getAttribute('data-type');\n    var rule = el.getAttribute('data-rule');\n    var n = el.value;\n\n    if (rule) {\n      n = new Function('return ' + rule).call(el, []);\n    }\n\n    props[type] = n;\n\n    applyStyles();\n  };\n\n  function applyStyles() {\n    clearInterval(INTERVAL);\n    INTERVAL = setTimeout(function () {\n      var str = '\\n        transform: \\n          perspective(' + props.perspective + 'px) \\n          rotateX(' + props.rx + 'deg) \\n          rotateY(' + props.ry + 'deg) \\n          rotateZ(' + props.rz + 'deg)\\n          translateZ(' + props.tz + 'px)\\n          translateX(' + props.tx + 'px)\\n          translateY(' + props.ty + 'px)\\n          scaleX(' + props.sx + ')\\n          scaleY(' + props.sy + ')\\n        ';\n      $code.innerHTML = str;\n      $tab.setAttribute('style', str);\n    }, 10);\n  };\n\n  init();\n})(window, document);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });