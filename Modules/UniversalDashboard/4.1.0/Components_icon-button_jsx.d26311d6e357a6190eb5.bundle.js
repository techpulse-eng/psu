"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_icon-button_jsx"],{

/***/ "./Components/icon-button.jsx":
/*!************************************!*\
  !*** ./Components/icon-button.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./Components/icon.jsx");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\icon-button.jsx";








var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    button: {
      margin: theme.spacing()
    }
  };
});

var UdIconButton = function (props) {
  var className = props.className,
      disabled = props.disabled,
      id = props.id,
      style = props.style,
      href = props.href,
      icon = props.icon,
      onClick = props.onClick;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function handleClick() {
      if (onClick == null) return;
      onClick();
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, 'ud-mu-iconbutton', className),
    disabled: disabled,
    id: id,
    style: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style),
    href: href,
    size: props.size,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_3__.withComponentFeatures)(UdIconButton));

/***/ })

}]);
//# sourceMappingURL=Components_icon-button_jsx.7b12e365e10d344622e3555f83ce1dd4.bundle.map