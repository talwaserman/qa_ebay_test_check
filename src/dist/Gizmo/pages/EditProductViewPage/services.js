"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskConfiguration = getTaskConfiguration;
exports.initProductCuration = initProductCuration;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("../EditProductViewPage/mock");

function getTaskConfiguration(_x) {
  return _getTaskConfiguration.apply(this, arguments);
}

function _getTaskConfiguration() {
  _getTaskConfiguration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(taskType) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "/task/get-task-configuration-by-type?taskType=".concat(taskType),
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
  return _getTaskConfiguration.apply(this, arguments);
}

function initProductCuration(_x2) {
  return _initProductCuration.apply(this, arguments);
}

function _initProductCuration() {
  _initProductCuration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(formData) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.formMultiPartAdapter)({
              url: "/product-curation/init-product-curation",
              payload: formData,
              mockResponse: _mock.apiFormDataResponseMock
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
  return _initProductCuration.apply(this, arguments);
}