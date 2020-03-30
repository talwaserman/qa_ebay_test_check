"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

function Task() {
  return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
    type: "primary"
  }, "testing"), _react.default.createElement("div", {
    className: "test-text"
  }, "this is a test"));
}