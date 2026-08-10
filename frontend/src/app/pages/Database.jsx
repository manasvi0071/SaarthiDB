import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
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
import { useState } from "react";
import { Database as DatabaseIcon, Search, Sparkles, Download, UploadCloud, CheckCircle2, Loader2, FileSpreadsheet, Building2, Users, Brush, Copy, AlertTriangle, Type, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// ---- Mock data — replace with real API/AI responses later ----

var mockPreviewResults = [{
  name: "Nimbus Cloud Systems",
  industry: "Technology",
  city: "Mumbai",
  employees: 120
}, {
  name: "Vertex Analytics Pvt Ltd",
  industry: "Technology",
  city: "Mumbai",
  employees: 85
}, {
  name: "Orbit Data Labs",
  industry: "Technology",
  city: "Mumbai",
  employees: 64
}];
var exportSets = [{
  id: "companies",
  label: "All Companies",
  icon: Building2,
  count: 1234
}, {
  id: "contacts",
  label: "All HR Contacts",
  icon: Users,
  count: 2567
}, {
  id: "prospects",
  label: "Active Prospects",
  icon: Sparkles,
  count: 456
}];
var cleaningIssues = [{
  id: "dup",
  icon: Copy,
  title: "Duplicate records",
  detail: "14 companies appear more than once, likely from repeated imports.",
  count: 14
}, {
  id: "missing",
  icon: AlertTriangle,
  title: "Missing fields",
  detail: "31 records are missing a city or industry value.",
  count: 31
}, {
  id: "format",
  icon: Type,
  title: "Inconsistent formatting",
  detail: "22 phone numbers and 9 company names have inconsistent casing or spacing.",
  count: 22
}];
export function Database() {
  var _useTheme = useTheme(),
    darkMode = _useTheme.darkMode;
  var _useState = useState("import"),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];

  // Import flow state
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    prompt = _useState4[0],
    setPrompt = _useState4[1];
  var _useState5 = useState("idle"),
    _useState6 = _slicedToArray(_useState5, 2),
    stage = _useState6[0],
    setStage = _useState6[1]; // idle | searching | preview | cleaning | done
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    results = _useState8[0],
    setResults = _useState8[1];

  // Export flow state
  var _useState9 = useState("companies"),
    _useState0 = _slicedToArray(_useState9, 2),
    exportSet = _useState0[0],
    setExportSet = _useState0[1];
  var _useState1 = useState("csv"),
    _useState10 = _slicedToArray(_useState1, 2),
    exportFormat = _useState10[0],
    setExportFormat = _useState10[1];

  // Cleaning flow state
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    fixedIds = _useState12[0],
    setFixedIds = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    runningAll = _useState14[0],
    setRunningAll = _useState14[1];
  var cardBase = darkMode ? "bg-[#0f1421] border border-gray-800" : "bg-white shadow-sm";
  var inputBase = darkMode ? "bg-[#0a0e1a] border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500" : "border border-gray-200 focus:border-blue-400";
  var textPrimary = darkMode ? "text-white" : "text-gray-900";
  var textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  var totalIssues = cleaningIssues.filter(function (i) {
    return !fixedIds.includes(i.id);
  }).reduce(function (sum, i) {
    return sum + i.count;
  }, 0);
  var runSearch = function runSearch() {
    if (!prompt.trim()) return;
    setStage("searching");
    setTimeout(function () {
      setResults(mockPreviewResults);
      setStage("preview");
    }, 900);
  };
  var confirmImport = function confirmImport() {
    setStage("cleaning");
    setTimeout(function () {
      return setStage("done");
    }, 900);
  };
  var resetImport = function resetImport() {
    setPrompt("");
    setResults([]);
    setStage("idle");
  };
  var fixIssue = function fixIssue(id) {
    return setFixedIds(function (prev) {
      return [].concat(_toConsumableArray(prev), [id]);
    });
  };
  var runAllCleaning = function runAllCleaning() {
    setRunningAll(true);
    setTimeout(function () {
      setFixedIds(cleaningIssues.map(function (i) {
        return i.id;
      }));
      setRunningAll(false);
    }, 1200);
  };
  return /*#__PURE__*/_jsx("div", {
    children: [/*#__PURE__*/_jsx("div", {
      className: "mb-6 flex items-start justify-between gap-4",
      children: [/*#__PURE__*/_jsx("div", {
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx(DatabaseIcon, {
            className: "h-6 w-6 text-blue-500"
          }, void 0, false), /*#__PURE__*/_jsx("h1", {
            className: "text-3xl font-bold ".concat(textPrimary),
            children: "Database"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("p", {
          className: "mt-1 ".concat(textSecondary),
          children: "Bring new company data in, or export what you already have."
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("button", {
        onClick: function onClick() {
          return setTab("clean");
        },
        className: "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition ".concat(tab === "clean" ? "border-2 border-blue-500 bg-blue-500/5" : darkMode ? "border border-gray-800 bg-[#0f1421] hover:border-gray-700" : "border border-gray-100 bg-white shadow-sm hover:border-gray-200"),
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex h-9 w-9 items-center justify-center rounded-lg ".concat(totalIssues > 0 ? "bg-amber-500" : "bg-emerald-500"),
          children: /*#__PURE__*/_jsx(Brush, {
            className: "h-4 w-4 text-white"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("p", {
            className: "text-sm font-semibold ".concat(textPrimary),
            children: "Data cleaning"
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            className: "text-xs ".concat(totalIssues > 0 ? darkMode ? "text-amber-400" : "text-amber-600" : darkMode ? "text-emerald-400" : "text-emerald-600"),
            children: totalIssues > 0 ? "".concat(totalIssues, " issues found") : "All clean"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx(ChevronRight, {
          className: "h-4 w-4 ".concat(textSecondary)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "mb-6 inline-flex rounded-xl p-1 ".concat(darkMode ? "bg-[#1a1f2e]" : "bg-gray-100"),
      children: [{
        id: "import",
        label: "Import",
        icon: UploadCloud
      }, {
        id: "export",
        label: "Export",
        icon: Download
      }, {
        id: "clean",
        label: "Cleaning",
        icon: Brush
      }].map(function (t) {
        return /*#__PURE__*/_jsx("button", {
          onClick: function onClick() {
            return setTab(t.id);
          },
          className: "flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition ".concat(tab === t.id ? darkMode ? "bg-[#0f1421] text-blue-400 shadow-sm" : "bg-white text-blue-700 shadow-sm" : "".concat(textSecondary)),
          children: [/*#__PURE__*/_jsx(t.icon, {
            className: "h-4 w-4"
          }, void 0, false), t.label]
        }, t.id, true);
      })
    }, void 0, false), tab === "import" && /*#__PURE__*/_jsx("div", {
      className: "rounded-2xl p-6 ".concat(cardBase),
      children: [/*#__PURE__*/_jsx("div", {
        className: "mb-1 flex items-center gap-2",
        children: [/*#__PURE__*/_jsx(Sparkles, {
          className: "h-5 w-5 text-blue-500"
        }, void 0, false), /*#__PURE__*/_jsx("h2", {
          className: "text-lg font-semibold ".concat(textPrimary),
          children: "Find and add data"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("p", {
        className: "mb-4 text-sm ".concat(textSecondary),
        children: "Describe the companies or contacts you're looking for, review the results, then add them to your database."
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "mb-5 flex gap-2",
        children: [/*#__PURE__*/_jsx("div", {
          className: "relative flex-1",
          children: [/*#__PURE__*/_jsx(Search, {
            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ".concat(textSecondary)
          }, void 0, false), /*#__PURE__*/_jsx("input", {
            type: "text",
            value: prompt,
            onChange: function onChange(e) {
              return setPrompt(e.target.value);
            },
            onKeyDown: function onKeyDown(e) {
              return e.key === "Enter" && runSearch();
            },
            placeholder: "e.g. Technology companies in Mumbai with 50-200 employees",
            className: "w-full rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none ".concat(inputBase)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("button", {
          onClick: runSearch,
          disabled: stage === "searching",
          className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90 disabled:opacity-60",
          children: [stage === "searching" ? /*#__PURE__*/_jsx(Loader2, {
            className: "h-4 w-4 animate-spin"
          }, void 0, false) : /*#__PURE__*/_jsx(Search, {
            className: "h-4 w-4"
          }, void 0, false), stage === "searching" ? "Searching" : "Search"]
        }, void 0, true)]
      }, void 0, true), stage === "preview" && /*#__PURE__*/_jsx(_Fragment, {
        children: [/*#__PURE__*/_jsx("p", {
          className: "mb-2 text-xs font-semibold uppercase tracking-wide ".concat(darkMode ? "text-gray-500" : "text-gray-400"),
          children: [results.length, " matches found \u2014 review before adding"]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "mb-4 overflow-hidden rounded-xl border ".concat(darkMode ? "border-gray-800" : "border-gray-100"),
          children: /*#__PURE__*/_jsx("table", {
            className: "w-full text-left text-sm",
            children: [/*#__PURE__*/_jsx("thead", {
              children: /*#__PURE__*/_jsx("tr", {
                className: darkMode ? "bg-[#1a1f2e]" : "bg-gray-50",
                children: [/*#__PURE__*/_jsx("th", {
                  className: "px-4 py-2.5 font-medium ".concat(textSecondary),
                  children: "Company"
                }, void 0, false), /*#__PURE__*/_jsx("th", {
                  className: "px-4 py-2.5 font-medium ".concat(textSecondary),
                  children: "Industry"
                }, void 0, false), /*#__PURE__*/_jsx("th", {
                  className: "px-4 py-2.5 font-medium ".concat(textSecondary),
                  children: "City"
                }, void 0, false), /*#__PURE__*/_jsx("th", {
                  className: "px-4 py-2.5 font-medium ".concat(textSecondary),
                  children: "Employees"
                }, void 0, false)]
              }, void 0, true)
            }, void 0, false), /*#__PURE__*/_jsx("tbody", {
              children: results.map(function (r) {
                return /*#__PURE__*/_jsx("tr", {
                  className: "border-t ".concat(darkMode ? "border-gray-800" : "border-gray-100"),
                  children: [/*#__PURE__*/_jsx("td", {
                    className: "px-4 py-2.5 font-medium ".concat(textPrimary),
                    children: r.name
                  }, void 0, false), /*#__PURE__*/_jsx("td", {
                    className: "px-4 py-2.5 ".concat(textSecondary),
                    children: r.industry
                  }, void 0, false), /*#__PURE__*/_jsx("td", {
                    className: "px-4 py-2.5 ".concat(textSecondary),
                    children: r.city
                  }, void 0, false), /*#__PURE__*/_jsx("td", {
                    className: "px-4 py-2.5 ".concat(textSecondary),
                    children: r.employees
                  }, void 0, false)]
                }, r.name, true);
              })
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "flex gap-2",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: confirmImport,
            className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90",
            children: [/*#__PURE__*/_jsx(CheckCircle2, {
              className: "h-4 w-4"
            }, void 0, false), "Add ", results.length, " to database"]
          }, void 0, true), /*#__PURE__*/_jsx("button", {
            onClick: resetImport,
            className: "rounded-xl px-4 py-2.5 text-sm font-medium transition ".concat(darkMode ? "border border-gray-700 text-gray-300 hover:bg-[#1a1f2e]" : "border border-gray-200 text-gray-600 hover:bg-gray-50"),
            children: "Discard"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), stage === "cleaning" && /*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-2 text-sm ".concat(textSecondary),
        children: [/*#__PURE__*/_jsx(Loader2, {
          className: "h-4 w-4 animate-spin"
        }, void 0, false), "Cleaning and de-duplicating records..."]
      }, void 0, true), stage === "done" && /*#__PURE__*/_jsx("div", {
        className: "flex items-center justify-between rounded-xl p-4 ".concat(darkMode ? "bg-emerald-950/40 border border-emerald-900" : "bg-emerald-50 border border-emerald-100"),
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx(CheckCircle2, {
            className: "h-5 w-5 text-emerald-500"
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            className: "text-sm font-medium ".concat(darkMode ? "text-emerald-400" : "text-emerald-700"),
            children: [results.length, " companies added and cleaned."]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("button", {
          onClick: resetImport,
          className: "text-sm font-medium text-blue-500 hover:underline",
          children: "Start another import"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "mt-6 border-t pt-5 ".concat(darkMode ? "border-gray-800" : "border-gray-100"),
        children: [/*#__PURE__*/_jsx("p", {
          className: "mb-2 text-xs font-semibold uppercase tracking-wide ".concat(darkMode ? "text-gray-500" : "text-gray-400"),
          children: "Or upload a file"
        }, void 0, false), /*#__PURE__*/_jsx("label", {
          className: "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-8 text-sm transition ".concat(darkMode ? "border-gray-700 text-gray-400 hover:border-blue-600" : "border-gray-200 text-gray-500 hover:border-blue-300"),
          children: [/*#__PURE__*/_jsx(FileSpreadsheet, {
            className: "h-6 w-6"
          }, void 0, false), "Drop a CSV or Excel file, or click to browse", /*#__PURE__*/_jsx("input", {
            type: "file",
            accept: ".csv,.xlsx,.xls",
            className: "hidden"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), tab === "export" && /*#__PURE__*/_jsx("div", {
      className: "rounded-2xl p-6 ".concat(cardBase),
      children: [/*#__PURE__*/_jsx("div", {
        className: "mb-1 flex items-center gap-2",
        children: [/*#__PURE__*/_jsx(Download, {
          className: "h-5 w-5 text-blue-500"
        }, void 0, false), /*#__PURE__*/_jsx("h2", {
          className: "text-lg font-semibold ".concat(textPrimary),
          children: "Export data"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("p", {
        className: "mb-5 text-sm ".concat(textSecondary),
        children: "Choose a data set and a format to download."
      }, void 0, false), /*#__PURE__*/_jsx("p", {
        className: "mb-2 text-xs font-semibold uppercase tracking-wide ".concat(darkMode ? "text-gray-500" : "text-gray-400"),
        children: "Data set"
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3",
        children: exportSets.map(function (set) {
          return /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return setExportSet(set.id);
            },
            className: "flex flex-col items-start gap-2 rounded-xl p-4 text-left transition ".concat(exportSet === set.id ? "border-2 border-blue-500 bg-blue-500/5" : darkMode ? "border border-gray-800 hover:border-gray-700" : "border border-gray-100 hover:border-gray-200"),
            children: [/*#__PURE__*/_jsx(set.icon, {
              className: "h-5 w-5 text-blue-500"
            }, void 0, false), /*#__PURE__*/_jsx("span", {
              className: "text-sm font-medium ".concat(textPrimary),
              children: set.label
            }, void 0, false), /*#__PURE__*/_jsx("span", {
              className: "text-xs ".concat(textSecondary),
              children: [set.count.toLocaleString(), " records"]
            }, void 0, true)]
          }, set.id, true);
        })
      }, void 0, false), /*#__PURE__*/_jsx("p", {
        className: "mb-2 text-xs font-semibold uppercase tracking-wide ".concat(darkMode ? "text-gray-500" : "text-gray-400"),
        children: "Format"
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "mb-6 flex gap-2",
        children: ["csv", "xlsx"].map(function (fmt) {
          return /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return setExportFormat(fmt);
            },
            className: "rounded-lg px-4 py-2 text-sm font-medium uppercase transition ".concat(exportFormat === fmt ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/30" : darkMode ? "bg-[#1a1f2e] text-gray-400 hover:bg-[#232a3d]" : "bg-gray-100 text-gray-600 hover:bg-gray-200"),
            children: fmt
          }, fmt, false);
        })
      }, void 0, false), /*#__PURE__*/_jsx("button", {
        className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90",
        children: [/*#__PURE__*/_jsx(Download, {
          className: "h-4 w-4"
        }, void 0, false), "Download export"]
      }, void 0, true)]
    }, void 0, true), tab === "clean" && /*#__PURE__*/_jsx("div", {
      className: "rounded-2xl p-6 ".concat(cardBase),
      children: [/*#__PURE__*/_jsx("div", {
        className: "mb-1 flex items-center justify-between",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsx(Brush, {
            className: "h-5 w-5 text-blue-500"
          }, void 0, false), /*#__PURE__*/_jsx("h2", {
            className: "text-lg font-semibold ".concat(textPrimary),
            children: "Data cleaning"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("button", {
          onClick: runAllCleaning,
          disabled: runningAll || totalIssues === 0,
          className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90 disabled:opacity-50",
          children: [runningAll ? /*#__PURE__*/_jsx(Loader2, {
            className: "h-4 w-4 animate-spin"
          }, void 0, false) : /*#__PURE__*/_jsx(Brush, {
            className: "h-4 w-4"
          }, void 0, false), runningAll ? "Cleaning..." : "Fix all"]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsx("p", {
        className: "mb-5 text-sm ".concat(textSecondary),
        children: "Issues found across your Companies and Contacts records. Review and fix, or fix everything at once."
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "space-y-3",
        children: cleaningIssues.map(function (issue) {
          var fixed = fixedIds.includes(issue.id);
          return /*#__PURE__*/_jsx("div", {
            className: "flex items-center justify-between gap-4 rounded-xl border p-4 ".concat(darkMode ? "border-gray-800" : "border-gray-100", " ").concat(fixed ? darkMode ? "opacity-50" : "opacity-60" : ""),
            children: [/*#__PURE__*/_jsx("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ".concat(fixed ? "bg-emerald-500" : "bg-amber-500"),
                children: fixed ? /*#__PURE__*/_jsx(CheckCircle2, {
                  className: "h-4 w-4 text-white"
                }, void 0, false) : /*#__PURE__*/_jsx(issue.icon, {
                  className: "h-4 w-4 text-white"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("div", {
                children: [/*#__PURE__*/_jsx("p", {
                  className: "text-sm font-medium ".concat(textPrimary),
                  children: issue.title
                }, void 0, false), /*#__PURE__*/_jsx("p", {
                  className: "text-xs ".concat(textSecondary),
                  children: issue.detail
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                return fixIssue(issue.id);
              },
              disabled: fixed,
              className: "shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition ".concat(fixed ? darkMode ? "bg-emerald-950/40 text-emerald-400" : "bg-emerald-50 text-emerald-600" : darkMode ? "border border-gray-700 text-gray-300 hover:bg-[#1a1f2e]" : "border border-gray-200 text-gray-600 hover:bg-gray-50"),
              children: fixed ? "Fixed" : "Fix ".concat(issue.count)
            }, void 0, false)]
          }, issue.id, true);
        })
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}