"use strict";
(self["webpackChunkmaterialui"] = self["webpackChunkmaterialui"] || []).push([["Components_datetime_jsx"],{

/***/ "./Components/datetime.jsx":
/*!*********************************!*\
  !*** ./Components/datetime.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

var localizedFormat = __webpack_require__(/*! dayjs/plugin/localizedFormat */ "./node_modules/dayjs/plugin/localizedFormat.js");

var relativeTime = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");

var utc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(localizedFormat);

var DayTime = function (props) {
  if (props.format.indexOf("L") === -1 && props.format.indexOf("l") === -1) {
    return dayjs(props.inputObject).format(props.format);
  } else {
    return dayjs(props.inputObject).local().format(props.format);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayTime);

/***/ })

}]);
//# sourceMappingURL=Components_datetime_jsx.f9584e3fc1e61bbc8879b15f1488a351.bundle.map