import _react2 from "react";
import * as _react from "react";
var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
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
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
}();
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
var AuthContext = _react.createContext(null);
export function AuthProvider(_ref) {
  var children = _ref.children;
  var _useState = _react.useState(function () {
    var token = localStorage.getItem('token');
    var userName = localStorage.getItem('userName');
    var userEmail = localStorage.getItem('userEmail');
    if (token && userEmail) {
      return {
        name: userName,
        email: userEmail,
        token: token
      };
    }
    return null;
  });
  var _useState2 = _slicedToArray(_useState, 2);
  var user = _useState2[0];
  var setUser = _useState2[1];
  var login = function login(userData) {
    setUser(userData);
  };
  var logout = function logout() {
    localStorage.clear();
    setUser(null);
  };
  return _react2.createElement(AuthContext.Provider, {
    value: {
      user: user,
      login: login,
      logout: logout
    }
  }, children);
}
export function useAuth() {
  var ctx = _react.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}