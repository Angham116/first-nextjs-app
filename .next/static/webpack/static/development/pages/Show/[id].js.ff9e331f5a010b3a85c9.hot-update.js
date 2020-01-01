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



var Show = function Show(props) {
  console.log(6666666666, props);
  return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, router.query.id);
};

Show.getInitialProps = function _callee() {
  var router, id, film, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
          console.log(1111111111); // const { id } = context.query;

          id = router.query.id;
          console.log(22222, router);
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("https://api.tvmaze.com/shows/".concat(id)));

        case 6:
          film = _context.sent;
          data = film.data;
          return _context.abrupt("return", {
            film: data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}; // export default Layout(Show);


/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ })

})
//# sourceMappingURL=[id].js.ff9e331f5a010b3a85c9.hot-update.js.map