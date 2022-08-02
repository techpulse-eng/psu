(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_table_v2_table_js"],{

/***/ "./Components/table/components/baseTableBody.js":
/*!******************************************************!*\
  !*** ./Components/table/components/baseTableBody.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseTableBody)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _v2_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../v2/utilities */ "./Components/table/v2/utilities.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");

var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\components\\baseTableBody.js";






function ExpandableRow(_ref) {
  var _this = this;

  var row = _ref.row,
      render = _ref.render;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    sx: {
      '& > *': {
        borderBottom: 'unset'
      }
    }
  }, row.getRowProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "expand row",
    size: "small",
    onClick: function onClick() {
      return setOpen(!open);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 47
    }
  }))), row.cells.filter(function (cell) {
    return !cell.column.hidden;
  }).map(function (cell, index) {
    var _cell$column, _cell$column2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, cell.getCellProps(), {
      style: (_cell$column = cell.column) === null || _cell$column === void 0 ? void 0 : _cell$column.style,
      align: (_cell$column2 = cell.column) === null || _cell$column2 === void 0 ? void 0 : _cell$column2.align,
      padding: (0,_v2_utilities__WEBPACK_IMPORTED_MODULE_2__.setCellPadding)(cell.column.id, index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), cell.render("Cell"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      paddingBottom: 0,
      paddingTop: 0
    },
    colSpan: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "in": open,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      margin: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, render(row.original.rowexpanded))))));
}

function BaseTableBody(_ref2) {
  var _this2 = this;

  var getTableBodyProps = _ref2.getTableBodyProps,
      prepareRow = _ref2.prepareRow,
      totalData = _ref2.totalData,
      pageSize = _ref2.pageSize,
      pageIndex = _ref2.pageIndex,
      visibleColumns = _ref2.visibleColumns,
      isDense = _ref2.isDense,
      page = _ref2.page,
      render = _ref2.render;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, getTableBodyProps(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), page.map(function (row) {
    prepareRow(row);

    if (row.original.rowexpanded) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ExpandableRow, {
        row: row,
        render: render,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 18
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, row.getRowProps(), {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }), row.cells.filter(function (cell) {
      return !cell.column.hidden;
    }).map(function (cell, index) {
      var _cell$column3, _cell$column4;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, cell.getCellProps(), {
        style: (_cell$column3 = cell.column) === null || _cell$column3 === void 0 ? void 0 : _cell$column3.style,
        align: (_cell$column4 = cell.column) === null || _cell$column4 === void 0 ? void 0 : _cell$column4.align,
        padding: (0,_v2_utilities__WEBPACK_IMPORTED_MODULE_2__.setCellPadding)(cell.column.id, index),
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }), cell.render("Cell"));
    }));
  }), (0,_v2_utilities__WEBPACK_IMPORTED_MODULE_2__.setEmptyRows)({
    totalData: totalData,
    pageSize: pageSize,
    pageIndex: pageIndex,
    visibleColumns: visibleColumns,
    isDense: isDense
  }));
}

/***/ }),

/***/ "./Components/table/components/baseTableFooter.js":
/*!********************************************************!*\
  !*** ./Components/table/components/baseTableFooter.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseTableFooter)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableFooter/TableFooter.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TablePagination/TablePagination.js");
/* harmony import */ var _v2_TablePaginationActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../v2/TablePaginationActions */ "./Components/table/v2/TablePaginationActions.js");
/* harmony import */ var _v2_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../v2/utilities */ "./Components/table/v2/utilities.js");

var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\components\\baseTableFooter.js";
//@ts-check




function BaseTableFooter(_ref) {
  var userPageSize = _ref.userPageSize,
      userPageSizeOptions = _ref.userPageSizeOptions,
      colSpan = _ref.colSpan,
      count = _ref.count,
      pageIndex = _ref.pageIndex,
      gotoPage = _ref.gotoPage,
      setPageSize = _ref.setPageSize,
      pageSize = _ref.pageSize,
      isVisible = _ref.isVisible,
      loading = _ref.loading,
      disablePageSizeAll = _ref.disablePageSizeAll;
  var rowsPerPageOptions = [userPageSize].concat((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(userPageSizeOptions));

  if (!disablePageSizeAll) {
    rowsPerPageOptions.push({
      label: "All",
      value: count
    });
  }

  return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      paddingLeft: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      marginTop: '20px',
      marginLeft: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 63
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 146
    }
  }), !loading && count === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      paddingLeft: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "No data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    align: "right",
    rowsPerPageOptions: rowsPerPageOptions.sort(function (a, b) {
      return a - b;
    }).filter(_v2_utilities__WEBPACK_IMPORTED_MODULE_3__.onlyUnique),
    colSpan: colSpan,
    count: count,
    rowsPerPage: pageSize,
    page: pageIndex,
    onPageChange: function (_, newPage) {
      gotoPage(newPage);
    },
    onRowsPerPageChange: function (event) {
      setPageSize(Number(event.target.value));
    },
    ActionsComponent: _v2_TablePaginationActions__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./Components/table/components/baseTableHead.js":
/*!******************************************************!*\
  !*** ./Components/table/components/baseTableHead.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseTableHead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableSortLabel/TableSortLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _v2_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../v2/utilities */ "./Components/table/v2/utilities.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\components\\baseTableHead.js";



function BaseTableHead(_ref) {
  var _this = this;

  var headerGroups = _ref.headerGroups,
      columns = _ref.columns,
      expandable = _ref.expandable;

  function setTableSortLabel(column) {
    return column.id !== "selection" && column.getSortByToggleProps ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      active: column.isSorted,
      direction: column.isSortedDesc ? "desc" : "asc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }) : null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, headerGroup.getHeaderGroupProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }), expandable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 28
      }
    }), headerGroup.headers.filter(function (column) {
      return !column.hidden;
    }).map(function (column, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, column.id === "selection" || !column.getSortByToggleProps ? column.getHeaderProps() : column.getHeaderProps(column.getSortByToggleProps()), {
        align: column.align,
        padding: (0,_v2_utilities__WEBPACK_IMPORTED_MODULE_1__.setCellPadding)(column.id, index),
        style: {
          fontWeight: 600
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }
      }), column.render("Header"), setTableSortLabel(column));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        display: !columns.some(function (column) {
          return column.showFilter;
        }) && "none"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, expandable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 28
      }
    }), headerGroup.headers.filter(function (column) {
      return !column.hidden;
    }).map(function (column, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        padding: (0,_v2_utilities__WEBPACK_IMPORTED_MODULE_1__.setCellPadding)(column.id, index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, column.showFilter ? column.render("Filter") : null);
    })));
  }));
}

/***/ }),

