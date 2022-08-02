"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_style_jsx"],{

/***/ "./node_modules/@mui/material/Box/Box.js":
/*!***********************************************!*\
  !*** ./node_modules/@mui/material/Box/Box.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/createBox.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _className__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../className */ "./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "./node_modules/@mui/material/styles/createTheme.js");




const defaultTheme = (0,_styles__WEBPACK_IMPORTED_MODULE_0__["default"])();
const Box = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__["default"])({
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: _className__WEBPACK_IMPORTED_MODULE_2__["default"].generate
});
 true ? Box.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ }),

/***/ "./node_modules/@mui/system/esm/createBox.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/system/esm/createBox.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styled-engine */ "./node_modules/@mui/styled-engine/index.js");
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styleFunctionSx */ "./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js");
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleFunctionSx */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@mui/system/esm/useTheme.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "component"];






function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName,
    styleFunctionSx = _styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__["default"]
  } = options;
  const BoxRoot = (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_6__["default"])('div')(styleFunctionSx);
  const Box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Box(inProps, ref) {
    const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_7__["default"])(defaultTheme);

    const _extendSxProp = (0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_8__["default"])(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_extendSxProp, _excluded);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BoxRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: component,
      ref: ref,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
  return Box;
}

/***/ }),

/***/ "./Components/style.jsx":
/*!******************************!*\
  !*** ./Components/style.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\style.jsx";






var UDStyle = function (props) {
  var children = props.content;

  if (!Array.isArray(children)) {
    children = [children];
  }

  children = children.map(function (x) {
    return props.render(x);
  });

  if (props.sx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      component: props.component,
      sx: props.sx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 12
      }
    }, children);
  }

  var style = (0,emotion__WEBPACK_IMPORTED_MODULE_1__.css)(props.style);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(props.tag, {
    className: style
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_2__.withComponentFeatures)(UDStyle));

/***/ })

}]);
//# sourceMappingURL=Components_style_jsx.b34c1414dcc1808d59fc8e3a3466fe9f.bundle.map