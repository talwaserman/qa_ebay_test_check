"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatistics = getStatistics;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("../Statistics/mock");

function getStatistics(_x) {
  return _getStatistics.apply(this, arguments);
}

function _getStatistics() {
  _getStatistics = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(jobId) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "/job-statistics/get-job-statistics?jobId=".concat(jobId),
              mockResponse: _mock.apiResponseMock
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
  return _getStatistics.apply(this, arguments);
}