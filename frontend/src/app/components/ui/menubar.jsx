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
  _excluded3 = ["className", "align", "alignOffset", "sideOffset"],
  _excluded4 = ["className", "inset", "variant"],
  _excluded5 = ["className", "children", "checked"],
  _excluded6 = ["className", "children"],
  _excluded7 = ["className", "inset"],
  _excluded8 = ["className"],
  _excluded9 = ["className"],
  _excluded0 = ["className", "inset", "children"],
  _excluded1 = ["className"];
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
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "./utils";
function Menubar(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(MenubarPrimitive.Root, _objectSpread({
    "data-slot": "menubar",
    className: cn("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", className)
  }, props), void 0, false);
}
function MenubarMenu(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_jsx(MenubarPrimitive.Menu, _objectSpread({
    "data-slot": "menubar-menu"
  }, props), void 0, false);
}
function MenubarGroup(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_jsx(MenubarPrimitive.Group, _objectSpread({
    "data-slot": "menubar-group"
  }, props), void 0, false);
}
function MenubarPortal(_ref4) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/_jsx(MenubarPrimitive.Portal, _objectSpread({
    "data-slot": "menubar-portal"
  }, props), void 0, false);
}
function MenubarRadioGroup(_ref5) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref5), _ref5));
  return /*#__PURE__*/_jsx(MenubarPrimitive.RadioGroup, _objectSpread({
    "data-slot": "menubar-radio-group"
  }, props), void 0, false);
}
function MenubarTrigger(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded2);
  return /*#__PURE__*/_jsx(MenubarPrimitive.Trigger, _objectSpread({
    "data-slot": "menubar-trigger",
    className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", className)
  }, props), void 0, false);
}
function MenubarContent(_ref7) {
  var className = _ref7.className,
    _ref7$align = _ref7.align,
    align = _ref7$align === void 0 ? "start" : _ref7$align,
    _ref7$alignOffset = _ref7.alignOffset,
    alignOffset = _ref7$alignOffset === void 0 ? -4 : _ref7$alignOffset,
    _ref7$sideOffset = _ref7.sideOffset,
    sideOffset = _ref7$sideOffset === void 0 ? 8 : _ref7$sideOffset,
    props = _objectWithoutProperties(_ref7, _excluded3);
  return /*#__PURE__*/_jsx(MenubarPortal, {
    children: /*#__PURE__*/_jsx(MenubarPrimitive.Content, _objectSpread({
      "data-slot": "menubar-content",
      align: align,
      alignOffset: alignOffset,
      sideOffset: sideOffset,
      className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", className)
    }, props), void 0, false)
  }, void 0, false);
}
function MenubarItem(_ref8) {
  var className = _ref8.className,
    inset = _ref8.inset,
    _ref8$variant = _ref8.variant,
    variant = _ref8$variant === void 0 ? "default" : _ref8$variant,
    props = _objectWithoutProperties(_ref8, _excluded4);
  return /*#__PURE__*/_jsx(MenubarPrimitive.Item, _objectSpread({
    "data-slot": "menubar-item",
    "data-inset": inset,
    "data-variant": variant,
    className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
  }, props), void 0, false);
}
function MenubarCheckboxItem(_ref9) {
  var className = _ref9.className,
    children = _ref9.children,
    checked = _ref9.checked,
    props = _objectWithoutProperties(_ref9, _excluded5);
  return /*#__PURE__*/_jsx(MenubarPrimitive.CheckboxItem, _objectSpread(_objectSpread({
    "data-slot": "menubar-checkbox-item",
    className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
    checked: checked
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(MenubarPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CheckIcon, {
          className: "size-4"
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), children]
  }), void 0, true);
}
function MenubarRadioItem(_ref0) {
  var className = _ref0.className,
    children = _ref0.children,
    props = _objectWithoutProperties(_ref0, _excluded6);
  return /*#__PURE__*/_jsx(MenubarPrimitive.RadioItem, _objectSpread(_objectSpread({
    "data-slot": "menubar-radio-item",
    className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(MenubarPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CircleIcon, {
          className: "size-2 fill-current"
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), children]
  }), void 0, true);
}
function MenubarLabel(_ref1) {
  var className = _ref1.className,
    inset = _ref1.inset,
    props = _objectWithoutProperties(_ref1, _excluded7);
  return /*#__PURE__*/_jsx(MenubarPrimitive.Label, _objectSpread({
    "data-slot": "menubar-label",
    "data-inset": inset,
    className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)
  }, props), void 0, false);
}
function MenubarSeparator(_ref10) {
  var className = _ref10.className,
    props = _objectWithoutProperties(_ref10, _excluded8);
  return /*#__PURE__*/_jsx(MenubarPrimitive.Separator, _objectSpread({
    "data-slot": "menubar-separator",
    className: cn("bg-border -mx-1 my-1 h-px", className)
  }, props), void 0, false);
}
function MenubarShortcut(_ref11) {
  var className = _ref11.className,
    props = _objectWithoutProperties(_ref11, _excluded9);
  return /*#__PURE__*/_jsx("span", _objectSpread({
    "data-slot": "menubar-shortcut",
    className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className)
  }, props), void 0, false);
}
function MenubarSub(_ref12) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref12), _ref12));
  return /*#__PURE__*/_jsx(MenubarPrimitive.Sub, _objectSpread({
    "data-slot": "menubar-sub"
  }, props), void 0, false);
}
function MenubarSubTrigger(_ref13) {
  var className = _ref13.className,
    inset = _ref13.inset,
    children = _ref13.children,
    props = _objectWithoutProperties(_ref13, _excluded0);
  return /*#__PURE__*/_jsx(MenubarPrimitive.SubTrigger, _objectSpread(_objectSpread({
    "data-slot": "menubar-sub-trigger",
    "data-inset": inset,
    className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", className)
  }, props), {}, {
    children: [children, /*#__PURE__*/_jsx(ChevronRightIcon, {
      className: "ml-auto h-4 w-4"
    }, void 0, false)]
  }), void 0, true);
}
function MenubarSubContent(_ref14) {
  var className = _ref14.className,
    props = _objectWithoutProperties(_ref14, _excluded1);
  return /*#__PURE__*/_jsx(MenubarPrimitive.SubContent, _objectSpread({
    "data-slot": "menubar-sub-content",
    className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className)
  }, props), void 0, false);
}
export { Menubar, MenubarPortal, MenubarMenu, MenubarTrigger, MenubarContent, MenubarGroup, MenubarSeparator, MenubarLabel, MenubarItem, MenubarShortcut, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent };