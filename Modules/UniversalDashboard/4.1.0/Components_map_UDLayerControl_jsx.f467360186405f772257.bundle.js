"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_UDLayerControl_jsx"],{

/***/ "./Components/map/UDLayerControl.jsx":
/*!*******************************************!*\
  !*** ./Components/map/UDLayerControl.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDLayerControl)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/LayersControl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\UDLayerControl.jsx";




var UDLayerControl = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDLayerControl, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDLayerControl);

  function UDLayerControl(props) {
    var _this;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDLayerControl);

    _this = _super.call(this, props);
    _this.state = {
      content: props.content
    };
    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDLayerControl, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_5__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "onRemoveChild",
    value: function onRemoveChild(id) {
      var content = this.state.content;

      if (!Array.isArray(content)) {
        content = [content];
      }

      content = content.filter(function (x) {
        return x.id !== id;
      });
      this.setState({
        content: content
      });
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      var content;

      if (event.type === "removeElement") {
        this.props.onRemove(this.props.id);
      }

      if (event.type === "addElement") {
        content = this.state.content;

        if (!Array.isArray(content)) {
          content = [content];
        }

        content = content.concat(event.elements);
        this.setState({
          content: content
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var elements = document.getElementsByClassName('leaflet-control-layers-selector'),
          i;
      var top = 0;

      if (elements) {
        for (i = 0; i < elements.length; i++) {
          elements[i].parentNode.addEventListener("mousedown", function (event) {
            var scrollbar = event.target.parentNode.parentNode.parentNode.parentNode;
            top = scrollbar.scrollTop;
          }, false);
          elements[i].parentNode.addEventListener("click", function (event) {
            var scrollbar = event.target.parentNode.parentNode.parentNode.parentNode;
            scrollbar.scrollTo(0, top);
          }, false);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var content = this.state.content;

      if (!Array.isArray(content)) {
        content = [content];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 16
        }
      }), content.map(function (x) {
        x.onRemove = _this2.onRemoveChild.bind(_this2);
        x.onReportBounds = _this2.props.onReportBounds;
        return UniversalDashboard.renderComponent(x);
      }));
    }
  }]);

  return UDLayerControl;
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

/***/ "./node_modules/react-leaflet/es/LayersControl.js":
/*!********************************************************!*\
  !*** ./node_modules/react-leaflet/es/LayersControl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlledLayer": () => (/* binding */ ControlledLayer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");











// Abtract class for layer container, extended by BaseLayer and Overlay
var ControlledLayer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "layer", void 0);

    return _this;
  }

  var _proto = ControlledLayer.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(_ref) {
    var checked = _ref.checked;

    if (this.props.leaflet.map == null) {
      return;
    } // Handle dynamically (un)checking the layer => adding/removing from the map


    if (this.props.checked === true && (checked == null || checked === false)) {
      this.props.leaflet.map.addLayer(this.layer);
    } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
      this.props.leaflet.map.removeLayer(this.layer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.removeLayerControl(this.layer);
  };

  _proto.addLayer = function addLayer() {
    throw new Error('Must be implemented in extending class');
  };

  _proto.removeLayer = function removeLayer(layer) {
    this.props.removeLayer(layer);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_context__WEBPACK_IMPORTED_MODULE_7__.LeafletProvider, {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(react__WEBPACK_IMPORTED_MODULE_6__.Component);

var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });

    _this2.contextValue = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet, {
      layerContainer: {
        addLayer: _this2.addLayer.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2)),
        removeLayer: _this2.removeLayer.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });

    _this3.contextValue = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet, {
      layerContainer: {
        addLayer: _this3.addLayer.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3)),
        removeLayer: _this3.removeLayer.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl = /*#__PURE__*/function (_MapControl) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "controlProps", void 0);

    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      addOverlay: _this4.addOverlay.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__.Control.Layers(undefined, undefined, options);
  };

  _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.collapsed !== fromProps.collapsed) {
      if (toProps.collapsed === true) {
        this.leafletElement.collapse();
      } else {
        this.leafletElement.expand();
      }
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this5 = this;

    setTimeout(function () {
      _MapControl.prototype.componentWillUnmount.call(_this5);
    }, 0);
  };

  _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addBaseLayer(layer, name);
  };

  _proto2.addOverlay = function addOverlay(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addOverlay(layer, name);
  };

  _proto2.removeLayer = function removeLayer(layer) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }
  };

  _proto2.removeLayerControl = function removeLayerControl(layer) {
    this.leafletElement.removeLayer(layer);
  };

  _proto2.render = function render() {
    var _this6 = this;

    var children = react__WEBPACK_IMPORTED_MODULE_6__.Children.map(this.props.children, function (child) {
      return child ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.cloneElement)(child, _this6.controlProps) : null;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, children);
  };

  return LayersControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_8__["default"]);

var LayersControlExport = (0,_context__WEBPACK_IMPORTED_MODULE_7__.withLeaflet)(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayersControlExport);

/***/ }),

/***/ "./node_modules/react-leaflet/es/MapControl.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapControl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapControl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");








var MapControl = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapControl, _Component);

  function MapControl(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(_this.props);
    return _this;
  }

  var _proto = MapControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setPosition(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.leafletElement.addTo(this.props.leaflet.map);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.leafletElement.remove();
  };

  _proto.render = function render() {
    return null;
  };

  return MapControl;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ })

}]);
//# sourceMappingURL=Components_map_UDLayerControl_jsx.47294bcb312b43d9771cc7ef04846673.bundle.map