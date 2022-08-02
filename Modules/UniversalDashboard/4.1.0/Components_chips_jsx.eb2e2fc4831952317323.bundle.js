"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_chips_jsx"],{

/***/ "./Components/chips.jsx":
/*!******************************!*\
  !*** ./Components/chips.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UdChip": () => (/* binding */ UdChip),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/styles/withStyles */ "./node_modules/@mui/styles/withStyles/withStyles.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Icon/Icon.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\Components\\chips.jsx";







var styles = function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing()
    },
    chipIcon: {
      width: 'auto',
      height: 'auto'
    }
  };
};

var UdChip = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UdChip, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(UdChip);

  function UdChip() {
    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UdChip);

    return _super.apply(this, arguments);
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UdChip, [{
    key: "handleDelete",
    value: function handleDelete() {
      if (!this.props["delete"]) {
        return;
      }

      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + 'onDelete',
        eventName: 'onDelete',
        eventData: this.props.id
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (!this.props.clickable) {
        return;
      }

      UniversalDashboard.publish('element-event', {
        type: "clientEvent",
        eventId: this.props.id + 'onClick',
        eventName: 'onClick',
        eventData: this.props.id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var avatar = null;

      if (this.props.avatar) {
        switch (this.props.avatarType) {
          case "letter":
            avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 30
              }
            }, this.props.avatar);
            break;

          case "image":
            avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              src: this.props.avatar,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 30
              }
            });
            break;

          default:
            break;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: this.props.id,
        avatar: avatar,
        label: this.props.label,
        clickable: this.props.clickable,
        onClick: this.props.clickable ? this.handleClick.bind(this) : null,
        onDelete: this.props["delete"] ? this.handleDelete.bind(this) : null,
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.chip, "ud-mu-chip", this.props.className),
        style: (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.style),
        color: this.props.color,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: classes.chipIcon,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 23
          }
        }, UniversalDashboard.renderComponent(this.props.icon)),
        variant: this.props.variant,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      });
    }
  }]);

  return UdChip;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);
UdChip.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(styles)(UdChip));

/***/ })

}]);
//# sourceMappingURL=Components_chips_jsx.b5e94cbb829b7458f4c9e635856345ef.bundle.map