/***/ "./Components/table/exportButton.jsx":
/*!*******************************************!*\
  !*** ./Components/table/exportButton.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExportButton)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_SaveAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/SaveAlt */ "./node_modules/@mui/icons-material/SaveAlt.js");
/* harmony import */ var _utilities_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/utils */ "./Components/utilities/utils.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");

var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\exportButton.jsx";







var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    input: {
      marginLeft: theme.spacing(0),
      flex: 1
    }
  };
});
function ExportButton(_ref) {
  var exportData = _ref.exportData,
      exportFileName = _ref.exportFileName,
      setExportFileName = _ref.setExportFileName,
      textOption = _ref.textOption,
      exportOption = _ref.exportOption;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  function handleClose() {
    setAnchorEl(null);
    setExportFileName('');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, textOption["export"], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-controls": "export-menu",
    "aria-haspopup": "true",
    onClick: function (event) {
      setAnchorEl(event.currentTarget);
    },
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_SaveAlt__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "export-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, exportOption.indexOf("CSV") === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 43
    }
  }) : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('csv', true);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 65
    }
  }, textOption.exportAllCsv), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('csv', false);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, textOption.exportCurrentViewCsv), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  })], exportOption.indexOf("XLSX") === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 44
    }
  }) : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('xlsx', true);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, textOption.exportAllXlsx), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('xlsx', false);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, textOption.exportCurrentViewXlsx), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  })], exportOption.indexOf("PDF") === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 43
    }
  }) : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('pdf', true);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, textOption.exportAllPdf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('pdf', false);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, textOption.exportCurrentViewPdf), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  })], exportOption.indexOf("JSON") === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 44
    }
  }) : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('json', true);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, textOption.exportAllJson), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"] // disabled={!exportFileName}
  , {
    onClick: function onClick() {
      exportData('json', false);
      handleClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, textOption.exportCurrentViewJson), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  })], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    autoFocus: true,
    variant: "outlined",
    label: textOption.exportFileName,
    className: classes.input,
    value: exportFileName,
    defaultValue: "data",
    size: "small" // placeholder='file name'
    ,
    onChange: function onChange(event) {
      return setExportFileName(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 6
    }
  }))));
}

/***/ }),

/***/ "./Components/table/v2/Alert.js":
/*!**************************************!*\
  !*** ./Components/table/v2/Alert.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\Alert.js";


function AlertCard(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Error"), error.message);
}

/***/ }),

/***/ "./Components/table/v2/TablePaginationActions.js":
/*!*******************************************************!*\
  !*** ./Components/table/v2/TablePaginationActions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/FirstPage */ "./node_modules/@mui/icons-material/FirstPage.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowLeft */ "./node_modules/@mui/icons-material/KeyboardArrowLeft.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowRight */ "./node_modules/@mui/icons-material/KeyboardArrowRight.js");
/* harmony import */ var _mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/LastPage */ "./node_modules/@mui/icons-material/LastPage.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\TablePaginationActions.js";









var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  return {
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5)
    }
  };
});

var TablePaginationActions = function (props) {
  var classes = useStyles();
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var count = props.count,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      onPageChange = props.onPageChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function handleFirstPageButtonClick(event) {
      onPageChange(event, 0);
    },
    disabled: page === 0,
    "aria-label": "first page",
    size: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function handleBackButtonClick(event) {
      onPageChange(event, page - 1);
    },
    disabled: page === 0,
    "aria-label": "previous page",
    size: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function handleNextButtonClick(event) {
      onPageChange(event, page + 1);
    },
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "next page",
    size: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function handleLastPageButtonClick(event) {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    },
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "last page",
    size: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }
  }, theme.direction === 'rtl' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TablePaginationActions);

/***/ }),

/***/ "./Components/table/v2/baseTable.js":
/*!******************************************!*\
  !*** ./Components/table/v2/baseTable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableBase)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Table */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var react_table_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table-plugins */ "./node_modules/react-table-plugins/dist/index.es.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities */ "./Components/table/v2/utilities.js");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./columns */ "./Components/table/v2/columns.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters */ "./Components/table/v2/filters.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toolbar */ "./Components/table/v2/toolbar.js");
/* harmony import */ var _hooks_useFetchData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useFetchData */ "./Components/table/v2/hooks/useFetchData.js");
/* harmony import */ var _components_baseTableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/baseTableBody */ "./Components/table/components/baseTableBody.js");
/* harmony import */ var _components_baseTableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/baseTableHead */ "./Components/table/components/baseTableHead.js");
/* harmony import */ var _components_baseTableFooter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/baseTableFooter */ "./Components/table/components/baseTableFooter.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\baseTable.js";
var _excluded = ["data", "columns", "sortColumn", "isServerSide"];













 // Create a default prop getter
// const defaultPropGetter = () => ({})

