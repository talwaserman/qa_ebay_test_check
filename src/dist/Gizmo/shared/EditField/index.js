"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditField;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericModal = _interopRequireDefault(require("../GenericModal"));

require("./style.less");

function EditField(_ref) {
  var label = _ref.label,
      value = _ref.value,
      tooltipValue = _ref.tooltipValue,
      updateValue = _ref.updateValue,
      isChanged = _ref.isChanged,
      isDifferentValue = _ref.isDifferentValue,
      modalTitle = _ref.modalTitle,
      modalContent = _ref.modalContent,
      isEditable = _ref.isEditable;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isEditCategoryModalVisible = _useState2[0],
      setEditCategoryModalVisible = _useState2[1];

  var styleClasses = "edit-field-wrapper ".concat(isChanged && 'changed-value', " ").concat(isDifferentValue && 'different-value');
  return _react.default.createElement("div", {
    className: styleClasses
  }, _react.default.createElement("strong", null, _react.default.createElement("label", {
    className: "label"
  }, label)), tooltipValue && _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: tooltipValue
  }, _react.default.createElement("div", {
    className: "field-value"
  }, value)), !tooltipValue && _react.default.createElement(_tooltip.default, {
    placement: "top",
    title: value
  }, _react.default.createElement("div", {
    className: "field-value"
  }, value)), _react.default.createElement("div", {
    className: "button-wrapper"
  }, isEditable && _react.default.createElement(_button.default, {
    shape: "circle",
    icon: "edit",
    onClick: editCategoryClickHandler
  })), _react.default.createElement(_GenericModal.default, {
    modalVisibleState: isEditCategoryModalVisible,
    modalTitle: modalTitle,
    modalContent: modalContent,
    onCancel: onCancelEditModal,
    onOk: onOkEditModal,
    width: 720,
    okText: 'Change'
  }));

  function editCategoryClickHandler() {
    setEditCategoryModalVisible(true);
  }

  function onCancelEditModal() {
    setEditCategoryModalVisible(false);
  }

  function onOkEditModal(data) {
    setEditCategoryModalVisible(false);
    updateValue(data);
  }
}

EditField.propTypes = {
  /** label - used for the row of lable and value */
  label: _propTypes.default.string.isRequired,

  /** modalTitle - title used in the modal that opens when we edit this field*/
  modalTitle: _propTypes.default.string,

  /** modalContent - the component that should be displayed inside the modal */
  modalContent: _propTypes.default.any,

  /** value used in the input field and is a controlled input field */
  value: _propTypes.default.string.isRequired,

  /** updateValue - function used to notify the parent that the value changed, we send the new value */
  updateValue: _propTypes.default.func.isRequired,

  /** isChanged - indicate if the field value was changed */
  isChanged: _propTypes.default.bool.isRequired,

  /**  isDifferentValue - indicate if the images in the list are the same as the images on the compared image list*/
  isDifferentValue: _propTypes.default.bool,

  /**  isEditable - indicates whether the element can be edited or not*/
  isEditable: _propTypes.default.bool
};
EditField.defaultProps = {
  isDifferentValue: false,
  modalTitle: '',
  modalContent: _react.default.createElement("div", null),
  isEditable: true
};