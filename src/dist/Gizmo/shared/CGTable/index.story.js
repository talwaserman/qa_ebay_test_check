"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _mock = require("./mock");

var _index = _interopRequireDefault(require("./index"));

var sortedInfo = {};
var columnConfig = [{
  title: 'Notification Type',
  dataIndex: 'type',
  sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order
}, {
  title: 'Activity',
  dataIndex: 'activity',
  sortOrder: sortedInfo.columnKey === 'activity' && sortedInfo.order
}, {
  title: 'User Assigned',
  dataIndex: 'users',
  render: function render(assingedUsers) {
    return _react.default.createElement("p", null, assingedUsers.map(function (assignedUser) {
      return assignedUser.display + ' ';
    }));
  },
  sortOrder: sortedInfo.columnKey === 'users' && sortedInfo.order
}, {
  title: '',
  dataIndex: ''
}];

function _onSortInfoChange(sortInfoData) {
  setSortedInfo(sortInfoData);
}

function setSortedInfo(info) {
  sortedInfo = info;
}

function reloadTable() {
  // will fetch the data and update tableData
  alert('reloaded table');
}

(0, _react2.storiesOf)('Gizmo/shared/CGTable', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return _react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, _react.default.createElement(_index.default, {
    columnConfig: columnConfig,
    tableData: _mock.mockTableData,
    size: 'small',
    loadingData: false,
    onSortInfoChange: function onSortInfoChange(sortInfoData) {
      return _onSortInfoChange(sortInfoData);
    },
    initialOrderBy: 'type',
    initialOrderType: 'descend',
    reloadTable: reloadTable
  }));
}, {
  notes: 'CGTable - for creating new client generic table'
});