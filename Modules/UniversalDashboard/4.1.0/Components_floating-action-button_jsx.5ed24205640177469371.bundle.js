"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_floating-action-button_jsx"],{

/***/ "./node_modules/@mui/material/Fab/Fab.js":
/*!***********************************************!*\
  !*** ./node_modules/@mui/material/Fab/Fab.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@mui/material/ButtonBase/ButtonBase.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _fabClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fabClasses */ "./node_modules/@mui/material/Fab/fabClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"];











const useUtilityClasses = ownerState => {
  const {
    color,
    variant,
    classes,
    size
  } = ownerState;
  const slots = {
    root: ['root', variant, `size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(size)}`, color === 'inherit' ? 'colorInherit' : color]
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _fabClasses__WEBPACK_IMPORTED_MODULE_7__.getFabUtilityClass, classes);
};

const FabRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])(_ButtonBase__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: 'MuiFab',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, styles[(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.size)], styles[ownerState.color]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
    minHeight: 36,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
      duration: theme.transitions.duration.short
    }),
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (theme.vars || theme).zIndex.fab,
    boxShadow: (theme.vars || theme).shadows[6],
    '&:active': {
      boxShadow: (theme.vars || theme).shadows[12]
    },
    color: theme.vars ? theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: (theme.vars || theme).palette.grey[300],
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette.grey[300]
      },
      textDecoration: 'none'
    },
    [`&.${_fabClasses__WEBPACK_IMPORTED_MODULE_7__["default"].focusVisible}`]: {
      boxShadow: (theme.vars || theme).shadows[6]
    },
    [`&.${_fabClasses__WEBPACK_IMPORTED_MODULE_7__["default"].disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  }, ownerState.size === 'small' && {
    width: 40,
    height: 40
  }, ownerState.size === 'medium' && {
    width: 48,
    height: 48
  }, ownerState.variant === 'extended' && {
    borderRadius: 48 / 2,
    padding: '0 16px',
    width: 'auto',
    minHeight: 'auto',
    minWidth: 48,
    height: 48
  }, ownerState.variant === 'extended' && ownerState.size === 'small' && {
    width: 'auto',
    padding: '0 8px',
    borderRadius: 34 / 2,
    minWidth: 34,
    height: 34
  }, ownerState.variant === 'extended' && ownerState.size === 'medium' && {
    width: 'auto',
    padding: '0 16px',
    borderRadius: 40 / 2,
    minWidth: 40,
    height: 40
  }, ownerState.color === 'inherit' && {
    color: 'inherit'
  });
}, ({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerState.color !== 'inherit' && ownerState.color !== 'default' && (theme.vars || theme).palette[ownerState.color] != null && {
  color: (theme.vars || theme).palette[ownerState.color].contrastText,
  backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].main
    }
  }
}));
const Fab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Fab(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__["default"])({
    props: inProps,
    name: 'MuiFab'
  });

  const {
    children,
    className,
    color = 'default',
    component = 'button',
    disabled = false,
    disableFocusRipple = false,
    focusVisibleClassName,
    size = 'large',
    variant = 'circular'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    color,
    component,
    disabled,
    disableFocusRipple,
    size,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FabRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.focusVisible, focusVisibleClassName),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: children
  }));
});
 true ? Fab.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'default'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['default', 'error', 'info', 'inherit', 'primary', 'secondary', 'success', 'warning']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * @ignore
   */
  focusVisibleClassName: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['small', 'medium', 'large']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),

  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['circular', 'extended']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fab);

/***/ }),

/***/ "./node_modules/@mui/material/Fab/fabClasses.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/material/Fab/fabClasses.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFabUtilityClass": () => (/* binding */ getFabUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");

function getFabUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiFab', slot);
}
const fabClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiFab', ['root', 'primary', 'secondary', 'extended', 'circular', 'focusVisible', 'disabled', 'colorInherit', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'info', 'error', 'warning', 'success']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fabClasses);

/***/ }),

/***/ "./Components/floating-action-button.jsx":
/*!***********************************************!*\
  !*** ./Components/floating-action-button.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingActionButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Fab */ "./node_modules/@mui/material/Fab/Fab.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\floating-action-button.jsx";




var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

function _onClick(props) {
  if (props.onClick) {
    UniversalDashboard.publish('element-event', {
      type: "clientEvent",
      eventId: props.onClick,
      eventName: 'onChange',
      eventData: ''
    });
  }
}

function FloatingActionButton(props) {
  var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
    return {
      root: {
        '& > *': {
          margin: theme.spacing(1)
        }
      },
      extendedIcon: {
        marginRight: theme.spacing(1)
      },
      fabRight: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
      },
      fabLeft: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2)
      }
    };
  });
  var classes = useStyles();
  var icon = null;

  if (props.icon) {
    icon = UniversalDashboard.renderComponent(props.icon);
  }

  var position = null;

  if (props.position === 'bottomright') {
    position = classes.fabRight;
  }

  if (props.position === 'bottomleft') {
    position = classes.fabLeft;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classNames(classes.root, props.className, position),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      bg: 'primary',
      color: 'text'
    },
    onClick: function onClick() {
      return _onClick(props);
    },
    size: props.size,
    id: props.id,
    color: props.themeColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, icon));
}

/***/ })

}]);
//# sourceMappingURL=Components_floating-action-button_jsx.3d9a6128d3c47b4b714ec65edf1658e4.bundle.map