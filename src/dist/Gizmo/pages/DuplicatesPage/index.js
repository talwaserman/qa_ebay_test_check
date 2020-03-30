"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DuplicatesPage;

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _shared = require("../../shared");

var _Duplicates = _interopRequireDefault(require("./Duplicates"));

var _services = require("./services");

require("./style.less");

function DuplicatesPage(_ref) {
  var workMode = _ref.workMode,
      jobId = _ref.jobId,
      rowId = _ref.rowId;

  var _useState = (0, _react.useState)({
    survivorData: null,
    vArray: null,
    escalatedInfo: null,
    decisions: null,
    isLoading: true,
    rowsDone: null,
    rowId: null,
    jobId: null,
    jobTypeConfiguration: null,
    loggedInUser: null
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var antIcon = _react.default.createElement(_icon.default, {
    type: "loading",
    style: {
      fontSize: 46
    },
    spin: true
  });

  (0, _react.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var jobHeader, jobConfiguration, loggedInUser, res, survivorData, vArray, escalatedInfo, sendToSupervisor, rowsDone, additionalInformationDataList;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (jobId) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return (0, _services.getJobHeader)(jobId);

              case 4:
                jobHeader = _context.sent;
                _context.next = 7;
                return (0, _services.getJobConfiguration)(jobHeader.typeConfiguration.selectedDuplicateConfigurationId);

              case 7:
                jobConfiguration = _context.sent;
                _context.next = 10;
                return (0, _services.getLoggedInUser)();

              case 10:
                loggedInUser = _context.sent;
                res = null;

                if (!(workMode === 'edit')) {
                  _context.next = 18;
                  break;
                }

                _context.next = 15;
                return (0, _services.getRowById)({
                  rowId: rowId,
                  type: 'Duplicates'
                });

              case 15:
                res = _context.sent;
                _context.next = 21;
                break;

              case 18:
                _context.next = 20;
                return (0, _services.getNextRow)(jobId);

              case 20:
                res = _context.sent;

              case 21:
                survivorData = (0, _get.default)(res, 'nextRowContract.entities', []).shift() || null;
                vArray = (0, _get.default)(res, 'nextRowContract.entities', null);
                escalatedInfo = (0, _get.default)(res, 'nextRowContract.escalationInfo', null);
                sendToSupervisor = null;
                rowsDone = (0, _get.default)(res, 'doneRowsContract', null);
                additionalInformationDataList = (0, _get.default)(res, 'nextRowContract.additionalInformationContract.additionalInformationDataList', []);
                setData({
                  survivorData: survivorData,
                  vArray: vArray,
                  escalatedInfo: escalatedInfo,
                  rowsDone: rowsDone,
                  isLoading: false,
                  rowId: (0, _get.default)(res, 'nextRowContract.rowId', null),
                  decisions: getInitialDecisionsArray(survivorData, vArray, additionalInformationDataList, sendToSupervisor),
                  jobId: jobId || null,
                  jobTypeConfiguration: jobConfiguration,
                  loggedInUser: loggedInUser
                });

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []); // option 1 - yes
  // option 2 - skip
  // option 3 - no

  var duplicateReasons = {
    option1: ['Only Identical UPI(s)', 'Only Identical Title', 'Only Identical DATA'],
    option2: ['Cant Validate - prod1', 'Cant Validate - prod2', 'Cant Validate - both products', 'Insufficient - prod1', 'Insufficient - prod2', 'Merged - prod1', 'Merged - prod2', 'Merged - Both products', 'Deleted - prod1', 'Deleted - prod2', 'Deleted - Both products'],
    option3: ['Different Attribute', 'Different Products', 'Different Granularity', 'Conflict Data - prod1', 'Conflict Data - prod2', 'Conflict Data - both products', 'Mixed Results - prod1', 'Mixed Results - prod2', 'Mixed Results - Both Products', 'Invalid - prod1', 'Invalid - prod2', 'Invalid - Both products']
  };
  return _react.default.createElement("div", {
    className: "duplication-page-wrapper"
  }, data.isLoading && _react.default.createElement("div", {
    className: "loading-spinner"
  }, _react.default.createElement(_spin.default, {
    indicator: antIcon
  })), !data.isLoading && data.survivorData && _react.default.createElement(_Duplicates.default, {
    survivorData: data.survivorData,
    victimArray: data.vArray,
    escalatedInfo: data.escalatedInfo,
    rowsDone: data.rowsDone,
    decisions: data.decisions,
    reasons: duplicateReasons,
    rowId: data.rowId,
    saveTask: handleSaveTask,
    changeCategory: handleChangeCategory,
    jobId: jobId,
    jobTypeConfiguration: data.jobTypeConfiguration,
    workMode: workMode,
    loggedInUser: data.loggedInUser
  }), !data.isLoading && !data.survivorData && _react.default.createElement("div", {
    className: "finished-queue-message"
  }, _react.default.createElement(_shared.CBreadcrumb, {
    path: ['Duplications']
  }), _react.default.createElement("i", {
    class: "fa fa-check-circle end-of-queue-circle"
  }), _react.default.createElement("label", {
    className: "endOfQueueHeader"
  }, "You are done!"), _react.default.createElement("label", {
    className: "endOfQueueBody"
  }, "No more items to consume from the queue")));

  function handleSaveTask(_x) {
    return _handleSaveTask.apply(this, arguments);
  }

  function _handleSaveTask() {
    _handleSaveTask = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(updatedTaskObject) {
      var res, survivorData, vArray, escalatedInfo, rowsDone, additionalInformationDataList;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setData({
                survivorData: null,
                vArray: null,
                escalatedInfo: null,
                decisions: null,
                isLoading: true,
                rowsDone: null,
                rowId: null,
                jobId: null
              });

              if (!(workMode === 'edit')) {
                _context2.next = 6;
                break;
              }

              updatedTaskObject.nextRow = false;
              (0, _services.saveTask)(updatedTaskObject);
              window.history.back();
              return _context2.abrupt("return");

            case 6:
              _context2.next = 8;
              return (0, _services.saveTask)(updatedTaskObject);

            case 8:
              res = _context2.sent;
              survivorData = (0, _get.default)(res, 'nextRowContract.entities', []).shift() || null;
              vArray = (0, _get.default)(res, 'nextRowContract.entities', null);
              escalatedInfo = (0, _get.default)(res, 'nextRowContract.escalationInfo', null);
              rowsDone = (0, _get.default)(res, 'doneRowsContract', null);
              additionalInformationDataList = (0, _get.default)(res, 'nextRowContract.additionalInformationContract.additionalInformationDataList', []);
              setData({
                survivorData: survivorData,
                vArray: vArray,
                escalatedInfo: escalatedInfo,
                rowsDone: rowsDone,
                isLoading: false,
                rowId: (0, _get.default)(res, 'nextRowContract.rowId', null),
                decisions: getInitialDecisionsArray(survivorData, vArray, additionalInformationDataList),
                jobId: jobId || null,
                jobTypeConfiguration: data.jobTypeConfiguration
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSaveTask.apply(this, arguments);
  }

  function handleChangeCategory(_x2) {
    return _handleChangeCategory.apply(this, arguments);
  }

  function _handleChangeCategory() {
    _handleChangeCategory = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(updatedTaskObject) {
      var res, survivorData, vArray, rowsDone, additionalInformationDataList;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setData({
                survivorData: null,
                vArray: null,
                decisions: null,
                isLoading: true,
                rowsDone: null,
                rowId: null,
                jobId: null,
                jobTypeConfiguration: null
              });
              _context3.next = 3;
              return (0, _services.changeCategory)(updatedTaskObject);

            case 3:
              res = _context3.sent;
              survivorData = (0, _get.default)(res, 'nextRowContract.entities', []).shift() || null;
              vArray = (0, _get.default)(res, 'nextRowContract.entities', null);
              rowsDone = (0, _get.default)(res, 'doneRowsContract', null);
              additionalInformationDataList = (0, _get.default)(res, 'nextRowContract.additionalInformationContract.additionalInformationDataList', []);
              setData({
                survivorData: survivorData,
                vArray: vArray,
                rowsDone: rowsDone,
                isLoading: false,
                rowId: (0, _get.default)(res, 'nextRowContract.rowId', null),
                decisions: getInitialDecisionsArray(survivorData, vArray, additionalInformationDataList),
                jobId: jobId || null
              });

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _handleChangeCategory.apply(this, arguments);
  }

  function getInitialDecisionsArray(survivorData, vArray, additionalInformationDataList, sendToSupervisor) {
    var decisionsOptionsMap = {
      DUPLICATES: 'op-1',
      SKIP: 'op-2',
      NON_DUPLICATES: 'op-3',
      NOT_FOUND: null
    };
    return [{
      survivorEpid: (0, _get.default)(survivorData, 'product.productDefinition.entityId', null),
      victimEpid: (0, _get.default)(vArray, '[0].product.productDefinition.entityId', null),
      selectedOption: decisionsOptionsMap[(0, _get.default)(vArray, '[0].prodDec.productDuplicateAction', 'NOT_FOUND')],
      decisionInfo: {
        reason: {
          value: (0, _get.default)(vArray, '[0].prodDec.decisionContract.reason', null),
          mandatory: false
        },
        comment: {
          value: (0, _get.default)(vArray, '[0].prodDec.decisionContract.comment', null),
          mandatory: false
        },
        urls: [{
          name: 'url1',
          url: (0, _get.default)(vArray, '[0].prodDec.decisionContract.urls[0].url', null)
        }, {
          name: 'url2',
          url: (0, _get.default)(vArray, '[0].prodDec.decisionContract.urls[1].url', null)
        }],
        additionalInfo: additionalInformationDataList,
        sendToSupervisor: sendToSupervisor
      }
    }];
  }
}

DuplicatesPage.propTypes = {
  /** workMode - string variable that indicate the mode of the page */
  workMode: _propTypes.default.string,

  /** jobId - a string identifier of the task displayed in this screen */
  jobId: _propTypes.default.string.isRequired,

  /** rowId - a string that indicate the task row identifier */
  rowId: _propTypes.default.string.isRequired,

  /** escalatedInfo - object used to show or hide the escelated by string */
  escalatedInfo: _propTypes.default.object
};
DuplicatesPage.defaultProps = {
  workMode: 'regular',
  escalatedInfo: {}
};