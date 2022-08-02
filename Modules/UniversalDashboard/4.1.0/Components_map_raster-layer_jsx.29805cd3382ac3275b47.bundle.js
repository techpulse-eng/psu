"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_raster-layer_jsx"],{

/***/ "./Components/map/bing-layer.jsx":
/*!***************************************!*\
  !*** ./Components/map/bing-layer.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/GridLayer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);









(leaflet__WEBPACK_IMPORTED_MODULE_6___default().BingLayer) = leaflet__WEBPACK_IMPORTED_MODULE_6___default().TileLayer.extend({
  options: {
    subdomains: [0, 1, 2, 3],
    type: 'Aerial',
    attribution: 'Bing',
    culture: '',
    style: ''
  },
  initialize: function initialize(bing_key, options) {
    leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.setOptions(this, options);
    this._bing_key = bing_key;
    this._url = null;
    this._providers = [];
    this.metaRequested = false;
  },
  tile2quad: function tile2quad(x, y, z) {
    var quad = '',
        i,
        digit,
        mask;

    for (i = z; i > 0; i--) {
      digit = 0;
      mask = 1 << i - 1;
      if ((x & mask) !== 0) digit += 1;
      if ((y & mask) !== 0) digit += 2;
      quad = quad + digit;
    }

    return quad;
  },
  getTileUrl: function getTileUrl(tilePoint) {
    var zoom = this._getZoomForUrl();

    var subdomains = this.options.subdomains,
        s = this.options.subdomains[Math.abs((tilePoint.x + tilePoint.y) % subdomains.length)];
    return this._url.replace('{subdomain}', s).replace('{quadkey}', this.tile2quad(tilePoint.x, tilePoint.y, zoom)).replace('{culture}', this.options.culture);
  },
  loadMetadata: function loadMetadata() {
    if (this.metaRequested) return;
    this.metaRequested = true;

    var _this = this;

    var cbid = '_bing_metadata_' + leaflet__WEBPACK_IMPORTED_MODULE_6___default().Util.stamp(this);

    window[cbid] = function (meta) {
      window[cbid] = undefined;
      var e = document.getElementById(cbid);
      e.parentNode.removeChild(e);

      if (meta.errorDetails) {
        console.log(meta.errorDetails);
        return;
      }

      _this.initMetadata(meta);
    };

    var urlScheme = document.location.protocol === 'file:' ? 'http' : document.location.protocol.slice(0, -1);
    var url = urlScheme + '://dev.virtualearth.net/REST/v1/Imagery/Metadata/' + this.options.type + '?include=ImageryProviders&jsonp=' + cbid + '&key=' + this._bing_key + '&UriScheme=' + urlScheme + '&culture=' + this.options.culture + '&style=' + this.options.style;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = cbid;
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  initMetadata: function initMetadata(meta) {
    var r = meta.resourceSets[0].resources[0],
        i,
        p,
        j,
        c,
        coverage,
        bounds;
    this.options.subdomains = r.imageUrlSubdomains;
    this._url = r.imageUrl;

    if (r.imageryProviders) {
      for (i = 0; i < r.imageryProviders.length; i++) {
        p = r.imageryProviders[i];

        for (j = 0; j < p.coverageAreas.length; j++) {
          c = p.coverageAreas[j];
          coverage = {
            zoomMin: c.zoomMin,
            zoomMax: c.zoomMax,
            active: false
          };
          bounds = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLngBounds)(new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(c.bbox[0] + 0.01, c.bbox[1] + 0.01), new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(c.bbox[2] - 0.01, c.bbox[3] - 0.01));
          coverage.bounds = bounds;
          coverage.attrib = p.attribution;

          this._providers.push(coverage);
        }
      }
    }

    this._update();
  },
  _update: function _update() {
    if (this._url === null || !this._map) return;

    this._update_attribution();

    leaflet__WEBPACK_IMPORTED_MODULE_6___default().TileLayer.prototype._update.apply(this, []);
  },
  _update_attribution: function _update_attribution() {
    var bounds = this._map.getBounds(),
        i,
        p;

    var zoom = this._map.getZoom();

    for (i = 0; i < this._providers.length; i++) {
      p = this._providers[i];

      if (zoom <= p.zoomMax && zoom >= p.zoomMin && bounds.intersects(p.bounds)) {
        if (!p.active && this._map.attributionControl) this._map.attributionControl.addAttribution(p.attrib);
        p.active = true;
      } else {
        if (p.active && this._map.attributionControl) this._map.attributionControl.removeAttribution(p.attrib);
        p.active = false;
      }
    }
  },
  onAdd: function onAdd(map) {
    this.loadMetadata();
    leaflet__WEBPACK_IMPORTED_MODULE_6___default().TileLayer.prototype.onAdd.apply(this, [map]);
  },
  onRemove: function onRemove(map) {
    var i, p;

    for (i = 0; i < this._providers.length; i++) {
      p = this._providers[i];

      if (p.active && this._map.attributionControl) {
        this._map.attributionControl.removeAttribution(p.attrib);

        p.active = false;
      }
    }

    leaflet__WEBPACK_IMPORTED_MODULE_6___default().TileLayer.prototype.onRemove.apply(this, [map]);
  }
});

(leaflet__WEBPACK_IMPORTED_MODULE_6___default().bingLayer) = function (bing_key, options) {
  return new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().BingLayer)(bing_key, options);
};

var BingLayer = /*#__PURE__*/function (_GridLayer) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BingLayer, _GridLayer);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(BingLayer);

  function BingLayer() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BingLayer);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BingLayer, [{
    key: "createLeafletElement",
    value: function createLeafletElement(props) {
      return leaflet__WEBPACK_IMPORTED_MODULE_6___default().bingLayer(props.bingkey, this.getOptions(props));
    }
  }]);

  return BingLayer;
}(react_leaflet__WEBPACK_IMPORTED_MODULE_7__["default"]);

