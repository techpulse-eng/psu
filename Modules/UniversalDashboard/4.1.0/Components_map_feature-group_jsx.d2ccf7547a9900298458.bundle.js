"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_map_feature-group_jsx"],{

/***/ "./Components/map/feature-group.jsx":
/*!******************************************!*\
  !*** ./Components/map/feature-group.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UDFeatureGroup)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/FeatureGroup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup */ "./Components/map/popup.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./Components/map/utils.jsx");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\map\\feature-group.jsx";





var UDFeatureGroup = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(UDFeatureGroup, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(UDFeatureGroup);

  function UDFeatureGroup(props) {
    var _this;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UDFeatureGroup);

    _this = _super.call(this, props);
    _this.state = {
      content: props.content
    };
    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UDFeatureGroup, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_6__.isGuid)(this.props.id)) {
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
        this.props.onRemove(event.componentId);
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
      if (this.props.onReportBounds && this.featureGroup && this.featureGroup.leafletElement) {
        try {
          this.props.onReportBounds(this.featureGroup.leafletElement.getBounds());
        } catch (_unused) {}
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          self;

      var popup = null;

      if (this.props.popup) {
        popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_popup__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.props.popup, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }
        }));
      }

      var content = null;

      if (Array.isArray(this.state.content)) {
        self = this;
        content = this.state.content.map(function (x) {
          x.onRemove = self.onRemoveChild.bind(_this2);
          return UniversalDashboard.renderComponent(x);
        });
      } else {
        this.state.content.onRemove = this.onRemoveChild.bind(this);
        content = UniversalDashboard.renderComponent(this.state.content);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: this.props.id,
        ref: function ref(x) {
          return _this2.featureGroup = x;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 16
        }
      }, popup, content);
    }
  }]);

  return UDFeatureGroup;
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

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/react-leaflet/es/FeatureGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/FeatureGroup.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var FeatureGroup = /*#__PURE__*/function (_Path) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatureGroup, _Path);

  function FeatureGroup() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = FeatureGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__.FeatureGroup(this.getOptions(props));
    this.contextValue = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      layerContainer: el,
      popupContainer: el
    });
    return el;
  };

  _proto.componentDidMount = function componentDidMount() {
    _Path.prototype.componentDidMount.call(this);

    this.setStyle(this.props);
  };

  return FeatureGroup;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_context__WEBPACK_IMPORTED_MODULE_4__.withLeaflet)(FeatureGroup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Path.js":
/*!***********************************************!*\
  !*** ./node_modules/react-leaflet/es/Path.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony import */ var _utils_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/pick */ "./node_modules/react-leaflet/es/utils/pick.js");







var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'bubblingMouseEvents', 'renderer', 'className', // Interactive Layer
'interactive', // Layer
'pane', 'attribution'];

var Path = /*#__PURE__*/function (_MapLayer) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Path, _MapLayer);

  function Path(props) {
    var _this;

    _this = _MapLayer.call(this, props) || this;

    if (_this.contextValue == null) {
      _this.contextValue = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
        popupContainer: _this.leafletElement
      });
    }

    return _this;
  }

  var _proto = Path.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapLayer.prototype.componentDidUpdate.call(this, prevProps);

    this.setStyleIfChanged(prevProps, this.props);
  };

  _proto.getPathOptions = function getPathOptions(props) {
    return (0,_utils_pick__WEBPACK_IMPORTED_MODULE_3__["default"])(props, OPTIONS);
  };

  _proto.setStyle = function setStyle(options) {
    if (options === void 0) {
      options = {};
    }

    this.leafletElement.setStyle(options);
  };

  _proto.setStyleIfChanged = function setStyleIfChanged(fromProps, toProps) {
    var nextStyle = this.getPathOptions(toProps);

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(nextStyle, this.getPathOptions(fromProps))) {
      this.setStyle(nextStyle);
    }
  };

  return Path;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/pick.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/pick.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pick)
/* harmony export */ });


function pick(object, keys) {
  return keys.reduce(function (obj, key) {
    if (typeof object[key] !== 'undefined') {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}

/***/ })

}]);
//# sourceMappingURL=Components_map_feature-group_jsx.03bf405db58097f8c714c0a0f7c88aeb.bundle.map