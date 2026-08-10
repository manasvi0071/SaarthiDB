import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { CheckCircle, Loader2, FileText, Check, X, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
var Register = function Register() {
  var _useState = useState({
      name: '',
      email: '',
      password: '',
      department: '',
      phone: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showPopup = _useState4[0],
    setShowPopup = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isSubmitting = _useState6[0],
    setIsSubmitting = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    passwordError = _useState8[0],
    setPasswordError = _useState8[1];
  var _useState9 = useState({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    passwordStrength = _useState0[0],
    setPasswordStrength = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    showTermsModal = _useState10[0],
    setShowTermsModal = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    acceptedTerms = _useState12[0],
    setAcceptedTerms = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showPassword = _useState14[0],
    setShowPassword = _useState14[1];
  var navigate = useNavigate();
  var validatePassword = function validatePassword(password) {
    var errors = [];
    var strength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };
    setPasswordStrength(strength);
    if (!strength.length) errors.push('At least 8 characters');
    if (!strength.uppercase) errors.push('One uppercase letter (A-Z)');
    if (!strength.lowercase) errors.push('One lowercase letter (a-z)');
    if (!strength.number) errors.push('One number (0-9)');
    if (!strength.special) errors.push('One special character (!@#$%^&*)');
    return errors.length > 0 ? errors.join(', ') : '';
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
    if (name === 'password') {
      setPasswordError(validatePassword(value));
    }
  };
  var handlePhoneChange = function handlePhoneChange(e) {
    var value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      phone: value
    }));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _handleSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var passwordValidation, response, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            if (!isSubmitting) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (acceptedTerms) {
              _context.n = 2;
              break;
            }
            alert("Please accept the Terms and Conditions to register.");
            setShowTermsModal(true);
            return _context.a(2);
          case 2:
            passwordValidation = validatePassword(formData.password);
            if (!passwordValidation) {
              _context.n = 3;
              break;
            }
            setPasswordError(passwordValidation);
            return _context.a(2);
          case 3:
            if (!(formData.phone.length !== 10)) {
              _context.n = 4;
              break;
            }
            alert("Phone number must be exactly 10 digits.");
            return _context.a(2);
          case 4:
            setIsSubmitting(true);
            _context.p = 5;
            _context.n = 6;
            return fetch("".concat(import.meta.env.VITE_API_URL, "/api/auth/register"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
          case 6:
            response = _context.v;
            _context.n = 7;
            return response.json();
          case 7:
            data = _context.v;
            if (response.ok) {
              setShowPopup(true);
            } else {
              alert(data.message || 'Registration failed. Please try again.');
            }
            _context.n = 9;
            break;
          case 8:
            _context.p = 8;
            _t = _context.v;
            alert('Network error. Please check your connection and try again.');
          case 9:
            _context.p = 9;
            setIsSubmitting(false);
            return _context.f(9);
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[5, 8, 9, 10]]);
    }));
    function handleSubmit(_x) {
      return _handleSubmit.apply(this, arguments);
    }
    return handleSubmit;
  }();
  var TermsModal = function TermsModal() {
    return /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col",
        children: [/*#__PURE__*/_jsx("div", {
          className: "p-6 border-b flex justify-between items-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/_jsx(FileText, {
              className: "w-6 h-6 text-[#1e40af]"
            }, void 0, false), /*#__PURE__*/_jsx("h2", {
              className: "text-lg font-bold text-gray-800",
              children: "Terms and Conditions"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return setShowTermsModal(false);
            },
            className: "p-2 hover:bg-gray-100 rounded-full",
            children: /*#__PURE__*/_jsx(X, {
              className: "w-5 h-5 text-gray-600"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "flex-1 overflow-y-auto p-6 text-sm text-gray-700 space-y-4",
          children: [/*#__PURE__*/_jsx("p", {
            children: "By registering, you agree to use this platform only for legitimate business purposes and comply with all company policies."
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            children: "You must maintain confidentiality of your credentials and not share access with unauthorized persons."
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            children: "All data on this platform is proprietary to the company. Unauthorized use or distribution is prohibited."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "p-6 border-t",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex items-center gap-3 mb-4",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              id: "acceptTermsModal",
              checked: acceptedTerms,
              onChange: function onChange(e) {
                return setAcceptedTerms(e.target.checked);
              },
              className: "w-4 h-4 text-[#1e40af]"
            }, void 0, false), /*#__PURE__*/_jsx("label", {
              htmlFor: "acceptTermsModal",
              className: "text-sm text-gray-700",
              children: "I have read and agree to the Terms and Conditions"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            className: "flex gap-3",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                return setShowTermsModal(false);
              },
              className: "flex-1 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2",
              children: [/*#__PURE__*/_jsx(X, {
                className: "w-4 h-4"
              }, void 0, false), " Close"]
            }, void 0, true), /*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                if (acceptedTerms) setShowTermsModal(false);else alert("Please check the box to accept.");
              },
              className: "flex-1 py-2 bg-[#1e40af] text-white rounded-xl font-medium hover:bg-[#1d4ed8] transition flex items-center justify-center gap-2",
              children: [/*#__PURE__*/_jsx(Check, {
                className: "w-4 h-4"
              }, void 0, false), " Accept & Continue"]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false);
  };
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
        className: "relative z-10 flex items-center gap-4",
        children: [/*#__PURE__*/_jsx("div", {
          className: "w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl",
          children: /*#__PURE__*/_jsx(TrendingUp, {
            className: "w-10 h-10 text-white"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-white font-bold text-3xl",
            children: "sarthiDB"
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "text-blue-200 text-sm",
            children: "Corporate Intelligence Platform"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "flex-1 flex items-center justify-center p-8 bg-[#f0f4ff]",
      children: /*#__PURE__*/_jsx("div", {
        className: "w-full max-w-md",
        children: /*#__PURE__*/_jsx("div", {
          className: "bg-white rounded-2xl shadow-xl border border-[rgba(30,64,175,0.1)] p-8",
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-[#0f172a] text-2xl font-bold mb-1",
            children: "Create Account"
          }, void 0, false), /*#__PURE__*/_jsx("p", {
            className: "text-[#4b5e9e] text-sm mb-6",
            children: "Fill in your details to register"
          }, void 0, false), /*#__PURE__*/_jsx("div", {
            className: "bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs px-3 py-2 rounded-xl mb-5",
            children: [/*#__PURE__*/_jsx("strong", {
              children: "Note:"
            }, void 0, false), " Your account will be sent to Administrator for approval."]
          }, void 0, true), /*#__PURE__*/_jsx("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [/*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Full Name *"
              }, void 0, false), /*#__PURE__*/_jsx("input", {
                type: "text",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                placeholder: "Enter your full name",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                required: true,
                disabled: isSubmitting
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Email Address *"
              }, void 0, false), /*#__PURE__*/_jsx("input", {
                type: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                placeholder: "you@company.com",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                required: true,
                disabled: isSubmitting
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Password *"
              }, void 0, false), /*#__PURE__*/_jsx("div", {
                className: "relative",
                children: [/*#__PURE__*/_jsx("input", {
                  type: showPassword ? "text" : "password",
                  name: "password",
                  value: formData.password,
                  onChange: handleChange,
                  placeholder: "Enter a strong password",
                  className: "w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                  required: true,
                  disabled: isSubmitting
                }, void 0, false), /*#__PURE__*/_jsx("button", {
                  type: "button",
                  onClick: function onClick() {
                    return setShowPassword(!showPassword);
                  },
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5e9e] hover:text-[#1e40af]",
                  children: showPassword ? /*#__PURE__*/_jsx(EyeOff, {
                    className: "w-4 h-4"
                  }, void 0, false) : /*#__PURE__*/_jsx(Eye, {
                    className: "w-4 h-4"
                  }, void 0, false)
                }, void 0, false)]
              }, void 0, true), formData.password && /*#__PURE__*/_jsx("ul", {
                className: "mt-2 space-y-1",
                children: [{
                  key: 'length',
                  label: 'At least 8 characters'
                }, {
                  key: 'uppercase',
                  label: 'One uppercase letter'
                }, {
                  key: 'lowercase',
                  label: 'One lowercase letter'
                }, {
                  key: 'number',
                  label: 'One number'
                }, {
                  key: 'special',
                  label: 'One special character'
                }].map(function (_ref) {
                  var key = _ref.key,
                    label = _ref.label;
                  return /*#__PURE__*/_jsx("li", {
                    className: "flex items-center gap-2 text-xs ".concat(passwordStrength[key] ? 'text-green-600' : 'text-gray-400'),
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "w-2 h-2 rounded-full ".concat(passwordStrength[key] ? 'bg-green-500' : 'bg-gray-300')
                    }, void 0, false), label]
                  }, key, true);
                })
              }, void 0, false), passwordError && /*#__PURE__*/_jsx("p", {
                className: "text-xs text-red-500 mt-1",
                children: passwordError
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Department *"
              }, void 0, false), /*#__PURE__*/_jsx("select", {
                name: "department",
                value: formData.department,
                onChange: handleChange,
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                required: true,
                disabled: isSubmitting,
                children: [/*#__PURE__*/_jsx("option", {
                  value: "",
                  children: "Select Department"
                }, void 0, false), /*#__PURE__*/_jsx("option", {
                  value: "Business Development",
                  children: "Business Development"
                }, void 0, false), /*#__PURE__*/_jsx("option", {
                  value: "Franchise",
                  children: "Franchise Development"
                }, void 0, false), /*#__PURE__*/_jsx("option", {
                  value: "Recruitment",
                  children: "Recruitment (Franchise)"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("label", {
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Phone Number *"
              }, void 0, false), /*#__PURE__*/_jsx("input", {
                type: "tel",
                name: "phone",
                value: formData.phone,
                onChange: handlePhoneChange,
                placeholder: "10-digit mobile number",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all",
                required: true,
                disabled: isSubmitting,
                maxLength: 10
              }, void 0, false), /*#__PURE__*/_jsx("p", {
                className: "text-xs text-gray-400 mt-1",
                children: "Enter 10-digit mobile number"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              className: "p-4 border border-[rgba(30,64,175,0.2)] rounded-xl bg-[#f8faff]",
              children: /*#__PURE__*/_jsx("div", {
                className: "flex items-start gap-3",
                children: [/*#__PURE__*/_jsx("input", {
                  type: "checkbox",
                  id: "acceptTerms",
                  checked: acceptedTerms,
                  onChange: function onChange(e) {
                    return setAcceptedTerms(e.target.checked);
                  },
                  className: "mt-1 w-4 h-4 text-[#1e40af]",
                  disabled: isSubmitting
                }, void 0, false), /*#__PURE__*/_jsx("label", {
                  htmlFor: "acceptTerms",
                  className: "text-xs text-gray-700",
                  children: ["I agree to the", ' ', /*#__PURE__*/_jsx("button", {
                    type: "button",
                    onClick: function onClick() {
                      return setShowTermsModal(true);
                    },
                    className: "text-[#1e40af] font-semibold hover:underline",
                    children: "Terms and Conditions"
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)
            }, void 0, false), /*#__PURE__*/_jsx("button", {
              type: "submit",
              disabled: isSubmitting || !!passwordError || !acceptedTerms,
              className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
              children: isSubmitting ? /*#__PURE__*/_jsx(_Fragment, {
                children: [/*#__PURE__*/_jsx(Loader2, {
                  className: "w-4 h-4 animate-spin"
                }, void 0, false), " Sending for Approval..."]
              }, void 0, true) : 'Register'
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("p", {
            className: "mt-6 text-center text-sm text-[#4b5e9e]",
            children: ["Already have an account?", ' ', /*#__PURE__*/_jsx(Link, {
              to: "/login",
              className: "text-[#1e40af] font-semibold hover:underline",
              children: "Sign in"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)
    }, void 0, false), showTermsModal && /*#__PURE__*/_jsx(TermsModal, {}), showPopup && /*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "bg-white p-6 rounded-2xl shadow-2xl max-w-sm text-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4",
          children: /*#__PURE__*/_jsx(CheckCircle, {
            className: "h-6 w-6 text-green-600"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsx("h3", {
          className: "text-lg font-bold text-gray-900 mb-2",
          children: "Request Sent!"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "text-sm text-gray-500 mb-5",
          children: "Your account has been sent for approval. You'll receive an email once approved."
        }, void 0, false), /*#__PURE__*/_jsx("button", {
          onClick: function onClick() {
            setShowPopup(false);
            navigate('/login');
          },
          className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition",
          children: "OK, Go to Login"
        }, void 0, false)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
};
export default Register;
export { Register };