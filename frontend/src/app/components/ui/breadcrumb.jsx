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
  _excluded3 = ["asChild", "className"],
  _excluded4 = ["className"],
  _excluded5 = ["children", "className"],
  _excluded6 = ["className"];
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
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "./utils";
function Breadcrumb(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx("nav", _objectSpread({
    "aria-label": "breadcrumb",
    "data-slot": "breadcrumb"
  }, props), void 0, false);
}
function BreadcrumbList(_ref2) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_jsx("ol", _objectSpread({
    "data-slot": "breadcrumb-list",
    className: cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className)
  }, props), void 0, false);
}
function BreadcrumbItem(_ref3) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/_jsx("li", _objectSpread({
    "data-slot": "breadcrumb-item",
    className: cn("inline-flex items-center gap-1.5", className)
  }, props), void 0, false);
}
function BreadcrumbLink(_ref4) {
  var asChild = _ref4.asChild,
    className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded3);
  var Comp = asChild ? Slot : "a";
  return /*#__PURE__*/_jsx(Comp, _objectSpread({
    "data-slot": "breadcrumb-link",
    className: cn("hover:text-foreground transition-colors", className)
  }, props), void 0, false);
}
function BreadcrumbPage(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded4);
  return /*#__PURE__*/_jsx("span", _objectSpread({
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("text-foreground font-normal", className)
  }, props), void 0, false);
}
function BreadcrumbSeparator(_ref6) {
  var children = _ref6.children,
    className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded5);
  return /*#__PURE__*/_jsx("li", _objectSpread(_objectSpread({
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-3.5", className)
  }, props), {}, {
    children: children !== null && children !== void 0 ? children : /*#__PURE__*/_jsx(ChevronRight, {})
  }), void 0, false);
}
function BreadcrumbEllipsis(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded6);
  return /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
    "data-slot": "breadcrumb-ellipsis",
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex size-9 items-center justify-center", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(MoreHorizontal, {
      className: "size-4"
    }, void 0, false), /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "More"
    }, void 0, false)]
  }), void 0, true);
}
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };