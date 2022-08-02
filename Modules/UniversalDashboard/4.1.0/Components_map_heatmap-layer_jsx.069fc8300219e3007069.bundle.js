"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_heatmap-layer_jsx"],{

/***/ "./Components/map/HeatmapLayer.js":
/*!****************************************!*\
  !*** ./Components/map/HeatmapLayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/get */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.map */ "./node_modules/lodash.map/index.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.reduce */ "./node_modules/lodash.reduce/index.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.filter */ "./node_modules/lodash.filter/index.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.min */ "./node_modules/lodash.min/index.js");
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.max */ "./node_modules/lodash.max/index.js");
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash.isnumber */ "./node_modules/lodash.isnumber/index.js");
/* harmony import */ var lodash_isnumber__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isnumber__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony import */ var simpleheat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! simpleheat */ "./node_modules/simpleheat/simpleheat.js");
/* harmony import */ var simpleheat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(simpleheat__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);








var _class, _temp;













function isInvalid(num) {
  return !lodash_isnumber__WEBPACK_IMPORTED_MODULE_13___default()(num) && !num;
}

function isValid(num) {
  return !isInvalid(num);
}

function isValidLatLngArray(arr) {
  return lodash_filter__WEBPACK_IMPORTED_MODULE_10___default()(arr, isValid).length === arr.length;
}

function isInvalidLatLngArray(arr) {
  return !isValidLatLngArray(arr);
}

function safeRemoveLayer(leafletMap, el) {
  var _leafletMap$getPanes = leafletMap.getPanes(),
      overlayPane = _leafletMap$getPanes.overlayPane;

  if (overlayPane && overlayPane.contains(el)) {
    overlayPane.removeChild(el);
  }
}

