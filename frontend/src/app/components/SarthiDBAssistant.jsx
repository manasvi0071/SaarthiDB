import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine2(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
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
var SYSTEM_PROMPT = "Act as a corporate research analyst for sarthiDB (Smart Data Platform). You help users find company data, research sectors, and analyze prospects in India.\n\nWhen users ask for companies in a sector/city, use this approach:\n\"Act as a corporate research analyst. Help me find a list of companies from the [SECTOR NAME] sector operating in [CITY NAME], India. For each company, provide: Company Name, Registered Office Address, Industry, Sub-Industry, Year of Establishment, Approximate Employee Strength, Official Website, and LinkedIn Page. Present the output in a clean table format.\"\n\nWhen users ask for details on a specific company, use this approach:\n\"Act as a corporate research analyst and provide detailed research on [COMPANY NAME]. Include: Company Overview, Registered Office Address, Industry Type, Sub-Industry, GST Registration Number, Date of Establishment, CIN/UID Number, Company Constitution, Names of Directors, Employee Strength, Revenue & Business Growth, Official Website, LinkedIn URL, Current Hiring Status, HR Manager details, Recruitment Activity Level, and whether this is a good prospect for recruitment services.\"\n\nAlways be helpful, concise, and format data in tables when listing multiple companies or data points.";
var QUICK_PROMPTS = ["Show me companies hiring in Mumbai", "Find IT companies in Bangalore", "Research Infosys company details", "Top finance companies in Delhi"];
export default function SarthiDBAssistant() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState([{
      role: "assistant",
      content: "Hi! I'm your sarthiDB Assistant. Ask me to find companies by sector/city, or get detailed research on any company."
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    messages = _useState4[0],
    setMessages = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    input = _useState6[0],
    setInput = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var bottomRef = useRef(null);
  useEffect(function () {
    var _bottomRef$current;
    (_bottomRef$current = bottomRef.current) === null || _bottomRef$current === void 0 || _bottomRef$current.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);
  var sendMessage = /*#__PURE__*/function () {
    var _sendMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(text) {
      var userText, newMessages, _data$content, response, data, reply, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            userText = text || input.trim();
            if (userText) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            newMessages = [].concat(_toConsumableArray(messages), [{
              role: "user",
              content: userText
            }]);
            setMessages(newMessages);
            setInput("");
            setLoading(true);
            _context.p = 2;
            _context.n = 3;
            return fetch("https://api.anthropic.com/v1/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                system: SYSTEM_PROMPT,
                messages: newMessages.map(function (m) {
                  return {
                    role: m.role,
                    content: m.content
                  };
                })
              })
            });
          case 3:
            response = _context.v;
            _context.n = 4;
            return response.json();
          case 4:
            data = _context.v;
            reply = ((_data$content = data.content) === null || _data$content === void 0 || (_data$content = _data$content[0]) === null || _data$content === void 0 ? void 0 : _data$content.text) || "Sorry, I couldn't get a response.";
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [{
                role: "assistant",
                content: reply
              }]);
            });
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [{
                role: "assistant",
                content: "Error connecting. Please try again."
              }]);
            });
          case 6:
            _context.p = 6;
            setLoading(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[2, 5, 6, 7]]);
    }));
    function sendMessage(_x) {
      return _sendMessage.apply(this, arguments);
    }
    return sendMessage;
  }();
  return /*#__PURE__*/_jsx(_Fragment, {
    children: [!open && /*#__PURE__*/_jsx("button", {
      onClick: function onClick() {
        return setOpen(true);
      },
      style: {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #1e40af, #3b82f6)",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(59,130,246,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "22px"
      },
      children: "💬"
    }, void 0, false), open && /*#__PURE__*/_jsx("div", {
      style: {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        width: "360px",
        height: "520px",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #e2e8f0"
      },
      children: [/*#__PURE__*/_jsx("div", {
        style: {
          background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
          padding: "14px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        },
        children: [/*#__PURE__*/_jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px"
          },
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px"
            },
            children: "🤖"
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("div", {
              style: {
                color: "white",
                fontWeight: 600,
                fontSize: "14px"
              },
              children: "sarthiDB Assistant"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              style: {
                color: "rgba(255,255,255,0.75)",
                fontSize: "11px"
              },
              children: "How can I help you today?"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("button", {
          onClick: function onClick() {
            return setOpen(false);
          },
          style: {
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            lineHeight: 1
          },
          children: "−"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        },
        children: [messages.map(function (msg, i) {
          return /*#__PURE__*/_jsx("div", {
            style: {
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start"
            },
            children: /*#__PURE__*/_jsx("div", {
              style: {
                maxWidth: "82%",
                padding: "9px 13px",
                borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                background: msg.role === "user" ? "linear-gradient(135deg, #1e40af, #3b82f6)" : "#f1f5f9",
                color: msg.role === "user" ? "white" : "#1e293b",
                fontSize: "13px",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
              },
              children: msg.content
            }, void 0, false)
          }, i, false);
        }), loading && /*#__PURE__*/_jsx("div", {
          style: {
            display: "flex",
            justifyContent: "flex-start"
          },
          children: /*#__PURE__*/_jsx("div", {
            style: {
              background: "#f1f5f9",
              borderRadius: "14px 14px 14px 4px",
              padding: "9px 13px",
              fontSize: "13px",
              color: "#64748b"
            },
            children: "Researching..."
          }, void 0, false)
        }, void 0, false), messages.length === 1 && /*#__PURE__*/_jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginTop: "4px"
          },
          children: QUICK_PROMPTS.map(function (q, i) {
            return /*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                return sendMessage(q);
              },
              style: {
                background: "white",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                padding: "7px 10px",
                fontSize: "12px",
                color: "#1e40af",
                cursor: "pointer",
                textAlign: "left"
              },
              children: q
            }, i, false);
          })
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          ref: bottomRef
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        style: {
          padding: "12px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          gap: "8px"
        },
        children: [/*#__PURE__*/_jsx("input", {
          value: input,
          onChange: function onChange(e) {
            return setInput(e.target.value);
          },
          onKeyDown: function onKeyDown(e) {
            return e.key === "Enter" && !e.shiftKey && sendMessage();
          },
          placeholder: "Type your message...",
          style: {
            flex: 1,
            padding: "9px 12px",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            fontSize: "13px",
            outline: "none",
            fontFamily: "Inter, sans-serif"
          }
        }, void 0, false), /*#__PURE__*/_jsx("button", {
          onClick: function onClick() {
            return sendMessage();
          },
          disabled: loading || !input.trim(),
          style: {
            background: "linear-gradient(135deg, #1e40af, #3b82f6)",
            border: "none",
            borderRadius: "10px",
            width: "38px",
            cursor: "pointer",
            color: "white",
            fontSize: "16px"
          },
          children: "➤"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}