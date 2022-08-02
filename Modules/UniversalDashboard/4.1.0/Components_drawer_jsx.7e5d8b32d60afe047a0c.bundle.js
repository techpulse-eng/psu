"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_drawer_jsx"],{

/***/ "./Components/drawer.jsx":
/*!*******************************!*\
  !*** ./Components/drawer.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\drawer.jsx";






var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    button: {
      margin: theme.spacing()
    },
    leftIcon: {
      marginRight: theme.spacing()
    },
    rightIcon: {
      marginLeft: theme.spacing()
    },
    list: {
      width: 250
    }
  };
});

var UDDrawer = function (props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    open: props.open,
    onClose: function onClose() {
      props.setState({
        open: false
      });
    },
    key: props.id,
    id: props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classNames(classes.list, props.className),
    role: "presentation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, props.render(props.children)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDDrawer));

/***/ })

}]);
//# sourceMappingURL=Components_drawer_jsx.de9e89ff653b0850047ad63ce2c86493.bundle.map