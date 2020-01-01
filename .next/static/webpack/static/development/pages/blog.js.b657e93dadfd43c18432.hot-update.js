webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HOC */ "./pages/components/HOC/index.js");
/* harmony import */ var _components_common_PostLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/PostLink */ "./pages/components/common/PostLink/index.js");
var _jsxFileName = "/home/angham/Desktop/first-nextjs-app/pages/blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var posts = [{
  id: 1,
  title: 'Postt 1',
  body: 'Tis is post 1'
}, {
  id: 2,
  title: 'Postt 2',
  body: 'Tis is post 2'
}, {
  id: 3,
  title: 'Postt 3',
  body: 'Tis is post 3'
}, {
  id: 4,
  title: 'Postt 4',
  body: 'Tis is post 4'
}];

var Blog = function Blog() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Blog Page"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, posts.map(function (post) {
    return __jsx(_components_common_PostLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      postTitle: post.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_HOC__WEBPACK_IMPORTED_MODULE_1__["default"])(Blog));

/***/ })

})
//# sourceMappingURL=blog.js.b657e93dadfd43c18432.hot-update.js.map