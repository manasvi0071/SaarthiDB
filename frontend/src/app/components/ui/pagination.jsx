import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "isActive", "size"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { cn } from "./utils";
import { Button, buttonVariants } from "./button";
function Pagination(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("nav", _objectSpread({
    role: "navigation",
    "aria-label": "pagination",
    "data-slot": "pagination",
    className: cn("mx-auto flex w-full justify-center", className)
  }, props), void 0, false);
}
function PaginationContent(_ref2) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx("ul", _objectSpread({
    "data-slot": "pagination-content",
    className: cn("flex flex-row items-center gap-1", className)
  }, props), void 0, false);
}
function PaginationItem(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_jsx("li", _objectSpread({
    "data-slot": "pagination-item"
  }, props), void 0, false);
}
function PaginationLink(_ref4) {
  var className = _ref4.className,
    isActive = _ref4.isActive,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? "icon" : _ref4$size,
    props = _objectWithoutProperties(_ref4, _excluded3);
  return /*#__PURE__*/_jsx("a", _objectSpread({
    "aria-current": isActive ? "page" : undefined,
    "data-slot": "pagination-link",
    "data-active": isActive,
    className: cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size: size
    }), className)
  }, props), void 0, false);
}
function PaginationPrevious(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded4);
  return /*#__PURE__*/_jsx(PaginationLink, _objectSpread(_objectSpread({
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 px-2.5 sm:pl-2.5", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(ChevronLeftIcon, {}), /*#__PURE__*/_jsx("span", {
      className: "hidden sm:block",
      children: "Previous"
    }, void 0, false)]
  }), void 0, true);
}
function PaginationNext(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded5);
  return /*#__PURE__*/_jsx(PaginationLink, _objectSpread(_objectSpread({
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 px-2.5 sm:pr-2.5", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "hidden sm:block",
      children: "Next"
    }, void 0, false), /*#__PURE__*/_jsx(ChevronRightIcon, {})]
  }), void 0, true);
}
function PaginationEllipsis(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded6);
  return /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
    "aria-hidden": true,
    "data-slot": "pagination-ellipsis",
    className: cn("flex size-9 items-center justify-center", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(MoreHorizontalIcon, {
      className: "size-4"
    }, void 0, false), /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "More pages"
    }, void 0, false)]
  }), void 0, true);
}
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };