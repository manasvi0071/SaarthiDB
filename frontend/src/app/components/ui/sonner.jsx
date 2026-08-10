import _react2 from "react";
import * as _nextThemes from "next-themes";
import * as _sonner from "sonner";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
"use client";
export var Toaster = function Toaster(_ref) {
  var props = _objectWithoutProperties(_ref, []);
  var _useTheme = _nextThemes.useTheme();
  var _useTheme$theme = _useTheme.theme;
  var theme = _useTheme$theme === undefined ? "system" : _useTheme$theme;
  return /*#__PURE__*/_jsx(_sonner.Toaster, _extends({
    theme: theme,
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    }
  }, props), void 0, false);
};