function TableBase(_ref) {
  var _this = this;

  var data = _ref.data,
      columns = _ref.columns,
      sortColumn = _ref.sortColumn,
      isServerSide = _ref.isServerSide,
      restOfProps = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(function () {
    return "";
  }),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      fileName = _React$useState2[0],
      setFileName = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
      _React$useState4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      exporting = _React$useState4[0],
      setExporting = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4__.useState(react__WEBPACK_IMPORTED_MODULE_4__.useMemo(function () {
    return (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.normalizedData)(data);
  }, [])),
      _React$useState6 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      staticData = _React$useState6[0],
      setStaticData = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    setStaticData((0,_utilities__WEBPACK_IMPORTED_MODULE_6__.normalizedData)(data));
  }, [data]);

  var _useFetchData = (0,_hooks_useFetchData__WEBPACK_IMPORTED_MODULE_10__["default"])({
    loadData: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.loadData
  }),
      tableData = _useFetchData.data,
      pCount = _useFetchData.pageCount,
      skipPageReset = _useFetchData.skipPageReset,
      tCount = _useFetchData.total,
      loading = _useFetchData.loading,
      onFetchData = _useFetchData.onFetchData;

  var getTotalCount = function () {
    return isServerSide ? tCount : flatRows ? flatRows.length : 0;
  };

  var getExportFileName = function () {
    return "".concat(fileName || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.title) || 'data');
  };

  var sortByCols = [];

  if ((restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.defaultSortDirection) && (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.defaultSortDirection) !== '') {
    sortByCols.push({
      id: sortColumn,
      desc: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.defaultSortDirection) === "descending"
    });
  }

  var _useTable = (0,react_table__WEBPACK_IMPORTED_MODULE_14__.useTable)({
    data: isServerSide ? tableData : staticData,
    columns: columns,
    defaultColumn: {
      Cell: function Cell(_ref2) {
        var _ref2$cell = _ref2.cell,
            value = _ref2$cell.value,
            column = _ref2$cell.column,
            row = _ref2$cell.row;

        if ((column === null || column === void 0 ? void 0 : column.cellRenderer) === null) {
          if (!value) return null;
          return value;
        } else {
          return restOfProps.render(row.original["rendered".concat(column.id)]);
        }
      },
      Filter: _filters__WEBPACK_IMPORTED_MODULE_8__.DefaultColumnFilter
    },
    filterTypes: {
      search: _filters__WEBPACK_IMPORTED_MODULE_8__.fuzzyTextFilterFn,
      date: _filters__WEBPACK_IMPORTED_MODULE_8__.dateFilterFn
    },
    initialState: {
      pageIndex: 0,
      pageSize: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showPagination) || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.loadData) ? (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.userPageSize) || 10 : staticData.length,
      sortBy: sortByCols,
      hiddenColumns: [restOfProps.showSelection ? null : "selection"]
    },
    manualPagination: isServerSide,
    manualGlobalFilter: isServerSide,
    manualFilters: isServerSide,
    manualSortBy: isServerSide,
    autoResetPage: !skipPageReset,
    autoResetFilters: !skipPageReset,
    autoResetSortBy: !skipPageReset,
    autoResetSelectedRows: !skipPageReset,
    pageCount: isServerSide ? pCount : -1,
    getRowId: function getRowId(row, index) {
      return isServerSide ? "".concat(row.uid) : index;
    },
    onRowSelection: restOfProps.onRowSelection,
    getExportFileBlob: _utilities__WEBPACK_IMPORTED_MODULE_6__.getExportFileBlob,
    getExportFileName: getExportFileName,
    sortTypes: {
      alphanumeric: function alphanumeric(row1, row2, columnName) {
        var rowOneColumn = row1.values[columnName];
        var rowTwoColumn = row2.values[columnName];
        if (!rowOneColumn) return -1;
        if (!rowTwoColumn) return 1;

        if (isNaN(rowOneColumn)) {
          return rowOneColumn.toUpperCase() > rowTwoColumn.toUpperCase() ? 1 : -1;
        }

        return Number(rowOneColumn) > Number(rowTwoColumn) ? 1 : -1;
      }
    },
    textOption: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.textOption,
    rowCount: getTotalCount(),
    disableSortRemove: restOfProps.disableSortRemove
  }, react_table__WEBPACK_IMPORTED_MODULE_14__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_14__.useFilters, (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showSort) ? react_table__WEBPACK_IMPORTED_MODULE_14__.useSortBy : function () {}, react_table__WEBPACK_IMPORTED_MODULE_14__.usePagination, react_table__WEBPACK_IMPORTED_MODULE_14__.useRowSelect, react_table_plugins__WEBPACK_IMPORTED_MODULE_5__.useExportData, function (hooks) {
    hooks.allColumns.push(function (columns) {
      return [{
        id: "selection",
        Header: function Header(_ref3) {
          var getToggleAllRowsSelectedProps = _ref3.getToggleAllRowsSelectedProps;
          return (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.hideToggleAllRowsSelected) || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.disableMultiSelect) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 89
            }
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_columns__WEBPACK_IMPORTED_MODULE_7__.SelectAllCheckBox, Object.assign({}, getToggleAllRowsSelectedProps(), {
            onRowSelection: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.onRowSelection,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 110
            }
          }));
        },
        Cell: function Cell(_ref4) {
          var row = _ref4.row;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_columns__WEBPACK_IMPORTED_MODULE_7__.SelectCheckBox, Object.assign({}, row.getToggleRowSelectedProps(), {
            row: row,
            singleSelection: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.disableMultiSelect,
            onRowSelection: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.onRowSelection,
            toggleAllRowsSelected: toggleAllRowsSelected,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 13
            }
          }));
        }
      }].concat((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(columns));
    });
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      prepareRow = _useTable.prepareRow,
      page = _useTable.page,
      rows = _useTable.rows,
      gotoPage = _useTable.gotoPage,
      setPageSize = _useTable.setPageSize,
      preGlobalFilteredRows = _useTable.preGlobalFilteredRows,
      setGlobalFilter = _useTable.setGlobalFilter,
      flatRows = _useTable.flatRows,
      exportData = _useTable.exportData,
      visibleColumns = _useTable.visibleColumns,
      selectedFlatRows = _useTable.selectedFlatRows,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      sortBy = _useTable$state.sortBy,
      filters = _useTable$state.filters,
      selectedRowIds = _useTable$state.selectedRowIds,
      globalFilter = _useTable$state.globalFilter,
      toggleAllRowsSelected = _useTable.toggleAllRowsSelected;

  var fetchData = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function () {
    var _sortBy$4, _sortBy$5, _sortBy$6;

    onFetchData({
      filters: filters,
      pageSize: pageSize,
      page: pageIndex,
      search: globalFilter,
      orderBy: ((_sortBy$4 = sortBy[0]) === null || _sortBy$4 === void 0 ? void 0 : _sortBy$4.id) ? {
        field: (_sortBy$5 = sortBy[0]) === null || _sortBy$5 === void 0 ? void 0 : _sortBy$5.id
      } : {},
      orderDirection: ((_sortBy$6 = sortBy[0]) === null || _sortBy$6 === void 0 ? void 0 : _sortBy$6.desc) ? "desc" : "asc",
      properties: columns.map(function (column) {
        return column.accessor;
      })
    });
  }, [onFetchData, pageIndex, pageSize, sortBy, filters, globalFilter]);
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    if (isServerSide) {
      fetchData();
    }
  }, [fetchData, isServerSide, restOfProps.__version]);
  var showSelection = restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showSelection;
  var currentData = isServerSide ? tableData : staticData;
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    if (showSelection) {
      var selectedRows = selectedFlatRows.map(function (row) {
        return row.original;
      });
      restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.setState({
        selectedRows: selectedRows
      });
    } else {
      restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.setState({
        currentData: currentData
      });
    }
  }, [selectedRowIds, currentData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_16__["default"],
    style: {
      margin: '8px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isVisible: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.title) || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showExport) || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showSearch) || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showPagination) && ((restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.paginationLocation) === "top" || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.paginationLocation) === "both"),
    count: getTotalCount(),
    icon: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.icon,
    title: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.title,
    textOption: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.textOption,
    exportOption: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.exportOption,
    showRefresh: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showRefresh,
    refresh: fetchData,
    showExport: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showExport,
    showSearch: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showSearch,
    exportData: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.onExport) ? function exportDataServerSide(type, all) {
      var _sortBy$, _sortBy$2, _sortBy$3;

      if (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.onExport) {
        setExporting(true);
        restOfProps.onExport({
          filters: filters,
          pageSize: pageSize,
          page: pageIndex,
          search: globalFilter,
          orderBy: ((_sortBy$ = sortBy[0]) === null || _sortBy$ === void 0 ? void 0 : _sortBy$.id) ? {
            field: (_sortBy$2 = sortBy[0]) === null || _sortBy$2 === void 0 ? void 0 : _sortBy$2.id
          } : {},
          orderDirection: ((_sortBy$3 = sortBy[0]) === null || _sortBy$3 === void 0 ? void 0 : _sortBy$3.desc) ? "desc" : "asc",
          properties: columns.map(function (column) {
            return column.accessor;
          }),
          allRows: all
        }).then(function (json) {
          setExporting(false);
          var data = JSON.parse(json);
          var dataSource = (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.normalizedData)(data).map(function (row) {
            var arr = [];
            columns.forEach(function (column) {
              arr.push(row[column.accessor.toLowerCase()]);
            });
            return arr;
          });
          var blob = (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.getExportFileBlob)({
            columns: columns.filter(function (x) {
              return !x.disableExport;
            }).map(function (c) {
              return (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, c), {}, {
                exportValue: c.Header
              });
            }),
            fileName: getExportFileName(),
            fileType: type,
            data: dataSource
          });
          (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.downloadFileViaBlob)(blob, getExportFileName(), type);
        });
      }
    } : exportData,
    exportFileName: fileName,
    globalFilter: globalFilter,
    preGlobalFilteredRows: preGlobalFilteredRows,
    setExportFileName: setFileName,
    setGlobalFilter: setGlobalFilter,
    gotoPage: gotoPage,
    setPageSize: setPageSize,
    colSpan: visibleColumns.length,
    pageSize: pageSize,
    pageIndex: pageIndex,
    userPageSize: restOfProps.userPageSize,
    isPaginationVisible: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showPagination) && ((restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.paginationLocation) === "top" || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.paginationLocation) === "both"),
    userPageSizeOptions: restOfProps.userPageSizeOptions,
    disablePageSizeAll: restOfProps.disablePageSizeAll,
    loading: loading || exporting,
    toolbarContent: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.toolbarContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_mui_material_Table__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({}, getTableProps(), {
    id: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.id,
    size: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.isDense) ? "small" : "medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_baseTableHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
    headerGroups: headerGroups,
    columns: columns,
    expandable: currentData === null || currentData === void 0 ? void 0 : currentData.find(function (m) {
      return m.rowexpanded;
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_baseTableBody__WEBPACK_IMPORTED_MODULE_11__["default"], {
    getTableBodyProps: getTableBodyProps // getCellProps={getCellProps}
    ,
    pageIndex: pageIndex,
    pageSize: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showPagination) ? pageSize : getTotalCount(),
    prepareRow: prepareRow,
    visibleColumns: visibleColumns,
    totalData: isServerSide ? tCount : rows === null || rows === void 0 ? void 0 : rows.length,
    page: page,
    isDense: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.isDense,
    render: restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.render,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_baseTableFooter__WEBPACK_IMPORTED_MODULE_13__["default"], Object.assign({}, restOfProps, {
    gotoPage: gotoPage,
    setPageSize: setPageSize,
    colSpan: visibleColumns.length,
    count: getTotalCount(),
    pageSize: pageSize,
    pageIndex: pageIndex,
    userPageSize: restOfProps.userPageSize,
    isVisible: (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.showPagination) && ((restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.paginationLocation) === "bottom" || (restOfProps === null || restOfProps === void 0 ? void 0 : restOfProps.paginationLocation) === "both"),
    userPageSizeOptions: restOfProps.userPageSizeOptions,
    disablePageSizeAll: restOfProps.disablePageSizeAll,
    loading: loading || exporting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }))));
}

