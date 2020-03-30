"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DecisionMaker;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _ReasonPopOverContent = _interopRequireDefault(require("./ReasonPopOverContent"));

require("./style.less");

function DecisionMaker(_ref) {
  var option1Title = _ref.option1Title,
      option2Title = _ref.option2Title,
      option3Title = _ref.option3Title,
      reasons = _ref.reasons,
      decision = _ref.decision,
      updateDecisions = _ref.updateDecisions,
      buttonsToDisable = _ref.buttonsToDisable,
      showSendToSupervisor = _ref.showSendToSupervisor;

  var _useState = (0, _react.useState)(decision.selectedOption),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      visiblePopOver1 = _useState4[0],
      setVisiblePopOver1 = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      visiblePopOver2 = _useState6[0],
      setVisiblePopOver2 = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      visiblePopOver3 = _useState8[0],
      setVisiblePopOver3 = _useState8[1];

  var _useState9 = (0, _react.useState)(decision),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      singleDecision = _useState10[0],
      updateSingleDicision = _useState10[1];

  (0, _react.useEffect)(function () {
    updateSingleDicision(decision);
    setSelectedOption(decision.selectedOption);
  }, [decision]);
  return _react.default.createElement("div", {
    className: "decision-wrapper ".concat(selectedOption)
  }, _react.default.createElement(_popover.default, {
    placement: "top",
    content: _react.default.createElement(_ReasonPopOverContent.default, {
      reasons: (0, _cloneDeep.default)(reasons.option1),
      decision: (0, _cloneDeep.default)(singleDecision),
      handleUpdateDecision: handleUpdateDecision,
      handleClose: hide1,
      visible: visiblePopOver1,
      optionId: 'op-1',
      showSendToSupervisor: showSendToSupervisor
    }),
    trigger: "click",
    visible: visiblePopOver1,
    onVisibleChange: handleVisibleChange1
  }, _react.default.createElement(_button.default, {
    disabled: buttonsToDisable.includes(option1Title),
    className: buttonsToDisable.includes(option1Title) ? '' : 'op-1'
  }, option1Title)), _react.default.createElement(_popover.default, {
    placement: "top",
    content: _react.default.createElement(_ReasonPopOverContent.default, {
      reasons: (0, _cloneDeep.default)(reasons.option2),
      decision: (0, _cloneDeep.default)(singleDecision),
      handleUpdateDecision: handleUpdateDecision,
      handleClose: hide2,
      visible: visiblePopOver2,
      optionId: 'op-2',
      showSendToSupervisor: showSendToSupervisor
    }),
    trigger: "click",
    visible: visiblePopOver2,
    onVisibleChange: handleVisibleChange2
  }, _react.default.createElement(_button.default, {
    disabled: buttonsToDisable.includes(option2Title),
    className: buttonsToDisable.includes(option2Title) ? '' : 'op-2'
  }, option2Title)), _react.default.createElement(_popover.default, {
    placement: "top",
    content: _react.default.createElement(_ReasonPopOverContent.default, {
      reasons: (0, _cloneDeep.default)(reasons.option3),
      decision: (0, _cloneDeep.default)(singleDecision),
      handleUpdateDecision: handleUpdateDecision,
      handleClose: hide3,
      visible: visiblePopOver3,
      optionId: 'op-3',
      showSendToSupervisor: showSendToSupervisor
    }),
    trigger: "click",
    visible: visiblePopOver3,
    onVisibleChange: handleVisibleChange3
  }, _react.default.createElement(_button.default, {
    disabled: buttonsToDisable.includes(option3Title),
    className: buttonsToDisable.includes(option3Title) ? '' : 'op-3'
  }, option3Title)));

  function hide1() {
    setVisiblePopOver1(false);
  }

  function hide2() {
    setVisiblePopOver2(false);
  }

  function hide3() {
    setVisiblePopOver3(false);
  }

  function handleUpdateDecision(selectedDecision, optionId) {
    setSelectedOption(optionId);
    updateSingleDicision(selectedDecision);
    updateDecisions(selectedDecision);
    setVisiblePopOver1(false);
    setVisiblePopOver2(false);
    setVisiblePopOver3(false);
  }

  function handleVisibleChange1(visible) {
    if (!buttonsToDisable.includes(option1Title)) {
      setVisiblePopOver1(visible);
    }
  }

  function handleVisibleChange2(visible) {
    if (!buttonsToDisable.includes(option2Title)) {
      setVisiblePopOver2(visible);
    }
  }

  function handleVisibleChange3(visible) {
    if (!buttonsToDisable.includes(option3Title)) {
      setVisiblePopOver3(visible);
    }
  }
}

DecisionMaker.propTypes = {
  option1Title: _propTypes.default.string.isRequired,
  option2Title: _propTypes.default.string.isRequired,
  option3Title: _propTypes.default.string.isRequired,

  /** reasons - array of reasons used in the dropdown  */
  reasons: _propTypes.default.object.isRequired,

  /** decision - callback used to send the updated decision to the parent container */
  decision: _propTypes.default.object.isRequired,

  /** updateDecisions - callback used to send the updated decision to the parent container */
  updateDecisions: _propTypes.default.func.isRequired,

  /** showSendToSupervisor - a flag whether to show send to supervisor checkbox */
  showSendToSupervisor: _propTypes.default.bool
};
DecisionMaker.defaultProps = {
  showSendToSupervisor: true
};