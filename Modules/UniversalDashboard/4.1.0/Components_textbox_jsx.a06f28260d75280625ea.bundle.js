"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_textbox_jsx"],{

/***/ "./Components/textbox.jsx":
/*!********************************!*\
  !*** ./Components/textbox.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./Components/icon.jsx");
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/InputAdornment */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Input/Input.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormHelperText/FormHelperText.js");
/* harmony import */ var react_imask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-imask */ "./node_modules/react-imask/esm/index.js");

var _excluded = ["onChange"];

var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\textbox.jsx";










var UDTextFieldWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form__WEBPACK_IMPORTED_MODULE_3__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange,
        submit = _ref.submit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(UDTextField, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      submit: submit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }));
  });
};

var TextMaskCustom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (props, ref) {
  var onChange = props.onChange,
      other = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_imask__WEBPACK_IMPORTED_MODULE_5__.IMaskInput, Object.assign({}, other, {
    key: props.id + "mask",
    inputRef: ref,
    onAccept: function onAccept(value) {
      return onChange({
        target: {
          value: value
        }
      });
    },
    overwrite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }));
});

var UDTextField = function (props) {
  var internalVal = react__WEBPACK_IMPORTED_MODULE_1__.useRef('');

  var onChange = function (e) {
    var value = e.target.value;
    if (internalVal.current === value) return;
    internalVal.current = value;
    props.setState({
      value: value
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: props.value
    });
  }, [props.value]);

  var onEnter = function () {
    props.submit();

    if (props.onEnter) {
      props.onEnter();
    }
  };

  return (props === null || props === void 0 ? void 0 : props.mask) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "standard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    shrink: props === null || props === void 0 ? void 0 : props.value,
    htmlFor: props === null || props === void 0 ? void 0 : props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, props === null || props === void 0 ? void 0 : props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
    key: props.id + "input",
    onChange: onChange,
    startAdornment: (props === null || props === void 0 ? void 0 : props.icon) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__["default"], {
      position: "start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props.icon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }))) : null,
    id: props === null || props === void 0 ? void 0 : props.id,
    inputComponent: TextMaskCustom,
    inputProps: {
      mask: props.mask,
      unmask: props.unmask
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  })), (props === null || props === void 0 ? void 0 : props.helperText) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: props === null || props === void 0 ? void 0 : props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, props === null || props === void 0 ? void 0 : props.helperText)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props, {
    type: props.textType,
    key: props.id + "input",
    onChange: onChange,
    onKeyUp: function onKeyUp(e) {
      return e.key === "Enter" && !props.multiline && onEnter();
    },
    InputLabelProps: {
      shrink: props === null || props === void 0 ? void 0 : props.value
    },
    InputProps: {
      startAdornment: (props === null || props === void 0 ? void 0 : props.icon) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__["default"], {
        position: "start",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props.icon, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }))) : null
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_2__.withComponentFeatures)(UDTextFieldWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_textbox_jsx.f2acf8d01d9a1d31297b061164a48a96.bundle.map