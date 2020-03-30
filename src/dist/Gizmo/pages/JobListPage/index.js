"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JobListPage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _shared = require("../../shared");

var _ActionsButton = _interopRequireDefault(require("../../shared/ActionsButton"));

var _services = require("./services");

var _ActionsPopoverContent = _interopRequireDefault(require("./ActionsPopoverContent"));

var _StateDropdown = _interopRequireDefault(require("./StateDropdown"));

require("./style.less");

function JobListPage() {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      checkBoxData = _useState2[0],
      setCheckBoxData = _useState2[1];

  var _useState3 = (0, _react.useState)({
    openTasks: 0,
    inProgressTasks: 0
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      tableGeneralInfo = _useState4[0],
      updateTableGeneralInfo = _useState4[1];

  var disableExport = (0, _get.default)(checkBoxData, '[1]', []).length === 0;
  var organizations = {};
  var columnConfig = [{
    title: '',
    dataIndex: '',
    filterType: '',
    render: renderActionsButton
  }, {
    title: 'ID',
    dataIndex: '',
    render: renderId,
    excludeOrderBy: true
  }, {
    title: 'Task Type',
    dataIndex: 'jobType',
    filterType: 'text'
  }, {
    title: 'Name',
    dataIndex: 'name',
    filterType: 'text'
  }, {
    title: 'Priority',
    dataIndex: 'priority',
    filterKey: 'priority',
    filterType: 'single-select',
    filterOperation: 'text-dropdown'
  }, {
    title: 'State',
    dataIndex: '',
    filterType: '',
    render: renderState
  }, {
    title: 'Done/Total Rows',
    dataIndex: '',
    filterType: '',
    render: renderTotalRows,
    excludeOrderBy: true
  }, {
    title: 'Vendor TLs',
    dataIndex: 'vendorTeamLeaders',
    filterType: 'text'
  }, {
    title: 'Owners',
    dataIndex: 'owners',
    filterType: 'text'
  }, {
    title: 'Organization',
    dataIndex: 'organization',
    filterKey: 'organization',
    filterType: 'single-select',
    filterOperation: 'text-dropdown'
  }, {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    filterType: 'date',
    filterOperation: 'equal-date'
  }];
  return _react.default.createElement("div", {
    className: "job-list-wrapper"
  }, _react.default.createElement("div", {
    className: "table-wrapper"
  }, _react.default.createElement("div", {
    className: "add-task-button-wrapper"
  }, _react.default.createElement(_button.default, {
    type: "primary",
    icon: "plus",
    onClick: function onClick() {
      window.location.href = "/#/vendor-management/new-job";
    }
  }, "New Task"), _react.default.createElement(_button.default, {
    icon: "file-excel",
    onClick: function onClick() {},
    disabled: disableExport
  }, "Export"), _react.default.createElement(_button.default, {
    icon: "file-excel",
    onClick: function onClick() {},
    disabled: disableExport
  }, "Export Mpe"), _react.default.createElement("label", null, tableGeneralInfo.openTasks, " ", _react.default.createElement("span", null, "Open Tasks")), _react.default.createElement("label", null, tableGeneralInfo.inProgressTasks, " ", _react.default.createElement("span", null, "In Progress Tasks"))), _react.default.createElement(_shared.CTable, {
    columnConfig: columnConfig,
    fetchData: fetchData,
    initialOrderBy: 'name',
    tableSize: 'small',
    checkBoxData: checkBoxData,
    setCheckBoxData: setCheckBoxData,
    checkBoxIdentifier: 'id',
    filterData: filterData,
    extractData: extractData,
    doubleClickCB: function doubleClickCB() {},
    sessionStorageIdentifier: 'JobListPage'
  })));

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var promisify;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // generic function that is used to turn a fetch into a promise to allow for several promisses to run at the same time
              promisify = function promisify(cbFunction, payload) {
                return new Promise(function (resolve, reject) {
                  try {
                    // TODO: send relevant filters
                    var res = payload ? cbFunction(payload) : cbFunction();
                    resolve(res);
                  } catch (e) {
                    reject(e);
                  }
                });
              };

              return _context.abrupt("return", Promise.all([promisify(_services.getJobs, {
                selectedFilters: null
              }), promisify(_services.getAllOrganizations, null)]).then(function (data) {
                var _data = (0, _slicedToArray2.default)(data, 2),
                    jobs = _data[0],
                    orgs = _data[1];

                organizations = orgs;
                getTableMatrics(jobs);
                return jobs;
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }

  function filterData(filters, orderBy, orderType, currentPage) {
    var filterArray = Object.keys(filters).map(function (key) {
      return filters[key];
    });
    var dataObj = {
      dataFilterContracts: filterArray,
      orderBy: orderBy || '',
      orderType: orderType || 'DESC',
      pageNumber: currentPage || 1
    };
    return dataObj;
  }

  function extractData(res) {
    var temp = res.jobs.map(function (item) {
      item.owners = item.owners.join(', ');
      item.vendorTeamLeaders = item.vendorTeamLeaders.join(', ');
      item.organization = getOrgName(item.organizations[0]);
      return item;
    });
    return temp;
  }

  function renderActionsButton(id) {
    return _react.default.createElement(_ActionsButton.default, {
      content: _react.default.createElement(_ActionsPopoverContent.default, null)
    });
  }

  function getOrgName(orgId) {
    if (!organizations.organizationContractList) {
      return '';
    }

    return organizations.organizationContractList.find(function (item) {
      return item.organizationId === orgId;
    }).organizationName;
  }

  function renderTotalRows(data) {
    var inReview = data.numberOfNeedReviewEpids ? "(".concat(data.numberOfNeedReviewEpids, " in review)") : "";
    return _react.default.createElement("div", {
      className: "task-in-review"
    }, data.numberOfDoneEpids, "/", data.numberOfEpids, " ", _react.default.createElement("span", null, inReview));
  }

  function renderId(data) {
    return _react.default.createElement("div", null, data.id, data.chatMessages && _react.default.createElement("span", {
      className: "row-chat-icon"
    }, ' ', _react.default.createElement(_icon.default, {
      type: "wechat"
    })));
  } // return the number of open tasks and in progress tasks


  function getTableMatrics(data) {
    var openTasksCounter = 0;
    var inProgressTasksCounter = 0;

    if (data.jobs) {
      data.jobs.forEach(function (item) {
        if (item.jobState === 'In Progress') {
          inProgressTasksCounter++;
        }

        if (item.jobState === 'Open') {
          openTasksCounter++;
        }
      });
    }

    updateTableGeneralInfo({
      openTasks: openTasksCounter,
      inProgressTasks: inProgressTasksCounter
    });
  }

  function renderState(data) {
    return _react.default.createElement("div", {
      className: "state-select"
    }, _react.default.createElement(_StateDropdown.default, {
      rowId: data.id,
      currentstate: data.jobState,
      updateState: function updateState() {},
      changeJobState: _services.changeJobState
    }));
  }
}