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
var _excluded = ["className", "containerClassName"],
  _excluded2 = ["className"],
  _excluded3 = ["index", "className"];
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
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { cn } from "./utils";
function InputOTP(_ref) {
  var className = _ref.className,
    containerClassName = _ref.containerClassName,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(OTPInput, _objectSpread({
    "data-slot": "input-otp",
    containerClassName: cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName),
    className: cn("disabled:cursor-not-allowed", className)
  }, props), void 0, false);
}
function InputOTPGroup(_ref2) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "input-otp-group",
    className: cn("flex items-center gap-1", className)
  }, props), void 0, false);
}
function InputOTPSlot(_ref3) {
  var _inputOTPContext$slot;
  var index = _ref3.index,
    className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var inputOTPContext = React.useContext(OTPInputContext);
  var _ref4 = (_inputOTPContext$slot = inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots[index]) !== null && _inputOTPContext$slot !== void 0 ? _inputOTPContext$slot : {},
    char = _ref4.char,
    hasFakeCaret = _ref4.hasFakeCaret,
    isActive = _ref4.isActive;
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    "data-slot": "input-otp-slot",
    "data-active": isActive,
    className: cn("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", className)
  }, props), {}, {
    children: [char, hasFakeCaret && /*#__PURE__*/_jsx("div", {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      children: /*#__PURE__*/_jsx("div", {
        className: "animate-caret-blink bg-foreground h-4 w-px duration-1000"
      }, void 0, false)
    }, void 0, false)]
  }), void 0, true);
}
function InputOTPSeparator(_ref5) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref5), _ref5));
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    "data-slot": "input-otp-separator",
    role: "separator"
  }, props), {}, {
    children: /*#__PURE__*/_jsx(MinusIcon, {})
  }), void 0, false);
}
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };