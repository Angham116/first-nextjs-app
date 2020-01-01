webpackHotUpdate("static/development/pages/Show/[id].js",{

/***/ "./pages/Show/[id].js":
/*!****************************!*\
  !*** ./pages/Show/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HOC */ "./pages/components/HOC/index.js");

var _jsxFileName = "/home/angham/Desktop/first-nextjs-app/pages/Show/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

var Show = function Show(props) {
  console.log(6666666666, props);
  return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, router.query.id);
};

Show.getInitialProps = function _callee() {
  var data, shows;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(333333333); // const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
          // const shows = response.json();
          // console.log(11111, response);

          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('https://api.tvmaze.com/search/shows?q=batman'));

        case 3:
          data = _context.sent;
          shows = data.data; // console.log(8888, data.data)
          // return {
          //   shows: shows.map(film => film.show)
          // }

          return _context.abrupt("return", {
            shows: shows.map(function (film) {
              return film.show;
            })
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_HOC__WEBPACK_IMPORTED_MODULE_3__["default"])(Show));

/***/ })

})
//# sourceMappingURL=[id].js.6cfbfb0e00de61db0bd4.hot-update.js.map