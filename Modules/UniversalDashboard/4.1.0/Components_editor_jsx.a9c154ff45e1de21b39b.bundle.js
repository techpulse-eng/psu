"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_editor_jsx"],{

/***/ "./Components/editor.jsx":
/*!*******************************!*\
  !*** ./Components/editor.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js");
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_embed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/table */ "./node_modules/@editorjs/table/dist/table.js");
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/paragraph */ "./node_modules/@editorjs/paragraph/dist/bundle.js");
/* harmony import */ var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_paragraph__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/warning */ "./node_modules/@editorjs/warning/dist/bundle.js");
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js");
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_code__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editorjs_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/link */ "./node_modules/@editorjs/link/dist/bundle.js");
/* harmony import */ var _editorjs_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _editorjs_raw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @editorjs/raw */ "./node_modules/@editorjs/raw/dist/bundle.js");
/* harmony import */ var _editorjs_raw__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editorjs_raw__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/bundle.js");
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_editorjs_marker__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _editorjs_checklist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @editorjs/checklist */ "./node_modules/@editorjs/checklist/dist/bundle.js");
/* harmony import */ var _editorjs_checklist__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_editorjs_checklist__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/bundle.js");
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_editorjs_delimiter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @editorjs/inline-code */ "./node_modules/@editorjs/inline-code/dist/bundle.js");
/* harmony import */ var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_editorjs_inline_code__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js");
/* harmony import */ var _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_editorjs_simple_image__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_editor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-editor-js */ "./node_modules/react-editor-js/dist/react-editor-js.es.js");
/* harmony import */ var _son_xx_editor_js_parser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @son_xx/editor-js-parser */ "./node_modules/@son_xx/editor-js-parser/index.js");
/* harmony import */ var _son_xx_editor_js_parser__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_son_xx_editor_js_parser__WEBPACK_IMPORTED_MODULE_19__);
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\editor.jsx";





















var EDITOR_JS_TOOLS = {
  embed: (_editorjs_embed__WEBPACK_IMPORTED_MODULE_2___default()),
  table: (_editorjs_table__WEBPACK_IMPORTED_MODULE_3___default()),
  paragraph: (_editorjs_paragraph__WEBPACK_IMPORTED_MODULE_4___default()),
  list: (_editorjs_list__WEBPACK_IMPORTED_MODULE_5___default()),
  warning: (_editorjs_warning__WEBPACK_IMPORTED_MODULE_6___default()),
  code: (_editorjs_code__WEBPACK_IMPORTED_MODULE_7___default()),
  linkTool: (_editorjs_link__WEBPACK_IMPORTED_MODULE_8___default()),
  image: (_editorjs_image__WEBPACK_IMPORTED_MODULE_9___default()),
  raw: (_editorjs_raw__WEBPACK_IMPORTED_MODULE_10___default()),
  header: (_editorjs_header__WEBPACK_IMPORTED_MODULE_11___default()),
  quote: (_editorjs_quote__WEBPACK_IMPORTED_MODULE_12___default()),
  marker: (_editorjs_marker__WEBPACK_IMPORTED_MODULE_13___default()),
  checklist: (_editorjs_checklist__WEBPACK_IMPORTED_MODULE_14___default()),
  delimiter: (_editorjs_delimiter__WEBPACK_IMPORTED_MODULE_15___default()),
  inlineCode: (_editorjs_inline_code__WEBPACK_IMPORTED_MODULE_16___default()),
  simpleImage: (_editorjs_simple_image__WEBPACK_IMPORTED_MODULE_17___default())
};

var UDEditor = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_editor_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    data: props.data,
    tools: EDITOR_JS_TOOLS,
    onChange: function save(api, data) {
      if (props.onChange) {
        var myData = data;

        if (props.format === "html") {
          myData = _son_xx_editor_js_parser__WEBPACK_IMPORTED_MODULE_19___default()(data.blocks);
        }

        props.onChange(myData);
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDEditor));

/***/ })

}]);
//# sourceMappingURL=Components_editor_jsx.6d8decc8f28189ea7652d76063a22ea1.bundle.map