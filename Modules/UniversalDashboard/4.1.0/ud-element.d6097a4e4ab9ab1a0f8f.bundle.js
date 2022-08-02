"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["ud-element"],{

/***/ "./app/ud-element.jsx":
/*!****************************!*\
  !*** ./app/ud-element.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UdElement)
/* harmony export */ });
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _services_render_service_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/render-service.jsx */ "./app/services/render-service.jsx");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/fetch-service.jsx */ "./app/services/fetch-service.jsx");
/* harmony import */ var _config_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config.jsx */ "./app/config.jsx");
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-interval */ "./node_modules/react-interval/lib/index.js");
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_interval__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _basics_lazy_element_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basics/lazy-element.jsx */ "./app/basics/lazy-element.jsx");





var _jsxFileName = "C:\\actions-runner\\_work\\universal\\universal\\src\\Dashboard\\v3\\app\\ud-element.jsx";








var UdElement = /*#__PURE__*/function (_React$Component) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UdElement, _React$Component);

  var _super = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(UdElement);

  function UdElement() {
    var _this;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UdElement);

    _this = _super.call(this);
    _this.state = {
      hidden: false
    };
    return _this;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UdElement, [{
    key: "isGuid",
    value: function isGuid(str) {
      if (str == null) {
        return false;
      }

      if (str[0] === "{") {
        str = str.substring(1, str.length - 1);
      }

      var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
      var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return regexGuid.test(str);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.isGuid(this.props.id)) {
        this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "removeElement") {
        if (this.props.tag == 'input') {
          var inputComp = $("#".concat(this.props.id));
          inputComp[0].parentElement.remove();
        }

        this.setState({
          hidden: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.hidden && this.pubSubToken != null) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().unsubscribe(this.pubSubToken);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.pubSubToken != null) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().unsubscribe(this.pubSubToken);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hidden) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(UDElementContent, Object.assign({
        key: this.props.id
      }, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 16
        }
      }));
    }
  }]);

  return UdElement;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);



