"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditProductViewPage;

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _SelectionPopUp = _interopRequireDefault(require("../../shared/SelectionPopUp"));

var _services = require("./services");

require("./style.less");

function EditProductViewPage(_ref) {
  var closeModal = _ref.closeModal,
      taskType = _ref.taskType,
      epid = _ref.epid,
      assignee = _ref.assignee;

  var _useState = (0, _react.useState)({
    configurationNames: null,
    isFetchingConfigurations: true,
    jobId: null,
    isFetchingJobId: false
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      statData = _useState2[0],
      setStatData = _useState2[1];

  (0, _react.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _services.getTaskConfiguration)(taskType);

              case 2:
                res = _context.sent;
                setStatData({
                  configurationNames: extractConfigurationNames(res.configurationResponse),
                  isFetchingConfigurations: false
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [taskType]);
  var configurationNames = statData.configurationNames,
      isFetchingConfigurations = statData.isFetchingConfigurations,
      isFetchingJobId = statData.isFetchingJobId;
  return _react.default.createElement("div", {
    className: "edit-product-view-page-wrapper"
  }, isFetchingConfigurations ? _react.default.createElement(_spin.default, null) : _react.default.createElement(_SelectionPopUp.default, {
    handleClose: function handleClose() {
      return onCloseClick();
    },
    selectPlaceHolder: 'Configuration',
    dropDownValuesArray: configurationNames,
    inputLabel: 'Task Name',
    dropDownKeyLabel: 'taskId',
    onClickHandler: function onClickHandler(selectionPopData) {
      return _onClickHandler(selectionPopData);
    },
    loading: isFetchingJobId
  }));

  function extractConfigurationNames(res) {
    var configurationNames = [];
    res.forEach(function (element) {
      configurationNames.push({
        name: element.name,
        id: element.taskId
      });
    });
    return configurationNames;
  }

  function onCloseClick() {
    closeModal();
  }

  function _onClickHandler(_x) {
    return _onClickHandler2.apply(this, arguments);
  }

  function _onClickHandler2() {
    _onClickHandler2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(selectionPopData) {
      var formRequest;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setStatData({
                configurationNames: statData.configurationNames,
                jobId: null,
                isFetchingConfigurations: statData.isLoading,
                isFetchingJobId: true
              });
              formRequest = createFormRequest(selectionPopData);
              _context2.next = 4;
              return callProductCuration(formRequest);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onClickHandler2.apply(this, arguments);
  }

  function callProductCuration(_x2) {
    return _callProductCuration.apply(this, arguments);
  }

  function _callProductCuration() {
    _callProductCuration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(formRequest) {
      var response;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return (0, _services.initProductCuration)(formRequest);

            case 3:
              response = _context3.sent;
              setStatData({
                configurationNames: statData.configurationNames,
                jobId: response.jobId,
                isFetchingConfigurations: statData.isLoading,
                isFetchingJobId: false
              });
              closeModal();
              openProductCurationPage(response, formRequest);
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              setStatData({
                configurationNames: statData.configurationNames,
                jobId: null,
                isFetchingConfigurations: statData.isLoading,
                isFetchingJobId: false
              });

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return _callProductCuration.apply(this, arguments);
  }

  function createFormRequest(selectionPopData) {
    var request = {
      uploadBy: null,
      scope: null,
      updatePlatform: true,
      addCrawling: false,
      liveOnly: false,
      selectedTaskId: (0, _get.default)(selectionPopData, 'selectionData.id', null),
      epid: epid,
      jobHeaderContract: {
        name: (0, _get.default)(selectionPopData, 'inputData', null),
        type: 'Product Curation',
        state: 'IN_PROGRESS',
        owners: [assignee],
        'assignees[0]': [{
          id: 0,
          displayName: assignee,
          'vendorTeamLeaders[0]': [assignee],
          organization: '1'
        }]
      }
    };
    return request;
  }

  function openProductCurationPage(response, formRequest) {
    window.open("#/vendor-management/productCurationJob?jobId=".concat(response.jobId, "&state=In Progress&jobName=").concat(formRequest.jobHeaderContract.name, "&type=Product Curation&workMode=productView&backPath=/vendor-management/jobList"), '_blank');
  }
}

EditProductViewPage.propTypes = {
  /** taskType - query field to get configuration data */
  taskType: _propTypes.default.string.isRequired,

  /**  epid - product identifer query field for creating jobId- */
  epid: _propTypes.default.string.isRequired,

  /**  assignee- assignee id query field for creating jobId*/
  assignee: _propTypes.default.string.isRequired,

  /**  closeModal - external Function which close modal */
  closeModal: _propTypes.default.func.isRequired
};