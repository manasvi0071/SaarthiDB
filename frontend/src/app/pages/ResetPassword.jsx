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
// src/ResetPassword.jsx - CORRECTED VERSION
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router";
import { Lock, AlertCircle, CheckCircle, ArrowLeft, Shield } from 'lucide-react';
var ResetPassword = function ResetPassword() {
  var _useParams = useParams(),
    token = _useParams.token;
  var navigate = useNavigate();
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    password = _useState2[0],
    setPassword = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    confirmPassword = _useState4[0],
    setConfirmPassword = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    validating = _useState8[0],
    setValidating = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    error = _useState0[0],
    setError = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    success = _useState10[0],
    setSuccess = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    tokenValid = _useState12[0],
    setTokenValid = _useState12[1];
  var API_URL = import.meta.env.VITE_API_URL || 'https://api.saarthiq.in';
  useEffect(function () {
    var validateToken = /*#__PURE__*/function () {
      var _validateToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, responseText, data, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch("".concat(API_URL, "/api/auth/validate-reset-token"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  token: token
                })
              });
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.text();
            case 2:
              responseText = _context.v;
              _context.p = 3;
              data = JSON.parse(responseText);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              throw new Error('Invalid server response');
            case 5:
              if (response.ok && data.valid) {
                setTokenValid(true);
              } else {
                setError(data.message || 'This reset link is invalid or has expired.');
              }
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t2 = _context.v;
              console.error('Token validation error:', _t2);
              setError('Failed to validate reset link. Please try again.');
            case 7:
              _context.p = 7;
              setValidating(false);
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[3, 4], [0, 6, 7, 8]]);
      }));
      function validateToken() {
        return _validateToken.apply(this, arguments);
      }
      return validateToken;
    }();
    if (token) {
      validateToken();
    } else {
      setError('No reset token provided.');
      setValidating(false);
    }
  }, [token, API_URL]);
  var handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var validations, _i, _validations, validation, response, responseText, data, _t3, _t4;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            e.preventDefault();
            setError('');

            // Password validation
            validations = [{
              test: password.length >= 8,
              message: 'Password must be at least 8 characters'
            }, {
              test: /[A-Z]/.test(password),
              message: 'Password must contain at least one uppercase letter'
            }, {
              test: /[a-z]/.test(password),
              message: 'Password must contain at least one lowercase letter'
            }, {
              test: /[0-9]/.test(password),
              message: 'Password must contain at least one number'
            }, {
              test: /[!@#$%^&*]/.test(password),
              message: 'Password must contain at least one special character (!@#$%^&*)'
            }, {
              test: password === confirmPassword,
              message: 'Passwords do not match'
            }];
            _i = 0, _validations = validations;
          case 1:
            if (!(_i < _validations.length)) {
              _context2.n = 3;
              break;
            }
            validation = _validations[_i];
            if (validation.test) {
              _context2.n = 2;
              break;
            }
            setError(validation.message);
            return _context2.a(2);
          case 2:
            _i++;
            _context2.n = 1;
            break;
          case 3:
            setLoading(true);
            _context2.p = 4;
            _context2.n = 5;
            return fetch("".concat(API_URL, "/api/auth/reset-password"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                token: token,
                password: password
              })
            });
          case 5:
            response = _context2.v;
            _context2.n = 6;
            return response.text();
          case 6:
            responseText = _context2.v;
            _context2.p = 7;
            data = JSON.parse(responseText);
            _context2.n = 9;
            break;
          case 8:
            _context2.p = 8;
            _t3 = _context2.v;
            throw new Error('Invalid server response');
          case 9:
            if (response.ok) {
              setSuccess(true);
              localStorage.removeItem('token');
              setTimeout(function () {
                navigate('/login', {
                  state: {
                    message: 'Password reset successful! Please login with your new password.'
                  }
                });
              }, 3000);
            } else {
              setError(data.message || 'Failed to reset password');
            }
            _context2.n = 11;
            break;
          case 10:
            _context2.p = 10;
            _t4 = _context2.v;
            console.error('Reset password error:', _t4);
            setError('Network error. Please try again.');
          case 11:
            _context2.p = 11;
            setLoading(false);
            return _context2.f(11);
          case 12:
            return _context2.a(2);
        }
      }, _callee2, null, [[7, 8], [4, 10, 11, 12]]);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  if (validating) {
    return /*#__PURE__*/_jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-50",
      children: /*#__PURE__*/_jsx("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "mt-4 text-gray-600",
          children: "Validating reset link..."
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }
  if (!tokenValid) {
    return /*#__PURE__*/_jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center",
        children: [/*#__PURE__*/_jsx(AlertCircle, {
          className: "w-16 h-16 text-red-500 mx-auto mb-4"
        }, void 0, false), /*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold text-gray-900 mb-4",
          children: "Invalid Reset Link"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "text-gray-600 mb-6",
          children: error || 'This password reset link is invalid or has expired.'
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return navigate('/forgot-password');
            },
            className: "w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition",
            children: "Request New Reset Link"
          }, void 0, false), /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return navigate('/login');
            },
            className: "w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition",
            children: "Back to Login"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false);
  }
  if (success) {
    return /*#__PURE__*/_jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center",
        children: [/*#__PURE__*/_jsx(CheckCircle, {
          className: "w-16 h-16 text-green-500 mx-auto mb-4"
        }, void 0, false), /*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold text-gray-900 mb-4",
          children: "Password Reset Successfully!"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "text-gray-600 mb-6",
          children: "Your password has been updated. Redirecting to login page..."
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-6"
        }, void 0, false), /*#__PURE__*/_jsx("button", {
          onClick: function onClick() {
            return navigate('/login');
          },
          className: "w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition",
          children: "Go to Login Now"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false);
  }
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
          children: /*#__PURE__*/_jsx(Lock, {
            className: "h-8 w-8 text-indigo-600"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("h2", {
          className: "text-3xl font-bold text-gray-900",
          children: "Set New Password"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "mt-2 text-gray-600",
          children: "Please create a strong new password"
        }, void 0, false)]
      }, void 0, true), error && /*#__PURE__*/_jsx("div", {
        className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
        children: /*#__PURE__*/_jsx("div", {
          className: "flex items-start gap-2",
          children: [/*#__PURE__*/_jsx(AlertCircle, {
            className: "w-5 h-5 flex-shrink-0 mt-0.5"
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "text-sm",
            children: /*#__PURE__*/_jsx("p", {
              className: "font-medium",
              children: error
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsx("form", {
        className: "space-y-6",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/_jsx("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "password",
              className: "block text-sm font-medium text-gray-700 mb-2",
              children: "New Password"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              id: "password",
              name: "password",
              type: "password",
              required: true,
              value: password,
              onChange: function onChange(e) {
                return setPassword(e.target.value);
              },
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition",
              placeholder: "Enter new password",
              disabled: loading,
              autoComplete: "new-password"
            }, void 0, false), password && /*#__PURE__*/_jsx("div", {
              className: "mt-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "flex items-center justify-between mb-1",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "text-xs font-medium text-gray-700",
                  children: "Password Strength:"
                }, void 0, false), /*#__PURE__*/_jsx("span", {
                  className: "text-xs font-medium",
                  children: password.length < 8 ? 'Weak' : password.length < 12 ? 'Good' : /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password) ? 'Strong' : 'Fair'
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsx("div", {
                className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                children: /*#__PURE__*/_jsx("div", {
                  className: "h-full transition-all duration-300 ".concat(password.length < 4 ? 'w-1/4 bg-red-500' : password.length < 8 ? 'w-1/2 bg-yellow-500' : password.length < 12 ? 'w-3/4 bg-blue-500' : 'w-full bg-green-500')
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "confirmPassword",
              className: "block text-sm font-medium text-gray-700 mb-2",
              children: "Confirm Password"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              required: true,
              value: confirmPassword,
              onChange: function onChange(e) {
                return setConfirmPassword(e.target.value);
              },
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition",
              placeholder: "Confirm new password",
              disabled: loading,
              autoComplete: "new-password"
            }, void 0, false), /*#__PURE__*/_jsx("div", {
              className: "mt-2",
              children: password && confirmPassword && password === confirmPassword ? /*#__PURE__*/_jsx("span", {
                className: "text-xs text-green-600 flex items-center gap-1",
                children: [/*#__PURE__*/_jsx(CheckCircle, {
                  className: "w-3 h-3"
                }, void 0, false), " Passwords match"]
              }, void 0, true) : password && confirmPassword ? /*#__PURE__*/_jsx("span", {
                className: "text-xs text-red-600 flex items-center gap-1",
                children: [/*#__PURE__*/_jsx(AlertCircle, {
                  className: "w-3 h-3"
                }, void 0, false), " Passwords do not match"]
              }, void 0, true) : null
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "bg-gray-50 p-4 rounded-lg border border-gray-200",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex items-center gap-2 mb-3",
            children: [/*#__PURE__*/_jsx(Shield, {
              className: "w-4 h-4 text-gray-600"
            }, void 0, false), /*#__PURE__*/_jsx("h3", {
              className: "text-sm font-medium text-gray-700",
              children: "Password Requirements"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("ul", {
            className: "space-y-2 text-xs text-gray-600",
            children: [/*#__PURE__*/_jsx("li", {
              className: "flex items-center gap-2 ".concat(password.length >= 8 ? 'text-green-600' : ''),
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 rounded-full ".concat(password.length >= 8 ? 'bg-green-500' : 'bg-gray-300')
              }, void 0, false), "At least 8 characters"]
            }, void 0, true), /*#__PURE__*/_jsx("li", {
              className: "flex items-center gap-2 ".concat(/[A-Z]/.test(password) ? 'text-green-600' : ''),
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 rounded-full ".concat(/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-300')
              }, void 0, false), "One uppercase letter (A-Z)"]
            }, void 0, true), /*#__PURE__*/_jsx("li", {
              className: "flex items-center gap-2 ".concat(/[a-z]/.test(password) ? 'text-green-600' : ''),
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 rounded-full ".concat(/[a-z]/.test(password) ? 'bg-green-500' : 'bg-gray-300')
              }, void 0, false), "One lowercase letter (a-z)"]
            }, void 0, true), /*#__PURE__*/_jsx("li", {
              className: "flex items-center gap-2 ".concat(/[0-9]/.test(password) ? 'text-green-600' : ''),
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 rounded-full ".concat(/[0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-300')
              }, void 0, false), "One number (0-9)"]
            }, void 0, true), /*#__PURE__*/_jsx("li", {
              className: "flex items-center gap-2 ".concat(/[!@#$%^&*]/.test(password) ? 'text-green-600' : ''),
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-2 h-2 rounded-full ".concat(/[!@#$%^&*]/.test(password) ? 'bg-green-500' : 'bg-gray-300')
              }, void 0, false), "One special character (!@#$%^&*)"]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsx("button", {
          type: "submit",
          disabled: loading || !password || !confirmPassword,
          className: "w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2",
          children: loading ? /*#__PURE__*/_jsx(_Fragment, {
            children: [/*#__PURE__*/_jsx("div", {
              className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
            }, void 0, false), "Resetting Password..."]
          }, void 0, true) : 'Reset Password'
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false);
};
export default ResetPassword;