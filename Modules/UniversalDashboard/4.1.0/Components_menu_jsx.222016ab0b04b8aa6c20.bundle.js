"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_menu_jsx"],{

/***/ "./Components/menu.jsx":
/*!*****************************!*\
  !*** ./Components/menu.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./Components/icon.jsx");

var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\menu.jsx";








function UDMenu(props) {
  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var onChange = function (value) {
    setAnchorEl(null);
    props.setState({
      value: value
    });

    if (props.onChange) {
      props.onChange(value);
    }
  };

  var children = props.children;

  if (!children) {
    children = [];
  }

  if (!Array.isArray(children)) {
    children = [children];
  }

  var icon;

  if (props.icon) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props.icon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: function handleClick(event) {
      setAnchorEl(event.currentTarget);
    },
    variant: props.variant,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, icon, props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.id,
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: function handleClose() {
      setAnchorEl(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, children.map(function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(UDMenuItem, Object.assign({
      key: child.value
    }, child, {
      onClick: onChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 40
      }
    }));
  })));
}

function UDMenuItem(props) {
  var icon;

  if (props.icon) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props.icon, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 16
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function onClick() {
      return props.onClick(props.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, props.text));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_2__.withComponentFeatures)(UDMenu));

/***/ })

}]);
//# sourceMappingURL=Components_menu_jsx.b3252e99b45628cbb6f1c3f713ae454e.bundle.map