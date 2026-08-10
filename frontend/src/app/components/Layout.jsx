import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
import React from 'react';
import { useState, useRef, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { LayoutDashboard, Building2, PlusCircle, Users, FileText, BarChart3, Megaphone, Database, UserCog, Settings as SettingsIcon, Bell, ChevronDown, TrendingUp, LogOut, User, Shield, X, CheckCircle2, AlertCircle, Info, Moon, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import SarthiDBAssistant from "./SarthiDBAssistant";
var notifications = [{
  id: 1,
  type: "success",
  title: "Report generated",
  body: "Q2 Market Analysis is ready to download.",
  time: "2 min ago",
  read: false
}, {
  id: 2,
  type: "alert",
  title: "New company added",
  body: "Apex Technologies was added by Sarah Park.",
  time: "18 min ago",
  read: false
}, {
  id: 3,
  type: "info",
  title: "Analytics sync complete",
  body: "All data has been refreshed with the latest metrics.",
  time: "1 hr ago",
  read: true
}, {
  id: 4,
  type: "alert",
  title: "User invitation sent",
  body: "Michael Chen was invited to join the platform.",
  time: "3 hr ago",
  read: true
}];
var notifIcons = {
  success: /*#__PURE__*/_jsx(CheckCircle2, {
    className: "w-4 h-4 text-emerald-500"
  }, void 0, false),
  alert: /*#__PURE__*/_jsx(AlertCircle, {
    className: "w-4 h-4 text-amber-500"
  }, void 0, false),
  info: /*#__PURE__*/_jsx(Info, {
    className: "w-4 h-4 text-blue-500"
  }, void 0, false)
};
export function Layout() {
  var _user$initials, _user$name, _user$role, _user$initials2;
  var _useAuth = useAuth(),
    user = _useAuth.user,
    logout = _useAuth.logout;
  var _useTheme = useTheme(),
    darkMode = _useTheme.darkMode,
    toggleDarkMode = _useTheme.toggleDarkMode;
  var navigate = useNavigate();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    notifOpen = _useState2[0],
    setNotifOpen = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    profileOpen = _useState4[0],
    setProfileOpen = _useState4[1];
  var _useState5 = useState(notifications),
    _useState6 = _slicedToArray(_useState5, 2),
    notifList = _useState6[0],
    setNotifList = _useState6[1];
  var notifRef = useRef(null);
  var profileRef = useRef(null);
  var unread = notifList.filter(function (n) {
    return !n.read;
  }).length;
  useEffect(function () {
    var handler = function handler(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return function () {
      return document.removeEventListener("mousedown", handler);
    };
  }, []);
  var markAllRead = function markAllRead() {
    return setNotifList(function (n) {
      return n.map(function (x) {
        return _objectSpread(_objectSpread({}, x), {}, {
          read: true
        });
      });
    });
  };
  var dismiss = function dismiss(id) {
    return setNotifList(function (n) {
      return n.filter(function (x) {
        return x.id !== id;
      });
    });
  };
  var handleLogout = function handleLogout() {
    logout();
    navigate("/login");
  };
  var menuItems = [{
    path: "/",
    label: "Dashboard",
    icon: LayoutDashboard
  }, {
    path: "/companies",
    label: "Companies",
    icon: Building2
  }, {
    path: "/companies/add",
    label: "Add Company",
    icon: PlusCircle
  }, {
    path: "/contacts",
    label: "Contacts",
    icon: Users
  }, {
    path: "/database",
    label: "Database",
    icon: Database
  }, {
    path: "/reports",
    label: "Reports",
    icon: FileText
  }, {
    path: "/marketing",
    label: "Marketing",
    icon: Megaphone
  }, {
    path: "/analytics",
    label: "Analytics",
    icon: BarChart3
  }, {
    path: "/users",
    label: "Users",
    icon: UserCog
  }];
  return /*#__PURE__*/_jsx("div", {
    className: "flex h-screen ".concat(darkMode ? "dark bg-[#0a0e1a]" : "bg-background"),
    children: [/*#__PURE__*/_jsx("aside", {
      className: "w-64 flex flex-col ".concat(darkMode ? "bg-[#0f1421]" : "bg-sidebar"),
      style: {
        borderRight: "1px solid rgba(255,255,255,0.08)"
      },
      children: [/*#__PURE__*/_jsx("div", {
        className: "p-5",
        style: {
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        },
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30",
            children: /*#__PURE__*/_jsx(TrendingUp, {
              className: "w-5 h-5 text-white"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-white font-bold text-base leading-tight",
              children: "sarthiDB"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "text-[#93b4ff] text-[10px] leading-tight",
              children: "sarthiDB (Smart Data Platform)"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("nav", {
        className: "flex-1 p-3 space-y-0.5 overflow-y-auto",
        children: menuItems.map(function (item) {
          return /*#__PURE__*/_jsx(NavLink, {
            to: item.path,
            end: item.path === "/",
            className: function className(_ref) {
              var isActive = _ref.isActive;
              return "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ".concat(isActive ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-white");
            },
            children: [/*#__PURE__*/_jsx(item.icon, {
              className: "w-4 h-4 shrink-0"
            }, void 0, false), /*#__PURE__*/_jsx("span", {
              className: "font-medium",
              children: item.label
            }, void 0, false)]
          }, item.path, true);
        })
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "flex-1 flex flex-col overflow-hidden",
      children: [/*#__PURE__*/_jsx("header", {
        className: "h-16 border-b flex items-center justify-end px-6 shadow-sm ".concat(darkMode ? "bg-[#0f1421] border-gray-800" : "bg-white border-border"),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: toggleDarkMode,
            className: "p-2.5 rounded-xl transition-colors ".concat(darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"),
            title: darkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
            children: darkMode ? /*#__PURE__*/_jsx(Sun, {
              className: "w-5 h-5 text-yellow-400"
            }, void 0, false) : /*#__PURE__*/_jsx(Moon, {
              className: "w-5 h-5 text-muted-foreground"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            ref: notifRef,
            className: "relative",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                setNotifOpen(!notifOpen);
                setProfileOpen(false);
              },
              className: "relative p-2.5 rounded-xl transition-colors ".concat(darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"),
              children: [/*#__PURE__*/_jsx(Bell, {
                className: "w-5 h-5 ".concat(darkMode ? "text-gray-400" : "text-muted-foreground")
              }, void 0, false), unread > 0 && /*#__PURE__*/_jsx("span", {
                className: "absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold",
                children: unread
              }, void 0, false)]
            }, void 0, true), notifOpen && /*#__PURE__*/_jsx("div", {
              className: "absolute right-0 top-12 w-96 rounded-2xl shadow-2xl border z-50 overflow-hidden ".concat(darkMode ? "bg-[#0f1421] border-gray-700" : "bg-white border-border"),
              children: [/*#__PURE__*/_jsx("div", {
                className: "flex items-center justify-between px-5 py-4 border-b ".concat(darkMode ? "border-gray-700" : "border-border"),
                children: [/*#__PURE__*/_jsx("div", {
                  children: [/*#__PURE__*/_jsx("h4", {
                    className: darkMode ? "text-white" : "text-[#0f172a]",
                    children: "Notifications"
                  }, void 0, false), unread > 0 && /*#__PURE__*/_jsx("p", {
                    className: "text-xs ".concat(darkMode ? "text-blue-400" : "text-[#4b5e9e]"),
                    children: [unread, " unread"]
                  }, void 0, true)]
                }, void 0, true), unread > 0 && /*#__PURE__*/_jsx("button", {
                  onClick: markAllRead,
                  className: "text-xs text-[#1e40af] hover:underline font-medium",
                  children: "Mark all read"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                className: "max-h-80 overflow-y-auto divide-y ".concat(darkMode ? "divide-gray-700" : "divide-border"),
                children: notifList.length === 0 ? /*#__PURE__*/_jsx("div", {
                  className: "p-8 text-center text-sm ".concat(darkMode ? "text-gray-400" : "text-muted-foreground"),
                  children: "No notifications"
                }, void 0, false) : notifList.map(function (n) {
                  return /*#__PURE__*/_jsx("div", {
                    className: "flex gap-3 px-5 py-4 group transition-colors ".concat(!n.read ? darkMode ? "bg-blue-900/20" : "bg-blue-50/50" : darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted/40"),
                    children: [/*#__PURE__*/_jsx("div", {
                      className: "mt-0.5 shrink-0",
                      children: notifIcons[n.type]
                    }, void 0, false), /*#__PURE__*/_jsx("div", {
                      className: "flex-1 min-w-0",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [/*#__PURE__*/_jsx("p", {
                          className: "text-sm font-medium truncate ".concat(darkMode ? "text-white" : "text-[#0f172a]"),
                          children: n.title
                        }, void 0, false), /*#__PURE__*/_jsx("button", {
                          onClick: function onClick() {
                            return dismiss(n.id);
                          },
                          className: "opacity-0 group-hover:opacity-100 transition-opacity ".concat(darkMode ? "text-gray-400 hover:text-white" : "text-muted-foreground hover:text-foreground"),
                          children: /*#__PURE__*/_jsx(X, {
                            className: "w-3.5 h-3.5"
                          }, void 0, false)
                        }, void 0, false)]
                      }, void 0, true), /*#__PURE__*/_jsx("p", {
                        className: "text-xs mt-0.5 leading-relaxed ".concat(darkMode ? "text-gray-400" : "text-muted-foreground"),
                        children: n.body
                      }, void 0, false), /*#__PURE__*/_jsx("p", {
                        className: "text-[10px] mt-1 ".concat(darkMode ? "text-blue-400" : "text-[#4b5e9e]"),
                        children: n.time
                      }, void 0, false)]
                    }, void 0, true), !n.read && /*#__PURE__*/_jsx("div", {
                      className: "w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"
                    }, void 0, false)]
                  }, n.id, true);
                })
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            ref: profileRef,
            className: "relative",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                setProfileOpen(!profileOpen);
                setNotifOpen(false);
              },
              className: "flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-colors ".concat(darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"),
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold",
                children: (_user$initials = user === null || user === void 0 ? void 0 : user.initials) !== null && _user$initials !== void 0 ? _user$initials : "?"
              }, void 0, false), /*#__PURE__*/_jsx("div", {
                className: "hidden sm:block text-left",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-sm font-medium leading-tight ".concat(darkMode ? "text-white" : "text-[#0f172a]"),
                  children: (_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : "Guest"
                }, void 0, false), /*#__PURE__*/_jsx("div", {
                  className: "text-[10px] leading-tight ".concat(darkMode ? "text-gray-400" : "text-muted-foreground"),
                  children: (_user$role = user === null || user === void 0 ? void 0 : user.role) !== null && _user$role !== void 0 ? _user$role : ""
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx(ChevronDown, {
                className: "w-4 h-4 transition-transform ".concat(profileOpen ? "rotate-180" : "", " ").concat(darkMode ? "text-gray-400" : "text-muted-foreground")
              }, void 0, false)]
            }, void 0, true), profileOpen && /*#__PURE__*/_jsx("div", {
              className: "absolute right-0 top-12 w-72 rounded-2xl shadow-2xl border z-50 overflow-hidden ".concat(darkMode ? "bg-[#0f1421] border-gray-700" : "bg-white border-border"),
              children: [/*#__PURE__*/_jsx("div", {
                className: "px-5 py-4 bg-gradient-to-br from-[#0f2463] to-[#1e40af]",
                children: /*#__PURE__*/_jsx("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold",
                    children: (_user$initials2 = user === null || user === void 0 ? void 0 : user.initials) !== null && _user$initials2 !== void 0 ? _user$initials2 : "?"
                  }, void 0, false), /*#__PURE__*/_jsx("div", {
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "text-white font-semibold",
                      children: user === null || user === void 0 ? void 0 : user.name
                    }, void 0, false), /*#__PURE__*/_jsx("p", {
                      className: "text-blue-200 text-xs",
                      children: user === null || user === void 0 ? void 0 : user.email
                    }, void 0, false), /*#__PURE__*/_jsx("span", {
                      className: "inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-500/40 text-blue-100 text-[10px] font-medium",
                      children: user === null || user === void 0 ? void 0 : user.role
                    }, void 0, false)]
                  }, void 0, true)]
                }, void 0, true)
              }, void 0, false), /*#__PURE__*/_jsx("div", {
                className: "px-5 py-4 space-y-2 border-b ".concat(darkMode ? "border-gray-700" : "border-border"),
                children: [/*#__PURE__*/_jsx("p", {
                  className: "text-xs font-semibold uppercase tracking-wide ".concat(darkMode ? "text-gray-400" : "text-muted-foreground"),
                  children: "Profile Information"
                }, void 0, false), /*#__PURE__*/_jsx("div", {
                  className: "space-y-1.5",
                  children: [/*#__PURE__*/_jsx("div", {
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "text-[10px] ".concat(darkMode ? "text-gray-400" : "text-muted-foreground"),
                      children: "Full Name"
                    }, void 0, false), /*#__PURE__*/_jsx("p", {
                      className: "text-sm font-medium ".concat(darkMode ? "text-white" : "text-[#0f172a]"),
                      children: user === null || user === void 0 ? void 0 : user.name
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/_jsx("div", {
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "text-[10px] ".concat(darkMode ? "text-gray-400" : "text-muted-foreground"),
                      children: "Email"
                    }, void 0, false), /*#__PURE__*/_jsx("p", {
                      className: "text-sm ".concat(darkMode ? "text-white" : "text-[#0f172a]"),
                      children: user === null || user === void 0 ? void 0 : user.email
                    }, void 0, false)]
                  }, void 0, true)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                className: "p-2",
                children: [/*#__PURE__*/_jsx("button", {
                  onClick: function onClick() {
                    navigate("/settings");
                    setProfileOpen(false);
                  },
                  className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ".concat(darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"),
                  children: [/*#__PURE__*/_jsx(SettingsIcon, {
                    className: "w-4 h-4 ".concat(darkMode ? "text-gray-400" : "text-muted-foreground")
                  }, void 0, false), " App Settings"]
                }, void 0, true), /*#__PURE__*/_jsx("button", {
                  onClick: function onClick() {
                    navigate("/security");
                    setProfileOpen(false);
                  },
                  className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ".concat(darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"),
                  children: [/*#__PURE__*/_jsx(Shield, {
                    className: "w-4 h-4 ".concat(darkMode ? "text-gray-400" : "text-muted-foreground")
                  }, void 0, false), " Security"]
                }, void 0, true), /*#__PURE__*/_jsx("button", {
                  onClick: function onClick() {
                    navigate("/account");
                    setProfileOpen(false);
                  },
                  className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ".concat(darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"),
                  children: [/*#__PURE__*/_jsx(User, {
                    className: "w-4 h-4 ".concat(darkMode ? "text-gray-400" : "text-muted-foreground")
                  }, void 0, false), " Account"]
                }, void 0, true), /*#__PURE__*/_jsx("div", {
                  className: "my-1 border-t ".concat(darkMode ? "border-gray-700" : "border-border")
                }, void 0, false), /*#__PURE__*/_jsx("button", {
                  onClick: handleLogout,
                  className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm text-red-600 ".concat(darkMode ? "hover:bg-red-900/20" : "hover:bg-red-50"),
                  children: [/*#__PURE__*/_jsx(LogOut, {
                    className: "w-4 h-4"
                  }, void 0, false), " Sign Out"]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("main", {
        className: "flex-1 overflow-auto p-6 ".concat(darkMode ? "bg-[#0a0e1a]" : ""),
        children: /*#__PURE__*/_jsx(Outlet, {})
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsx(SarthiDBAssistant, {
      darkMode: darkMode
    }, void 0, false)]
  }, void 0, true);
}