function shouldIgnoreLocation(loc) {
  return isInvalid(loc.lng) || isInvalid(loc.lat);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_leaflet__WEBPACK_IMPORTED_MODULE_16__.withLeaflet)((_temp = _class = /*#__PURE__*/function (_MapLayer) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HeatmapLayer, _MapLayer);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(HeatmapLayer);

  function HeatmapLayer() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeatmapLayer);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeatmapLayer, [{
    key: "createLeafletElement",
    value: function createLeafletElement() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var canAnimate = this.props.leaflet.map.options.zoomAnimation && (leaflet__WEBPACK_IMPORTED_MODULE_14___default().Browser.any3d);
      var zoomClass = "leaflet-zoom-".concat(canAnimate ? 'animated' : 'hide');
      var mapSize = this.props.leaflet.map.getSize();
      var transformProp = leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.testProp(['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin']);
      this._el = leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.create('canvas', zoomClass);
      this._el.style[transformProp] = '50% 50%';
      this._el.width = mapSize.x;
      this._el.height = mapSize.y;
      var el = this._el;
      var Heatmap = leaflet__WEBPACK_IMPORTED_MODULE_14___default().Layer.extend({
        onAdd: function onAdd(leafletMap) {
          return leafletMap.getPanes().overlayPane.appendChild(el);
        },
        addTo: function addTo(leafletMap) {
          leafletMap.addLayer(_this);
          return _this;
        },
        onRemove: function onRemove(leafletMap) {
          return safeRemoveLayer(leafletMap, el);
        }
      });
      this.leafletElement = new Heatmap();

      (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeatmapLayer.prototype), "componentDidMount", this).call(this);

      this._heatmap = simpleheat__WEBPACK_IMPORTED_MODULE_15___default()(this._el);
      this.reset();

      if (this.props.onReportBounds) {
        this.props.onReportBounds(this.getBounds());
      }

      if (this.props.fitBoundsOnLoad) {
        this.fitBounds();
      }

      this.attachEvents();
      this.updateHeatmapProps(this.getHeatmapProps(this.props));
    }
  }, {
    key: "getMax",
    value: function getMax(props) {
      return props.max || 3.0;
    }
  }, {
    key: "getRadius",
    value: function getRadius(props) {
      return props.radius || 30;
    }
  }, {
    key: "getMaxZoom",
    value: function getMaxZoom(props) {
      return props.maxZoom || 18;
    }
  }, {
    key: "getMinOpacity",
    value: function getMinOpacity(props) {
      return props.minOpacity || 0.01;
    }
  }, {
    key: "getBlur",
    value: function getBlur(props) {
      return props.blur || 15;
    }
  }, {
    key: "getHeatmapProps",
    value: function getHeatmapProps(props) {
      return {
        minOpacity: this.getMinOpacity(props),
        maxZoom: this.getMaxZoom(props),
        radius: this.getRadius(props),
        blur: this.getBlur(props),
        max: this.getMax(props),
        gradient: props.gradient
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var currentProps = this.props;
      var nextHeatmapProps = this.getHeatmapProps(nextProps);
      this.updateHeatmapGradient(nextHeatmapProps.gradient);
      var hasRadiusUpdated = nextHeatmapProps.radius !== currentProps.radius;
      var hasBlurUpdated = nextHeatmapProps.blur !== currentProps.blur;

      if (hasRadiusUpdated || hasBlurUpdated) {
        this.updateHeatmapRadius(nextHeatmapProps.radius, nextHeatmapProps.blur);
      }

      if (nextHeatmapProps.max !== currentProps.max) {
        this.updateHeatmapMax(nextHeatmapProps.max);
      }
    }
    /**
     * Update various heatmap properties like radius, gradient, and max
     */

  }, {
    key: "updateHeatmapProps",
    value: function updateHeatmapProps(props) {
      this.updateHeatmapRadius(props.radius, props.blur);
      this.updateHeatmapGradient(props.gradient);
      this.updateHeatmapMax(props.max);
    }
    /**
     * Update the heatmap's radius and blur (blur is optional)
     */

  }, {
    key: "updateHeatmapRadius",
    value: function updateHeatmapRadius(radius, blur) {
      if (radius) {
        this._heatmap.radius(radius, blur);
      }
    }
    /**
     * Update the heatmap's gradient
     */

  }, {
    key: "updateHeatmapGradient",
    value: function updateHeatmapGradient(gradient) {
      if (gradient) {
        this._heatmap.gradient(gradient);
      }
    }
    /**
     * Update the heatmap's maximum
     */

  }, {
    key: "updateHeatmapMax",
    value: function updateHeatmapMax(maximum) {
      if (maximum) {
        this._heatmap.max(maximum);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      safeRemoveLayer(this.props.leaflet.map, this._el);
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var points = this.props.points;
      var lngs = lodash_map__WEBPACK_IMPORTED_MODULE_8___default()(points, this.props.longitudeExtractor);
      var lats = lodash_map__WEBPACK_IMPORTED_MODULE_8___default()(points, this.props.latitudeExtractor);
      var ne = {
        lng: lodash_max__WEBPACK_IMPORTED_MODULE_12___default()(lngs),
        lat: lodash_max__WEBPACK_IMPORTED_MODULE_12___default()(lats)
      };
      var sw = {
        lng: lodash_min__WEBPACK_IMPORTED_MODULE_11___default()(lngs),
        lat: lodash_min__WEBPACK_IMPORTED_MODULE_11___default()(lats)
      };

      if (shouldIgnoreLocation(ne) || shouldIgnoreLocation(sw)) {
        return null;
      }

      return leaflet__WEBPACK_IMPORTED_MODULE_14___default().latLngBounds(leaflet__WEBPACK_IMPORTED_MODULE_14___default().latLng(sw), leaflet__WEBPACK_IMPORTED_MODULE_14___default().latLng(ne));
    }
  }, {
    key: "fitBounds",
    value: function fitBounds() {
      var bounds = this.getBounds();
      this.props.leaflet.map.fitBounds(bounds);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.leaflet.map.invalidateSize();

      if (this.props.fitBoundsOnUpdate) {
        this.fitBounds();
      }

      this.reset();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this2 = this;

      var leafletMap = this.props.leaflet.map;
      leafletMap.on('viewreset', function () {
        return _this2.reset();
      });
      leafletMap.on('moveend', function () {
        return _this2.reset();
      });

      if (leafletMap.options.zoomAnimation && (leaflet__WEBPACK_IMPORTED_MODULE_14___default().Browser.any3d)) {
        leafletMap.on('zoomanim', this._animateZoom, this);
      }
    }
  }, {
    key: "_animateZoom",
    value: function _animateZoom(e) {
      var scale = this.props.leaflet.map.getZoomScale(e.zoom);

      var offset = this.props.leaflet.map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this.props.leaflet.map._getMapPanePos());

      if ((leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.setTransform)) {
        leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.setTransform(this._el, offset, scale);
      } else {
        this._el.style[(leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.TRANSFORM)] = "".concat(leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.getTranslateString(offset), " scale(").concat(scale, ")");
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var topLeft = this.props.leaflet.map.containerPointToLayerPoint([0, 0]);
      leaflet__WEBPACK_IMPORTED_MODULE_14___default().DomUtil.setPosition(this._el, topLeft);
      var size = this.props.leaflet.map.getSize();

      if (this._heatmap._width !== size.x) {
        this._el.width = this._heatmap._width = size.x;
      }

      if (this._heatmap._height !== size.y) {
        this._el.height = this._heatmap._height = size.y;
      }

      if (this._heatmap && !this._frame && !this.props.leaflet.map._animating) {
        this._frame = leaflet__WEBPACK_IMPORTED_MODULE_14___default().Util.requestAnimFrame(this.redraw, this);
      }

      this.redraw();
    }
  }, {
    key: "redraw",
    value: function redraw() {
      var r = this._heatmap._r;
      var size = this.props.leaflet.map.getSize();
      var maxIntensity = this.props.max === undefined ? 1 : this.getMax(this.props);
      var maxZoom = this.props.maxZoom === undefined ? this.props.leaflet.map.getMaxZoom() : this.getMaxZoom(this.props);
      var v = 1 / Math.pow(2, Math.max(0, Math.min(maxZoom - this.props.leaflet.map.getZoom(), 12)) / 2);
      var cellSize = r / 2;

      var panePos = this.props.leaflet.map._getMapPanePos();

      var offsetX = panePos.x % cellSize;
      var offsetY = panePos.y % cellSize;
      var getLat = this.props.latitudeExtractor;
      var getLng = this.props.longitudeExtractor;
      var getIntensity = this.props.intensityExtractor;

      var inBounds = function (p, bounds) {
        return bounds.contains(p);
      };

      var filterUndefined = function (row) {
        return lodash_filter__WEBPACK_IMPORTED_MODULE_10___default()(row, function (c) {
          return c !== undefined;
        });
      };

      var roundResults = function (results) {
        return lodash_reduce__WEBPACK_IMPORTED_MODULE_9___default()(results, function (result, row) {
          return lodash_map__WEBPACK_IMPORTED_MODULE_8___default()(filterUndefined(row), function (cell) {
            return [Math.round(cell[0]), Math.round(cell[1]), Math.min(cell[2], maxIntensity), cell[3]];
          }).concat(result);
        }, []);
      };

      var accumulateInGrid = function (points, leafletMap, bounds) {
        return lodash_reduce__WEBPACK_IMPORTED_MODULE_9___default()(points, function (grid, point) {
          var latLng = [getLat(point), getLng(point)];

          if (isInvalidLatLngArray(latLng)) {
            //skip invalid points
            return grid;
          }

          var p = leafletMap.latLngToContainerPoint(latLng);

          if (!inBounds(p, bounds)) {
            return grid;
          }

          var x = Math.floor((p.x - offsetX) / cellSize) + 2;
          var y = Math.floor((p.y - offsetY) / cellSize) + 2;
          grid[y] = grid[y] || [];
          var cell = grid[y][x];
          var alt = getIntensity(point);
          var k = alt * v;

          if (!cell) {
            grid[y][x] = [p.x, p.y, k, 1];
          } else {
            cell[0] = (cell[0] * cell[2] + p.x * k) / (cell[2] + k); // x

            cell[1] = (cell[1] * cell[2] + p.y * k) / (cell[2] + k); // y

            cell[2] += k; // accumulated intensity value

            cell[3] += 1;
          }

          return grid;
        }, []);
      };

      var getBounds = function () {
        return new (leaflet__WEBPACK_IMPORTED_MODULE_14___default().Bounds)(leaflet__WEBPACK_IMPORTED_MODULE_14___default().point([-r, -r]), size.add([r, r]));
      };

      var data = function getDataForHeatmap(points, leafletMap) {
        return roundResults(accumulateInGrid(points, leafletMap, getBounds(leafletMap)));
      }(this.props.points, this.props.leaflet.map);

      this._heatmap.clear();

      this._heatmap.data(data).draw(this.getMinOpacity(this.props));

      this._frame = null;

      if (this.props.onStatsUpdate && this.props.points && this.props.points.length > 0) {
        this.props.onStatsUpdate(lodash_reduce__WEBPACK_IMPORTED_MODULE_9___default()(data, function (stats, point) {
          stats.max = point[3] > stats.max ? point[3] : stats.max;
          stats.min = point[3] < stats.min ? point[3] : stats.min;
          return stats;
        }, {
          min: Infinity,
          max: -Infinity
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return HeatmapLayer;
}(react_leaflet__WEBPACK_IMPORTED_MODULE_17__["default"]), (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, "propTypes", {
  points: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().array.isRequired),
  longitudeExtractor: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func.isRequired),
  latitudeExtractor: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func.isRequired),
  intensityExtractor: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func.isRequired),
  fitBoundsOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  fitBoundsOnUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().bool),
  onStatsUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),

  /* props controlling heatmap generation */
  max: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
  radius: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
  maxZoom: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
  minOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
  blur: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().number),
  gradient: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object)
}), _temp)));

