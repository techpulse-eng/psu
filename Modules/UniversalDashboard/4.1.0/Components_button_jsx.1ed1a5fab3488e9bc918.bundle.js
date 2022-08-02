"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_button_jsx"],{

/***/ "./Components/button.jsx":
/*!*******************************!*\
  !*** ./Components/button.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/lab/LoadingButton */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./Components/icon.jsx");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");



var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\button.jsx";









var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(function (theme) {
  return {
    button: {
      margin: theme.spacing()
    },
    leftIcon: {
      marginRight: theme.spacing()
    },
    rightIcon: {
      marginLeft: theme.spacing()
    }
  };
});

var UdButton = function (props) {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var handleClick = function () {
    if (props.onClick == null) return;
    setLoading(true);
    props.onClick().then(function () {
      return setLoading(false);
    })["catch"](function () {
      return setLoading(false);
    });
  };

  var icon = props.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props.icon, {
    style: props.text ? props.iconAlignment === 'left' ? (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.icon.style), {}, {
      marginRight: 8
    }) : (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.icon.style), {}, {
      marginLeft: 8
    }) : props.icon.style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  })) : null;

  if (props.showLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: props.variant,
      size: props.size,
      disabled: props.disabled,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, 'ud-mu-button', props.className),
      fullWidth: props.fullWidth,
      href: props.href,
      onClick: handleClick,
      style: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style),
      id: props.id,
      color: props.color,
      loading: loading,
      loadingIndicator: props.loadingIndicator && props.render(props.loadingIndicator),
      loadingPosition: props.loadingPosition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 12
      }
    }, props.iconAlignment === 'left' ? icon : null, props.text, props.iconAlignment === 'right' ? icon : null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: props.variant,
    size: props.size,
    disabled: props.disabled,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, 'ud-mu-button', props.className),
    fullWidth: props.fullWidth,
    href: props.href,
    onClick: handleClick,
    style: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style),
    id: props.id,
    color: props.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, props.iconAlignment === 'left' ? icon : null, props.text, props.iconAlignment === 'right' ? icon : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_5__.withComponentFeatures)(UdButton));

/***/ })

}]);
//# sourceMappingURL=Components_button_jsx.54af50ac9943f4dc670a5121b9e367c8.bundle.map