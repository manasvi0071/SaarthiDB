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
// ForgotPassword.jsx - UPDATED WITHOUT TURNSTILE
import React, { useState } from 'react';
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router";
var ForgotPassword = function ForgotPassword() {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    success = _useState8[0],
    setSuccess = _useState8[1];
  var navigate = useNavigate();

  // API URL
  var API_URL = import.meta.env.VITE_API_URL || 'https://api.saarthiq.in';
  console.log('✅ Backend URL:', API_URL);
  var handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var response, responseText, data, errorMessage, _errorMessage, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            setError('');
            setLoading(true);
            _context.p = 1;
            console.log('📤 Sending forgot password request');
            _context.n = 2;
            return fetch("".concat(API_URL, "/api/auth/forgot-password"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email
              })
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.text();
          case 3:
            responseText = _context.v;
            _context.p = 4;
            data = JSON.parse(responseText);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error('❌ Failed to parse response:', _t);
            throw new Error('Invalid response from server');
          case 6:
            if (response.ok) {
              setSuccess(true);
            } else {
              errorMessage = data.message || data.error || 'Something went wrong';
              setError(errorMessage);
            }
            _context.n = 8;
            break;
          case 7:
            _context.p = 7;
            _t2 = _context.v;
            console.error('Error:', _t2);
            _errorMessage = 'Cannot connect to server. Please try again later.';
            if (_t2.message.includes('Failed to fetch')) {
              _errorMessage = "Cannot connect to backend server at ".concat(API_URL, ". Please check if the backend is running.");
            }
            setError(_errorMessage);
          case 8:
            _context.p = 8;
            setLoading(false);
            return _context.f(8);
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[4, 5], [1, 7, 8, 9]]);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8",
    children: /*#__PURE__*/_jsx("div", {
      className: "max-w-md w-full space-y-8",
      children: [/*#__PURE__*/_jsx("button", {
        onClick: function onClick() {
          return navigate('/login');
        },
        className: "flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors",
        children: [/*#__PURE__*/_jsx(ArrowLeft, {
          className: "w-4 h-4"
        }, void 0, false), "Back to Login"]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "mx-auto h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4",
          children: /*#__PURE__*/_jsx(Mail, {
            className: "h-8 w-8 text-indigo-600"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("h2", {
          className: "text-3xl font-bold text-gray-900",
          children: "Forgot your password?"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "mt-2 text-gray-600",
          children: "Enter your email address and we'll send you a reset link"
        }, void 0, false)]
      }, void 0, true), error && /*#__PURE__*/_jsx("div", {
        className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-2",
          children: [/*#__PURE__*/_jsx(AlertCircle, {
            className: "w-5 h-5 flex-shrink-0 mt-0.5"
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            children: /*#__PURE__*/_jsx("p", {
              className: "font-medium",
              children: error
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false), success ? /*#__PURE__*/_jsx("div", {
        className: "bg-green-50 border border-green-200 rounded-lg p-6 text-center",
        children: [/*#__PURE__*/_jsx(CheckCircle, {
          className: "w-12 h-12 text-green-500 mx-auto mb-4"
        }, void 0, false), /*#__PURE__*/_jsx("h3", {
          className: "text-lg font-bold text-gray-900 mb-2",
          children: "Check your email!"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "text-gray-700 mb-4",
          children: ["If an account exists with ", /*#__PURE__*/_jsx("span", {
            className: "font-semibold",
            children: email
          }, void 0, false), ", you will receive password reset instructions shortly."]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "text-sm text-gray-600 space-y-2",
          children: [/*#__PURE__*/_jsx("p", {
            children: "\uD83D\uDCE7 Check your inbox (and spam folder)"
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            children: "\u23F1\uFE0F The link expires in 1 hour"
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            children: ["\uD83D\uDD17 Reset link: ", /*#__PURE__*/_jsx("span", {
              className: "font-mono text-xs",
              children: "https://www.saarthiq.in/reset-password/..."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "mt-6 space-y-3",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return navigate('/login');
            },
            className: "w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition",
            children: "Return to Login"
          }, void 0, false), /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              setSuccess(false);
              setEmail('');
            },
            className: "w-full py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition",
            children: "Send Another Reset Link"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true) : /*#__PURE__*/_jsx("form", {
        className: "space-y-6",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("label", {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Email Address"
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "relative",
            children: [/*#__PURE__*/_jsx(Mail, {
              className: "absolute left-3 top-3 w-5 h-5 text-gray-400"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              id: "email",
              name: "email",
              type: "email",
              required: true,
              value: email,
              onChange: function onChange(e) {
                return setEmail(e.target.value);
              },
              className: "pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition",
              placeholder: "you@example.com",
              disabled: loading,
              autoComplete: "email"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx("button", {
            type: "submit",
            disabled: loading || !email,
            className: "w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2",
            children: loading ? /*#__PURE__*/_jsx(_Fragment, {
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
              }, void 0, false), "Sending..."]
            }, void 0, true) : 'Send Reset Link'
          }, void 0, false)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
};
export default ForgotPassword;