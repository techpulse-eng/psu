"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_vector-layer_jsx"],{

/***/ "./Components/map/utils.jsx":
/*!**********************************!*\
  !*** ./Components/map/utils.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isGuid": () => (/* binding */ isGuid)
/* harmony export */ });
function isGuid(str) {
  if (str == null) {
    return false;
  }

  if (str[0] === "{") {
    str = str.substring(1, str.length - 1);
  }

  var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
  var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regexGuid.test(str);
}

/***/ }),

/***/ "./Components/map/vector-layer.jsx":
/*!*****************************************!*\
  !*** ./Components/map/vector-layer.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDVectorLayer)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/CircleMarker.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Circle.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Polyline.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Polygon.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Rectangle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\vector-layer.jsx";




var UDVectorLayer = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDVectorLayer, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDVectorLayer);

  function UDVectorLayer() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDVectorLayer);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDVectorLayer, [{
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "removeElement") {
        this.props.onRemove(this.props.id);
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_5__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onReportBounds && this.vector && this.vector.leafletElement) {
        try {
          this.props.onReportBounds(this.vector.leafletElement.getBounds());
        } catch (_unused) {}
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this,
          position,
          popup,
          bounds;

      if (this.props.circle) {
        position = [this.props.latitude, this.props.longitude];
        popup = null;

        if (this.props.popup) {
          popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(UDPopup, Object.assign({}, this.props.popup, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }
          }));
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["default"], {
            center: position,
            radius: this.props.radius,
            color: this.props.color,
            fillColor: this.props.fillColor,
            fillOpacity: this.props.fillOpacity,
            weight: this.props.weight,
            ref: function ref(x) {
              return _this.vector = x;
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 24
            }
          }, popup);
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__["default"], {
          center: position,
          radius: this.props.radius,
          color: this.props.color,
          fillColor: this.props.fillColor,
          fillOpacity: this.props.fillOpacity,
          weight: this.props.weight,
          ref: function ref(x) {
            return _this.vector = x;
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 20
          }
        });
      }

      if (this.props.polyline) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__["default"], {
          positions: this.props.positions,
          color: this.props.color,
          fillColor: this.props.fillColor,
          fillOpacity: this.props.fillOpacity,
          weight: this.props.weight,
          ref: function ref(x) {
            return _this.vector = x;
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 20
          }
        });
      }

      if (this.props.polygon) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__["default"], {
          positions: this.props.positions,
          color: this.props.color,
          fillColor: this.props.fillColor,
          fillOpacity: this.props.fillOpacity,
          weight: this.props.weight,
          ref: function ref(x) {
            return _this.vector = x;
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 20
          }
        });
      }

      if (this.props.rectangle) {
        bounds = [[this.props.latitudeTopLeft, this.props.longitudeTopLeft], [this.props.latitudeBottomRight, this.props.longitudeBottomRight]];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_10__["default"], {
          bounds: bounds,
          color: this.props.color,
          fillColor: this.props.fillColor,
          fillOpacity: this.props.fillOpacity,
          weight: this.props.weight,
          ref: function ref(x) {
            return _this.vector = x;
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 20
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 16
        }
      }, "Unknown type");
    }
  }]);

  return UDVectorLayer;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ })

}]);
//# sourceMappingURL=Components_map_vector-layer_jsx.3a56af9e8bf5b58742579c1d5102811a.bundle.map