"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_grid-layout_jsx-data_image_svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv-a4b97b"],{

/***/ "./Components/grid-layout.jsx":
/*!************************************!*\
  !*** ./Components/grid-layout.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\grid-layout.jsx";




var ResponsiveReactGridLayout = (0,react_grid_layout__WEBPACK_IMPORTED_MODULE_2__.WidthProvider)(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__.Responsive);


__webpack_require__(/*! react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");

__webpack_require__(/*! react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");

var UDGridLayout = function (props) {
  var getFromLS = function (key) {
    var ls = {};

    if (__webpack_require__.g.localStorage) {
      try {
        ls = JSON.parse(__webpack_require__.g.localStorage.getItem(key)) || {};
      } catch (e) {
        /*Ignore*/
      }
    }

    return ls;
  },
      jsonLayouts;

  var saveToLS = function (key, value) {
    if (__webpack_require__.g.localStorage) {
      console.log("save");
      console.log(value);
      __webpack_require__.g.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  var defaultLayouts = []; // Layout passed as props

  if (props.layout) {
    console.log('layout');
    defaultLayouts = JSON.parse(props.layout);

    if (!Array.isArray) {
      defaultLayouts = [];
    } else {
      saveToLS("uddesign" + window.location.pathname, defaultLayouts);
    }
  } // Layout saved in local storage
  else if (props.persist) {
    jsonLayouts = getFromLS("uddesign" + window.location.pathname);

    if (jsonLayouts != null) {
      defaultLayouts = JSON.parse(JSON.stringify(jsonLayouts));
    }
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultLayouts),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      layouts = _useState2[0],
      setLayouts = _useState2[1];

  var children = props.children;

  if (!Array.isArray(children)) {
    children = [children];
  }

  var elements = children.map(function (x) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: "grid-element-" + x.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, props.render(x));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ResponsiveReactGridLayout, {
    layouts: layouts,
    cols: props.cols,
    rowHeight: props.rowHeight,
    onLayoutChange: function onLayoutChange(layout, layouts) {
      if (props.persist) {
        saveToLS("uddesign" + window.location.pathname, layouts);
        setLayouts(layouts);
      }

      if (props.design) {
        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default()(JSON.stringify(layouts));
      }
    },
    measureBeforeMount: true,
    isDraggable: props.isDraggable || props.design,
    isResizable: props.isResizable || props.design,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, elements);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_4__.withComponentFeatures)(UDGridLayout));

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+ ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+";

/***/ })

}]);
//# sourceMappingURL=Components_grid-layout_jsx-data_image_svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv-a4b97b.c3158a40144f81625ed2c46e3897fe62.bundle.map