"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_map_jsx"],{

/***/ "./Components/map/map.jsx":
/*!********************************!*\
  !*** ./Components/map/map.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDMap)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/ScaleControl.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/Map.js");
/* harmony import */ var glamor_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! glamor-jss */ "./node_modules/glamor-jss/lib/glamor-jss.cjs.js");
/* harmony import */ var glamor_jss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(glamor_jss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.min */ "./node_modules/lodash.min/index.js");
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.max */ "./node_modules/lodash.max/index.js");
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\map.jsx";








delete (leaflet__WEBPACK_IMPORTED_MODULE_10___default().Icon.Default.prototype._getIconUrl);
leaflet__WEBPACK_IMPORTED_MODULE_10___default().Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});

var UDMap = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UDMap, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(UDMap);

  function UDMap(props) {
    var _this;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UDMap);

    _this = _super.call(this, props);
    _this.state = {
      latitude: props.latitude,
      longitude: props.longitude,
      zoom: props.zoom,
      features: [],
      loading: true,
      bounds: null
    };
    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(UDMap, [{
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "setState") {
        this.setState((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.state.attributes));
      } else if (event.type === "requestState") {
        UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(event.requestId), {
          attributes: {
            bounds: this.map.leafletElement.getBounds(),
            zoom: this.state.zoom,
            latitude: this.state.latitude,
            longitude: this.state.longitude
          }
        });
      }
    }
  }, {
    key: "onReportBounds",
    value: function onReportBounds(bounds) {
      if (this.props.latitude && this.props.longitude || !bounds) {
        return;
      }

      if (bounds.getNorth) {
        try {
          bounds = [[bounds.getNorth(), bounds.getEast()], [bounds.getSouth(), bounds.getWest()]];
        } catch (_unused) {
          return;
        }
      }

      var currentBounds = this.state.bounds;

      if (this.state.bounds) {
        var newBounds = [[lodash_max__WEBPACK_IMPORTED_MODULE_12___default()(currentBounds[0][0], bounds[0][0]), lodash_max__WEBPACK_IMPORTED_MODULE_12___default()(currentBounds[0][1], bounds[0][1])], [lodash_min__WEBPACK_IMPORTED_MODULE_11___default()(currentBounds[1][0], bounds[1][0]), lodash_min__WEBPACK_IMPORTED_MODULE_11___default()(currentBounds[1][1], bounds[1][1])]];
        this.setState({
          bounds: newBounds
        });
      } else {
        this.setState({
          bounds: bounds
        });
      }
    }
  }, {
    key: "loadMapData",
    value: function loadMapData() {
      UniversalDashboard.get("/api/internal/component/element/" + this.props.id, function (data) {
        if (data.error) {
          this.setState({
            error: data.error.message
          });
        } else {
          this.setState({
            features: data,
            loading: false
          });
        }
      }.bind(this));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadMapData();
      this.className = (0,glamor_jss__WEBPACK_IMPORTED_MODULE_7__.css)({
        height: this.props.height,
        width: this.props.width
      });

      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _Object$assign;

      if (this.state.error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 14
          }
        }, this.state.error);
      }

      if (this.state.loading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 14
          }
        }, "Loading...");
      }

      var position = [this.state.latitude, this.state.longitude];
      var features = this.state.features.map(function (x) {
        x.onReportBounds = _this2.onReportBounds.bind(_this2);
        return UniversalDashboard.renderComponent(x);
      });

      if (this.props.scaleControlPosition !== 'none') {
        features.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_13__["default"], {
          position: this.props.scaleControlPosition,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }
        }));
      }

      var additionalProps = {};

      if (this.state.bounds) {
        additionalProps['bounds'] = this.state.bounds;
      }

      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "\n          .leaflet-control-layers-toggle {\n            background-image: url(".concat(__webpack_require__(/*! leaflet/dist/images/layers.png */ "./node_modules/leaflet/dist/images/layers.png"), ");\n            width: 36px;\n            height: 36px;\n          }\n\n          .leaflet-retina .leaflet-control-layers-toggle {\n            background-image: url(").concat(__webpack_require__(/*! leaflet/dist/images/layers-2x.png */ "./node_modules/leaflet/dist/images/layers-2x.png"), ");\n            background-size: 26px 26px;\n          }\n\n\n          ")
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({
        id: this.props.id
      }, additionalProps, (_Object$assign = {
        ref: function ref(x) {
          return _this2.map = x;
        },
        className: "markercluster-map",
        maxZoom: this.props.maxZoom,
        center: position,
        zoom: this.state.zoom
      }, (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, "className", this.className), (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, "animate", this.props.animate), (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, "__self", this), (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, "__source", {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }), _Object$assign)), features)];
    }
  }]);

  return UDMap;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);



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

/***/ })

}]);
//# sourceMappingURL=Components_map_map_jsx.60b9155f4948856c0304d6adf1f09b74.bundle.map