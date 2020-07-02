"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

var ENDPOINT;

if (!window.BackendApi) {
  // in development and in storybook
  ENDPOINT = 'http://127.0.0.1:8084';
} else {
  // in QA or production environment
  ENDPOINT = "".concat(window.location.host);
}

var socket = (0, _socket.default)(ENDPOINT, {
  reconnectionAttempts: 4,
  reconnectionDelay: 4000
});
var _default = socket;
exports.default = _default;