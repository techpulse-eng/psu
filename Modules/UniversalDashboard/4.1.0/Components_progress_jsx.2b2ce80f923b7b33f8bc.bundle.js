"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_progress_jsx"],{

/***/ "./Components/progress.jsx":
/*!*********************************!*\
  !*** ./Components/progress.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Progress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\progress.jsx";




var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return {
    bar: function bar(props) {
      var _props$progressColor;

      return {
        backgroundColor: (_props$progressColor = props.progressColor) !== null && _props$progressColor !== void 0 ? _props$progressColor : null
      };
    },
    root: function root(props) {
      var _props$backgroundColo;

      return {
        backgroundColor: (_props$backgroundColo = props.backgroundColor) !== null && _props$backgroundColo !== void 0 ? _props$backgroundColo : null
      };
    },
    circular: function circular(props) {
      var _props$progressColor2;

      return {
        color: (_props$progressColor2 = props.progressColor) !== null && _props$progressColor2 !== void 0 ? _props$progressColor2 : null
      };
    }
  };
});
function Progress(props) {
  var classes = useStyles(props);

  if (props.circular) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: props.id,
      classes: {
        root: classes.circular
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 16
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: props.variant,
    value: props.percentComplete,
    id: props.id,
    classes: {
      root: classes.root,
      bar: classes.bar
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }));
}

/***/ })

}]);
//# sourceMappingURL=Components_progress_jsx.4219687c69d85ffd9a4b1129c796bc4e.bundle.map