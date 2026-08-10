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
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
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
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "./utils";
import { buttonVariants } from "./button";
function AlertDialog(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Root, _objectSpread({
    "data-slot": "alert-dialog"
  }, props), void 0, false);
}
function AlertDialogTrigger(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Trigger, _objectSpread({
    "data-slot": "alert-dialog-trigger"
  }, props), void 0, false);
}
function AlertDialogPortal(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Portal, _objectSpread({
    "data-slot": "alert-dialog-portal"
  }, props), void 0, false);
}
function AlertDialogOverlay(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded);
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Overlay, _objectSpread({
    "data-slot": "alert-dialog-overlay",
    className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)
  }, props), void 0, false);
}
function AlertDialogContent(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded2);
  return /*#__PURE__*/_jsx(AlertDialogPortal, {
    children: [/*#__PURE__*/_jsx(AlertDialogOverlay, {}), /*#__PURE__*/_jsx(AlertDialogPrimitive.Content, _objectSpread({
      "data-slot": "alert-dialog-content",
      className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className)
    }, props), void 0, false)]
  }, void 0, true);
}
function AlertDialogHeader(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded3);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "alert-dialog-header",
    className: cn("flex flex-col gap-2 text-center sm:text-left", className)
  }, props), void 0, false);
}
function AlertDialogFooter(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "alert-dialog-footer",
    className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)
  }, props), void 0, false);
}
function AlertDialogTitle(_ref8) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded5);
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Title, _objectSpread({
    "data-slot": "alert-dialog-title",
    className: cn("text-lg font-semibold", className)
  }, props), void 0, false);
}
function AlertDialogDescription(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded6);
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Description, _objectSpread({
    "data-slot": "alert-dialog-description",
    className: cn("text-muted-foreground text-sm", className)
  }, props), void 0, false);
}
function AlertDialogAction(_ref0) {
  var className = _ref0.className,
    props = _objectWithoutProperties(_ref0, _excluded7);
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Action, _objectSpread({
    className: cn(buttonVariants(), className)
  }, props), void 0, false);
}
function AlertDialogCancel(_ref1) {
  var className = _ref1.className,
    props = _objectWithoutProperties(_ref1, _excluded8);
  return /*#__PURE__*/_jsx(AlertDialogPrimitive.Cancel, _objectSpread({
    className: cn(buttonVariants({
      variant: "outline"
    }), className)
  }, props), void 0, false);
}
export { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel };