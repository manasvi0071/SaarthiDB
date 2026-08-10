import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Companies } from "./pages/Companies";
import { AddCompany } from "./pages/AddCompany";
import { CompanyDetail } from "./pages/CompanyDetail";
import { Contacts } from "./pages/Contacts";
import { Database } from "./pages/Database";
import { Reports } from "./pages/Reports";
import { Marketing } from "./pages/Marketing";
import { Analytics } from "./pages/Analytics";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";
import { Security } from "./pages/Security";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import { useAuth } from "./context/AuthContext";
function RequireAuth(_ref) {
  var children = _ref.children;
  var _useAuth = useAuth(),
    user = _useAuth.user;
  if (!user) return /*#__PURE__*/_jsx(Navigate, {
    to: "/login",
    replace: true
  }, void 0, false);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: children
  }, void 0, false);
}
function PublicOnly(_ref2) {
  var children = _ref2.children;
  var _useAuth2 = useAuth(),
    user = _useAuth2.user;
  if (user) return /*#__PURE__*/_jsx(Navigate, {
    to: "/",
    replace: true
  }, void 0, false);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: children
  }, void 0, false);
}
export var router = createBrowserRouter([{
  path: "/login",
  element: /*#__PURE__*/_jsx(PublicOnly, {
    children: /*#__PURE__*/_jsx(Login, {})
  }, void 0, false)
}, {
  path: "/register",
  element: /*#__PURE__*/_jsx(PublicOnly, {
    children: /*#__PURE__*/_jsx(Register, {})
  }, void 0, false)
}, {
  path: "/forgot-password",
  element: /*#__PURE__*/_jsx(PublicOnly, {
    children: /*#__PURE__*/_jsx(ForgotPassword, {})
  }, void 0, false)
}, {
  path: "/reset-password/:token",
  element: /*#__PURE__*/_jsx(PublicOnly, {
    children: /*#__PURE__*/_jsx(ResetPassword, {})
  }, void 0, false)
}, {
  path: "/",
  element: /*#__PURE__*/_jsx(RequireAuth, {
    children: /*#__PURE__*/_jsx(Layout, {})
  }, void 0, false),
  children: [{
    index: true,
    Component: Dashboard
  }, {
    path: "companies",
    Component: Companies
  }, {
    path: "companies/add",
    Component: AddCompany
  }, {
    path: "companies/:id",
    Component: CompanyDetail
  }, {
    path: "contacts",
    Component: Contacts
  }, {
    path: "database",
    Component: Database
  }, {
    path: "reports",
    Component: Reports
  }, {
    path: "marketing",
    Component: Marketing
  }, {
    path: "analytics",
    Component: Analytics
  }, {
    path: "users",
    Component: Users
  }, {
    path: "settings",
    Component: Settings
  }, {
    path: "security",
    Component: Security
  }, {
    path: "account",
    Component: Account
  }]
}, {
  path: "/admin",
  element: /*#__PURE__*/_jsx(Navigate, {
    to: "/",
    replace: true
  }, void 0, false)
}, {
  path: "*",
  element: /*#__PURE__*/_jsx(Navigate, {
    to: "/login",
    replace: true
  }, void 0, false)
}]);