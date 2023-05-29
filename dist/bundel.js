/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/view/main.js":
/*!*********************************!*\
  !*** ./src/script/view/main.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main() {\r\n  const baseUrl = 'https://api.themoviedb.org/3';\r\n  const apiKey = '8ebb35a6a7f1f65d1d06f57e750f0704';\r\n\r\n  const getTrending = () => {\r\n    fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)\r\n      .then(response => {return response.json()})\r\n      .then(data => {\r\n        if (data.error) {\r\n            showMessage(data.message);\r\n        } else {\r\n            renderAll(data.results);\r\n        }\r\n      })\r\n      .catch(error => showMessage(error));\r\n  };    \r\n\r\n  const renderAll = (movies) => {\r\n    const imageUrl = 'https://image.tmdb.org/t/p/w500';\r\n    const movieList = document.querySelector('#movie-list');\r\n    movieList.innerHTML = '';\r\n\r\n    movies.forEach(movie => {\r\n      movieList.innerHTML += `\r\n      <section class=\"card\">\r\n        <img src='${imageUrl}${movie.backdrop_path}' alt=\"poster\" class=\"poster\">\r\n        <div class=\"content\">\r\n          <div class=\"rating\">\r\n            <img src=\"src\\images\\star.svg\" alt=\"star\" class=\"star\">\r\n            <p class=\"font-small\">${movie.vote_average}</p>\r\n          </div>\r\n          <p class=\"font-small\">${movie.title}</p>\r\n        </div>\r\n      </section>\r\n      `\r\n    });\r\n  };\r\n\r\n  const showMessage = (message = 'Oops something wrong! Try to check your internet connection') => {\r\n    alert(message);\r\n  };\r\n\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    getTrending();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://filmovies/./src/script/view/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/view/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;