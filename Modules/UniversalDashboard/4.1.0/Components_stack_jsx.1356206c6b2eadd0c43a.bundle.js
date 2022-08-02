"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_stack_jsx"],{

/***/ "./node_modules/@mui/material/Stack/Stack.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Stack/Stack.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "style": () => (/* binding */ style),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/breakpoints.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/spacing.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/deepmerge.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["component", "direction", "spacing", "divider", "children"];






/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */



function joinChildren(children, separator) {
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }

    return output;
  }, []);
}

const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};

const style = ({
  ownerState,
  theme
}) => {
  let styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    display: 'flex'
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
    theme
  }, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    const transformer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.createUnarySpacing)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    const directionValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.resolveBreakpointValues)({
      values: ownerState.spacing,
      base
    });

    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.getValue)(transformer, propValue)
        }
      };
    };

    styles = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.handleBreakpoints)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  return styles;
};
const StackRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_9__["default"])(themeProps);

  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StackRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 true ? Stack.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().elementType),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)]),

  /**
   * Add an element between each child.
   */
  divider: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node),

  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)]),

  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ "./Components/stack.jsx":
/*!******************************!*\
  !*** ./Components/stack.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\stack.jsx";




function UDStack(props) {
  var children = props.render(props.children);
  var divider = null;

  if (props.divider) {
    divider = props.render(props.divider);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
    divider: divider,
    style: {
      width: props.fullWidth ? "100%" : null
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }
  }), children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDStack));

/***/ })

}]);
//# sourceMappingURL=Components_stack_jsx.0c9a4ee6dd580f2aae417de924695b56.bundle.map