/***/ }),

/***/ "./Components/table/v2/columns.js":
/*!****************************************!*\
  !*** ./Components/table/v2/columns.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCheckBox": () => (/* binding */ SelectCheckBox),
/* harmony export */   "SelectAllCheckBox": () => (/* binding */ SelectAllCheckBox)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");


var _excluded = ["indeterminate", "onRowSelection", "singleSelection", "toggleAllRowsSelected", "onChange"],
    _excluded2 = ["indeterminate", "onRowSelection", "onChange"];

var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\columns.js";



var SelectCheckBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
      onRowSelection = _ref.onRowSelection,
      singleSelection = _ref.singleSelection,
      toggleAllRowsSelected = _ref.toggleAllRowsSelected,
      initialOnChange = _ref.onChange,
      rest = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var defaultRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    ref: resolvedRef,
    onChange: function () {
      if (singleSelection) {
        toggleAllRowsSelected(false);
      }

      rest.row.toggleRowSelected();

      if (onRowSelection) {
        onRowSelection((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: rest.row.id
        }, rest.row.values), {}, {
          selected: !rest.row.isSelected
        }));
      }
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }));
});
var SelectAllCheckBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (_ref2, ref) {
  var indeterminate = _ref2.indeterminate,
      onRowSelection = _ref2.onRowSelection,
      onChange = _ref2.onChange,
      rest = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded2);

  var defaultRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    ref: resolvedRef
  }, rest, {
    onChange: function (event, checked) {
      onChange(event, checked);

      if (onRowSelection) {
        onRowSelection({
          id: 'all',
          selected: checked
        });
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 10
    }
  }));
});


/***/ }),

/***/ "./Components/table/v2/filters.js":
/*!****************************************!*\
  !*** ./Components/table/v2/filters.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectColumnFilter": () => (/* binding */ SelectColumnFilter),
/* harmony export */   "AutoCompleteColumnFilter": () => (/* binding */ AutoCompleteColumnFilter),
/* harmony export */   "DateColumnFilter": () => (/* binding */ DateColumnFilter),
/* harmony export */   "SliderColumnFilter": () => (/* binding */ SliderColumnFilter),
/* harmony export */   "NumberRangeColumnFilter": () => (/* binding */ NumberRangeColumnFilter),
/* harmony export */   "filterGreaterThan": () => (/* binding */ filterGreaterThan),
/* harmony export */   "DefaultColumnFilter": () => (/* binding */ DefaultColumnFilter),
/* harmony export */   "dateFilterFn": () => (/* binding */ dateFilterFn),
/* harmony export */   "fuzzyTextFilterFn": () => (/* binding */ fuzzyTextFilterFn)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./Components/table/v2/utilities.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputBase/InputBase.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slider/Slider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles/withStyles */ "./node_modules/@mui/styles/withStyles/withStyles.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Autocomplete */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/lab/AdapterDateFns */ "./node_modules/@mui/lab/node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/lab/LocalizationProvider */ "./node_modules/@mui/lab/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_lab_DatePicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/lab/DatePicker */ "./node_modules/@mui/lab/DatePicker/DatePicker.js");
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");


var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\filters.js";










