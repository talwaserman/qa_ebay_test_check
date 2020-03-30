"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pages = require("./pages");

Object.keys(_pages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pages[key];
    }
  });
});

var _shared = require("./shared");

Object.keys(_shared).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shared[key];
    }
  });
});