"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function PageTitle(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle;
  return _react.default.createElement("div", {
    className: "page-title-wrapper"
  }, _react.default.createElement("div", null, _react.default.createElement("label", null, title), " - ", _react.default.createElement("span", null, subTitle)));
}

PageTitle.propTypes = {
  /** title - title of the page */
  title: _propTypes.default.string.isRequired,

  /** subTitle - subTitle of the page */
  subTitle: _propTypes.default.string.isRequired
};