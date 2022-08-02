"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_transition_jsx"],{

/***/ "./node_modules/@mui/material/Zoom/Zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Zoom/Zoom.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/elementAcceptingRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@mui/material/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@mui/material/utils/useForkRef.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];








const styles = {
  entering: {
    transform: 'none'
  },
  entered: {
    transform: 'none'
  }
};
/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](/material-ui/react-button/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Zoom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Zoom(props, ref) {
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_5__["default"]
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__["default"])(children.ref, ref);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__["default"])(nodeRef, foreignRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.reflow)(node); // So the animation always start from the start.

    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);

  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          transform: 'scale(0)',
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 true ? Zoom.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_9__["default"].isRequired,

  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)]),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_8___default().number), prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zoom);

/***/ }),

/***/ "./Components/transition.jsx":
/*!***********************************!*\
  !*** ./Components/transition.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Zoom/Zoom.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grow/Grow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slide/Slide.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\transition.jsx";




var TransitionWrapper = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TransitionWrapper, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionWrapper);

  function TransitionWrapper() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TransitionWrapper);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TransitionWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return TransitionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

function Transition(props) {
  if (props.transition === "fade") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      timeout: props.timeout,
      "in": props["in"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, props.render(props.children)));
  }

  if (props.transition === "zoom") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      timeout: props.timeout,
      "in": props["in"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, props.render(props.children)));
  }

  if (props.transition === "grow") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      timeout: props.timeout,
      "in": props["in"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, props.render(props.children)));
  }

  if (props.transition === "slide") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      timeout: props.timeout,
      "in": props["in"],
      direction: props.slideDirection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, props.render(props.children)));
  }

  if (props.transition === "collapse") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      timeout: props.timeout,
      "in": props["in"],
      collapsedSize: props.collapsedHeight,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, props.render(props.children)));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_5__.withComponentFeatures)(Transition));

/***/ })

}]);
//# sourceMappingURL=Components_transition_jsx.8e00a91c44104588fe3eda727ac7d8c0.bundle.map