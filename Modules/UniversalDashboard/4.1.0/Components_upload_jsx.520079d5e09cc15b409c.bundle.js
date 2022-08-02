"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_upload_jsx"],{

/***/ "./Components/upload.jsx":
/*!*******************************!*\
  !*** ./Components/upload.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/LinearProgress */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _app_config_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app/config.jsx */ "./app/config.jsx");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\upload.jsx";








var dashboardId = (0,_app_config_jsx__WEBPACK_IMPORTED_MODULE_4__.getDashboardId)();

var UDUploadWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_form__WEBPACK_IMPORTED_MODULE_3__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(UDUpload, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 32
      }
    }));
  });
};

var UDUpload = function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var inputEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState6 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      progress = _useState6[0],
      setProgress = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    sx: {
      m: 1
    },
    className: props.className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    accept: props.accept,
    id: props.id,
    type: "file",
    ref: inputEl,
    multiple: props.multiple,
    onChange: function handleUpload() {
      var file = inputEl.current.files[0];
      var filename = file.name;
      var chunkSize = 1024 * 1024 * 5;
      setFile(filename);
      var numberofChunks = Math.ceil(file.size / chunkSize);
      var start = 0;
      var chunkCounter = 0;
      var fileId = "";
      var chunkEnd = start + chunkSize;

      function createChunk(start) {
        chunkCounter++;
        chunkEnd = Math.min(start + chunkSize, file.size);
        var chunk = file.slice(start, chunkEnd);
        var chunkForm = new FormData();
        chunkForm.append('file', chunk, filename);
        uploadChunk(chunkForm, start, chunkEnd);
      }

      function updateProgress(oEvent) {
        var percentComplete, totalPercentComplete;

        if (oEvent.lengthComputable) {
          percentComplete = Math.round(oEvent.loaded / oEvent.total * 100);
          totalPercentComplete = Math.round((chunkCounter - 1) / numberofChunks * 100 + percentComplete / numberofChunks);
          setProgress(totalPercentComplete);
        }
      }

      function uploadChunk(chunkForm, start, chunkEnd) {
        var oReq = new XMLHttpRequest();
        oReq.upload.addEventListener("progress", updateProgress);
        oReq.open('post', '/api/internal/component/upload', true);
        oReq.setRequestHeader('dashboardid', dashboardId);

        if (fileId.length > 0) {
          oReq.setRequestHeader('fileid', fileId);
        }

        oReq.withCredentials = true;
        var contentRange = "bytes " + start + "-" + (chunkEnd - 1) + "/" + file.size;
        oReq.setRequestHeader("Content-Range", contentRange);
        console.log("Content-Range", contentRange);

        oReq.onload = function () {
          var resp = JSON.parse(oReq.response),
              response;
          fileId = resp[0];
          start += chunkSize;

          if (start < file.size) {
            createChunk(start);
          } else {
            response = resp.map(function (x) {
              return "file:".concat(x);
            })[0];
            props.setState({
              value: response
            });
            props.onFieldChange({
              id: props.id,
              value: response
            });

            if (props.onUpload) {
              props.onUpload(response);
            }

            setLoading(false);
          }
        };

        oReq.send(chunkForm);
      }

      createChunk(start);
      setLoading(true);
    },
    style: {
      display: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: props.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: props.variant,
    color: props.color,
    sx: {
      bg: 'primary',
      color: 'text'
    },
    component: "span",
    disabled: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, props.text)), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "determinate",
    value: progress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }), file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 18
    }
  }, file)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_2__.withComponentFeatures)(UDUploadWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_upload_jsx.c012943175389cded0342bc621af89cd.bundle.map