"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_slider_jsx"],{

/***/ "./Components/slider.jsx":
/*!*******************************!*\
  !*** ./Components/slider.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Slider */ "./node_modules/@mui/material/Slider/Slider.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\slider.jsx";






var UDSliderWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form__WEBPACK_IMPORTED_MODULE_2__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UDSlider, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 38
      }
    }));
  });
};

var UDSlider = function (props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: props.value
    });
    return function () {};
  }, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    onChangeCommitted: function onChangeCommitted(e, value) {
      if (props.onChange) {
        props.onChange(value);
      }
    },
    onChange: function onChange(e, value) {
      props.setState({
        value: value
      });
      props.onFieldChange({
        id: props.id,
        value: value
      });
    },
    key: props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDSliderWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_slider_jsx.77d949736c4a6d78e4ce4336deecd28e.bundle.map