var CustomInput = (0,_mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    root: {},
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.darken)(theme.palette.background.paper, 0.1) : (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.lighten)(theme.palette.background.paper, 0.2),
      fontSize: 14,
      // border: `1px solid ${darken(theme.palette.background.paper, 0.75)}`,
      padding: '5px 6px 5px 6px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 4
      }
    }
  };
})(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"]);
var CustomSlider = (0,_mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
  return {
    root: {
      color: theme.palette.primary.main // height: 8,

    },
    thumb: {
      height: 16,
      width: 16,
      backgroundColor: theme.palette.primary.main,
      border: '2px solid currentColor',
      marginTop: -7,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit'
      }
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% - 3px)'
    },
    track: {
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.palette.primary.main
    },
    rail: {
      height: 4,
      borderRadius: 2,
      backgroundColor: theme.palette.primary.light
    }
  };
})(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SelectColumnFilter(_ref) {
  var _this = this;

  var _ref$column = _ref.column,
      filterValue = _ref$column.filterValue,
      setFilter = _ref$column.setFilter,
      preFilteredRows = _ref$column.preFilteredRows,
      id = _ref$column.id;
  var options = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var options = new Set();
    preFilteredRows.filter(function (x) {
      return x != null;
    }).forEach(function (row) {
      options.add(row.values[id]);
    });
    return (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options.values());
  }, [id, preFilteredRows]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: filterValue,
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined);
    },
    input: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CustomInput, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }),
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }
  }, "All"), options.sort(function (a, b) {
    return ('' + a).localeCompare(b);
  }).map(function (option, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      value: option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }
    }, option);
  }));
}
function AutoCompleteColumnFilter(_ref2) {
  var _this2 = this;

  var _ref2$column = _ref2.column,
      filterValue = _ref2$column.filterValue,
      setFilter = _ref2$column.setFilter,
      preFilteredRows = _ref2$column.preFilteredRows,
      id = _ref2$column.id;
  var options = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var options = new Set();
    preFilteredRows.forEach(function (row) {
      options.add(row.values[id]);
    });
    return (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options.values());
  }, [id, preFilteredRows]);
  var sortedOptions = options.filter(function (x) {
    return x != null;
  }).sort(function (a, b) {
    return ('' + a).localeCompare(b);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_11__["default"], {
    value: filterValue,
    onChange: function onChange(e, newValue) {
      setFilter(newValue);
    },
    fullWidth: true,
    options: sortedOptions,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, params, {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 29
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 3
    }
  });
}
function DateColumnFilter(_ref3) {
  var _this3 = this;

  var _ref3$column = _ref3.column,
      filterValue = _ref3$column.filterValue,
      setFilter = _ref3$column.setFilter,
      preFilteredRows = _ref3$column.preFilteredRows,
      id = _ref3$column.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    dateAdapter: _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_14__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_lab_DatePicker__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disableToolbar: true,
    clearable: true,
    variant: "dialog",
    format: "MM/dd/yyyy",
    margin: "normal",
    label: "Filter Date",
    value: filterValue,
    onChange: function onChange(e, newValue) {
      setFilter(newValue);
    },
    KeyboardButtonProps: {
      'aria-label': 'change date'
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, params, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 30
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }
  }));
} // This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values

function SliderColumnFilter(_ref4) {
  var _ref4$column = _ref4.column,
      filterValue = _ref4$column.filterValue,
      setFilter = _ref4$column.setFilter,
      preFilteredRows = _ref4$column.preFilteredRows,
      id = _ref4$column.id,
      width = _ref4$column.width;

  function _onChange(event, newValue) {
    setFilter(parseInt(newValue));
  }

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    var max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.filter(function (x) {
      return x.values[id] != null;
    }).forEach(function (row) {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]),
      _React$useMemo2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useMemo, 2),
      min = _React$useMemo2[0],
      max = _React$useMemo2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CustomSlider, {
    style: {
      width: width || undefined
    },
    value: filterValue || min,
    min: min,
    max: max,
    onChange: function onChange(event, value) {
      return _onChange(event, value);
    },
    valueLabelDisplay: "auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 3
    }
  });
}
function NumberRangeColumnFilter(_ref5) {
  var _ref5$column = _ref5.column,
      _ref5$column$filterVa = _ref5$column.filterValue,
      filterValue = _ref5$column$filterVa === void 0 ? [] : _ref5$column$filterVa,
      preFilteredRows = _ref5$column.preFilteredRows,
      setFilter = _ref5$column.setFilter,
      id = _ref5$column.id,
      width = _ref5$column.width;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(function () {
    var min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    var max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.filter(function (x) {
      return x.values[id] != null;
    }).forEach(function (row) {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _React$useMemo3 = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    var max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.filter(function (x) {
      return x.values[id] != null;
    }).forEach(function (row) {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]),
      _React$useMemo4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useMemo3, 2),
      min = _React$useMemo4[0],
      max = _React$useMemo4[1];

  function _onChange2(event, newValue) {
    setFilter(newValue);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CustomSlider, {
    style: {
      width: width || undefined
    },
    value: filterValue.length < 1 ? value : filterValue,
    min: min,
    max: max,
    onChange: function onChange(event, value) {
      return _onChange2(event, value);
    },
    valueLabelDisplay: "auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 3
    }
  });
} // Define a custom filter filter function!

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue >= filterValue;
  });
} // This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number

filterGreaterThan.autoRemove = function (val) {
  return typeof val !== 'number';
}; // Define a default UI for filtering


function DefaultColumnFilter(_ref6) {
  var textOption = _ref6.textOption,
      rowCount = _ref6.rowCount,
      _ref6$column = _ref6.column,
      filterValue = _ref6$column.filterValue,
      preFilteredRows = _ref6$column.preFilteredRows,
      setFilter = _ref6$column.setFilter;
  var count = rowCount;

  if (rowCount == 0 && preFilteredRows.length > 0) {
    count = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
      return preFilteredRows.length;
    }, [preFilteredRows]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CustomInput, {
    value: filterValue || '',
    onChange: function onChange(e) {
      setFilter(e.target.value); // Set undefined to remove the filter entirely
    },
    placeholder: (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.format)(textOption.filterSearch, count),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 3
    }
  });
}
function dateFilterFn(rows, id, filterValue) {
  if (filterValue === '' || !filterValue) {
    return rows;
  }

  var date = new Date(filterValue);
  return rows.filter(function (row) {
    var rowValue = new Date(row.values[id]);
    return rowValue.getDate() == date.getDate();
  });
}
function fuzzyTextFilterFn(rows, id, filterValue) {
  return (0,match_sorter__WEBPACK_IMPORTED_MODULE_4__.matchSorter)(rows, filterValue, {
    keys: [function (row) {
      return row.values[id];
    }]
  });
} // Let the table remove the filter if the string is empty

fuzzyTextFilterFn.autoRemove = function (val) {
  return !val;
};

/***/ }),

