"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/shared/DecisionMaker/ReasonPopOverContent', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '460px',
      margin: '0 auto'
    }
  }, _react.default.createElement(_index.default, {
    visible: true,
    optionId: '1111',
    reasons: _mock.mockReasons.option1,
    decision: _mock.mockDecision,
    handleUpdateDecision: function handleUpdateDecision() {},
    updateDecisions: function updateDecisions() {},
    handleClose: function handleClose() {},
    showSendToSupervisor: true
  }));
}, {
  notes: 'ReasonPopOverContent - the actual dom elements for reasons popup'
});
(0, _react2.storiesOf)('Gizmo/shared/DecisionMaker/ReasonPopOverContent', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with supervisor user', function () {
  return _react.default.createElement("div", {
    style: {
      width: '460px',
      margin: '0 auto'
    }
  }, _react.default.createElement(_index.default, {
    visible: true,
    optionId: '1111',
    reasons: _mock.mockReasons.option1,
    decision: _mock.mockDecision,
    handleUpdateDecision: function handleUpdateDecision() {},
    updateDecisions: function updateDecisions() {},
    handleClose: function handleClose() {},
    showSendToSupervisor: false
  }));
}, {
  notes: 'ReasonPopOverContent - the actual dom elements for reasons popup'
});