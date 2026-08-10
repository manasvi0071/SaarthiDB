import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { User, Mail, Briefcase, Calendar, Trash2, Download } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
export function Account() {
  var _useAuth = useAuth(),
    user = _useAuth.user;
  var _useTheme = useTheme(),
    darkMode = _useTheme.darkMode;
  return /*#__PURE__*/_jsx("div", {
    className: "max-w-4xl",
    children: [/*#__PURE__*/_jsx("div", {
      className: "mb-6",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-2xl font-bold mb-1 ".concat(darkMode ? 'text-white' : 'text-foreground'),
        children: "Account Settings"
      }, void 0, false), /*#__PURE__*/_jsx("p", {
        className: "text-sm ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
        children: "Manage your personal information and account preferences"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/_jsx("div", {
        className: "rounded-2xl border p-6 shadow-sm ".concat(darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ".concat(darkMode ? 'bg-blue-900/30' : 'bg-blue-50'),
            children: /*#__PURE__*/_jsx(User, {
              className: "w-5 h-5 text-blue-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold mb-4 ".concat(darkMode ? 'text-white' : 'text-foreground'),
              children: "Profile Information"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/_jsx("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-medium mb-1.5 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
                  children: "Full Name"
                }, void 0, false), /*#__PURE__*/_jsx("input", {
                  type: "text",
                  defaultValue: user === null || user === void 0 ? void 0 : user.name,
                  className: "w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ".concat(darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30')
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  className: "block text-xs font-medium mb-1.5 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
                  children: "Job Title"
                }, void 0, false), /*#__PURE__*/_jsx("input", {
                  type: "text",
                  defaultValue: user === null || user === void 0 ? void 0 : user.role,
                  className: "w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ".concat(darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30')
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("button", {
                className: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                children: "Save Changes"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "rounded-2xl border p-6 shadow-sm ".concat(darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ".concat(darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'),
            children: /*#__PURE__*/_jsx(Mail, {
              className: "w-5 h-5 text-emerald-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold mb-1 ".concat(darkMode ? 'text-white' : 'text-foreground'),
              children: "Email Address"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm mb-4 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
              children: "Your primary email address for login and notifications"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "flex items-center gap-3 mb-4",
              children: [/*#__PURE__*/_jsx("input", {
                type: "email",
                defaultValue: user === null || user === void 0 ? void 0 : user.email,
                className: "flex-1 px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ".concat(darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30')
              }, void 0, false), /*#__PURE__*/_jsx("span", {
                className: "px-3 py-1.5 rounded-lg text-xs font-medium ".concat(darkMode ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-100 text-emerald-700'),
                children: "Verified"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("button", {
              className: "px-4 py-2 rounded-lg border text-sm font-medium transition-colors ".concat(darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'),
              children: "Update Email"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "rounded-2xl border p-6 shadow-sm ".concat(darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ".concat(darkMode ? 'bg-violet-900/30' : 'bg-violet-50'),
            children: /*#__PURE__*/_jsx(Briefcase, {
              className: "w-5 h-5 text-violet-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold mb-4 ".concat(darkMode ? 'text-white' : 'text-foreground'),
              children: "Work Information"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "grid grid-cols-2 gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  children: [/*#__PURE__*/_jsx("label", {
                    className: "block text-xs font-medium mb-1.5 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
                    children: "Department"
                  }, void 0, false), /*#__PURE__*/_jsx("input", {
                    type: "text",
                    defaultValue: "Research & Analytics",
                    className: "w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ".concat(darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30')
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsx("div", {
                  children: [/*#__PURE__*/_jsx("label", {
                    className: "block text-xs font-medium mb-1.5 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
                    children: "Employee ID"
                  }, void 0, false), /*#__PURE__*/_jsx("input", {
                    type: "text",
                    defaultValue: "EMP-12345",
                    className: "w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ".concat(darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30')
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsx("button", {
                className: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                children: "Update Information"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "rounded-2xl border p-6 shadow-sm ".concat(darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ".concat(darkMode ? 'bg-blue-900/30' : 'bg-blue-50'),
            children: /*#__PURE__*/_jsx(Calendar, {
              className: "w-5 h-5 text-blue-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold mb-2 ".concat(darkMode ? 'text-white' : 'text-foreground'),
              children: "Account Activity"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "space-y-2 text-sm",
              children: [/*#__PURE__*/_jsx("div", {
                className: "flex justify-between py-2 border-b ".concat(darkMode ? 'border-gray-700' : 'border-border'),
                children: [/*#__PURE__*/_jsx("span", {
                  className: darkMode ? 'text-gray-400' : 'text-muted-foreground',
                  children: "Account Created"
                }, void 0, false), /*#__PURE__*/_jsx("span", {
                  className: "font-medium ".concat(darkMode ? 'text-white' : ''),
                  children: "January 15, 2024"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                className: "flex justify-between py-2 border-b ".concat(darkMode ? 'border-gray-700' : 'border-border'),
                children: [/*#__PURE__*/_jsx("span", {
                  className: darkMode ? 'text-gray-400' : 'text-muted-foreground',
                  children: "Last Login"
                }, void 0, false), /*#__PURE__*/_jsx("span", {
                  className: "font-medium ".concat(darkMode ? 'text-white' : ''),
                  children: "Today at 9:42 AM"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                className: "flex justify-between py-2",
                children: [/*#__PURE__*/_jsx("span", {
                  className: darkMode ? 'text-gray-400' : 'text-muted-foreground',
                  children: "Account Type"
                }, void 0, false), /*#__PURE__*/_jsx("span", {
                  className: "font-medium ".concat(darkMode ? 'text-white' : ''),
                  children: "Professional"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "rounded-2xl border p-6 shadow-sm ".concat(darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ".concat(darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'),
            children: /*#__PURE__*/_jsx(Download, {
              className: "w-5 h-5 text-indigo-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold mb-1 ".concat(darkMode ? 'text-white' : 'text-foreground'),
              children: "Export Your Data"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm mb-4 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
              children: "Download a copy of all your data and activity from the platform"
            }, void 0, false), /*#__PURE__*/_jsx("button", {
              className: "px-4 py-2 rounded-lg border text-sm font-medium transition-colors ".concat(darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'),
              children: "Request Data Export"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "rounded-2xl border p-6 shadow-sm ".concat(darkMode ? 'bg-[#0f1421] border-red-900/50' : 'bg-white border-red-200'),
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ".concat(darkMode ? 'bg-red-900/30' : 'bg-red-50'),
            children: /*#__PURE__*/_jsx(Trash2, {
              className: "w-5 h-5 text-red-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "font-semibold mb-1 ".concat(darkMode ? 'text-white' : 'text-foreground'),
              children: "Delete Account"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm mb-4 ".concat(darkMode ? 'text-gray-400' : 'text-muted-foreground'),
              children: "Permanently delete your account and all associated data. This action cannot be undone."
            }, void 0, false), /*#__PURE__*/_jsx("button", {
              className: "px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors",
              children: "Delete Account"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}