/***/ "./Components/table/v2/globalFilter.js":
/*!*********************************************!*\
  !*** ./Components/table/v2/globalFilter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/InputBase.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./Components/table/v2/utilities.js");


var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\globalFilter.js";








var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    search: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: 200
    })
  };
});

var GlobalFilter = function (_ref) {
  var preGlobalFilteredRows = _ref.preGlobalFilteredRows,
      count = _ref.count,
      globalFilter = _ref.globalFilter,
      setGlobalFilter = _ref.setGlobalFilter,
      textOption = _ref.textOption,
      isServerSide = _ref.isServerSide;
  var classes = useStyles(); // Global filter only works with pagination from the first page.
  // This may not be a problem for server side pagination when
  // only the current page is downloaded.

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.searchIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: globalFilter || '',
    onChange: function onChange(e) {
      setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.format)(textOption.search, count),
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }));
};

GlobalFilter.propTypes = {
  preGlobalFilteredRows: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array.isRequired),
  globalFilter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
  setGlobalFilter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalFilter);

/***/ }),

/***/ "./Components/table/v2/hooks/useFetchData.js":
/*!***************************************************!*\
  !*** ./Components/table/v2/hooks/useFetchData.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFetchData)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ "./Components/table/v2/utilities.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_5__);






function useFetchData(_ref) {
  var loadData = _ref.loadData;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _React$useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      skipPageReset = _React$useState2[0],
      setSkipPageReset = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState([]),
      _React$useState4 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__.useState(0),
      _React$useState6 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      pageCount = _React$useState6[0],
      setPageCount = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2__.useState(0),
      _React$useState8 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      total = _React$useState8[0],
      setTotal = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _React$useState10 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      loading = _React$useState10[0],
      setLoading = _React$useState10[1];

  var fetchData = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (_ref2) {
    var filters = _ref2.filters,
        pageSize = _ref2.pageSize,
        page = _ref2.page,
        search = _ref2.search,
        orderBy = _ref2.orderBy,
        orderDirection = _ref2.orderDirection,
        properties = _ref2.properties;
    setSkipPageReset(true);
    setLoading(true);
    loadData({
      filters: filters,
      pageSize: pageSize,
      page: page,
      search: search,
      orderBy: orderBy,
      orderDirection: orderDirection,
      properties: properties
    }).then(function (response) {
      var result = JSON.parse(response),
          _normalizedData,
          _result,
          _result$,
          _data,
          totalCount;

      if (result === null || result === void 0 ? void 0 : result.length) {
        _result = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(result, 1), _result$ = _result[0], _data = _result$.data, totalCount = _result$.totalCount;
        var dataSource = (_normalizedData = (0,_utilities__WEBPACK_IMPORTED_MODULE_4__.normalizedData)(_data)) === null || _normalizedData === void 0 ? void 0 : _normalizedData.map(function (entry) {
          return (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry), {}, {
            uid: (0,crypto_js__WEBPACK_IMPORTED_MODULE_3__.MD5)(JSON.stringify(entry)).toString()
          });
        });
        setData(dataSource);
        setTotal(totalCount);
        setPageCount(Math.ceil(totalCount / pageSize));
        setSkipPageReset(false);
        setLoading(false);
      } else {
        setData([]);
        setTotal(0);
        setPageCount(0);
        setSkipPageReset(false);
        setLoading(false);
      }
    });
  }, []);
  var onFetchDataDebounced = (0,react_table__WEBPACK_IMPORTED_MODULE_5__.useAsyncDebounce)(fetchData, 500);
  return {
    data: data,
    total: total,
    pageCount: pageCount,
    skipPageReset: skipPageReset,
    onFetchData: onFetchDataDebounced,
    loading: loading
  };
} //
// filters,
//         pageSize,
//         page: pageIndex,
//         search: globalFilter,
//         orderBy: { field: sortBy[0]?.id },
//         orderDirection: sortBy[0]?.desc ? "desc" : "asc",
//         properties: columns.map((column) => column.accessor),

/***/ }),

/***/ "./Components/table/v2/table.js":
/*!**************************************!*\
  !*** ./Components/table/v2/table.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alert */ "./Components/table/v2/Alert.js");
/* harmony import */ var _baseTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseTable */ "./Components/table/v2/baseTable.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ "./Components/table/v2/utilities.js");

var _excluded = ["data", "columns"];

var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\table.js";








var Table = function (_ref) {
  var _cols$find;

  var data = _ref.data,
      columns = _ref.columns,
      restOfProps = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  var cols = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.generateColumns)(columns);
  }, [restOfProps]);
  var isServerSide = restOfProps.loadData ? true : false;
  var sortColumn = ((_cols$find = cols.find(function (col) {
    return col.isDefaultSortColumn;
  })) === null || _cols$find === void 0 ? void 0 : _cols$find.accessor) || "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_6__.ErrorBoundary, {
    FallbackComponent: _Alert__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_baseTable__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, restOfProps, {
    data: data,
    columns: cols,
    sortColumn: sortColumn,
    isServerSide: isServerSide // getCellProps={cellInfo => ({
    //   style: {
    //     backgroundColor: cellInfo.value === "Stopped" ? "red" : cellInfo.value === "Running" ? "green" : "unset",
    //     color: cellInfo.value === "Stopped" ? "#fff" : cellInfo.value === "Running" ? "#fff" : "unset"
    //   },
    // })}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_2__.withComponentFeatures)(Table));

/***/ }),

/***/ "./Components/table/v2/toolbar.js":
/*!****************************************!*\
  !*** ./Components/table/v2/toolbar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableToolbar)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Refresh */ "./node_modules/@mui/icons-material/Refresh.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/LinearProgress/LinearProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TablePagination/TablePagination.js");
/* harmony import */ var _exportButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exportButton */ "./Components/table/exportButton.jsx");
/* harmony import */ var _globalFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalFilter */ "./Components/table/v2/globalFilter.js");
/* harmony import */ var _v2_TablePaginationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../v2/TablePaginationActions */ "./Components/table/v2/TablePaginationActions.js");
/* harmony import */ var _v2_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../v2/utilities */ "./Components/table/v2/utilities.js");


var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\toolbar.js";












