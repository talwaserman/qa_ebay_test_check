"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReasonSelect;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

/* eslint-disable */
var Option = _select.default.Option;

function ReasonSelect(_ref) {
  var reasonArray = _ref.reasonArray,
      updateReason = _ref.updateReason;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedReason = _useState2[0],
      setSelectedReason = _useState2[1];

  return _react.default.createElement("div", {
    className: "reason-select-wrapper"
  }, _react.default.createElement(_select.default, {
    showSearch: true,
    value: selectedReason,
    style: {
      width: 200
    },
    placeholder: "Select a reason",
    optionFilterProp: "children",
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, reasonArray.map(function (item) {
    return _react.default.createElement(Option, {
      key: item,
      value: item
    }, item);
  })));

  function onChange(value) {
    setSelectedReason(value);
    updateReason(value, 'reason');
  }

  function onBlur() {// console.log("blur");
  }

  function onFocus() {// console.log("focus");
  }

  function onSearch(val) {// console.log("search:", val);
  }
}

ReasonSelect.propTypes = {
  /** reasonArray - array of reasons to show in the select component */
  reasonArray: _propTypes.default.array.isRequired,

  /** updateReason - function used to update the selected reason from the dropdown */
  updateReason: _propTypes.default.func.isRequired
};
ReasonSelect.defaultProps = {};