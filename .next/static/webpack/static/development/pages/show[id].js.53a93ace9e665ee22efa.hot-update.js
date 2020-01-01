webpackHotUpdate("static/development/pages/show[id].js",{

/***/ "./pages/show[id].js":
/*!***************************!*\
  !*** ./pages/show[id].js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HOC */ "./pages/components/HOC/index.js");

var _jsxFileName = "/home/angham/Desktop/first-nextjs-app/pages/show[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { useRouter } from 'next/router';
// import axios from 'axios';
 // const router = useRouter();

var Show = function Show(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, console.log(55555, props));
};

Show.getInitialProps = function _callee(context) {
  var id, film, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(1111111111); // const { id } = context.query;

          id = context.query.id; // console.log(22222, router)

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get("https://api.tvmaze.com/shows/".concat(id)));

        case 4:
          film = _context.sent;
          data = film.data;
          return _context.abrupt("return", {
            film: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}; // export default Layout(Show);


/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ })

})
//# sourceMappingURL=show[id].js.53a93ace9e665ee22efa.hot-update.js.map