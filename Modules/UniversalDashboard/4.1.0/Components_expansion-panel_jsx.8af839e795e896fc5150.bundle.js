"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_expansion-panel_jsx"],{

/***/ "./Components/expansion-panel.jsx":
/*!****************************************!*\
  !*** ./Components/expansion-panel.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccordionGroup)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./Components/icon.jsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");

var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\expansion-panel.jsx";










var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    root: {
      width: '100%',
      display: 'block'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  };
});

function UDExpansionPanel(props) {
  var classes = useStyles();
  var style = (0,emotion__WEBPACK_IMPORTED_MODULE_4__.css)(".MuiExpansionPanelDetails-root { display: block !important");

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(props.active),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: props.id,
    id: props.id,
    expanded: expanded,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, style, props.className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__["default"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }),
    id: props.id,
    onClick: function onClick() {
      return setExpanded(!expanded);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, props.icon && !props.icon.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: props.icon,
    style: {
      margin: '5px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 52
    }
  }), props.icon && props.icon.icon && UniversalDashboard.renderComponent(props.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, UniversalDashboard.renderComponent(props.children)));
}

function AccordionGroup(props) {
  var _this = this;

  var classes = useStyles();
  var children = null;

  if (Array.isArray(props.children)) {
    children = props.children.map(function (x) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(UDExpansionPanel, Object.assign({}, x, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 44
        }
      }));
    });
  } else {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(UDExpansionPanel, Object.assign({}, props.children, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 20
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, children);
}

/***/ })

}]);
//# sourceMappingURL=Components_expansion-panel_jsx.cd818d25545aa0e717295cfcc83e8c0e.bundle.map