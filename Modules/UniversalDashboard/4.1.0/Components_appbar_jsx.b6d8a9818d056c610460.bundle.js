"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_appbar_jsx"],{

/***/ "./Components/appbar.jsx":
/*!*******************************!*\
  !*** ./Components/appbar.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _framework_togglecolormodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework/togglecolormodes */ "./Components/framework/togglecolormodes.jsx");



var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\appbar.jsx";










var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var drawerWidth = 250;
var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
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
    menuButton: {
      marginRight: theme.spacing(2)
    },
    appBar: function appBar(props) {
      return {
        width: props.drawer && (props.drawer.variant === "permanent" || props.drawer.variant === "persistent" && props.open) && "calc(100% - ".concat(drawerWidth, "px)"),
        marginLeft: props.drawer && (props.drawer.variant === "permanent" || props.drawer.variant === "persistent" && props.open) && drawerWidth,
        top: props.footer ? 'auto' : null,
        bottom: props.footer ? 0 : null
      };
    }
  };
});

var UDAppBar = function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var classes = useStyles((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    open: open
  }));
  var drawer = null;
  var drawerButton = null;

  if (props.drawer) {
    drawer = props.render(props.drawer);
    drawerButton = props.drawer.variant !== 'permanent' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "btn".concat(props.drawer.id),
      edge: "start",
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "menu",
      onClick: function openDrawer() {
        var shouldOpen = true;

        if (props.drawer.variant === "persistent" && open) {
          shouldOpen = false;
        }

        setOpen(shouldOpen);
        props.publish(props.drawer.id, {
          type: 'setState',
          state: {
            open: shouldOpen
          }
        });
      },
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 60
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }
    }));
  }

  return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    position: props.position,
    key: props.id,
    id: props.id,
    className: classNames(classes.appBar, props.className),
    color: props.color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, drawerButton, props.render(props.children), props.footer || props.disableThemeToggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 53
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_framework_togglecolormodes__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 74
    }
  }))), drawer];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_3__.withComponentFeatures)(UDAppBar));

/***/ })

}]);
//# sourceMappingURL=Components_appbar_jsx.71f22b86701728eb6fd0bd8536ba3f45.bundle.map