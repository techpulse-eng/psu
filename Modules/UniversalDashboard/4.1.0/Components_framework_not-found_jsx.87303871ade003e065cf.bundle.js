"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_framework_not-found_jsx"],{

/***/ "./Components/framework/not-found.jsx":
/*!********************************************!*\
  !*** ./Components/framework/not-found.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./Components/icon.jsx");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\framework\\not-found.jsx";






var NotFound = function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      comp = _React$useState2[0],
      setComponent = _React$useState2[1],
      element;

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (props.pageNotFound) {
      props.pageNotFound().then(function (json) {
        return setComponent(json);
      });
    }

    return function () {};
  }, []);

  if (props.pageNotFound) {
    if (comp === null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null);
    element = props.render(JSON.parse(comp));
    return element;
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: '20%'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h1",
      id: "not-found",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: "QuestionCircle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 53
      }
    }), " Page Not Found"));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_3__.withComponentFeatures)(NotFound));

/***/ })

}]);
//# sourceMappingURL=Components_framework_not-found_jsx.b20ba8f6c0222c8e7472d48990631c71.bundle.map