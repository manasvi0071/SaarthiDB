import _react2 from "react";
import * as _react from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
var ThemeContext = /*#__PURE__*/_react.createContext(undefined);
export function ThemeProvider(_ref) {
  var children = _ref.children;
  var _useState = _react.useState(function () {
    var saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  var _useState2 = _slicedToArray(_useState, 2);
  var darkMode = _useState2[0];
  var setDarkMode = _useState2[1];
  _react.useEffect(function () {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  var toggleDarkMode = function toggleDarkMode() {
    return setDarkMode(function (prev) {
      return !prev;
    });
  };
  return /*#__PURE__*/_jsx(ThemeContext.Provider, {
    value: {
      darkMode: darkMode,
      toggleDarkMode: toggleDarkMode
    },
    children: children
  }, void 0, false);
}
export function useTheme() {
  var context = _react.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}