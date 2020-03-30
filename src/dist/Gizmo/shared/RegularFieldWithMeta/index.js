"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RegularFieldWithMeta;

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

require("./style.less");

function RegularFieldWithMeta(_ref) {
  var label = _ref.label,
      value = _ref.value,
      isDifferentValue = _ref.isDifferentValue,
      metadata = _ref.metadata;
  var styleClasses = isDifferentValue ? 'regular-field-wrapper different-value' : 'regular-field-wrapper';
  var aspectMetadata = (0, _utils.getAspectMetadata)(metadata);
  return _react.default.createElement("div", {
    className: styleClasses
  }, _react.default.createElement("strong", null, _react.default.createElement("label", {
    className: "aspect-title-wrapper"
  }, _react.default.createElement("strong", null, label, !aspectMetadata.umsAlignedAspect && _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: 'Aspect not aligned with UMS'
  }, _react.default.createElement("span", {
    className: "aspect-not-aligned"
  }, _react.default.createElement(_icon.default, {
    type: "info-circle"
  }))), aspectMetadata.isRequired && _react.default.createElement("span", {
    className: "required-icon"
  }, "*")), _react.default.createElement("div", {
    className: "importance-level"
  }, aspectMetadata.levelOfImportance, _react.default.createElement("span", null, aspectMetadata.isMultiValue ? '[M]' : '')))), _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: value
  }, _react.default.createElement("div", {
    className: "field-value"
  }, value)));
}

RegularFieldWithMeta.propTypes = {
  /** label used for the row of lable and value */
  label: _propTypes.default.string.isRequired,

  /** value used in the input field and is a controlled input field */
  value: _propTypes.default.string.isRequired,

  /** isDifferentValue - indicate if the value is different from the compared value*/
  isDifferentValue: _propTypes.default.bool,

  /** metadata - metadata for each used value   */
  metadata: _propTypes.default.shape({
    mandatoryOnProduct: _propTypes.default.bool.isRequired,
    multiValue: _propTypes.default.bool.isRequired,
    umsAlignedAspect: _propTypes.default.bool.isRequired,
    aspectTypes: _propTypes.default.array,
    umsValues: _propTypes.default.array
  })
};
RegularFieldWithMeta.defaultProps = {
  isDifferentValue: false
};