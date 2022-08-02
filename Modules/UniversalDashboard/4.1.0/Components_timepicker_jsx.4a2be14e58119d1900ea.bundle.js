"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_timepicker_jsx"],{

/***/ "./Components/timepicker.jsx":
/*!***********************************!*\
  !*** ./Components/timepicker.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_lab_TimePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/lab/TimePicker */ "./node_modules/@mui/lab/TimePicker/TimePicker.js");
/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/lab/AdapterDateFns */ "./node_modules/@mui/lab/node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/lab/LocalizationProvider */ "./node_modules/@mui/lab/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale/fr */ "./node_modules/date-fns/esm/locale/fr/index.js");
/* harmony import */ var date_fns_locale_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/de */ "./node_modules/date-fns/esm/locale/de/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/en-US */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/locale/ru */ "./node_modules/date-fns/esm/locale/ru/index.js");
/* harmony import */ var date_fns_locale_nl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale/nl */ "./node_modules/date-fns/esm/locale/nl/index.js");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\timepicker.jsx";














var locales = {
  "fr": date_fns_locale_fr__WEBPACK_IMPORTED_MODULE_3__["default"],
  "de": date_fns_locale_de__WEBPACK_IMPORTED_MODULE_4__["default"],
  "en": date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_5__["default"],
  "ru": date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_6__["default"],
  "nl": date_fns_locale_nl__WEBPACK_IMPORTED_MODULE_7__["default"]
};

var TimePickerWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form__WEBPACK_IMPORTED_MODULE_2__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UdTimePicker, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 40
      }
    }));
  });
};

var UdTimePicker = function (props) {
  var _onChange = function onChange(value) {
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

  var value = props.value;

  if (value === "") {
    value = null;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: props.value
    });
    return function () {};
  }, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dateAdapter: _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_9__["default"],
    locale: locales[props.locale],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimePicker__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props, {
    value: value,
    onChange: function onChange(value) {
      return _onChange(value);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, params, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 42
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(TimePickerWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_timepicker_jsx.71ebb601c85e7cb0167f354bd491ffd4.bundle.map