"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReasonPopOverContent;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReasonSelect = _interopRequireDefault(require("./ReasonSelect"));

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextArea = _input.default.TextArea;

function ReasonPopOverContent(_ref) {
  var reasons = _ref.reasons,
      decision = _ref.decision,
      handleUpdateDecision = _ref.handleUpdateDecision,
      optionId = _ref.optionId,
      handleClose = _ref.handleClose,
      visible = _ref.visible,
      showSendToSupervisor = _ref.showSendToSupervisor;

  var _useState = (0, _react.useState)(decision),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentDecision = _useState2[0],
      updateCurrentDecision = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      changeCounter = _useState4[0],
      updateCounter = _useState4[1];

  (0, _react.useEffect)(function () {
    updateCurrentDecision(decision);
  }, [visible, decision]);
  var showUrls = currentDecision.decisionInfo.urls.length > 0;
  var showAdditionalInfo = currentDecision.decisionInfo.additionalInfo.length > 0;
  return _react.default.createElement("div", {
    className: "reason-popover-content"
  }, _react.default.createElement("label", null, "Reason:", isMandatory(currentDecision.decisionInfo.reason.mandatory)), _react.default.createElement(_ReasonSelect.default, {
    reasonArray: reasons,
    updateReason: updateReason
  }), _react.default.createElement("br", null), _react.default.createElement("label", null, "Comment:", isMandatory(currentDecision.decisionInfo.comment.mandatory)), _react.default.createElement(TextArea, {
    rows: 4,
    value: currentDecision.decisionInfo.comment.value,
    onChange: function onChange(e) {
      return updateReason(e.target.value, 'comment');
    }
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), showUrls && _react.default.createElement(_react.Fragment, null, _react.default.createElement("label", null, "URLs:"), _react.default.createElement("span", {
    className: "add-url"
  }, _react.default.createElement(_icon.default, {
    type: "plus-circle",
    onClick: handleAddUrl
  })), _react.default.createElement("div", {
    className: "additional-urls-wrapper"
  }, currentDecision.decisionInfo.urls.map(function (urlItem, index) {
    return _react.default.createElement("div", {
      className: "url-item",
      key: index
    }, _react.default.createElement("label", null, urlItem.name, ":"), _react.default.createElement(_input.default, {
      type: "text",
      value: urlItem.url,
      onChange: function onChange(e) {
        return changedUrl(e.target.value, index);
      }
    }));
  }))), _react.default.createElement("br", null), _react.default.createElement("br", null), showAdditionalInfo && _react.default.createElement(_react.Fragment, null, _react.default.createElement("label", null, "Addtional Info:"), _react.default.createElement("div", {
    className: "additional-info-wrapper"
  }, currentDecision.decisionInfo.additionalInfo.map(function (infoItem, index) {
    return _react.default.createElement("div", {
      className: "url-item",
      key: index
    }, _react.default.createElement("label", null, infoItem.name, ":", isMandatory(infoItem.mandatory)), _react.default.createElement(_input.default, {
      type: "text",
      value: infoItem.value,
      onChange: function onChange(e) {
        return changedInfoItem(e.target.value, index);
      }
    }));
  }))), _react.default.createElement(_divider.default, null), showSendToSupervisor && _react.default.createElement(_checkbox.default, {
    checked: currentDecision.decisionInfo.sendToSupervisor,
    onChange: onChangeSendToSupervisor
  }, "Send to supervisor"), _react.default.createElement("section", {
    className: "action-btn"
  }, _react.default.createElement(_button.default, {
    onClick: handleCloseClick,
    size: "small"
  }, "Cancel"), _react.default.createElement(_button.default, {
    type: "primary",
    size: "small",
    onClick: handleSaveClick
  }, "Save")));

  function isMandatory(mandatory) {
    return mandatory ? _react.default.createElement("span", {
      className: "mandatory"
    }, "*") : '';
  }

  function updateReason(value, fieldName) {
    var tempDecision = Object.assign({}, currentDecision);
    tempDecision.decisionInfo[fieldName].value = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateCounter(changeCounter + 1);
  }

  function changedInfoItem(value, index) {
    var tempDecision = Object.assign({}, currentDecision);
    tempDecision.decisionInfo.additionalInfo[index].value = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function changedUrl(value, index) {
    var tempDecision = Object.assign({}, currentDecision);
    tempDecision.decisionInfo.urls[index].url = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function handleSaveClick() {
    handleUpdateDecision(_objectSpread({}, currentDecision, {
      selectedOption: optionId
    }), optionId);
  }

  function handleCloseClick() {
    updateReason(null, 'reason');
    handleClose();
  }

  function onChangeSendToSupervisor(checked, e) {
    var tempDecision = Object.assign({}, currentDecision);
    tempDecision.decisionInfo.sendToSupervisor = checked.target.checked;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function handleAddUrl() {
    var tempDecision = Object.assign({}, currentDecision);
    var index = tempDecision.decisionInfo.urls.length + 1;
    tempDecision.decisionInfo.urls.push({
      name: "url".concat(index),
      url: ''
    });
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }
}

ReasonPopOverContent.propTypes = {
  /** reasons - array of reasons used for the reason dropdown */
  reasons: _propTypes.default.array.isRequired,

  /** decision - object that describe the descition information */
  decision: _propTypes.default.object.isRequired,

  /** handleUpdateDecision - function called when save button is clicked, will update the decision array  */
  handleUpdateDecision: _propTypes.default.func.isRequired,

  /** optionId - describe the option identifier for example op-1 = duplicate, op-2 = skip , op-3 = not-duplicate for duplicate screen*/
  optionId: _propTypes.default.string.isRequired,

  /** handleClose -  close popup without saving data if changed*/
  handleClose: _propTypes.default.func.isRequired,

  /** indicate if the popup is visible */
  visible: _propTypes.default.bool.isRequired,

  /** showSendToSupervisor - a flag whether to show send to supervisor */
  showSendToSupervisor: _propTypes.default.bool.isRequired
};
ReasonPopOverContent.defaultProps = {};