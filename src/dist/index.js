"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AntDesign = require("./AntDesign");

Object.keys(_AntDesign).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AntDesign[key];
    }
  });
});

var _Gizmo = require("./Gizmo");

Object.keys(_Gizmo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Gizmo[key];
    }
  });
});