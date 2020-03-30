"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postAdapter = postAdapter;
exports.formMultiPartAdapter = formMultiPartAdapter;
exports.getAdapter = getAdapter;
exports.deleteAdapter = deleteAdapter;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/* istanbul ignore file */
function postAdapter(_x) {
  return _postAdapter.apply(this, arguments);
}

function _postAdapter() {
  _postAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
    var url, payload, mockResponse, mockMessage;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, payload = _ref.payload, mockResponse = _ref.mockResponse, mockMessage = _ref.mockMessage;

            if (!window.BackendApi) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return window.BackendApi.post(url, payload);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            if (!(process.env.NODE_ENV === 'development' && mockResponse)) {
              _context.next = 13;
              break;
            }

            if (mockMessage) {
              alert(mockMessage);
            }

            if (!mockResponse) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", mockResponse);

          case 11:
            _context.next = 14;
            break;

          case 13:
            return _context.abrupt("return", []);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _postAdapter.apply(this, arguments);
}

function formMultiPartAdapter(_x2) {
  return _formMultiPartAdapter.apply(this, arguments);
}

function _formMultiPartAdapter() {
  _formMultiPartAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref2) {
    var url, payload, mockResponse, mockMessage;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _ref2.url, payload = _ref2.payload, mockResponse = _ref2.mockResponse, mockMessage = _ref2.mockMessage;

            if (!window.BackendApi) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return window.BackendApi.upload(url, payload, function () {});

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 7:
            if (!(process.env.NODE_ENV === 'development' && mockResponse)) {
              _context2.next = 13;
              break;
            }

            if (mockMessage) {
              alert(mockMessage);
            }

            if (!mockResponse) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", mockResponse);

          case 11:
            _context2.next = 14;
            break;

          case 13:
            return _context2.abrupt("return", []);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _formMultiPartAdapter.apply(this, arguments);
}

function getAdapter(_x3) {
  return _getAdapter.apply(this, arguments);
}

function _getAdapter() {
  _getAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref3) {
    var url, mockResponse, mockMessage;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _ref3.url, mockResponse = _ref3.mockResponse, mockMessage = _ref3.mockMessage;

            if (!window.BackendApi) {
              _context3.next = 7;
              break;
            }

            _context3.next = 4;
            return window.BackendApi.get(url);

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 7:
            if (!(process.env.NODE_ENV === 'development' && mockResponse)) {
              _context3.next = 13;
              break;
            }

            if (mockMessage) {
              alert(mockMessage);
            }

            if (!mockResponse) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", mockResponse);

          case 11:
            _context3.next = 14;
            break;

          case 13:
            return _context3.abrupt("return", []);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAdapter.apply(this, arguments);
}

function deleteAdapter(_x4) {
  return _deleteAdapter.apply(this, arguments);
}

function _deleteAdapter() {
  _deleteAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref4) {
    var url, payload, mockResponse, mockMessage;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = _ref4.url, payload = _ref4.payload, mockResponse = _ref4.mockResponse, mockMessage = _ref4.mockMessage;

            if (!window.BackendApi) {
              _context4.next = 7;
              break;
            }

            _context4.next = 4;
            return window.BackendApi.delete(url, payload);

          case 4:
            return _context4.abrupt("return", _context4.sent);

          case 7:
            if (!(process.env.NODE_ENV === 'development' && mockResponse)) {
              _context4.next = 13;
              break;
            }

            if (mockMessage) {
              alert(mockMessage);
            }

            if (!mockResponse) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", mockResponse);

          case 11:
            _context4.next = 14;
            break;

          case 13:
            return _context4.abrupt("return", []);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteAdapter.apply(this, arguments);
}