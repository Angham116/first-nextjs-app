webpackHotUpdate("static/development/pages/patmanShows.js",{

/***/ "./pages/patmanShows.js":
/*!******************************!*\
  !*** ./pages/patmanShows.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/angham/Desktop/first-nextjs-app/pages/patmanShows.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var pageTitleStyle = {
  color: 'green'
};
var filmTitleStyle = {
  color: 'red'
};
var filmStyle = {
  margin: '0 auto',
  textAlign: 'center'
};

var BatmanShows = function BatmanShows(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    style: pageTitleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Batman Shows"), props.shows.map(function (show) {
    // {console.log(777, show)}
    return __jsx("div", {
      key: show.id,
      style: filmStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h3", {
      style: filmTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, show.name), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      src: show.image.medium,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Language: ", show.language)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("p", {
      style: {
        textAlign: 'left',
        color: 'rgba(51, 51, 51, 0.8)',
        fontSize: 15,
        padding: '1rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "About the show: ", show.summary.replace(/<[/]?[pb]>/g, ''))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, " Link: "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/show[id]",
      as: "/Show/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, show.name))));
  }));
};

BatmanShows.getInitialProps = function _callee() {
  var data, shows;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.tvmaze.com/search/shows?q=batman'));

        case 2:
          data = _context.sent;
          shows = data.data;
          return _context.abrupt("return", {
            shows: shows.map(function (film) {
              return film.show;
            })
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}; // export default Layout(BatmanShows);


/* harmony default export */ __webpack_exports__["default"] = (BatmanShows);

/***/ })

})
//# sourceMappingURL=patmanShows.js.5edfa2f0ed7eec27cacb.hot-update.js.map