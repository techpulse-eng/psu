"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_backdrop_jsx"],{

/***/ "./Components/backdrop.jsx":
/*!*********************************!*\
  !*** ./Components/backdrop.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\backdrop.jsx";




var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    backdrop: function backdrop(props) {
      return {
        zIndex: theme.zIndex.drawer + 1,
        color: props.color
      };
    }
  };
});

function UDBackdrop(props) {
  var classes = useStyles(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: props.id,
    open: props.open,
    className: classes.backdrop,
    onClick: function onClick() {
      return props.onClick();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }, props.render(props.children));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDBackdrop));

/***/ })

}]);
//# sourceMappingURL=Components_backdrop_jsx.bfa4ad0523dabd46ea14e83678627580.bundle.map