var UDElementContent = /*#__PURE__*/function (_React$Component2) {
  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(UDElementContent, _React$Component2);

  var _super2 = (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(UDElementContent);

  function UDElementContent(props) {
    var _this2;

    (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UDElementContent);

    _this2 = _super2.call(this, props);
    _this2.state = {
      content: props.content,
      tag: props.tag,
      attributes: props.attributes,
      events: props.events,
      loading: true,
      hasError: false,
      errorMessage: ''
    };
    return _this2;
  }

  (0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UDElementContent, [{
    key: "loadData",
    value: function loadData() {
      (0,_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_8__.fetchGet)("/api/internal/component/element/" + this.props.id, function (data) {
        if (data.error) {
          this.setState({
            hasError: true,
            errorMessage: data.error.message
          });
          return;
        }

        this.setState({
          content: data,
          loading: false
        });
      }.bind(this));
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().subscribe(this.props.id, this.onIncomingEvent.bind(this));

      if (this.props.hasCallback) {
        this.loadData();
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "onTextboxChanged",
    value: function onTextboxChanged(e) {
      var val = e.target.value;
      this.state.attributes.value = val;
      this.setState({
        attributes: this.state.attributes
      });
    }
  }, {
    key: "onCheckboxChanged",
    value: function onCheckboxChanged(e) {
      var val = e.target.value,
          i,
          event;
      val = e.target.checked;
      this.state.attributes.checked = val;
      this.setState({
        attributes: this.state.attributes
      });

      for (i = 0; i < this.state.events.length; i++) {
        if (this.state.events[i].event === 'onChange') {
          event = this.state.events[i];
          pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().publish('element-event', {
            type: "clientEvent",
            eventId: event.id,
            eventName: 'onChange',
            eventData: val
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var i;

      if (!this.props.preventUnregister) {
        if (this.state.events != null) {
          for (i = 0; i < this.state.events.length; i++) {
            pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().publish('element-event', {
              type: "unregisterEvent",
              eventId: this.state.events[i].id
            });
          }
        }

        if (this.props.hasCallback) {
          pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().publish('element-event', {
            type: "unregisterEvent",
            eventId: this.props.id
          });
        }
      }

      pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().unsubscribe(this.pubSubToken);
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      var content;

      if (event.type === "setState") {
        this.setState(event.state);
      } else if (event.type === "requestState") {
        (0,_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_8__.fetchPost)("/api/internal/component/element/sessionState/".concat(event.requestId), this.state);
      } else if (event.type === "removeElement") {
        this.setState({
          hidden: true
        });
      } else if (event.type === "addElement") {
        content = this.state.content;

        if (content == null) {
          content = [];
        }

        content = content.concat(event.elements);
        this.setState({
          content: content
        });
      } else if (event.type === "clearElement") {
        this.setState({
          content: null
        });
      } else if (event.type === "syncElement") {
        this.loadData();
      }
    }
  }, {
    key: "onUserEvent",
    value: function onUserEvent(event, e) {
      var eventName = null,
          value,
          i;
      var val = null;

      if (this.state.tag === 'select') {
        val = new Array();

        if (this.refs.element.selectedOptions) {
          for (var item in this.refs.element.selectedOptions) {
            if (isNaN(item)) continue;
            value = this.refs.element.selectedOptions[item].value;
            val.push(value);
          }
        } else {
          val.push(this.refs.element.value);
        }

        if (val.length === 1) {
          val = val[0];
        } else {
          val = JSON.stringify(val);
        }

        for (i = 0; i < this.state.events.length; i++) {
          if (this.state.events[i].event === 'onChange') {
            event = this.state.events[i];
          }
        }

        eventName = 'onChange';
      } else {
        eventName = event.event;

        if (eventName === "onKeyPress") {
          pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().publish('element-event', {
            type: "clientEvent",
            eventId: event.id,
            eventName: eventName,
            eventData: JSON.stringify({
              key: e.key,
              keyCode: e.keyCode
            })
          });
          return;
        }

        val = e.target.value;

        if (val != null && val.checked != null) {
          val = e.target.checked;
        }
      }

      this.state.attributes.value = val;
      this.setState(this.state);
      pubsub_js__WEBPACK_IMPORTED_MODULE_7___default().publish('element-event', {
        type: "clientEvent",
        eventId: event.id,
        eventName: eventName,
        eventData: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hidden) {
        return null;
      }

      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_basics_lazy_element_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
          component: {
            type: 'error',
            message: this.state.errorMessage
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 20
          }
        });
      }

      if (this.props.error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_basics_lazy_element_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
          component: {
            type: 'error',
            message: this.state.errorMessage
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 20
          }
        });
      }

      if (this.state.loading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 20
          }
        });
      }

      if (this.props.js) {
        return (0,_services_render_service_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])((0,C_actions_runner_work_universal_universal_src_Dashboard_v3_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
          type: this.props.componentName
        }, this.props.props), this.props.history);
      }

      var children = null;

      if (this.state.content && this.state.content.map) {
        if (this.state.content.length > 0) {
          children = this.state.content.map(function (x) {
            if (x.type != null) {
              return (0,_services_render_service_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(x, this.props.history);
            }

            return x;
          }.bind(this));
        }
      } else if (this.state.content) {
        children = this.state.content;
      }

      var attributes = this.state.attributes;

      if (attributes == null) {
        attributes = {};
      }

      if (attributes.id == null) {
        attributes.id = this.props.id;
      }

      if (this.state.events != null && this.state.events.map) {
        this.state.events.map(function (event) {
          attributes[event.event] = function (e) {
            this.onUserEvent(event, e);
          }.bind(this);

          return null;
        }.bind(this));
      }

      if (this.state.tag === "input") {
        if (attributes.type === "text" || attributes.type === "password") {
          attributes.onChange = this.onTextboxChanged.bind(this);
        }

        if (attributes.type === "checkbox") {
          attributes.onChange = this.onCheckboxChanged.bind(this);
        }
      }

      if (this.state.tag === "textarea") {
        attributes.onChange = this.onTextboxChanged.bind(this);
      }

      attributes.ref = 'element';
      attributes.key = this.props.id;
      this.element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(this.state.tag, attributes, children);
      return [this.element, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement((react_interval__WEBPACK_IMPORTED_MODULE_10___default()), {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 9
        }
      })];
    }
  }]);

  return UDElementContent;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/***/ })

}]);
//# sourceMappingURL=ud-element.bca2d7029e8795ab69844020bb2b23d8.bundle.map