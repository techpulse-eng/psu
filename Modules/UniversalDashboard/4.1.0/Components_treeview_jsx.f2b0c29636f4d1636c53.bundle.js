"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_treeview_jsx"],{

/***/ "./Components/treeview.jsx":
/*!*********************************!*\
  !*** ./Components/treeview.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles/makeStyles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_lab_TreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/lab/TreeView */ "./node_modules/@mui/lab/TreeView/TreeView.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ChevronRight */ "./node_modules/@mui/icons-material/ChevronRight.js");
/* harmony import */ var _mui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/lab/TreeItem */ "./node_modules/@mui/lab/TreeItem/TreeItem.js");
/* harmony import */ var universal_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-dashboard */ "../../npm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\treeview.jsx";









var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var useStyles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  root: {
    flexGrow: 1,
    maxWidth: 400
  }
});

var UDTreeView = function (props) {
  var classes = useStyles();
  var nodeList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);

  var makeNodes = function (nodes) {
    var children = nodes;

    if (!Array.isArray(children)) {
      children = [nodes];
    }

    return children.map(function (x) {
      if (!x) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 28
        }
      });
      nodeList.current.push(x);
      var children = null;

      if (!x.leaf) {
        children = Array.isArray(x.children) ? x.children.map(makeNodes) : makeNodes(x.children);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: x.id,
        id: x.id,
        nodeId: x.id,
        label: x.name,
        collapseIcon: x.expandedIcon && props.render(x.expandedIcon),
        expandIcon: x.icon && props.render(x.icon),
        children: children,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 20
        }
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_lab_TreeView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.id,
    className: classNames(classes.root, props.className),
    style: props.style,
    defaultCollapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 34
      }
    }),
    defaultExpandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 32
      }
    }),
    onNodeToggle: function onClick(event, nodeIds) {
      var node = nodeList.current.find(function (m) {
        return m.id === nodeIds[0];
      });

      if (node.leaf) {
        event.preventDefault();
      }

      if (props.onNodeClicked) {
        props.onNodeClicked(node).then(function (x) {
          node.children = JSON.parse(x);
          props.setState({
            nodes: props.nodes
          });
        });
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, makeNodes(Array.isArray(props.node) ? props.node : [props.node]));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,universal_dashboard__WEBPACK_IMPORTED_MODULE_1__.withComponentFeatures)(UDTreeView));

/***/ })

}]);
//# sourceMappingURL=Components_treeview_jsx.b6a5979df0181d37be8d193a8c46348e.bundle.map