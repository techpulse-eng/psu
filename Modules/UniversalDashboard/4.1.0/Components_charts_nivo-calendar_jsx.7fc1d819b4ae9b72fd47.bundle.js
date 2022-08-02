"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_charts_nivo-calendar_jsx"],{

/***/ "./Components/charts/nivo-calendar.jsx":
/*!*********************************************!*\
  !*** ./Components/charts/nivo-calendar.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NivoCalendar)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _nivo_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nivo/calendar */ "./node_modules/@nivo/calendar/dist/nivo-calendar.esm.js");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\charts\\nivo-calendar.jsx";



var NivoCalendar = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NivoCalendar, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(NivoCalendar);

  function NivoCalendar() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NivoCalendar);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NivoCalendar, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.hasCallback) {
        UniversalDashboard.publish('element-event', {
          type: "clientEvent",
          eventId: this.props.id,
          eventName: 'onClick',
          eventData: JSON.stringify(e)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.responsive) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
          style: {
            height: this.props.height
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_nivo_calendar__WEBPACK_IMPORTED_MODULE_5__.ResponsiveCalendar, Object.assign({}, this.props, {
          onClick: this.onClick.bind(this),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 62
          }
        })));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_nivo_calendar__WEBPACK_IMPORTED_MODULE_5__.Calendar, Object.assign({}, this.props, {
          onClick: this.onClick.bind(this),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 19
          }
        }));
      }
    }
  }]);

  return NivoCalendar;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ })

}]);
//# sourceMappingURL=Components_charts_nivo-calendar_jsx.0ff1fdfe5e182a08246f20941fda1804.bundle.map