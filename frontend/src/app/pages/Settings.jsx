import _react2 from "react";
import * as _lucideReact from "lucide-react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
export function Settings() {
  return /*#__PURE__*/_jsx("div", {
    className: "max-w-5xl space-y-6",
    children: [/*#__PURE__*/_jsx("div", {
      children: [/*#__PURE__*/_jsx("h1", {
        className: "mb-2",
        children: "Settings"
      }, void 0, false), /*#__PURE__*/_jsx("p", {
        className: "text-muted-foreground",
        children: "Manage application preferences and system settings. Profile settings are available via your avatar in the top-right corner."
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
          children: /*#__PURE__*/_jsx(_lucideReact.Lock, {
            className: "w-5 h-5 text-primary"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("h3", {
          children: "Security Settings"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "space-y-6",
        children: [/*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "currentPassword",
            className: "block mb-2",
            children: "Current Password"
          }, void 0, false), /*#__PURE__*/_jsx("input", {
            type: "password",
            id: "currentPassword",
            placeholder: "Enter current password",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "newPassword",
              className: "block mb-2",
              children: "New Password"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "password",
              id: "newPassword",
              placeholder: "Enter new password",
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "confirmPassword",
              className: "block mb-2",
              children: "Confirm Password"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "password",
              id: "confirmPassword",
              placeholder: "Confirm new password",
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("p", {
              className: "font-medium mb-1",
              children: "Two-Factor Authentication"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Add an extra layer of security to your account"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              className: "sr-only peer"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
          children: /*#__PURE__*/_jsx(_lucideReact.Bell, {
            className: "w-5 h-5 text-primary"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("h3", {
          children: "Notification Preferences"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("p", {
              className: "font-medium mb-1",
              children: "Email Notifications"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Receive updates about companies and contacts"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              className: "sr-only peer",
              defaultChecked: true
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("p", {
              className: "font-medium mb-1",
              children: "Weekly Reports"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Get weekly summary of your activities"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              className: "sr-only peer",
              defaultChecked: true
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("p", {
              className: "font-medium mb-1",
              children: "Browser Notifications"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Get notified in your browser"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              className: "sr-only peer"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("p", {
              className: "font-medium mb-1",
              children: "Mobile Push Notifications"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Receive push notifications on mobile"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              className: "sr-only peer",
              defaultChecked: true
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
          children: /*#__PURE__*/_jsx(_lucideReact.Globe, {
            className: "w-5 h-5 text-primary"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("h3", {
          children: "System Preferences"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-2 gap-6",
        children: [/*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "language",
            className: "block mb-2",
            children: "Language"
          }, void 0, false), /*#__PURE__*/_jsx("select", {
            id: "language",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsx("option", {
              value: "en",
              children: "English"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "hi",
              children: "Hindi"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "es",
              children: "Spanish"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "timezone",
            className: "block mb-2",
            children: "Timezone"
          }, void 0, false), /*#__PURE__*/_jsx("select", {
            id: "timezone",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsx("option", {
              value: "ist",
              children: "India Standard Time (IST)"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "pst",
              children: "Pacific Standard Time (PST)"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "est",
              children: "Eastern Standard Time (EST)"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "dateFormat",
            className: "block mb-2",
            children: "Date Format"
          }, void 0, false), /*#__PURE__*/_jsx("select", {
            id: "dateFormat",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsx("option", {
              value: "dd/mm/yyyy",
              children: "DD/MM/YYYY"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "mm/dd/yyyy",
              children: "MM/DD/YYYY"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "yyyy-mm-dd",
              children: "YYYY-MM-DD"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "currency",
            className: "block mb-2",
            children: "Currency"
          }, void 0, false), /*#__PURE__*/_jsx("select", {
            id: "currency",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsx("option", {
              value: "inr",
              children: "INR (₹)"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "usd",
              children: "USD ($)"
            }, void 0, false), /*#__PURE__*/_jsx("option", {
              value: "eur",
              children: "EUR (€)"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "flex items-center gap-4",
      children: [/*#__PURE__*/_jsx("button", {
        className: "flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
        children: [/*#__PURE__*/_jsx(_lucideReact.Save, {
          className: "w-5 h-5"
        }, void 0, false), "Save Changes"]
      }, void 0, true), /*#__PURE__*/_jsx("button", {
        className: "px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
        children: "Cancel"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}