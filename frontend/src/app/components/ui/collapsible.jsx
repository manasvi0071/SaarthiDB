import _react2 from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
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
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
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
export function Collapsible(_ref) {
  var props = _objectWithoutProperties(_ref, []);
  return /*#__PURE__*/_jsx(CollapsiblePrimitive.Root, _extends({
    "data-slot": "collapsible"
  }, props), void 0, false);
}
export function CollapsibleTrigger(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);
  return /*#__PURE__*/_jsx(CollapsiblePrimitive.CollapsibleTrigger, _extends({
    "data-slot": "collapsible-trigger"
  }, props), void 0, false);
}
export function CollapsibleContent(_ref3) {
  var props = _objectWithoutProperties(_ref3, []);
  return /*#__PURE__*/_jsx(CollapsiblePrimitive.CollapsibleContent, _extends({
    "data-slot": "collapsible-content"
  }, props), void 0, false);
}