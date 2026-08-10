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
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { Eye, EyeOff, TrendingUp, Lock, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
export function Login() {
  var _useState = useState({
      email: '',
      password: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showPassword = _useState4[0],
    setShowPassword = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    require2fa = _useState0[0],
    setRequire2fa = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    otp = _useState10[0],
    setOtp = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    otpLoading = _useState12[0],
    setOtpLoading = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    partialAuthData = _useState14[0],
    setPartialAuthData = _useState14[1];
  var _useState15 = useState({
      attempts: 0,
      remainingAttempts: 3,
      maxAttempts: 3,
      locked: false
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    loginData = _useState16[0],
    setLoginData = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    serverBusy = _useState18[0],
    setServerBusy = _useState18[1];
  var navigate = useNavigate();
  var _useAuth = useAuth(),
    login = _useAuth.login;
  useEffect(function () {
    localStorage.clear();
    fetchConnectionStatus();
    var interval = setInterval(fetchConnectionStatus, 15000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  var fetchConnectionStatus = /*#__PURE__*/function () {
    var _fetchConnectionStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var response, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return fetch("".concat(import.meta.env.VITE_API_URL, "/api/auth/connection-status"));
          case 1:
            response = _context.v;
            if (!response.ok) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return response.json();
          case 2:
            data = _context.v;
            if (data.connectionStatus) {
              setServerBusy(data.connectionStatus.isLimitReached);
            }
          case 3:
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('Failed to fetch connection status:', _t);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 4]]);
    }));
    function fetchConnectionStatus() {
      return _fetchConnectionStatus.apply(this, arguments);
    }
    return fetchConnectionStatus;
  }();
  var handleChange = function handleChange(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
    if (error) setError('');
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var response, data, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            e.preventDefault();
            setLoading(true);
            setError('');

            // TEMP DEMO LOGIN - remove when backend is ready
            if (!(formData.email === "admin@sarthidb.com" && formData.password === "Admin@123")) {
              _context2.n = 1;
              break;
            }
            login({
              name: "Admin",
              email: formData.email,
              token: "demo-token"
            });
            navigate('/');
            return _context2.a(2);
          case 1:
            if (!serverBusy) {
              _context2.n = 2;
              break;
            }
            setError('Server is busy. Please try again in a few minutes.');
            setLoading(false);
            return _context2.a(2);
          case 2:
            if (formData.email === "admin@cip.com" && formData.password === "Admin@123") {
              login(formData.email, formData.password);
              navigate("/");
            } else {
              setError("Invalid email or password");
            }
            setLoading(false);
            _context2.p = 3;
            _context2.n = 4;
            return fetch("".concat(import.meta.env.VITE_API_URL, "/api/auth/login"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
          case 4:
            response = _context2.v;
            _context2.n = 5;
            return response.json();
          case 5:
            data = _context2.v;
            if (!response.ok) {
              _context2.n = 9;
              break;
            }
            if (!data.require2fa) {
              _context2.n = 7;
              break;
            }
            setPartialAuthData({
              email: data.email,
              name: data.name
            });
            _context2.n = 6;
            return requestOTP(data.email);
          case 6:
            setRequire2fa(true);
            setLoading(false);
            _context2.n = 8;
            break;
          case 7:
            completeLogin(data);
          case 8:
            _context2.n = 10;
            break;
          case 9:
            if (response.status === 503) {
              setServerBusy(true);
              setError('Server is busy. Please try again in a few minutes.');
            } else {
              setLoginData({
                attempts: data.attempts || 0,
                remainingAttempts: data.remainingAttempts || 0,
                maxAttempts: data.totalAttempts || 3,
                locked: data.locked || false
              });
              setError(data.locked ? 'Your account is locked. Contact administrator.' : data.pending ? 'Account pending approval.' : data.blocked ? 'Your account has been blocked.' : data.message || 'Login failed.');
            }
            setLoading(false);
          case 10:
            _context2.n = 12;
            break;
          case 11:
            _context2.p = 11;
            _t2 = _context2.v;
            setError('Network error. Please try again.');
            setLoading(false);
          case 12:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 11]]);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  var requestOTP = /*#__PURE__*/function () {
    var _requestOTP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(email) {
      var response, data, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return fetch("".concat(import.meta.env.VITE_API_URL, "/api/auth/request-2fa-otp"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email
              })
            });
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.json();
          case 2:
            data = _context3.v;
            if (!response.ok) setError(data.message || 'Failed to send OTP');
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setError('Failed to request OTP.');
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    function requestOTP(_x2) {
      return _requestOTP.apply(this, arguments);
    }
    return requestOTP;
  }();
  var verifyOTP = /*#__PURE__*/function () {
    var _verifyOTP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, data, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!(otp.length !== 6)) {
              _context4.n = 1;
              break;
            }
            setError('Please enter a valid 6-digit OTP');
            return _context4.a(2);
          case 1:
            setOtpLoading(true);
            setError('');
            _context4.p = 2;
            _context4.n = 3;
            return fetch("".concat(import.meta.env.VITE_API_URL, "/api/auth/verify-2fa"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: partialAuthData.email,
                otp: otp
              })
            });
          case 3:
            response = _context4.v;
            _context4.n = 4;
            return response.json();
          case 4:
            data = _context4.v;
            if (response.ok) completeLogin(data);else {
              setError(data.message || 'Invalid OTP.');
              setOtpLoading(false);
            }
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t4 = _context4.v;
            setError('Failed to verify OTP.');
            setOtpLoading(false);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 5]]);
    }));
    function verifyOTP() {
      return _verifyOTP.apply(this, arguments);
    }
    return verifyOTP;
  }();
  var completeLogin = function completeLogin(data) {
    localStorage.setItem('token', data.token || '');
    localStorage.setItem('userName', data.name || '');
    localStorage.setItem('userEmail', data.email || '');
    localStorage.setItem('userDept', data.department || '');
    localStorage.setItem('isAdmin', data.is_admin ? 'true' : 'false');
    localStorage.setItem('userId', data.id || data.userId || '');
    localStorage.setItem('connectionId', data.connectionId || '');
    login({
      name: data.name,
      email: data.email,
      token: data.token
    });
    navigate('/');
  };
  var resendOTP = /*#__PURE__*/function () {
    var _resendOTP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            setOtpLoading(true);
            _context5.n = 1;
            return requestOTP(partialAuthData.email);
          case 1:
            setOtp('');
            setOtpLoading(false);
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    function resendOTP() {
      return _resendOTP.apply(this, arguments);
    }
    return resendOTP;
  }();
  return /*#__PURE__*/_jsx("div", {
    className: "min-h-screen flex",
    children: [/*#__PURE__*/_jsx("div", {
      className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f2463] via-[#1e40af] to-[#1d4ed8] items-center justify-center p-12 relative overflow-hidden",
      children: [/*#__PURE__*/_jsx("div", {
        className: "absolute inset-0 opacity-10",
        children: [/*#__PURE__*/_jsx("div", {
          className: "absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl"
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "relative z-10",
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl",
            children: /*#__PURE__*/_jsx(TrendingUp, {
              className: "w-10 h-10 text-white"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-white font-bold text-3xl leading-tight",
              children: "sarthiDB"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "text-blue-200 text-sm",
              children: "Smart Data Platform"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "flex-1 flex items-center justify-center p-8 bg-[#f0f4ff]",
      children: /*#__PURE__*/_jsx("div", {
        className: "w-full max-w-md",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-3 mb-8 lg:hidden",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 rounded-xl bg-[#1e40af] flex items-center justify-center",
            children: /*#__PURE__*/_jsx(TrendingUp, {
              className: "w-6 h-6 text-white"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-[#0f172a] font-bold text-lg",
              children: "sarthiDB"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "text-[#4b5e9e] text-xs",
              children: "Smart Data Platform"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "bg-white rounded-2xl shadow-xl border border-[rgba(30,64,175,0.1)] p-8",
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-[#0f172a] text-2xl font-bold mb-1",
            children: "Welcome back"
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            className: "text-[#4b5e9e] mb-6 text-sm",
            children: require2fa ? 'Enter your 2FA verification code' : 'Sign in to your account to continue'
          }, void 0, false), serverBusy && /*#__PURE__*/_jsx("div", {
            className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2",
            children: [/*#__PURE__*/_jsx(AlertCircle, {
              className: "w-4 h-4 text-red-600 mt-0.5"
            }, void 0, false), /*#__PURE__*/_jsx("p", {
              className: "text-xs text-red-600",
              children: "Server is busy. Please try again in a few minutes."
            }, void 0, false)]
          }, void 0, true), error && /*#__PURE__*/_jsx("div", {
            className: "mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2",
            children: [/*#__PURE__*/_jsx(AlertCircle, {
              className: "w-4 h-4"
            }, void 0, false), error]
          }, void 0, true), !require2fa ? /*#__PURE__*/_jsx("form", {
            onSubmit: handleSubmit,
            className: "space-y-5",
            children: [/*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Email address"
              }, void 0, false), /*#__PURE__*/_jsx("input", {
                type: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                placeholder: "you@company.com",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                required: true,
                disabled: loading || serverBusy
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Password"
              }, void 0, false), /*#__PURE__*/_jsx("div", {
                className: "relative",
                children: [/*#__PURE__*/_jsx("input", {
                  type: showPassword ? 'text' : 'password',
                  name: "password",
                  value: formData.password,
                  onChange: handleChange,
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                  className: "w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                  required: true,
                  disabled: loading || serverBusy
                }, void 0, false), /*#__PURE__*/_jsx("button", {
                  type: "button",
                  onClick: function onClick() {
                    return setShowPassword(!showPassword);
                  },
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5e9e] hover:text-[#1e40af] p-1",
                  children: showPassword ? /*#__PURE__*/_jsx(EyeOff, {
                    className: "w-4 h-4"
                  }, void 0, false) : /*#__PURE__*/_jsx(Eye, {
                    className: "w-4 h-4"
                  }, void 0, false)
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                className: "flex justify-end mt-1.5",
                children: /*#__PURE__*/_jsx(Link, {
                  to: "/forgot-password",
                  className: "text-xs text-[#1e40af] hover:underline",
                  children: "Forgot password?"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), loginData.attempts > 0 && !loginData.locked && /*#__PURE__*/_jsx("div", {
              className: "p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-700",
              children: [/*#__PURE__*/_jsx("span", {
                className: "font-semibold",
                children: ["Attempt ", loginData.attempts, " of ", loginData.maxAttempts, "."]
              }, void 0, true), ' ', loginData.remainingAttempts, " attempt(s) remaining before account lock."]
            }, void 0, true), loginData.locked && /*#__PURE__*/_jsx("div", {
              className: "p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2",
              children: [/*#__PURE__*/_jsx(Lock, {
                className: "w-4 h-4"
              }, void 0, false), "Account locked. Contact administrator to unlock."]
            }, void 0, true), /*#__PURE__*/_jsx("button", {
              type: "submit",
              disabled: loading || loginData.locked || serverBusy,
              className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
              children: loading ? /*#__PURE__*/_jsx(_Fragment, {
                children: [/*#__PURE__*/_jsx("div", {
                  className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                }, void 0, false), " Signing in..."]
              }, void 0, true) : loginData.locked ? /*#__PURE__*/_jsx(_Fragment, {
                children: [/*#__PURE__*/_jsx(Lock, {
                  className: "w-4 h-4"
                }, void 0, false), " Account Locked"]
              }, void 0, true) : 'Sign In'
            }, void 0, false)]
          }, void 0, true) : /*#__PURE__*/_jsx("div", {
            className: "space-y-4",
            children: [/*#__PURE__*/_jsx("div", {
              className: "text-center",
              children: [/*#__PURE__*/_jsx("div", {
                className: "mx-auto w-14 h-14 bg-[#eef2ff] rounded-full flex items-center justify-center mb-3",
                children: /*#__PURE__*/_jsx(Lock, {
                  className: "w-7 h-7 text-[#1e40af]"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-[#4b5e9e]",
                children: ["Code sent to ", /*#__PURE__*/_jsx("span", {
                  className: "font-semibold text-[#0f172a]",
                  children: partialAuthData === null || partialAuthData === void 0 ? void 0 : partialAuthData.email
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsx("input", {
              type: "text",
              value: otp,
              onChange: function onChange(e) {
                return setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
              },
              placeholder: "000000",
              maxLength: 6,
              className: "w-full px-4 py-3 text-center text-2xl font-mono rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30",
              disabled: otpLoading
            }, void 0, false), /*#__PURE__*/_jsx("button", {
              onClick: verifyOTP,
              disabled: otp.length !== 6 || otpLoading,
              className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold disabled:opacity-50 flex items-center justify-center gap-2",
              children: otpLoading ? /*#__PURE__*/_jsx(_Fragment, {
                children: [/*#__PURE__*/_jsx("div", {
                  className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                }, void 0, false), " Verifying..."]
              }, void 0, true) : "Verify and Continue"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "flex gap-2",
              children: [/*#__PURE__*/_jsx("button", {
                onClick: resendOTP,
                disabled: otpLoading,
                className: "flex-1 py-2 border border-[#1e40af] text-[#1e40af] rounded-xl text-sm font-medium hover:bg-[#eef2ff] transition disabled:opacity-50",
                children: "Resend OTP"
              }, void 0, false), /*#__PURE__*/_jsx("button", {
                onClick: function onClick() {
                  setRequire2fa(false);
                  setOtp('');
                  setError('');
                },
                disabled: otpLoading,
                className: "flex-1 py-2 border border-gray-300 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50",
                children: "Back"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("p", {
            className: "mt-6 text-center text-sm text-[#4b5e9e]",
            children: ["Don't have an account?", ' ', /*#__PURE__*/_jsx(Link, {
              to: "/register",
              className: "text-[#1e40af] font-semibold hover:underline",
              children: "Create account"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
export default Login;