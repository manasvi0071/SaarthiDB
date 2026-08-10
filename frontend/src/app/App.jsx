import _react2 from "react";
import * as _reactRouter from "react-router";
import * as _routes from "./routes";
import * as _contextAuthContext from "./context/AuthContext";
import * as _contextThemeContext from "./context/ThemeContext";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function App() {
  return /*#__PURE__*/_jsx(_contextThemeContext.ThemeProvider, {
    children: /*#__PURE__*/_jsx(_contextAuthContext.AuthProvider, {
      children: /*#__PURE__*/_jsx(_reactRouter.RouterProvider, {
        router: _routes.router
      }, void 0, false)
    }, void 0, false)
  }, void 0, false);
}
export default App;