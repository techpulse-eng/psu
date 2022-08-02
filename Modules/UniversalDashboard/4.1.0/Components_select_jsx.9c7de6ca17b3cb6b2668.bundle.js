"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_select_jsx"],{

/***/ "./Components/select.jsx":
/*!*******************************!*\
  !*** ./Components/select.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\select.jsx";









var UDSelectWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form__WEBPACK_IMPORTED_MODULE_2__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UDSelect, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 40
      }
    }));
  });
};

var UDSelect = function (props) {
  var groups = props.options.filter(function (m) {
    return m.type === 'mu-select-group';
  });

  var _onChange = function onChange(event) {
    var value = event.target.value,
        temp;

    if (Array.isArray(value)) {
      value = value.filter(function (x) {
        return x != null && x != undefined;
      });
      temp = [];
      value.forEach(function (x) {
        var group = groups.find(function (v) {
          return v.name === x;
        });

        if (group) {
          group.options.forEach(function (opt) {
            return temp.push(opt.value);
          });
        } else {
          temp.push(x);
        }
      });
      value = temp;
    }

    props.onFieldChange({
      id: props.id,
      value: value
    });
    props.setState({
      value: value
    });

    if (props.onChange) {
      props.onChange(value);
    }
  };

  var defaultValue = props.defaultValue;
  var options = [];

  if (groups.length > 0) {
    options = groups.map(function (x) {
      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          color: 'rgba(0, 0, 0, 0.54)',
          fontSize: '0.875rem',
          boxSizing: 'border-box',
          listStyle: 'none',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500
        },
        value: x.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, x.name), x.options.map(function (m) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          value: m.value,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 36
          }
        }, m.name);
      })];
    });
  } else if (props.options && props.options.map && props.options.length > 0) {
    options = props.options.map(function (x) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: x.value,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 42
        }
      }, x.name);
    });
  }

  if (props.multiple && !Array.isArray(defaultValue)) {
    if (defaultValue) {
      defaultValue = [defaultValue];
    } else {
      defaultValue = [];
    }
  }

  var value = Array.isArray(props.value) && !props.multiple ? props.value[0] : props.value;

  if (!value) {
    value = defaultValue;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: value
    });
    props.setState({
      value: value
    });
    return function () {};
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: props.variant,
    sx: {
      minWidth: 120
    },
    fullWidth: props.fullWidth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: props.id + "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: props.id,
    labelId: props.id + "label",
    label: props.label,
    defaultValue: defaultValue,
    inputProps: {
      id: props.id,
      value: value
    },
    value: value,
    onChange: function onChange(event) {
      return _onChange(event);
    },
    multiple: props.multiple,
    disabled: props.disabled,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, options));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDSelectWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_select_jsx.24ccf6ef1ea6f513fd5b1bdc44a32b02.bundle.map