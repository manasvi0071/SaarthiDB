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
  _excluded2 = ["className", "children", "side"],
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
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "./utils";
function Sheet(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx(SheetPrimitive.Root, _objectSpread({
    "data-slot": "sheet"
  }, props), void 0, false);
}
function SheetTrigger(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_jsx(SheetPrimitive.Trigger, _objectSpread({
    "data-slot": "sheet-trigger"
  }, props), void 0, false);
}
function SheetClose(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_jsx(SheetPrimitive.Close, _objectSpread({
    "data-slot": "sheet-close"
  }, props), void 0, false);
}
function SheetPortal(_ref4) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/_jsx(SheetPrimitive.Portal, _objectSpread({
    "data-slot": "sheet-portal"
  }, props), void 0, false);
}
function SheetOverlay(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded);
  return /*#__PURE__*/_jsx(SheetPrimitive.Overlay, _objectSpread({
    "data-slot": "sheet-overlay",
    className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)
  }, props), void 0, false);
}
function SheetContent(_ref6) {
  var className = _ref6.className,
    children = _ref6.children,
    _ref6$side = _ref6.side,
    side = _ref6$side === void 0 ? "right" : _ref6$side,
    props = _objectWithoutProperties(_ref6, _excluded2);
  return /*#__PURE__*/_jsx(SheetPortal, {
    children: [/*#__PURE__*/_jsx(SheetOverlay, {}), /*#__PURE__*/_jsx(SheetPrimitive.Content, _objectSpread(_objectSpread({
      "data-slot": "sheet-content",
      className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className)
    }, props), {}, {
      children: [children, /*#__PURE__*/_jsx(SheetPrimitive.Close, {
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
        children: [/*#__PURE__*/_jsx(XIcon, {
          className: "size-4"
        }, void 0, false), /*#__PURE__*/_jsx("span", {
          className: "sr-only",
          children: "Close"
        }, void 0, false)]
      }, void 0, true)]
    }), void 0, true)]
  }, void 0, true);
}
function SheetHeader(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded3);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sheet-header",
    className: cn("flex flex-col gap-1.5 p-4", className)
  }, props), void 0, false);
}
function SheetFooter(_ref8) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded4);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sheet-footer",
    className: cn("mt-auto flex flex-col gap-2 p-4", className)
  }, props), void 0, false);
}
function SheetTitle(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded5);
  return /*#__PURE__*/_jsx(SheetPrimitive.Title, _objectSpread({
    "data-slot": "sheet-title",
    className: cn("text-foreground font-semibold", className)
  }, props), void 0, false);
}
function SheetDescription(_ref0) {
  var className = _ref0.className,
    props = _objectWithoutProperties(_ref0, _excluded6);
  return /*#__PURE__*/_jsx(SheetPrimitive.Description, _objectSpread({
    "data-slot": "sheet-description",
    className: cn("text-muted-foreground text-sm", className)
  }, props), void 0, false);
}
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };