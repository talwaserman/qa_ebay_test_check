"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../../../shared/DecisionMaker/mock");

var _mock2 = require("./mock");

require("../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationAllEnabled,
    jobId: 2541,
    rowsDone: {
      totalDoneToday: 10,
      totalDone: 100
    },
    loggedInUser: _mock2.mockAgent,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('not editable', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationNotEditable,
    jobId: 2541,
    rowsDone: {
      totalDoneToday: 10,
      totalDone: 100
    },
    loggedInUser: _mock2.mockAgent,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('without headers', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationWithoutHeaders,
    jobId: 2541,
    rowsDone: {
      totalDoneToday: 10,
      totalDone: 100
    },
    loggedInUser: _mock2.mockAgent,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('not editable and without headers', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationNotEditableAndWithoutHeaders,
    jobId: 2541,
    rowsDone: _mock2.realMockData.nextRowContract.doneRowsContract,
    loggedInUser: _mock2.mockAgent,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with Sent To SuperVisior', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationNotEditableAndWithoutHeaders,
    jobId: 2541,
    escalatedInfo: _mock2.realMockData.nextRowContract.escalationInfo,
    rowsDone: _mock2.realMockData.nextRowContract.doneRowsContract,
    loggedInUser: _mock2.mockAgent,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('edit mode', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationAllEnabled,
    jobId: 2541,
    workMode: 'edit',
    escalatedInfo: _mock2.realMockData.nextRowContract.escalationInfo,
    rowsDone: _mock2.realMockData.nextRowContract.doneRowsContract,
    loggedInUser: _mock2.mockSupervisor,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('hide send to supervisor', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    survivorData: _mock2.mockSurvivorData,
    victimArray: _mock2.mockVictimArray,
    decisions: _mock.mockDecisions,
    reasons: _mock.mockReasons,
    jobTypeConfiguration: _mock2.mockConfigurationAllEnabled,
    jobId: 2541,
    rowsDone: {
      totalDoneToday: 10,
      totalDone: 20
    },
    loggedInUser: _mock2.mockSupervisor,
    rowId: '123445af764e65fb22a16e',
    saveTask: function saveTask() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});