var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "none"
    }, theme.breakpoints.up("sm"), {
      display: "block"
    }),
    actions: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%" // backgroundColor: '#141414'

    },
    actionsRight: {
      display: "inline-flex",
      alignItems: "center"
    },
    search: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.alpha)(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(3),
      width: "auto"
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("md"), {
      width: "20ch"
    }),
    sectionDesktop: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "none"
    }, theme.breakpoints.up("md"), {
      display: "flex"
    }),
    sectionMobile: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex"
    }, theme.breakpoints.up("md"), {
      display: "none"
    })
  };
});
function TableToolbar(_ref) {
  var title = _ref.title,
      count = _ref.count,
      isVisible = _ref.isVisible,
      showExport = _ref.showExport,
      showSearch = _ref.showSearch,
      showRefresh = _ref.showRefresh,
      refresh = _ref.refresh,
      exportData = _ref.exportData,
      exportFileName = _ref.exportFileName,
      setExportFileName = _ref.setExportFileName,
      preGlobalFilteredRows = _ref.preGlobalFilteredRows,
      setGlobalFilter = _ref.setGlobalFilter,
      globalFilter = _ref.globalFilter,
      textOption = _ref.textOption,
      exportOption = _ref.exportOption,
      icon = _ref.icon,
      userPageSize = _ref.userPageSize,
      userPageSizeOptions = _ref.userPageSizeOptions,
      colSpan = _ref.colSpan,
      pageIndex = _ref.pageIndex,
      gotoPage = _ref.gotoPage,
      setPageSize = _ref.setPageSize,
      pageSize = _ref.pageSize,
      isPaginationVisible = _ref.isPaginationVisible,
      loading = _ref.loading,
      disablePageSizeAll = _ref.disablePageSizeAll,
      toolbarContent = _ref.toolbarContent;
  var classes = useStyles();
  var render = UniversalDashboard.renderComponent;
  var rowsPerPageOptions = [userPageSize].concat((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(userPageSizeOptions));

  if (!disablePageSizeAll) {
    rowsPerPageOptions.push({
      label: "All",
      value: count
    });
  }

  return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.grow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.title,
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, icon && render(icon), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: classes.actionsRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, showSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_globalFilter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    preGlobalFilteredRows: preGlobalFilteredRows,
    globalFilter: globalFilter,
    count: count,
    setGlobalFilter: setGlobalFilter,
    textOption: textOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }), render(toolbarContent), showRefresh && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    "aria-controls": "refresh",
    disabled: loading,
    onClick: refresh,
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  })), showExport && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_exportButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    exportData: exportData,
    exportFileName: exportFileName,
    setExportFileName: setExportFileName,
    textOption: textOption,
    exportOption: exportOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }), isPaginationVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      "float": 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 36
    }
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      marginTop: '20px',
      marginLeft: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 24
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 95
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "right",
    rowsPerPageOptions: rowsPerPageOptions.sort(function (a, b) {
      return a - b;
    }).filter(_v2_utilities__WEBPACK_IMPORTED_MODULE_6__.onlyUnique),
    colSpan: colSpan,
    count: count,
    rowsPerPage: pageSize,
    page: pageIndex,
    onPageChange: function (_, newPage) {
      gotoPage(newPage);
    },
    onRowsPerPageChange: function (event) {
      setPageSize(Number(event.target.value));
    },
    ActionsComponent: _v2_TablePaginationActions__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./Components/table/v2/utilities.js":
/*!******************************************!*\
  !*** ./Components/table/v2/utilities.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizedData": () => (/* binding */ normalizedData),
/* harmony export */   "generateColumns": () => (/* binding */ generateColumns),
/* harmony export */   "getExportFileBlob": () => (/* binding */ getExportFileBlob),
/* harmony export */   "setCellPadding": () => (/* binding */ setCellPadding),
/* harmony export */   "onlyUnique": () => (/* binding */ onlyUnique),
/* harmony export */   "setEmptyRows": () => (/* binding */ setEmptyRows),
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "downloadFileViaBlob": () => (/* binding */ downloadFileViaBlob)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./Components/table/v2/filters.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\table\\v2\\utilities.js";







function normalizedData(dataSource) {
  if (!dataSource || dataSource.length === 0) return [];
  var newDataArray = [];
  dataSource.map(function (data) {
    var keys = Object.keys(data);
    var newData = {};
    keys.forEach(function (key) {
      newData[key.toLowerCase()] = data[key];
    });
    newData["__version"] = 0;
    newDataArray.push(newData);
  });
  return newDataArray;
}
var psFilterNamesToRTFilterNames = {
  select: function select(rows, columnIds, filterValue) {
    return rows.filter(function (row) {
      return row.values[columnIds[0]] != null && row.values[columnIds[0]].includes(filterValue);
    });
  },
  slider: "equals",
  range: "between",
  text: "text",
  fuzzy: "search",
  date: "date"
};
var psFilterNamesToRTFilterFn = {
  select: _filters__WEBPACK_IMPORTED_MODULE_1__.SelectColumnFilter,
  slider: _filters__WEBPACK_IMPORTED_MODULE_1__.SliderColumnFilter,
  range: _filters__WEBPACK_IMPORTED_MODULE_1__.NumberRangeColumnFilter,
  text: _filters__WEBPACK_IMPORTED_MODULE_1__.DefaultColumnFilter,
  autocomplete: _filters__WEBPACK_IMPORTED_MODULE_1__.AutoCompleteColumnFilter,
  date: _filters__WEBPACK_IMPORTED_MODULE_1__.DateColumnFilter
};

var getCellValue = function (row, column) {
  return "".concat(row.values[column.id]);
};

