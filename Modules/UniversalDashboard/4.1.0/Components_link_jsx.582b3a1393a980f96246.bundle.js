"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_link_jsx"],{

/***/ "./node_modules/@mui/material/Link/Link.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Link/Link.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementTypeAcceptingRef.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/style.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@mui/material/utils/useIsFocusVisible.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _linkClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linkClasses */ "./node_modules/@mui/material/Link/linkClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];














const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const useUtilityClasses = ownerState => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ['root', `underline${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(underline)}`, component === 'button' && 'button', focusVisible && 'focusVisible']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _linkClasses__WEBPACK_IMPORTED_MODULE_7__.getLinkUtilityClass, classes);
};

const LinkRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])(_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: 'MuiLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.underline)}`], ownerState.component === 'button' && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  const color = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__.getPath)(theme, `palette.${transformDeprecatedColors(ownerState.color)}`) || ownerState.color;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.underline === 'none' && {
    textDecoration: 'none'
  }, ownerState.underline === 'hover' && {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }, ownerState.underline === 'always' && {
    textDecoration: 'underline',
    textDecorationColor: color !== 'inherit' ? (0,_mui_system__WEBPACK_IMPORTED_MODULE_11__.alpha)(color, 0.4) : undefined,
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  }, ownerState.component === 'button' && {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    [`&.${_linkClasses__WEBPACK_IMPORTED_MODULE_7__["default"].focusVisible}`]: {
      outline: 'auto'
    }
  });
});
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Link(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_12__["default"])({
    props: inProps,
    name: 'MuiLink'
  });

  const {
    className,
    color = 'primary',
    component = 'a',
    onBlur,
    onFocus,
    TypographyClasses,
    underline = 'always',
    variant = 'inherit',
    sx
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const [focusVisible, setFocusVisible] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
  const handlerRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__["default"])(ref, focusVisibleRef);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = event => {
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinkRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    color: color,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    classes: TypographyClasses,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState: ownerState,
    variant: variant,
    sx: [...(!Object.keys(colorTransformations).includes(color) ? [{
      color
    }] : []), ...(Array.isArray(sx) ? sx : [sx])]
  }, other));
});
 true ? Link.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),

  /**
   * The color of the link.
   * @default 'primary'
   */
  color: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().any),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _mui_utils__WEBPACK_IMPORTED_MODULE_16__["default"],

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_15___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_15___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object)]),

  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),

  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOf(['always', 'hover', 'none']),

  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ "./node_modules/@mui/material/Link/linkClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Link/linkClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLinkUtilityClass": () => (/* binding */ getLinkUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");

function getLinkUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiLink', slot);
}
const linkClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkClasses);

/***/ }),

/***/ "./Components/link.jsx":
/*!*****************************!*\
  !*** ./Components/link.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\link.jsx";






var UDLink = function (props) {
  var id = props.id,
      url = props.url,
      underline = props.underline,
      style = props.style,
      variant = props.variant,
      className = props.className,
      openInNewWindow = props.openInNewWindow,
      content = props.content,
      text = props.text,
      _onClick = props.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    href: _onClick ? ":" : url,
    rel: "noopener",
    underline: underline,
    style: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style),
    variant: variant,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, "ud-mu-link"),
    target: openInNewWindow ? '_blank' : '_self',
    onClick: function onClick(e) {
      if (_onClick) {
        e.preventDefault();

        _onClick();
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, !text ? UniversalDashboard.renderComponent(content) : text);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_3__.withComponentFeatures)(UDLink));

/***/ })

}]);
//# sourceMappingURL=Components_link_jsx.02ec21edb46c6ea22f31ccb5f121cbcb.bundle.map