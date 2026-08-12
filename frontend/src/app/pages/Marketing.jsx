import _react2 from "react";
import * as _react from "react";
import * as _lucideReact from "lucide-react";
import * as _contextThemeContext from "../context/ThemeContext";
import { getMarketing } from "../../lib/saarthiApi";
var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance",
      );
    }
  };
})();
var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
// ---- Mock data — replace with real data from your Companies/Contacts context or API ----

var stats = [
  {
    label: "Campaigns Sent",
    value: "128",
    change: "+14.2%",
    up: true,
    icon: _lucideReact.Send,
    bg: "bg-blue-500",
  },
  {
    label: "Avg. Open Rate",
    value: "42.8%",
    change: "+3.1%",
    up: true,
    icon: _lucideReact.Eye,
    bg: "bg-green-500",
  },
  {
    label: "Avg. Reply Rate",
    value: "9.6%",
    change: "+1.4%",
    up: true,
    icon: _lucideReact.Reply,
    bg: "bg-purple-500",
  },
  {
    label: "Saved Segments",
    value: "17",
    change: "-1.0%",
    up: false,
    icon: _lucideReact.Filter,
    bg: "bg-orange-500",
  },
];
var channels = [
  {
    id: "email",
    label: "Email",
    icon: _lucideReact.Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: _lucideReact.MessageCircle,
  },
  {
    id: "sms",
    label: "SMS",
    icon: _lucideReact.Smartphone,
  },
];
var segmentFilters = {
  industry: ["Technology", "Finance", "Healthcare", "Retail", "Manufacturing"],
  city: ["Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad"],
  status: ["Active Prospect", "Hiring Company", "Client", "Inactive"],
};
var campaigns = [
  {
    name: "Q3 Tech Prospect Outreach",
    channel: "email",
    audience: "Technology · Mumbai",
    status: "Sent",
    sent: 340,
    opened: 178,
    replied: 22,
  },
  {
    name: "Hiring Companies Follow-up",
    channel: "whatsapp",
    audience: "Hiring Companies",
    status: "Scheduled",
    sent: 0,
    opened: 0,
    replied: 0,
  },
  {
    name: "Finance Sector Intro",
    channel: "email",
    audience: "Finance · Pan India",
    status: "Draft",
    sent: 0,
    opened: 0,
    replied: 0,
  },
  {
    name: "Re-engagement Blast",
    channel: "sms",
    audience: "Inactive · 90 days+",
    status: "Sent",
    sent: 512,
    opened: 201,
    replied: 14,
  },
];
var channelIcon = {
  email: _lucideReact.Mail,
  whatsapp: _lucideReact.MessageCircle,
  sms: _lucideReact.Smartphone,
};
export function Marketing() {
  var _useTheme = _contextThemeContext.useTheme();
  var darkModeTemp = _useTheme.darkMode;

  var _useStateM = _react.useState(null);
  var _useStateM2 = _slicedToArray(_useStateM, 2);
  var marketingTotals = _useStateM2[0];
  var setMarketingTotals = _useStateM2[1];

  _react.useEffect(function () {
    getMarketing()
      .then(function (res) {
        setMarketingTotals(res.marketing || null);
      })
      .catch(function (err) {
        console.error("Failed to load marketing:", err);
      });
  }, []);
  var darkMode = _useTheme.darkMode;
  var _useStateM = _react.useState(null);
  var _useStateM2 = _slicedToArray(_useStateM, 2);
  var marketingTotals = _useStateM2[0];
  var setMarketingTotals = _useStateM2[1];
  var _useState = _react.useState("email");
  var _useState2 = _slicedToArray(_useState, 2);
  var activeChannel = _useState2[0];
  var setActiveChannel = _useState2[1];
  var _useState3 = _react.useState({
    industry: null,
    city: null,
    status: null,
  });
  var _useState32 = _slicedToArray(_useState3, 2);
  var selectedFilters = _useState32[0];
  var setSelectedFilters = _useState32[1];
  var toggleFilter = function toggleFilter(group, value) {
    setSelectedFilters(function (prev) {
      return _extends(
        {},
        prev,
        _defineProperty({}, group, prev[group] === value ? null : value),
      );
    });
  };
  var statusStyles = darkMode
    ? {
        Sent: "bg-emerald-900/30 text-emerald-400",
        Scheduled: "bg-purple-900/30 text-purple-300",
        Draft: "bg-gray-800 text-gray-400",
      }
    : {
        Sent: "bg-green-100 text-green-700",
        Scheduled: "bg-purple-100 text-purple-700",
        Draft: "bg-gray-100 text-gray-600",
      };
  var cardBase = darkMode
    ? "bg-[#0f1421] border border-gray-800"
    : "bg-white shadow-sm";
  var inputBase = darkMode
    ? "bg-[#0a0e1a] border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
    : "border border-gray-200 focus:border-blue-400";
  var textPrimary = darkMode ? "text-white" : "text-gray-900";
  var textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  return _react2.createElement(
    "div",
    null,
    _react2.createElement(
      "div",
      {
        className: "mb-6 flex items-center justify-between",
      },
      _react2.createElement(
        "div",
        null,
        _react2.createElement(
          "div",
          {
            className: "flex items-center gap-2",
          },
          _react2.createElement(_lucideReact.Megaphone, {
            className: "h-6 w-6 text-blue-500",
          }),
          _react2.createElement(
            "h1",
            {
              className: "text-3xl font-bold " + textPrimary,
            },
            "Marketing",
          ),
        ),
        _react2.createElement(
          "p",
          {
            className: "mt-1 " + textSecondary,
          },
          "Reach any company or contact in your database, across email, WhatsApp, and SMS.",
        ),
      ),
      _react2.createElement(
        "button",
        {
          className:
            "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-blue-600/30 transition hover:opacity-90",
        },
        _react2.createElement(_lucideReact.Plus, {
          className: "h-4 w-4",
        }),
      ),
    ),
    _react2.createElement(
      "div",
      {
        className: "mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
      },
      stats.map(function (s) {
        var displayValue =
          s.label === "Campaigns Sent" && marketingTotals
            ? String(marketingTotals.total_campaigns)
            : s.value;
        return _react2.createElement(
          "div",
          {
            key: s.label,
            className: "rounded-2xl p-6 " + cardBase,
          },
          _react2.createElement(
            "div",
            {
              className: "flex items-center justify-between",
            },
            _react2.createElement(
              "div",
              {
                className:
                  "flex h-12 w-12 items-center justify-center rounded-xl " +
                  s.bg,
              },
              _react2.createElement(s.icon, {
                className: "h-5 w-5 text-white",
              }),
            ),
            _react2.createElement(
              "span",
              {
                className:
                  "text-sm font-medium " +
                  (s.up ? "text-emerald-500" : "text-red-500"),
              },
              s.change,
            ),
          ),
          _react2.createElement(
            "p",
            {
              className: "mt-4 text-3xl font-bold " + textPrimary,
            },
            displayValue,
          ),
          _react2.createElement(
            "p",
            {
              className: "text-sm " + textSecondary,
            },
            s.label,
          ),
        );
      }),
    ),
    _react2.createElement(
      "div",
      {
        className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
      },
      _react2.createElement(
        "div",
        {
          className: "rounded-2xl p-6 lg:col-span-1 " + cardBase,
        },
        _react2.createElement(
          "div",
          {
            className: "mb-4 flex items-center gap-2",
          },
          _react2.createElement(_lucideReact.Users, {
            className: "h-5 w-5 text-blue-500",
          }),
          _react2.createElement(
            "h2",
            {
              className: "text-lg font-semibold " + textPrimary,
            },
            "Audience",
          ),
        ),
        Object.entries(segmentFilters).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2);
          var group = _ref2[0];
          var options = _ref2[1];
          return _react2.createElement(
            "div",
            {
              key: group,
              className: "mb-5",
            },
            _react2.createElement(
              "p",
              {
                className:
                  "mb-2 text-xs font-semibold uppercase tracking-wide " +
                  (darkMode ? "text-gray-500" : "text-gray-400"),
              },
              group,
            ),
            _react2.createElement(
              "div",
              {
                className: "flex flex-wrap gap-2",
              },
              options.map(function (opt) {
                var active = selectedFilters[group] === opt;
                return _react2.createElement(
                  "button",
                  {
                    key: opt,
                    onClick: function onClick() {
                      return toggleFilter(group, opt);
                    },
                    className:
                      "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
                      (active
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/30"
                        : darkMode
                          ? "bg-[#1a1f2e] text-gray-400 hover:bg-[#232a3d]"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"),
                  },
                  opt,
                );
              }),
            ),
          );
        }),
        _react2.createElement(
          "button",
          {
            className:
              "mt-2 w-full rounded-xl py-2.5 text-sm font-semibold transition " +
              (darkMode
                ? "border border-blue-900 bg-blue-950/40 text-blue-400 hover:bg-blue-950/70"
                : "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"),
          },
          "Save as segment",
        ),
      ),
      _react2.createElement(
        "div",
        {
          className: "rounded-2xl p-6 lg:col-span-2 " + cardBase,
        },
        _react2.createElement(
          "div",
          {
            className: "mb-4 flex items-center justify-between",
          },
          _react2.createElement(
            "h2",
            {
              className: "text-lg font-semibold " + textPrimary,
            },
            "Compose",
          ),
          _react2.createElement(
            "div",
            {
              className:
                "flex rounded-xl p-1 " +
                (darkMode ? "bg-[#1a1f2e]" : "bg-gray-100"),
            },
            channels.map(function (c) {
              return _react2.createElement(
                "button",
                {
                  key: c.id,
                  onClick: function onClick() {
                    return setActiveChannel(c.id);
                  },
                  className:
                    "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition " +
                    (activeChannel === c.id
                      ? darkMode
                        ? "bg-[#0f1421] text-blue-400 shadow-sm"
                        : "bg-white text-blue-700 shadow-sm"
                      : textSecondary + " hover:" + textPrimary),
                },
                _react2.createElement(c.icon, {
                  className: "h-4 w-4",
                }),
                c.label,
              );
            }),
          ),
        ),
        _react2.createElement("input", {
          type: "text",
          placeholder: "Campaign name",
          className:
            "mb-3 w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none " +
            inputBase,
        }),
        activeChannel === "email" &&
          _react2.createElement("input", {
            type: "text",
            placeholder: "Subject line",
            className:
              "mb-3 w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none " +
              inputBase,
          }),
        (activeChannel === "whatsapp" || activeChannel === "sms") &&
          _react2.createElement("input", {
            type: "tel",
            placeholder:
              "Phone number, e.g. +91 98765 43210 (leave blank to use audience segment)",
            className:
              "mb-3 w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none " +
              inputBase,
          }),
        _react2.createElement("textarea", {
          rows: 6,
          placeholder:
            "Write your " +
            (activeChannel === "email" ? "email" : "message") +
            "... use {{company_name}} and {{contact_name}} to personalize",
          className:
            "mb-4 w-full resize-none rounded-xl px-4 py-3 text-sm focus:outline-none " +
            inputBase,
        }),
        _react2.createElement(
          "div",
          {
            className: "flex items-center justify-between",
          },
          _react2.createElement(
            "button",
            {
              className:
                "flex items-center gap-1.5 text-sm font-medium " +
                textSecondary +
                " hover:" +
                textPrimary,
            },
            _react2.createElement(_lucideReact.Clock, {
              className: "h-4 w-4",
            }),
            "Schedule for later",
            _react2.createElement(_lucideReact.ChevronDown, {
              className: "h-3.5 w-3.5",
            }),
          ),
          _react2.createElement(
            "div",
            {
              className: "flex gap-2",
            },
            _react2.createElement(
              "button",
              {
                className:
                  "rounded-xl px-4 py-2.5 text-sm font-medium transition " +
                  (darkMode
                    ? "border border-gray-700 text-gray-300 hover:bg-[#1a1f2e]"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-50"),
              },
              "Save draft",
            ),
            _react2.createElement(
              "button",
              {
                className:
                  "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90",
              },
              _react2.createElement(_lucideReact.Send, {
                className: "h-4 w-4",
              }),
              "Send campaign",
            ),
          ),
        ),
      ),
    ),
    _react2.createElement(
      "div",
      {
        className: "mt-6 rounded-2xl p-6 " + cardBase,
      },
      _react2.createElement(
        "h2",
        {
          className: "mb-4 text-lg font-semibold " + textPrimary,
        },
        "Recent campaigns",
      ),
      _react2.createElement(
        "div",
        {
          className: "overflow-x-auto",
        },
        _react2.createElement(
          "table",
          {
            className: "w-full text-left text-sm",
          },
          _react2.createElement(
            "thead",
            null,
            _react2.createElement(
              "tr",
              {
                className:
                  "border-b " +
                  (darkMode
                    ? "border-gray-800 text-gray-500"
                    : "border-gray-100 text-gray-400"),
              },
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Campaign",
              ),
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Channel",
              ),
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Audience",
              ),
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Status",
              ),
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Sent",
              ),
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Opened",
              ),
              _react2.createElement(
                "th",
                {
                  className: "pb-3 font-medium",
                },
                "Replied",
              ),
            ),
          ),
          _react2.createElement(
            "tbody",
            null,
            campaigns.map(function (c) {
              var Icon = channelIcon[c.channel];
              return _react2.createElement(
                "tr",
                {
                  key: c.name,
                  className:
                    "border-b last:border-0 " +
                    (darkMode ? "border-gray-800/60" : "border-gray-50"),
                },
                _react2.createElement(
                  "td",
                  {
                    className: "py-3.5 font-medium " + textPrimary,
                  },
                  c.name,
                ),
                _react2.createElement(
                  "td",
                  {
                    className: "py-3.5",
                  },
                  _react2.createElement(Icon, {
                    className: "h-4 w-4 " + textSecondary,
                  }),
                ),
                _react2.createElement(
                  "td",
                  {
                    className: "py-3.5 " + textSecondary,
                  },
                  c.audience,
                ),
                _react2.createElement(
                  "td",
                  {
                    className: "py-3.5",
                  },
                  _react2.createElement(
                    "span",
                    {
                      className:
                        "rounded-full px-2.5 py-1 text-xs font-semibold " +
                        statusStyles[c.status],
                    },
                    c.status,
                  ),
                ),
                _react2.createElement(
                  "td",
                  {
                    className:
                      "py-3.5 " +
                      (darkMode ? "text-gray-300" : "text-gray-700"),
                  },
                  c.sent || "—",
                ),
                _react2.createElement(
                  "td",
                  {
                    className:
                      "py-3.5 " +
                      (darkMode ? "text-gray-300" : "text-gray-700"),
                  },
                  c.opened || "—",
                ),
                _react2.createElement(
                  "td",
                  {
                    className:
                      "py-3.5 " +
                      (darkMode ? "text-gray-300" : "text-gray-700"),
                  },
                  c.replied || "—",
                ),
              );
            }),
          ),
        ),
      ),
    ),
  );
}

/* Header */ /* Stat cards */ /* Audience segmentation */ /* Compose panel */ /* Campaign history */
