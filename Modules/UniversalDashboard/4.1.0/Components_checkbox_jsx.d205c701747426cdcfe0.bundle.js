"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_checkbox_jsx"],{

/***/ "./Components/checkbox.jsx":
/*!*********************************!*\
  !*** ./Components/checkbox.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/CheckBox */ "./node_modules/@mui/icons-material/CheckBox.js");
/* harmony import */ var _mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/CheckBoxOutlineBlank */ "./node_modules/@mui/icons-material/CheckBoxOutlineBlank.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\checkbox.jsx";










var UDCheckboxWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form__WEBPACK_IMPORTED_MODULE_3__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(UDCheckbox, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 32
      }
    }));
  });
};

var UDCheckbox = function (props) {
  var _onChange = function onChange(event) {
    props.onFieldChange({
      id: props.id,
      value: event.target.checked
    });
    props.setState({
      checked: event.target.checked
    });

    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: props.checked
    });
    return function () {};
  }, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: props.disabled,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: props.id,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, "ud-mu-checkbox"),
      checked: props.checked,
      onChange: function onChange(event) {
        return _onChange(event);
      },
      value: props.checked,
      style: !props.disabled ? (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style) : {
        color: null
      },
      color: props.color,
      icon: props.icon ? props.render(props.icon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckBoxOutlineBlank__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 57
        }
      }),
      checkedIcon: props.checkedIcon ? props.render(props.checkedIcon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 78
        }
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }),
    label: !props.label ? '' : props.label,
    labelPlacement: props.labelPlacement,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_4__.withComponentFeatures)(UDCheckboxWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_checkbox_jsx.c1556e4f8d3a4590fe9ed04eb840c91a.bundle.map