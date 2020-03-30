"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJobs = getJobs;
exports.getAllOrganizations = getAllOrganizations;
exports.changeJobState = changeJobState;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("./mock");

function getJobs(_x) {
  return _getJobs.apply(this, arguments);
}

function _getJobs() {
  _getJobs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(filterData) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/job/get-jobs",
              payload: filterData,
              mockResponse: _mock.jobListMock,
              mockMessage: ''
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getJobs.apply(this, arguments);
}

function getAllOrganizations(_x2) {
  return _getAllOrganizations.apply(this, arguments);
}

function _getAllOrganizations() {
  _getAllOrganizations = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(jobId) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "/org/get-all-organizations",
              mockResponse: _mock.getOrganizationsMock,
              mockMessage: ''
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAllOrganizations.apply(this, arguments);
}

function changeJobState(_x3) {
  return _changeJobState.apply(this, arguments);
}

function _changeJobState() {
  _changeJobState = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(payload) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/job/change-job-to-requested-state",
              payload: payload,
              mockResponse: {},
              mockMessage: ''
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _changeJobState.apply(this, arguments);
}