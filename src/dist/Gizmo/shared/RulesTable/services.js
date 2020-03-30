"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRules = getRules;
exports.deleteRules = deleteRules;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("./mock");

function getRules(_x) {
  return _getRules.apply(this, arguments);
}

function _getRules() {
  _getRules = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(epid) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "modify-rules/get-all-product-rules?epid=".concat(epid),
              mockResponse: _mock.mockGetRulesData,
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
  return _getRules.apply(this, arguments);
}

function deleteRules(_x2, _x3) {
  return _deleteRules.apply(this, arguments);
}

function _deleteRules() {
  _deleteRules = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(epid, ruleIds) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.deleteAdapter)({
              url: "/modify-rules/delete-by-rules-id",
              payload: {
                epid: epid,
                ruleIds: ruleIds
              },
              mockResponse: _mock.mockDeleteRules,
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
  return _deleteRules.apply(this, arguments);
}