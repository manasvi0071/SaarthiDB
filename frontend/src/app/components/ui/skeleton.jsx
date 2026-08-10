import _react2 from "react";
import * as _utils from "./utils";
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
export function Skeleton(_ref) {
  var className = _ref.className;
  var props = _objectWithoutProperties(_ref, ["className"]);
  return /*#__PURE__*/_jsx("div", _extends({
    "data-slot": "skeleton",
    className: _utils.cn("bg-accent animate-pulse rounded-md", className)
  }, props), void 0, false);
}