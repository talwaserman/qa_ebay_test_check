"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReasonSelect;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

function ReasonSelect(_ref) {
  var deleteAspect = _ref.deleteAspect;
  return _react.default.createElement("div", {
    className: "reason-select-wrapper"
  }, _react.default.createElement("div", null, "Delete Reason:"), _react.default.createElement("div", {
    className: "delete-btn-wrapper"
  }, _react.default.createElement(_button.default, {
    type: "default",
    onClick: function onClick(e) {
      return clickHandler('NA');
    }
  }, "Not applicable"), _react.default.createElement(_button.default, {
    type: "default",
    onClick: function onClick(e) {
      return clickHandler('NF');
    }
  }, "Not found")));

  function clickHandler(deleteReason) {
    deleteAspect(deleteReason);
  }
}