(0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(BingLayer, "propTypes", {
  bingkey: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_leaflet__WEBPACK_IMPORTED_MODULE_9__.withLeaflet)(BingLayer));

/***/ }),

/***/ "./Components/map/raster-layer.jsx":
/*!*****************************************!*\
  !*** ./Components/map/raster-layer.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDRasterLayer)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/TileLayer.js");
/* harmony import */ var _bing_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bing-layer */ "./Components/map/bing-layer.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\raster-layer.jsx";




var UDRasterLayer = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDRasterLayer, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDRasterLayer);

  function UDRasterLayer() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDRasterLayer);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDRasterLayer, [{
    key: "render",
    value: function render() {
      if (this.props.bing) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_bing_layer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          bingkey: this.props.apiKey,
          type: this.props.mapType,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 20
          }
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__["default"], {
          url: this.props.tileServer,
          attribution: this.props.attribution,
          opacity: this.props.opacity,
          zIndex: this.props.zIndex,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 20
          }
        });
      }
    }
  }]);

  return UDRasterLayer;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

/***/ "./node_modules/react-leaflet/es/GridLayer.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/GridLayer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GridLayer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");







var GridLayer = /*#__PURE__*/function (_MapLayer) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_2__.GridLayer(this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _MapLayer.prototype.getOptions.call(this, props));

    var map = props.leaflet.map;

    if (map != null) {
      // $FlowFixMe: Object spread
      if (options.maxZoom == null && map.options.maxZoom != null) {
        // $FlowFixMe: Object spread
        options.maxZoom = map.options.maxZoom;
      } // $FlowFixMe: Object spread


      if (options.minZoom == null && map.options.minZoom != null) {
        // $FlowFixMe: Object spread
        options.minZoom = map.options.minZoom;
      }
    }

    return options;
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapComponent.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapComponent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");






var MapComponent = /*#__PURE__*/function (_MapEvented) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapComponent, _MapEvented);

  function MapComponent() {
    return _MapEvented.apply(this, arguments) || this;
  }

  var _proto = MapComponent.prototype;

  _proto.getOptions = function getOptions(props) {
    if (props.pane != null) {
      return props;
    }

    if (props.leaflet != null && props.leaflet.pane != null) {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        pane: props.leaflet.pane
      });
    }

    return props;
  };

  return MapComponent;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapEvented.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapEvented.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENTS_RE": () => (/* binding */ EVENTS_RE),
/* harmony export */   "default": () => (/* binding */ MapEvented)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");







var EVENTS_RE = /^on(.+)$/i;

var MapEvented = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapEvented, _Component);

  function MapEvented(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "_leafletEvents", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this._leafletEvents = _this.extractLeafletEvents(props);
    return _this;
  }

  var _proto = MapEvented.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.bindLeafletEvents(this._leafletEvents);
  };

  _proto.componentDidUpdate = function componentDidUpdate(_prevProps) {
    this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var el = this.leafletElement;
    if (!el) return;
    Object.keys(this._leafletEvents).forEach(function (ev) {
      el.off(ev, _this2._leafletEvents[ev]);
    });
  };

  _proto.extractLeafletEvents = function extractLeafletEvents(props) {
    return Object.keys(props).reduce(function (res, prop) {
      if (EVENTS_RE.test(prop)) {
        if (props[prop] != null) {
          var _key = prop.replace(EVENTS_RE, function (match, p) {
            return p.toLowerCase();
          });

          res[_key] = props[prop];
        }
      }

      return res;
    }, {});
  };

  _proto.bindLeafletEvents = function bindLeafletEvents(next, prev) {
    if (next === void 0) {
      next = {};
    }

    if (prev === void 0) {
      prev = {};
    }

    var el = this.leafletElement;
    if (el == null || el.on == null) return {};

    var diff = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev);

    Object.keys(prev).forEach(function (ev) {
      if (next[ev] == null || prev[ev] !== next[ev]) {
        delete diff[ev];
        el.off(ev, prev[ev]);
      }
    });
    Object.keys(next).forEach(function (ev) {
      if (prev[ev] == null || next[ev] !== prev[ev]) {
        diff[ev] = next[ev];
        el.on(ev, next[ev]);
      }
    });
    return diff;
  };

  _proto.fireLeafletEvent = function fireLeafletEvent(type, data) {
    var el = this.leafletElement;
    if (el) el.fire(type, data);
  };

  return MapEvented;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapLayer.js":
/*!***************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapLayer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapLayer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");










var MapLayer = /*#__PURE__*/function (_MapComponent) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapLayer, _MapComponent);

  function MapLayer(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "contextValue", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = MapLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_fromProps, _toProps) {};

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null) {
      return null;
    }

    return this.contextValue == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_context__WEBPACK_IMPORTED_MODULE_5__.LeafletProvider, {
      value: this.contextValue
    }, children);
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MapLayer, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return MapLayer;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/TileLayer.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/TileLayer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");







var TileLayer = /*#__PURE__*/function (_GridLayer) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TileLayer, _GridLayer);

  function TileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = TileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__.TileLayer(props.url, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }
  };

  return TileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_context__WEBPACK_IMPORTED_MODULE_3__.withLeaflet)(TileLayer));

/***/ })

}]);
//# sourceMappingURL=Components_map_raster-layer_jsx.b380ffb805d3ab8d58cb1e718ddc8ded.bundle.map