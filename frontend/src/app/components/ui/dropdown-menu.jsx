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
var _excluded = ["className", "sideOffset"],
  _excluded2 = ["className", "inset", "variant"],
  _excluded3 = ["className", "children", "checked"],
  _excluded4 = ["className", "children"],
  _excluded5 = ["className", "inset"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className", "inset", "children"],
  _excluded9 = ["className"];
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
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "./utils";
function DropdownMenu(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Root, _objectSpread({
    "data-slot": "dropdown-menu"
  }, props), void 0, false);
}
function DropdownMenuPortal(_ref2) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Portal, _objectSpread({
    "data-slot": "dropdown-menu-portal"
  }, props), void 0, false);
}
function DropdownMenuTrigger(_ref3) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Trigger, _objectSpread({
    "data-slot": "dropdown-menu-trigger"
  }, props), void 0, false);
}
function DropdownMenuContent(_ref4) {
  var className = _ref4.className,
    _ref4$sideOffset = _ref4.sideOffset,
    sideOffset = _ref4$sideOffset === void 0 ? 4 : _ref4$sideOffset,
    props = _objectWithoutProperties(_ref4, _excluded);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Portal, {
    children: /*#__PURE__*/_jsx(DropdownMenuPrimitive.Content, _objectSpread({
      "data-slot": "dropdown-menu-content",
      sideOffset: sideOffset,
      className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className)
    }, props), void 0, false)
  }, void 0, false);
}
function DropdownMenuGroup(_ref5) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref5), _ref5));
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Group, _objectSpread({
    "data-slot": "dropdown-menu-group"
  }, props), void 0, false);
}
function DropdownMenuItem(_ref6) {
  var className = _ref6.className,
    inset = _ref6.inset,
    _ref6$variant = _ref6.variant,
    variant = _ref6$variant === void 0 ? "default" : _ref6$variant,
    props = _objectWithoutProperties(_ref6, _excluded2);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Item, _objectSpread({
    "data-slot": "dropdown-menu-item",
    "data-inset": inset,
    "data-variant": variant,
    className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
  }, props), void 0, false);
}
function DropdownMenuCheckboxItem(_ref7) {
  var className = _ref7.className,
    children = _ref7.children,
    checked = _ref7.checked,
    props = _objectWithoutProperties(_ref7, _excluded3);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.CheckboxItem, _objectSpread(_objectSpread({
    "data-slot": "dropdown-menu-checkbox-item",
    className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
    checked: checked
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(DropdownMenuPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CheckIcon, {
          className: "size-4"
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), children]
  }), void 0, true);
}
function DropdownMenuRadioGroup(_ref8) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref8), _ref8));
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.RadioGroup, _objectSpread({
    "data-slot": "dropdown-menu-radio-group"
  }, props), void 0, false);
}
function DropdownMenuRadioItem(_ref9) {
  var className = _ref9.className,
    children = _ref9.children,
    props = _objectWithoutProperties(_ref9, _excluded4);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.RadioItem, _objectSpread(_objectSpread({
    "data-slot": "dropdown-menu-radio-item",
    className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(DropdownMenuPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CircleIcon, {
          className: "size-2 fill-current"
        }, void 0, false)
      }, void 0, false)
    }, void 0, false), children]
  }), void 0, true);
}
function DropdownMenuLabel(_ref0) {
  var className = _ref0.className,
    inset = _ref0.inset,
    props = _objectWithoutProperties(_ref0, _excluded5);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Label, _objectSpread({
    "data-slot": "dropdown-menu-label",
    "data-inset": inset,
    className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)
  }, props), void 0, false);
}
function DropdownMenuSeparator(_ref1) {
  var className = _ref1.className,
    props = _objectWithoutProperties(_ref1, _excluded6);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Separator, _objectSpread({
    "data-slot": "dropdown-menu-separator",
    className: cn("bg-border -mx-1 my-1 h-px", className)
  }, props), void 0, false);
}
function DropdownMenuShortcut(_ref10) {
  var className = _ref10.className,
    props = _objectWithoutProperties(_ref10, _excluded7);
  return /*#__PURE__*/_jsx("span", _objectSpread({
    "data-slot": "dropdown-menu-shortcut",
    className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className)
  }, props), void 0, false);
}
function DropdownMenuSub(_ref11) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref11), _ref11));
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.Sub, _objectSpread({
    "data-slot": "dropdown-menu-sub"
  }, props), void 0, false);
}
function DropdownMenuSubTrigger(_ref12) {
  var className = _ref12.className,
    inset = _ref12.inset,
    children = _ref12.children,
    props = _objectWithoutProperties(_ref12, _excluded8);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.SubTrigger, _objectSpread(_objectSpread({
    "data-slot": "dropdown-menu-sub-trigger",
    "data-inset": inset,
    className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className)
  }, props), {}, {
    children: [children, /*#__PURE__*/_jsx(ChevronRightIcon, {
      className: "ml-auto size-4"
    }, void 0, false)]
  }), void 0, true);
}
function DropdownMenuSubContent(_ref13) {
  var className = _ref13.className,
    props = _objectWithoutProperties(_ref13, _excluded9);
  return /*#__PURE__*/_jsx(DropdownMenuPrimitive.SubContent, _objectSpread({
    "data-slot": "dropdown-menu-sub-content",
    className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className)
  }, props), void 0, false);
}
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent };