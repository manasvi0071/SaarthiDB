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
var _excluded = ["defaultOpen", "open", "onOpenChange", "className", "style", "children"],
  _excluded2 = ["side", "variant", "collapsible", "className", "children"],
  _excluded3 = ["className", "onClick"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"],
  _excluded9 = ["className"],
  _excluded0 = ["className"],
  _excluded1 = ["className"],
  _excluded10 = ["className", "asChild"],
  _excluded11 = ["className", "asChild"],
  _excluded12 = ["className"],
  _excluded13 = ["className"],
  _excluded14 = ["className"],
  _excluded15 = ["asChild", "isActive", "variant", "size", "tooltip", "className"],
  _excluded16 = ["className", "asChild", "showOnHover"],
  _excluded17 = ["className"],
  _excluded18 = ["className", "showIcon"],
  _excluded19 = ["className"],
  _excluded20 = ["className"],
  _excluded21 = ["asChild", "size", "isActive", "className"];
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
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import { useIsMobile } from "./use-mobile";
import { cn } from "./utils";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";
import { Skeleton } from "./skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = /*#__PURE__*/React.createContext(null);
function useSidebar() {
  var context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider(_ref) {
  var _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? true : _ref$defaultOpen,
    openProp = _ref.open,
    setOpenProp = _ref.onOpenChange,
    className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var isMobile = useIsMobile();
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    openMobile = _React$useState2[0],
    setOpenMobile = _React$useState2[1];

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  var _React$useState3 = React.useState(defaultOpen),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    _open = _React$useState4[0],
    _setOpen = _React$useState4[1];
  var open = openProp !== null && openProp !== void 0 ? openProp : _open;
  var setOpen = React.useCallback(function (value) {
    var openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }

    // This sets the cookie to keep the sidebar state.
    document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
  }, [setOpenProp, open]);

  // Helper to toggle the sidebar.
  var toggleSidebar = React.useCallback(function () {
    return isMobile ? setOpenMobile(function (open) {
      return !open;
    }) : setOpen(function (open) {
      return !open;
    });
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  var state = open ? "expanded" : "collapsed";
  var contextValue = React.useMemo(function () {
    return {
      state: state,
      open: open,
      setOpen: setOpen,
      isMobile: isMobile,
      openMobile: openMobile,
      setOpenMobile: setOpenMobile,
      toggleSidebar: toggleSidebar
    };
  }, [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /*#__PURE__*/_jsx(SidebarContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(TooltipProvider, {
      delayDuration: 0,
      children: /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
        "data-slot": "sidebar-wrapper",
        style: _objectSpread({
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
        }, style),
        className: cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className)
      }, props), {}, {
        children: children
      }), void 0, false)
    }, void 0, false)
  }, void 0, false);
}
function Sidebar(_ref2) {
  var _ref2$side = _ref2.side,
    side = _ref2$side === void 0 ? "left" : _ref2$side,
    _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "sidebar" : _ref2$variant,
    _ref2$collapsible = _ref2.collapsible,
    collapsible = _ref2$collapsible === void 0 ? "offcanvas" : _ref2$collapsible,
    className = _ref2.className,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _useSidebar = useSidebar(),
    isMobile = _useSidebar.isMobile,
    state = _useSidebar.state,
    openMobile = _useSidebar.openMobile,
    setOpenMobile = _useSidebar.setOpenMobile;
  if (collapsible === "none") {
    return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      "data-slot": "sidebar",
      className: cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className)
    }, props), {}, {
      children: children
    }), void 0, false);
  }
  if (isMobile) {
    return /*#__PURE__*/_jsx(Sheet, _objectSpread(_objectSpread({
      open: openMobile,
      onOpenChange: setOpenMobile
    }, props), {}, {
      children: /*#__PURE__*/_jsx(SheetContent, {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side: side,
        children: [/*#__PURE__*/_jsx(SheetHeader, {
          className: "sr-only",
          children: [/*#__PURE__*/_jsx(SheetTitle, {
            children: "Sidebar"
          }, void 0, false), /*#__PURE__*/_jsx(SheetDescription, {
            children: "Displays the mobile sidebar."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "flex h-full w-full flex-col",
          children: children
        }, void 0, false)]
      }, void 0, true)
    }), void 0, false);
  }
  return /*#__PURE__*/_jsx("div", {
    className: "group peer text-sidebar-foreground hidden md:block",
    "data-state": state,
    "data-collapsible": state === "collapsed" ? collapsible : "",
    "data-variant": variant,
    "data-side": side,
    "data-slot": "sidebar",
    children: [/*#__PURE__*/_jsx("div", {
      "data-slot": "sidebar-gap",
      className: cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
    }, void 0, false), /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      "data-slot": "sidebar-container",
      className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
      // Adjust the padding for floating and inset variants.
      variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className)
    }, props), {}, {
      children: /*#__PURE__*/_jsx("div", {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar-inner",
        className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
        children: children
      }, void 0, false)
    }), void 0, false)]
  }, void 0, true);
}
function SidebarTrigger(_ref3) {
  var className = _ref3.className,
    _onClick = _ref3.onClick,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var _useSidebar2 = useSidebar(),
    toggleSidebar = _useSidebar2.toggleSidebar;
  return /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
    "data-sidebar": "trigger",
    "data-slot": "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: cn("size-7", className),
    onClick: function onClick(event) {
      _onClick === null || _onClick === void 0 || _onClick(event);
      toggleSidebar();
    }
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(PanelLeftIcon, {}), /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Toggle Sidebar"
    }, void 0, false)]
  }), void 0, true);
}
function SidebarRail(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  var _useSidebar3 = useSidebar(),
    toggleSidebar = _useSidebar3.toggleSidebar;
  return /*#__PURE__*/_jsx("button", _objectSpread({
    "data-sidebar": "rail",
    "data-slot": "sidebar-rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: toggleSidebar,
    title: "Toggle Sidebar",
    className: cn("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className)
  }, props), void 0, false);
}
function SidebarInset(_ref5) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsx("main", _objectSpread({
    "data-slot": "sidebar-inset",
    className: cn("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className)
  }, props), void 0, false);
}
function SidebarInput(_ref6) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsx(Input, _objectSpread({
    "data-slot": "sidebar-input",
    "data-sidebar": "input",
    className: cn("bg-background h-8 w-full shadow-none", className)
  }, props), void 0, false);
}
function SidebarHeader(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sidebar-header",
    "data-sidebar": "header",
    className: cn("flex flex-col gap-2 p-2", className)
  }, props), void 0, false);
}
function SidebarFooter(_ref8) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sidebar-footer",
    "data-sidebar": "footer",
    className: cn("flex flex-col gap-2 p-2", className)
  }, props), void 0, false);
}
function SidebarSeparator(_ref9) {
  var className = _ref9.className,
    props = _objectWithoutProperties(_ref9, _excluded9);
  return /*#__PURE__*/_jsx(Separator, _objectSpread({
    "data-slot": "sidebar-separator",
    "data-sidebar": "separator",
    className: cn("bg-sidebar-border mx-2 w-auto", className)
  }, props), void 0, false);
}
function SidebarContent(_ref0) {
  var className = _ref0.className,
    props = _objectWithoutProperties(_ref0, _excluded0);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className)
  }, props), void 0, false);
}
function SidebarGroup(_ref1) {
  var className = _ref1.className,
    props = _objectWithoutProperties(_ref1, _excluded1);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sidebar-group",
    "data-sidebar": "group",
    className: cn("relative flex w-full min-w-0 flex-col p-2", className)
  }, props), void 0, false);
}
function SidebarGroupLabel(_ref10) {
  var className = _ref10.className,
    _ref10$asChild = _ref10.asChild,
    asChild = _ref10$asChild === void 0 ? false : _ref10$asChild,
    props = _objectWithoutProperties(_ref10, _excluded10);
  var Comp = asChild ? Slot : "div";
  return /*#__PURE__*/_jsx(Comp, _objectSpread({
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    className: cn("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className)
  }, props), void 0, false);
}
function SidebarGroupAction(_ref11) {
  var className = _ref11.className,
    _ref11$asChild = _ref11.asChild,
    asChild = _ref11$asChild === void 0 ? false : _ref11$asChild,
    props = _objectWithoutProperties(_ref11, _excluded11);
  var Comp = asChild ? Slot : "button";
  return /*#__PURE__*/_jsx(Comp, _objectSpread({
    "data-slot": "sidebar-group-action",
    "data-sidebar": "group-action",
    className: cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
    // Increases the hit area of the button on mobile.
    "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", className)
  }, props), void 0, false);
}
function SidebarGroupContent(_ref12) {
  var className = _ref12.className,
    props = _objectWithoutProperties(_ref12, _excluded12);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sidebar-group-content",
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className)
  }, props), void 0, false);
}
function SidebarMenu(_ref13) {
  var className = _ref13.className,
    props = _objectWithoutProperties(_ref13, _excluded13);
  return /*#__PURE__*/_jsx("ul", _objectSpread({
    "data-slot": "sidebar-menu",
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className)
  }, props), void 0, false);
}
function SidebarMenuItem(_ref14) {
  var className = _ref14.className,
    props = _objectWithoutProperties(_ref14, _excluded14);
  return /*#__PURE__*/_jsx("li", _objectSpread({
    "data-slot": "sidebar-menu-item",
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className)
  }, props), void 0, false);
}
var sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function SidebarMenuButton(_ref15) {
  var _ref15$asChild = _ref15.asChild,
    asChild = _ref15$asChild === void 0 ? false : _ref15$asChild,
    _ref15$isActive = _ref15.isActive,
    isActive = _ref15$isActive === void 0 ? false : _ref15$isActive,
    _ref15$variant = _ref15.variant,
    variant = _ref15$variant === void 0 ? "default" : _ref15$variant,
    _ref15$size = _ref15.size,
    size = _ref15$size === void 0 ? "default" : _ref15$size,
    tooltip = _ref15.tooltip,
    className = _ref15.className,
    props = _objectWithoutProperties(_ref15, _excluded15);
  var Comp = asChild ? Slot : "button";
  var _useSidebar4 = useSidebar(),
    isMobile = _useSidebar4.isMobile,
    state = _useSidebar4.state;
  var button = /*#__PURE__*/_jsx(Comp, _objectSpread({
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-size": size,
    "data-active": isActive,
    className: cn(sidebarMenuButtonVariants({
      variant: variant,
      size: size
    }), className)
  }, props), void 0, false);
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /*#__PURE__*/_jsx(Tooltip, {
    children: [/*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: button
    }, void 0, false), /*#__PURE__*/_jsx(TooltipContent, _objectSpread({
      side: "right",
      align: "center",
      hidden: state !== "collapsed" || isMobile
    }, tooltip), void 0, false)]
  }, void 0, true);
}
function SidebarMenuAction(_ref16) {
  var className = _ref16.className,
    _ref16$asChild = _ref16.asChild,
    asChild = _ref16$asChild === void 0 ? false : _ref16$asChild,
    _ref16$showOnHover = _ref16.showOnHover,
    showOnHover = _ref16$showOnHover === void 0 ? false : _ref16$showOnHover,
    props = _objectWithoutProperties(_ref16, _excluded16);
  var Comp = asChild ? Slot : "button";
  return /*#__PURE__*/_jsx(Comp, _objectSpread({
    "data-slot": "sidebar-menu-action",
    "data-sidebar": "menu-action",
    className: cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
    // Increases the hit area of the button on mobile.
    "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", className)
  }, props), void 0, false);
}
function SidebarMenuBadge(_ref17) {
  var className = _ref17.className,
    props = _objectWithoutProperties(_ref17, _excluded17);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    "data-slot": "sidebar-menu-badge",
    "data-sidebar": "menu-badge",
    className: cn("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className)
  }, props), void 0, false);
}
function SidebarMenuSkeleton(_ref18) {
  var className = _ref18.className,
    _ref18$showIcon = _ref18.showIcon,
    showIcon = _ref18$showIcon === void 0 ? false : _ref18$showIcon,
    props = _objectWithoutProperties(_ref18, _excluded18);
  // Random width between 50 to 90%.
  var width = React.useMemo(function () {
    return "".concat(Math.floor(Math.random() * 40) + 50, "%");
  }, []);
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    "data-slot": "sidebar-menu-skeleton",
    "data-sidebar": "menu-skeleton",
    className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
  }, props), {}, {
    children: [showIcon && /*#__PURE__*/_jsx(Skeleton, {
      className: "size-4 rounded-md",
      "data-sidebar": "menu-skeleton-icon"
    }, void 0, false), /*#__PURE__*/_jsx(Skeleton, {
      className: "h-4 max-w-(--skeleton-width) flex-1",
      "data-sidebar": "menu-skeleton-text",
      style: {
        "--skeleton-width": width
      }
    }, void 0, false)]
  }), void 0, true);
}
function SidebarMenuSub(_ref19) {
  var className = _ref19.className,
    props = _objectWithoutProperties(_ref19, _excluded19);
  return /*#__PURE__*/_jsx("ul", _objectSpread({
    "data-slot": "sidebar-menu-sub",
    "data-sidebar": "menu-sub",
    className: cn("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className)
  }, props), void 0, false);
}
function SidebarMenuSubItem(_ref20) {
  var className = _ref20.className,
    props = _objectWithoutProperties(_ref20, _excluded20);
  return /*#__PURE__*/_jsx("li", _objectSpread({
    "data-slot": "sidebar-menu-sub-item",
    "data-sidebar": "menu-sub-item",
    className: cn("group/menu-sub-item relative", className)
  }, props), void 0, false);
}
function SidebarMenuSubButton(_ref21) {
  var _ref21$asChild = _ref21.asChild,
    asChild = _ref21$asChild === void 0 ? false : _ref21$asChild,
    _ref21$size = _ref21.size,
    size = _ref21$size === void 0 ? "md" : _ref21$size,
    _ref21$isActive = _ref21.isActive,
    isActive = _ref21$isActive === void 0 ? false : _ref21$isActive,
    className = _ref21.className,
    props = _objectWithoutProperties(_ref21, _excluded21);
  var Comp = asChild ? Slot : "a";
  return /*#__PURE__*/_jsx(Comp, _objectSpread({
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "data-size": size,
    "data-active": isActive,
    className: cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className)
  }, props), void 0, false);
}
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar };