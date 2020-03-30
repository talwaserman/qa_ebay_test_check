"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectionPopUp;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

require("./style.less");

var Option = _select.default.Option;

function SelectionPopUp(_ref) {
  var handleClose = _ref.handleClose,
      inputLabel = _ref.inputLabel,
      selectPlaceHolder = _ref.selectPlaceHolder,
      dropDownKeyLabel = _ref.dropDownKeyLabel,
      dropDownValuesArray = _ref.dropDownValuesArray,
      onClickHandler = _ref.onClickHandler,
      loading = _ref.loading;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputData = _useState2[0],
      setInputData = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      dropDownData = _useState4[0],
      setDropDownData = _useState4[1];

  return _react.default.createElement("div", {
    className: "selection-popup-wrapper"
  }, _react.default.createElement(_input.default, {
    addonBefore: inputLabel,
    value: inputData,
    onChange: function onChange(e) {
      return updateInputData(e.target.value);
    }
  }), _react.default.createElement("div", {
    className: "select-wrapper"
  }, _react.default.createElement(_select.default, {
    placeholder: selectPlaceHolder,
    onChange: onChange
  }, dropDownValuesArray.map(function (item) {
    return _react.default.createElement(Option, {
      key: (0, _get.default)(item, dropDownKeyLabel, null),
      value: JSON.stringify(item)
    }, item.name);
  }))), _react.default.createElement("section", {
    className: "action-btn"
  }, _react.default.createElement(_button.default, {
    type: "primary",
    onClick: handleOk,
    disabled: !dropDownData || !inputData,
    loading: loading
  }, "Ok"), _react.default.createElement(_button.default, {
    onClick: handleCancel
  }, "Cancel")));

  function handleOk() {
    onClickHandler({
      selectionData: dropDownData,
      inputData: inputData
    });
  }

  function handleCancel() {
    handleClose();
  }

  function onChange(value) {
    setDropDownData(JSON.parse(value));
  }

  function updateInputData(value) {
    setInputData(value);
  }
}

SelectionPopUp.propTypes = {
  /** handleClose - function that called when user clicked Cancel */
  handleClose: _propTypes.default.func.isRequired,

  /** inputLabel - Input ui field label */
  inputLabel: _propTypes.default.string.isRequired,

  /** selectPlaceHolder - select place holder text */
  selectPlaceHolder: _propTypes.default.string,

  /** dropDownKeyLabel - represent for each key name in the dropDownvalues array */
  dropDownKeyLabel: _propTypes.default.string.isRequired,

  /** dropDownValuesArray - array of dropdown values */
  dropDownValuesArray: _propTypes.default.array.isRequired,

  /** onClickHandler - function that called with input of submitted data when user clicked Ok */
  onClickHandler: _propTypes.default.func.isRequired,

  /** loading - set the loading status of button */
  loading: _propTypes.default.bool
};
SelectionPopUp.defaultProps = {
  loading: false
};