/***/ }),

/***/ "./Components/map/heatmap-layer.jsx":
/*!******************************************!*\
  !*** ./Components/map/heatmap-layer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDHeatmap)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _HeatmapLayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeatmapLayer.js */ "./Components/map/HeatmapLayer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\heatmap-layer.jsx";




var UDHeatmap = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDHeatmap, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDHeatmap);

  function UDHeatmap(props) {
    var _this;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDHeatmap);

    _this = _super.call(this, props);
    _this.state = {
      points: props.points
    };
    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDHeatmap, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_6__.isGuid)(this.props.id)) {
        this.pubSubToken = UniversalDashboard.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      var points;

      if (event.type === "removeElement") {
        this.props.onRemove(event.componentId);
      }

      if (event.type === "clearElement") {
        this.setState({
          points: []
        });
      }

      if (event.type === "addElement") {
        points = this.state.points.concat(event.elements);
        this.setState({
          points: points
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_HeatmapLayer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        points: this.state.points //fitBoundsOnLoad={this.props.fitBounds}
        //fitBoundsOnUpdate
        ,
        longitudeExtractor: function longitudeExtractor(m) {
          return m[1];
        },
        latitudeExtractor: function latitudeExtractor(m) {
          return m[0];
        },
        intensityExtractor: function intensityExtractor(m) {
          return parseFloat(m[2]);
        } //max={this.props.maxIntensity}
        //radius={this.props.radius}
        ,
        maxZoom: this.props.maxZoom,
        minOpacity: this.props.minOpacity //blur={this.props.blur}
        ,
        gradient: this.props.gradient,
        onReportBounds: this.props.onReportBounds,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      });
    }
  }]);

  return UDHeatmap;
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

/***/ })

}]);
//# sourceMappingURL=Components_map_heatmap-layer_jsx.430dcf05f0d5e634fc22a5d155c638c9.bundle.map