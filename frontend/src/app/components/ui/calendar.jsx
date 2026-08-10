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
var _excluded = ["className", "classNames", "showOutsideDays"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "./utils";
import { buttonVariants } from "./button";
function Calendar(_ref) {
  var className = _ref.className,
    classNames = _ref.classNames,
    _ref$showOutsideDays = _ref.showOutsideDays,
    showOutsideDays = _ref$showOutsideDays === void 0 ? true : _ref$showOutsideDays,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(DayPicker, _objectSpread({
    showOutsideDays: showOutsideDays,
    className: cn("p-3", className),
    classNames: _objectSpread({
      months: "flex flex-col sm:flex-row gap-2",
      month: "flex flex-col gap-4",
      caption: "flex justify-center pt-1 relative items-center w-full",
      caption_label: "text-sm font-medium",
      nav: "flex items-center gap-1",
      nav_button: cn(buttonVariants({
        variant: "outline"
      }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
      nav_button_previous: "absolute left-1",
      nav_button_next: "absolute right-1",
      table: "w-full border-collapse space-x-1",
      head_row: "flex",
      head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: cn("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md", props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"),
      day: cn(buttonVariants({
        variant: "ghost"
      }), "size-8 p-0 font-normal aria-selected:opacity-100"),
      day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
      day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
      day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
      day_disabled: "text-muted-foreground opacity-50",
      day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible"
    }, classNames),
    components: {
      IconLeft: function IconLeft(_ref2) {
        var className = _ref2.className,
          props = _objectWithoutProperties(_ref2, _excluded2);
        return /*#__PURE__*/_jsx(ChevronLeft, _objectSpread({
          className: cn("size-4", className)
        }, props), void 0, false);
      },
      IconRight: function IconRight(_ref3) {
        var className = _ref3.className,
          props = _objectWithoutProperties(_ref3, _excluded3);
        return /*#__PURE__*/_jsx(ChevronRight, _objectSpread({
          className: cn("size-4", className)
        }, props), void 0, false);
      }
    }
  }, props), void 0, false);
}
export { Calendar };