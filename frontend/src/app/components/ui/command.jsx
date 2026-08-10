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
  _excluded2 = ["title", "description", "children"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
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
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import { cn } from "./utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
function Command(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(CommandPrimitive, _objectSpread({
    "data-slot": "command",
    className: cn("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className)
  }, props), void 0, false);
}
function CommandDialog(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? "Command Palette" : _ref2$title,
    _ref2$description = _ref2.description,
    description = _ref2$description === void 0 ? "Search for a command to run..." : _ref2$description,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(Dialog, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/_jsx(DialogHeader, {
      className: "sr-only",
      children: [/*#__PURE__*/_jsx(DialogTitle, {
        children: title
      }, void 0, false), /*#__PURE__*/_jsx(DialogDescription, {
        children: description
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsx(DialogContent, {
      className: "overflow-hidden p-0",
      children: /*#__PURE__*/_jsx(Command, {
        className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
        children: children
      }, void 0, false)
    }, void 0, false)]
  }), void 0, true);
}
function CommandInput(_ref3) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsx("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [/*#__PURE__*/_jsx(SearchIcon, {
      className: "size-4 shrink-0 opacity-50"
    }, void 0, false), /*#__PURE__*/_jsx(CommandPrimitive.Input, _objectSpread({
      "data-slot": "command-input",
      className: cn("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className)
    }, props), void 0, false)]
  }, void 0, true);
}
function CommandList(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx(CommandPrimitive.List, _objectSpread({
    "data-slot": "command-list",
    className: cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className)
  }, props), void 0, false);
}
function CommandEmpty(_ref5) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref5), _ref5));
  return /*#__PURE__*/_jsx(CommandPrimitive.Empty, _objectSpread({
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm"
  }, props), void 0, false);
}
function CommandGroup(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded5);
  return /*#__PURE__*/_jsx(CommandPrimitive.Group, _objectSpread({
    "data-slot": "command-group",
    className: cn("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className)
  }, props), void 0, false);
}
function CommandSeparator(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded6);
  return /*#__PURE__*/_jsx(CommandPrimitive.Separator, _objectSpread({
    "data-slot": "command-separator",
    className: cn("bg-border -mx-1 h-px", className)
  }, props), void 0, false);
}
function CommandItem(_ref8) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded7);
  return /*#__PURE__*/_jsx(CommandPrimitive.Item, _objectSpread({
    "data-slot": "command-item",
    className: cn("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
  }, props), void 0, false);
}
function CommandShortcut(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded8);
  return /*#__PURE__*/_jsx("span", _objectSpread({
    "data-slot": "command-shortcut",
    className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className)
  }, props), void 0, false);
}
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };