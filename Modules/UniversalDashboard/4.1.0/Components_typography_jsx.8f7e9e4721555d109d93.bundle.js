"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_typography_jsx"],{

/***/ "./Components/typography.jsx":
/*!***********************************!*\
  !*** ./Components/typography.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UdMuTypography)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_interval_lib_Component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-interval/lib/Component */ "./node_modules/react-interval/lib/Component.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\typography.jsx";






var UdMuTypography = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UdMuTypography, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(UdMuTypography);

  function UdMuTypography() {
    var _this, _len, args, _key;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UdMuTypography);

    for (_len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      text: '',
      errorMessage: '',
      hasError: false
    });

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onLoadData", function () {
      if (!_this.props.isEndpoint && _this.props.content === null) {
        _this.setState({
          text: _this.props.text
        });
      }

      if (!_this.props.isEndpoint && _this.props.content !== null) {
        _this.setState({
          text: _this.props.content
        });
      }

      if (_this.props.isEndpoint && _this.props.content !== null) {
        UniversalDashboard.get("/api/internal/component/element/".concat(_this.props.id), function (data) {
          data.error ? _this.setState({
            hasError: true,
            error: data.error,
            errorMessage: data.error.message
          }) : _this.setState({
            text: data
          });
        });
      }
    });

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onIncomingEvent", function (eventName, event) {
      if (event.type === 'syncElement') {
        _this.onLoadData();
      }
    });

    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UdMuTypography, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.onLoadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.onLoadData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          style = _this$props.style,
          align = _this$props.align,
          gutterBottom = _this$props.gutterBottom,
          noWrap = _this$props.noWrap,
          variant = _this$props.variant,
          refreshInterval = _this$props.refreshInterval,
          autoRefresh = _this$props.autoRefresh;
      var text = this.state.text;
      var typo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: id,
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('ud-mu-typography', this.props.className),
        align: align,
        gutterBottom: gutterBottom,
        noWrap: noWrap,
        style: style,
        variant: variant,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }
      }, text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_interval_lib_Component__WEBPACK_IMPORTED_MODULE_7__.ReactInterval, {
        timeout: refreshInterval * 1000,
        enabled: autoRefresh,
        callback: this.onLoadData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }));
      return align ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        style: {
          textAlign: align
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 20
        }
      }, typo) : typo;
    }
  }]);

  return UdMuTypography;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);



/***/ })

}]);
//# sourceMappingURL=Components_typography_jsx.fc9b590fe2d12fe0bab7b032572dce28.bundle.map