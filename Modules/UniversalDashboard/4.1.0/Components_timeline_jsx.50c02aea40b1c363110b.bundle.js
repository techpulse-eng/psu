"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_timeline_jsx"],{

/***/ "./Components/timeline.jsx":
/*!*********************************!*\
  !*** ./Components/timeline.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_lab_Timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/lab/Timeline */ "./node_modules/@mui/lab/Timeline/Timeline.js");
/* harmony import */ var _mui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/lab/TimelineItem */ "./node_modules/@mui/lab/TimelineItem/TimelineItem.js");
/* harmony import */ var _mui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/lab/TimelineSeparator */ "./node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js");
/* harmony import */ var _mui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/lab/TimelineConnector */ "./node_modules/@mui/lab/TimelineConnector/TimelineConnector.js");
/* harmony import */ var _mui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/lab/TimelineContent */ "./node_modules/@mui/lab/TimelineContent/TimelineContent.js");
/* harmony import */ var _mui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/lab/TimelineOppositeContent */ "./node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js");
/* harmony import */ var _mui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/lab/TimelineDot */ "./node_modules/@mui/lab/TimelineDot/TimelineDot.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\timeline.jsx";











var UDTimeline = function (props) {
  var children = props.children;

  if (!Array.isArray(children)) {
    children = [children];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_Timeline__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: props.position,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, children.map(function (x) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, x.oppositeContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, props.render(x.oppositeContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: x.variant,
      color: x.color,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, x.icon && props.render(x.icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, props.render(x.content)));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDTimeline));

/***/ })

}]);
//# sourceMappingURL=Components_timeline_jsx.2d5232c3a6fdc0251a083ada251a9bd2.bundle.map