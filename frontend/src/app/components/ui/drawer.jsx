import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
"use client";
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _excluded = ["className"],
  _excluded2 = ["className", "children"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
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
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "./utils";
function Drawer(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx(DrawerPrimitive.Root, _objectSpread({
    "data-slot": "drawer"
  }, props), void 0, false);
}
function DrawerTrigger(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_jsx(DrawerPrimitive.Trigger, _objectSpread({
    "data-slot": "drawer-trigger"
  }, props), void 0, false);
}
function DrawerPortal(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_jsx(DrawerPrimitive.Portal, _objectSpread({
    "data-slot": "drawer-portal"
  }, props), void 0, false);
}
function DrawerClose(_ref4) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/_jsx(DrawerPrimitive.Close, _objectSpread({
    "data-slot": "drawer-close"
  }, props), void 0, false);
}
function DrawerOverlay(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Overlay, _objectSpread({
    "data-slot": "drawer-overlay",
    className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)
  }, props), void 0, false);
}
function DrawerContent(_ref6) {
  var className = _ref6.className,
    children = _ref6.children,
    props = _objectWithoutProperties(_ref6, _excluded2);
  return /*#__PURE__*/_jsx(DrawerPortal, {
    "data-slot": "drawer-portal",
    children: [/*#__PURE__*/_jsx(DrawerOverlay, {}), /*#__PURE__*/_jsx(DrawerPrimitive.Content, _objectSpread(_objectSpread({
      "data-slot": "drawer-content",
      className: cn("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", className)
    }, props), {}, {
      children: [/*#__PURE__*/_jsx("div", {
        className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
      }, void 0, false), children]
    }), void 0, true)]
  }, void 0, true);
}
function DrawerHeader(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded3);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "drawer-header",
    className: cn("flex flex-col gap-1.5 p-4", className)
  }, props), void 0, false);
}
function DrawerFooter(_ref8) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded4);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "drawer-footer",
    className: cn("mt-auto flex flex-col gap-2 p-4", className)
  }, props), void 0, false);
}
function DrawerTitle(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded5);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Title, _objectSpread({
    "data-slot": "drawer-title",
    className: cn("text-foreground font-semibold", className)
  }, props), void 0, false);
}
function DrawerDescription(_ref0) {
  var className = _ref0.className,
    props = _objectWithoutProperties(_ref0, _excluded6);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Description, _objectSpread({
    "data-slot": "drawer-description",
    className: cn("text-muted-foreground text-sm", className)
  }, props), void 0, false);
}
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };