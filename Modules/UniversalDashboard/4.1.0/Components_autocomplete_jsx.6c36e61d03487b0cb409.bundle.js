"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_autocomplete_jsx"],{

/***/ "./Components/autocomplete.jsx":
/*!*************************************!*\
  !*** ./Components/autocomplete.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Autocomplete */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/InputAdornment */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./Components/icon.jsx");



var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\autocomplete.jsx";










var UDAutocompleteWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_form__WEBPACK_IMPORTED_MODULE_3__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(UDAutocomplete, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 32
      }
    }));
  });
};

function UDAutocomplete(props) {
  var _this2 = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var onChange = function (event, value) {
    props.onFieldChange({
      id: props.id,
      value: value
    });
    props.setState((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
      value: value
    }));

    if (props.onChange) {
      props.onChange(value);
    }

    if (props.multiple) {
      setInputValue('');
    } else {
      setInputValue(value);
    }
  };

  var value = props.value;

  if (!value && props.multiple) {
    value = [];
  }

  var onEnter = function () {
    if (props.onEnter) {
      props.onEnter();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: props.value
    });
    return function () {};
  }, true);

  if (!props.onLoadOptions) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: props.id,
      onChange: onChange,
      onKeyUp: function onKeyUp(e) {
        return e.key === "Enter" && onEnter();
      },
      options: props.options,
      getOptionLabel: function getOptionLabel(option) {
        return option;
      },
      value: value,
      disablePortal: true,
      fullWidth: props.fullWidth,
      multiple: props.multiple,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, params, {
          label: props.label,
          className: props.className,
          variant: props.variant,
          fullWidth: true,
          InputProps: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params.InputProps), {}, {
            startAdornment: props.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__["default"], {
              position: "start",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 11
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props.icon, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 13
              }
            }))) : null
          }),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 32
          }
        }));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 12
      }
    });
  }

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var fetch = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default()(function (request, callback) {
      props.onLoadOptions(request).then(callback);
    }, 200);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    var active = true;

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    fetch(inputValue, function (results) {
      if (active) {
        var json = JSON.parse(results);

        if (!Array.isArray(json)) {
          json = [json];
        }

        setOptions(json || []);
      }
    });
    return function () {
      active = false;
    };
  }, [inputValue, fetch]);

  if (value === '' && !Array.isArray(value) || !value) {
    value = [];
  } else if (value && !Array.isArray(value)) {
    value = [value];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: props.id,
    options: options,
    autoComplete: true,
    onChange: onChange,
    onKeyUp: function onKeyUp(e) {
      return e.key === "Enter" && onEnter();
    },
    inputValue: inputValue,
    includeInputInList: true,
    value: value,
    multiple: props.multiple,
    fullWidth: props.fullWidth,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, params, {
        onChange: function (event) {
          return setInputValue(event.target.value);
        },
        label: props.label,
        variant: props.variant,
        fullWidth: true,
        InputProps: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, params.InputProps), {}, {
          startAdornment: !props.multiple && props.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_9__["default"], {
            position: "start",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props.icon, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 19
            }
          }))) : params.InputProps.startAdornment
        }),
        className: props.className,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_4__.withComponentFeatures)(UDAutocompleteWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_autocomplete_jsx.51120e279d03e0b38cd3f8dfb9ac6e64.bundle.map