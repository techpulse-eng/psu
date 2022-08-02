"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_transfer-list_jsx"],{

/***/ "./Components/transfer-list.jsx":
/*!**************************************!*\
  !*** ./Components/transfer-list.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./Components/form.jsx");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");



var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\transfer-list.jsx";






var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");










var UDTransferListWithContext = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_form__WEBPACK_IMPORTED_MODULE_4__.FormContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, function (_ref) {
    var onFieldChange = _ref.onFieldChange;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(UDTransferList, Object.assign({}, props, {
      onFieldChange: onFieldChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }));
  });
};

var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    root: {
      margin: 'auto'
    },
    paper: {
      width: 200,
      height: 230,
      overflow: 'auto'
    },
    button: {
      margin: theme.spacing(0.5, 0)
    }
  };
});

function not(a, b) {
  return a.filter(function (value) {
    return b.indexOf(value) === -1;
  });
}

function intersection(a, b) {
  return a.filter(function (value) {
    return b.indexOf(value) !== -1;
  });
}

var UDTransferList = function (props) {
  var onChange = function (right) {
    var selectedItem = props.item.filter(function (m) {
      return right.find(function (x) {
        return m.value === x;
      }) != null;
    });
    props.onFieldChange({
      id: props.id,
      value: right
    });
    props.setState({
      selectedItem: selectedItem
    });

    if (props.onChange) {
      props.onChange(selectedItem);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    props.onFieldChange({
      id: props.id,
      value: props.selectedItem
    });
  }, [props.selectedItem]);
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState([]),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(props.item.filter(function (m) {
    return props.selectedItem.find(function (x) {
      return x === m.value;
    }) == null;
  }).map(function (m) {
    return m.value;
  })),
      _React$useState4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      left = _React$useState4[0],
      setLeft = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__.useState(props.item.filter(function (m) {
    return props.selectedItem.find(function (x) {
      return x === m.value;
    }) != null;
  }).map(function (m) {
    return m.value;
  })),
      _React$useState6 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      right = _React$useState6[0],
      setRight = _React$useState6[1];

  var leftChecked = intersection(checked, left);
  var rightChecked = intersection(checked, right);

  var handleToggle = function (value) {
    return function () {
      var currentIndex = checked.indexOf(value);

      var newChecked = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  };

  var customList = function (items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.paper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
      dense: true,
      component: "div",
      role: "list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }
    }, items.map(function (item) {
      var value = item.value;
      var labelId = "transfer-list-item-".concat(value, "-label");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: value,
        role: "listitem",
        button: true,
        onClick: handleToggle(value),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        checked: checked.indexOf(value) !== -1,
        tabIndex: -1,
        disableRipple: true,
        inputProps: {
          'aria-labelledby': labelId
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: labelId,
        primary: item.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }
    })));
  };

  var leftItems = props.item.filter(function (m) {
    return left.find(function (x) {
      return x === m.value;
    }) != null;
  });
  var rightItems = props.item.filter(function (m) {
    return right.find(function (x) {
      return x === m.value;
    }) != null;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    spacing: 2,
    justifyContent: "center",
    alignItems: "center",
    className: classNames(classes.root, props.className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, customList(leftItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    direction: "column",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: function handleAllRight() {
      var selected = right.concat(left);
      setRight(selected);
      setLeft([]);
      onChange(selected);
    },
    disabled: left.length === 0,
    "aria-label": "move all right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, "\u226B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: function handleCheckedRight() {
      var selected = right.concat(leftChecked);
      setRight(selected);
      onChange(selected);
      setLeft(not(left, leftChecked));
      setChecked(not(checked, leftChecked));
    },
    disabled: leftChecked.length === 0,
    "aria-label": "move selected right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: function handleCheckedLeft() {
      setLeft(left.concat(rightChecked));
      var selected = not(right, rightChecked);
      setRight(selected);
      onChange(selected);
      setChecked(not(checked, rightChecked));
    },
    disabled: rightChecked.length === 0,
    "aria-label": "move selected left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, "<"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "outlined",
    size: "small",
    className: classes.button,
    onClick: function handleAllLeft() {
      setLeft(left.concat(right));
      setRight([]);
      onChange([]);
    },
    disabled: right.length === 0,
    "aria-label": "move all left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, "\u226A"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, customList(rightItems)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_3__.withComponentFeatures)(UDTransferListWithContext));

/***/ })

}]);
//# sourceMappingURL=Components_transfer-list_jsx.047989f02d6271034ab4b87dd650da79.bundle.map