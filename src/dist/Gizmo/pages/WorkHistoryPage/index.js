"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WorkHistoryPage;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../shared");

var _utils = require("../../utils");

var _services = require("./services");

require("./style.less");

var columnConfig = [{
  title: 'Epid 1',
  dataIndex: 'survivorEpid',
  filterType: 'text'
}, {
  title: 'Title Epid 1',
  dataIndex: 'survivorTitle',
  filterType: 'text'
}, {
  title: 'Epid 2',
  dataIndex: 'victimEpid',
  filterType: 'text'
}, {
  title: 'Title Epid 2',
  dataIndex: 'victimTitle',
  filterType: 'text'
}, {
  title: 'Decision',
  dataIndex: 'decision',
  filterKey: 'productDuplicateActions',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Assignee',
  dataIndex: 'assignee',
  filterKey: 'users',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}];

function WorkHistoryPage(_ref) {
  var historyView = _ref.historyView;
  return _react.default.createElement("div", {
    className: "work-history-page-wrapper"
  }, _react.default.createElement(_shared.CBreadcrumb, {
    path: ['Duplicates', 'Work History']
  }), _react.default.createElement("div", {
    className: "table-wrapper"
  }, _react.default.createElement(_shared.CTable, {
    columnConfig: columnConfig,
    fetchData: _services.getRowsByJobId,
    initialOrderBy: 'survivorEpid',
    filterData: filterData,
    extractData: extractData,
    doubleClickCB: doubleClickCB,
    sessionStorageIdentifier: 'work_history_table'
  })));

  function filterData(filters, orderBy, orderType, currentPage) {
    var filterArray = Object.keys(filters).map(function (key) {
      return filters[key];
    });
    var dataObj = {
      jobId: (0, _utils.queryParam)('jobId'),
      dataFilterContracts: filterArray,
      orderBy: orderBy || '',
      orderType: orderType || 'DESC',
      pageNumber: currentPage || 1
    };
    return dataObj;
  }

  function extractData(res) {
    return res.filteredRows;
  }

  function doubleClickCB(record) {
    historyView(record.rowId);
  }
}

WorkHistoryPage.propTypes = {
  /** historyView - call back function to show duplicates in history view  */
  historyView: _propTypes.default.func.isRequired
};