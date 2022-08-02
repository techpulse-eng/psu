"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_dynamic_jsx"],{

/***/ "./Components/dynamic.jsx":
/*!********************************!*\
  !*** ./Components/dynamic.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-interval */ "./node_modules/react-interval/lib/index.js");
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_interval__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\dynamic.jsx";





var UDDynamic = function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      component = _useState2[0],
      setComponent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.loadingComponent != null),
      _useState4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var loadData = function () {
    setLoading(props.loadingComponent != null);
    props.get(props.id).then(function (x) {
      if (Array.isArray(x)) {
        x.forEach(function (y) {
          return y.__version = props.__version;
        });
      }

      setComponent(x);
      setLoading(false);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    loadData();
    return function () {};
  }, [props.__version]);

  if (loading) {
    return props.render(props.loadingComponent);
  }

  return [props.render(component), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_interval__WEBPACK_IMPORTED_MODULE_3___default()), {
    enabled: props.autoRefresh,
    timeout: props.autoRefreshInterval * 1000,
    callback: function refresh() {
      props.setState({
        __version: Math.random().toString(36).substr(2, 5)
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_2__.withComponentFeatures)(UDDynamic));

/***/ })

}]);
//# sourceMappingURL=Components_dynamic_jsx.654a17d054bdc180599709001b55cae2.bundle.map