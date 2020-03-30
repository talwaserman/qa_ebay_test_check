"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;
exports.exportExcelfile = exportExcelfile;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("./mock");

function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(filterData) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/crud/get-redirect-filtered-rows",
              payload: filterData,
              mockResponse: _mock.mockGetRedirectFilteredRows,
              mockMessage: 'table was filtered'
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
  return _fetchData.apply(this, arguments);
}

function exportExcelfile(_x2) {
  return _exportExcelfile.apply(this, arguments);
}

function _exportExcelfile() {
  _exportExcelfile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(RedirectData) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/crud/export-redirect-header",
              payload: {
                headerIds: RedirectData
              },
              mockResponse: 'excel file downloaded',
              mockMessage: "mock of a file download, realted to headerIds: ".concat(RedirectData)
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
  return _exportExcelfile.apply(this, arguments);
}