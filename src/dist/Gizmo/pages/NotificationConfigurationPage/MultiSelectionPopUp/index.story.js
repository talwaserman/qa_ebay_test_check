"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _services = require("../services");

require("../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var notificationsListMock = {
  notifications: [{
    type: 'externalTask',
    activity: 'activity ended',
    users: [{
      id: 'userId',
      display: 'Adam'
    }, {
      id: 'userId2',
      display: ''
    }]
  }]
};
var multiSelectionPopUpData = {
  placeHolder1: 'Type',
  placeHolder2: 'Activity',
  placeHolder3: 'Assignees',
  selectionData: {
    typeToActivities: {
      'PRP Feedback': ['new feedback'],
      Duplicate: ['new external task', 'new external task2']
    }
  },
  multiSelectionData: [{
    display: 'Admin Admin',
    userId: '5745aa02437fd1caebf2309b'
  }, {
    display: 'Admin 2',
    userId: '5745aa02437fd1caebf2309b'
  }, {
    display: 'Lee Azaria',
    userId: '57481a852c04751b35802557'
  }, {
    display: 'Lee',
    userId: '57481a852c04751b35802547'
  }, {
    display: 'Oded Goldberg',
    userId: '57481a852c04751b35802558'
  }]
};
var getUsersResponse = [{
  userId: '5745aa02437fd1caebf2309b',
  userName: 'Admin',
  display: 'Admin Admin'
}, {
  userId: '57481a852c04751b35802557',
  userName: 'lazaria',
  display: 'Lee Azaria'
}, {
  userId: '5767ada82c047563b1d82f0d',
  userName: 'avigal',
  display: 'avigal avigal'
}, {
  userId: '5767adb72c047563b1d82f12',
  userName: 'etene',
  display: 'Ely Tene'
}, {
  userId: '574d2df72c047549ed7959c6',
  userName: 'ziv',
  display: 'ziv ziv'
}];

function getSortedUsersData() {
  return _getSortedUsersData.apply(this, arguments);
}

function _getSortedUsersData() {
  _getSortedUsersData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var usersDataResponse, sortedUsersDataResponse;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _services.getUsers)();

          case 2:
            usersDataResponse = _context.sent;
            sortedUsersDataResponse = (0, _cloneDeep.default)((0, _get.default)(usersDataResponse, 'users', null)); // sortedUsersDataResponse = sortBy(sortedUsersDataResponse, value =>
            //   value.display.toUpperCase()
            // );

            return _context.abrupt("return", sortedUsersDataResponse);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSortedUsersData.apply(this, arguments);
}

(0, _react2.storiesOf)('Gizmo/pages/NotificationConfigurationPage/MultiSelectionPopUp', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    multiSelectionPopUpData: multiSelectionPopUpData,
    dropDownKeyLabel1: 'ktype',
    dropDownKeyLabel2: 'kactivity',
    dropDownKeyLabel3: 'kassignees',
    multiSelectionTitle: 'Assignees',
    multiSelectionData: getSortedUsersData,
    existingData: [],
    editSelectedData: {
      type: null,
      activity: null,
      users: []
    }
  }));
}, {
  notes: 'MultiSelectionPopUp - for creating new two dropdowns with multi selection'
});