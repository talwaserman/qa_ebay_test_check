"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("./mock");

require("../../../../../.storybook/global-style.less");

var _ = _interopRequireDefault(require("."));

(0, _react2.storiesOf)('Gizmo/shared/DecisionMaker', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return _react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_.default, {
    option1Title: 'Duplicate',
    option2Title: 'Skip',
    option3Title: 'Not Duplicate',
    reasons: _mock.mockReasons,
    decision: _mock.mockDecisions[0],
    updateDecisions: function updateDecisions() {},
    buttonsToDisable: [],
    showSendToSupervisor: (0, _addonKnobs.boolean)('showSendToSupervisor', true)
  }));
}, {
  notes: 'DecisionMaker - for selecting all decisions'
});