function generateColumns(columnsData) {
  var columns = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return columnsData.map(function (column) {
      var _column$field;

      return {
        accessor: column === null || column === void 0 ? void 0 : (_column$field = column.field) === null || _column$field === void 0 ? void 0 : _column$field.toLowerCase(),
        // column.field
        align: column === null || column === void 0 ? void 0 : column.align,
        // column.width
        cellRenderer: column === null || column === void 0 ? void 0 : column.render,
        // column.render
        disableExport: !(column === null || column === void 0 ? void 0 : column.includeInExport),
        // column.export
        disableGlobalFilter: !(column === null || column === void 0 ? void 0 : column.includeInSearch),
        // column.search
        Filter: psFilterNamesToRTFilterFn[column === null || column === void 0 ? void 0 : column.filterType],
        filter: psFilterNamesToRTFilterNames[column === null || column === void 0 ? void 0 : column.filterType],
        Header: column === null || column === void 0 ? void 0 : column.title,
        // column.title
        isDefaultSortColumn: column === null || column === void 0 ? void 0 : column.isDefaultSortColumn,
        maxWidth: column === null || column === void 0 ? void 0 : column.width,
        // column.width
        showFilter: column === null || column === void 0 ? void 0 : column.showFilter,
        // column.filter
        showSort: column === null || column === void 0 ? void 0 : column.showSort,
        // column.sort
        style: column === null || column === void 0 ? void 0 : column.style,
        width: column === null || column === void 0 ? void 0 : column.width,
        // column.width
        hidden: column === null || column === void 0 ? void 0 : column.hidden,
        // column.hidden
        getCellExportValue: getCellValue
      };
    });
  }, []);
  return columns;
}
function getExportFileBlob(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      fileType = _ref.fileType,
      fileName = _ref.fileName;

  if (fileType === "csv") {
    // CSV example
    var headerNames = columns.map(function (col) {
      return col.exportValue;
    });
    var csvString = papaparse__WEBPACK_IMPORTED_MODULE_2___default().unparse({
      fields: headerNames,
      data: data
    });
    return new Blob([csvString], {
      type: "text/csv"
    });
  } else if (fileType === "xlsx") {
    var header = columns.map(function (c) {
      return c.exportValue;
    });
    var compatibleData = data.map(function (row) {
      var obj = {};
      header.forEach(function (col, index) {
        obj[col] = row[index];
      });
      return obj;
    });
    var wb = xlsx__WEBPACK_IMPORTED_MODULE_3___default().utils.book_new();
    var ws1 = xlsx__WEBPACK_IMPORTED_MODULE_3___default().utils.json_to_sheet(compatibleData, {
      header: header
    });
    xlsx__WEBPACK_IMPORTED_MODULE_3___default().utils.book_append_sheet(wb, ws1, "React Table Data");
    xlsx__WEBPACK_IMPORTED_MODULE_3___default().writeFile(wb, "".concat(fileName, ".xlsx"));
    return false;
  }

  if (fileType === "pdf") {
    var _headerNames = columns.map(function (column) {
      return column.exportValue;
    });

    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]();
    doc.autoTable({
      head: [_headerNames],
      body: data,
      margin: {
        top: 20
      },
      styles: {
        minCellHeight: 9,
        halign: "left",
        valign: "center",
        fontSize: 11
      }
    });
    doc.save("".concat(fileName, ".pdf"));
    return false;
  }

  if (fileType === "json") {
    var newJsonData = [];
    var newDataRow = {};

    var _headerNames2 = columns.map(function (column) {
      return column.exportValue;
    });

    data.forEach(function (row) {
      newDataRow = {};

      _headerNames2.forEach(function (header, index) {
        if (Array.isArray(row)) {
          newDataRow[header] = row[index];
        } else {
          Object.keys(row).forEach(function (key) {
            if (key.toLowerCase() === header.toLowerCase()) {
              newDataRow[header] = row[key];
            }
          });
        }
      });

      newJsonData.push(newDataRow);
    });
    var jsonString = JSON.stringify(newJsonData);
    return new Blob([jsonString], {
      type: "application/json;charset=utf-8;"
    });
  }

  return false;
}
function setCellPadding(id, index) {
  return id === "selection" ? "checkbox" : id !== "selection" && index === 1 ? "none" : "default";
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function setEmptyRows(_ref2) {
  var totalData = _ref2.totalData,
      pageSize = _ref2.pageSize,
      pageIndex = _ref2.pageIndex,
      visibleColumns = _ref2.visibleColumns,
      isDense = _ref2.isDense;
  var pSize = totalData < pageSize ? totalData : pageSize;
  var emptyRows = pSize - Math.min(pSize, totalData - pageIndex * pSize);
  return emptyRows > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      height: (isDense ? 33 : 53) * emptyRows
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    colSpan: visibleColumns.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }));
}
function format(fmt) {
  var _len, args, _key;

  for (_len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
    throw new Error('invalid format string.');
  }

  return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, function (m, str, index) {
    if (str) {
      return str.replace(/(?:{{)|(?:}})/g, function (m) {
        return m[0];
      });
    } else {
      if (index >= args.length) {
        throw new Error('argument index is out of range in format');
      }

      return args[index];
    }
  });
}
function downloadFileViaBlob(fileBlob, fileName, type) {
  if (fileBlob) {
    var dataUrl = URL.createObjectURL(fileBlob);
    var link = document.createElement("a");
    link.download = "".concat(fileName, ".").concat(type);
    link.href = dataUrl;
    link.click();
  }
}

/***/ }),

/***/ "./Components/utilities/utils.js":
/*!***************************************!*\
  !*** ./Components/utilities/utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appSearch": () => (/* binding */ appSearch),
/* harmony export */   "useSearch": () => (/* binding */ useSearch),
/* harmony export */   "downloadCSV": () => (/* binding */ downloadCSV),
/* harmony export */   "downloadJson": () => (/* binding */ downloadJson)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var js_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-search */ "./node_modules/js-search/dist/esm/js-search.js");




function appSearch(key, fields, data, term) {
  if (data === undefined) return;
  var uniqeKey = typeof key === "number" ? key.toString() : key;
  var search = new js_search__WEBPACK_IMPORTED_MODULE_3__.Search(uniqeKey);
  search.searchIndex = new js_search__WEBPACK_IMPORTED_MODULE_3__.UnorderedSearchIndex();
  search.indexStrategy = new js_search__WEBPACK_IMPORTED_MODULE_3__.AllSubstringsIndexStrategy();
  var fieldset = [];

  if (!Array.isArray(fields)) {
    fieldset.push(fields);
  }

  if (Array.isArray(fields)) {
    fieldset = fields;
  }

  fieldset.forEach(function (field) {
    return search.addIndex(field);
  });
  search.addDocuments(Array.isArray(data) ? data : [data]);
  return search.search(term);
}
function useSearch(key, fields, data) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data),
      _useState2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      values = _useState2[0],
      setFilterValue = _useState2[1];

  return {
    values: values,
    search: function (value) {
      if (value === undefined || value === "") {
        setFilterValue(data);
      } else {
        var results = appSearch(key, fields, data, value);
        setFilterValue(results);
      }
    }
  };
}

function objectToCsv(data) {
  var csvRows = [],
      _loop;

  var headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  var _iterator = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
      _step;

  try {
    _loop = function () {
      var row = _step.value;
      var values = headers.map(function (header) {
        var escaped = ("" + row[header]).replace(/"/g, '\\"');
        return "\"".concat(escaped, "\"");
      });
      csvRows.push(values.join(","));
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return csvRows.join("\n");
}

function downloadCSV(data) {
  var csvName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Table";
  var csvString = objectToCsv(data);
  var blob = new Blob([csvString], {
    type: "text/csv;charset=utf-8;"
  });
  var blobURL = window.URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.setAttribute("href", blobURL);
  link.setAttribute("download", csvName + ".csv");
  link.setAttribute("tabindex", "0");
  link.innerHTML = "";
  document.body.appendChild(link);
  link.click();
}
function downloadJson(data) {
  var jsonName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Table";
  var jsonString = JSON.stringify(data);
  var blob = new Blob([jsonString], {
    type: "application/json;charset=utf-8;"
  });
  var blobURL = window.URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.setAttribute("href", blobURL);
  link.setAttribute("download", jsonName + ".json");
  link.setAttribute("tabindex", "0");
  link.innerHTML = "";
  document.body.appendChild(link);
  link.click();
}

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e708":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?58fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?20df":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=Components_table_v2_table_js.1845b48c2dca1cfe24243340f1299e01.bundle.map