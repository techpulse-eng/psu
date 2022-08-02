"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_marker_jsx"],{

/***/ "./Components/map/marker.jsx":
/*!***********************************!*\
  !*** ./Components/map/marker.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDMarker)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Marker.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup */ "./Components/map/popup.jsx");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\marker.jsx";






var UDMarker = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDMarker, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDMarker);

  function UDMarker() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDMarker);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDMarker, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onReportBounds) {
        this.props.onReportBounds([[this.props.latitude, this.props.longitude], [this.props.latitude, this.props.longitude]]);
      }
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "removeElement") {
        this.props.onRemove(event.componentId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this,
          options;

      var icon = null;

      if (this.props.icon) {
        options = {
          iconUrl: this.props.icon.url
        };

        if (this.props.icon.width && this.props.icon.height) {
          options['iconSize'] = [this.props.icon.width, this.props.icon.height];
        }

        if (this.props.icon.anchorX && this.props.icon.anchorY) {
          options['iconAnchor'] = [this.props.icon.anchorX, this.props.icon.anchorY];
        }

        if (this.props.icon.popupAchorX && this.props.icon.popupAchorY) {
          options['popupAnchor'] = [this.props.icon.popupAchorX, this.props.icon.popupAchorY];
        }

        icon = leaflet__WEBPACK_IMPORTED_MODULE_6___default().icon(options);
      } else {
        icon = leaflet__WEBPACK_IMPORTED_MODULE_6___default().icon({
          iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
          shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
        });
      }

      var position = [this.props.latitude, this.props.longitude];
      var popup = null;

      if (this.props.popup) {
        popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_popup__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.props.popup, {
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__["default"], {
        position: position,
        icon: icon,
        ref: function ref(x) {
          return _this.marker = x;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 16
        }
      }, popup);
    }
  }]);

  return UDMarker;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

/***/ "./Components/map/popup.jsx":
/*!**********************************!*\
  !*** ./Components/map/popup.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDPopup)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Popup.js");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\popup.jsx";



var UDPopup = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDPopup, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDPopup);

  function UDPopup() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDPopup);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDPopup, [{
    key: "render",
    value: function render() {
      var content = null;

      if (Array.isArray(this.props.content)) {
        content = this.props.content.map(function (x) {
          return UniversalDashboard.renderComponent(x);
        });
      } else {
        content = UniversalDashboard.renderComponent(this.props.content);
      }

      var position = null;

      if (this.props.latitude && this.props.longitude) {
        position = [this.props.latitude, this.props.longitude];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__["default"], {
        position: position,
        maxWidth: this.props.maxWidth,
        minWidth: this.props.minWidth,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 16
        }
      }, content);
    }
  }]);

  return UDPopup;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

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

/***/ "./node_modules/react-leaflet/es/Marker.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/es/Marker.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");









var Marker = /*#__PURE__*/function (_MapLayer) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Marker, _MapLayer);

  function Marker() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__.Marker(props.position, this.getOptions(props));
    this.contextValue = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }

    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }

    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children == null || this.contextValue == null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_context__WEBPACK_IMPORTED_MODULE_4__.LeafletProvider, {
      value: this.contextValue
    }, children);
  };

  return Marker;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_context__WEBPACK_IMPORTED_MODULE_4__.withLeaflet)(Marker));

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon-2x.png":
/*!*************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon-2x.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "680f69f3c2e6b90c1812.png";

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-shadow.png":
/*!************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-shadow.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c6cc1401c107b501ef.png";

/***/ })

}]);
//# sourceMappingURL=Components_map_marker_jsx.2347c5b4946cdb20b5c7a4fed96fcd50.bundle.map