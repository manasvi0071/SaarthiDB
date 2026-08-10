import _react2 from "react";
import * as _react from "react";
import * as _lucideReact from "lucide-react";
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
        if (!_n && _i["return"]) _i["return"]();
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
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var usersData = [{
  id: 1,
  name: "John Doe",
  email: "john.doe@corp.com",
  role: "Admin",
  status: "Active",
  lastActive: "2 hours ago",
  companies: 234,
  avatar: "JD"
}, {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@corp.com",
  role: "Manager",
  status: "Active",
  lastActive: "5 hours ago",
  companies: 189,
  avatar: "JS"
}, {
  id: 3,
  name: "Mike Johnson",
  email: "mike.johnson@corp.com",
  role: "Sales Rep",
  status: "Active",
  lastActive: "1 day ago",
  companies: 145,
  avatar: "MJ"
}, {
  id: 4,
  name: "Sarah Williams",
  email: "sarah.williams@corp.com",
  role: "Sales Rep",
  status: "Active",
  lastActive: "3 hours ago",
  companies: 167,
  avatar: "SW"
}, {
  id: 5,
  name: "David Brown",
  email: "david.brown@corp.com",
  role: "Analyst",
  status: "Inactive",
  lastActive: "2 weeks ago",
  companies: 78,
  avatar: "DB"
}];
export function Users() {
  var _useState = _react.useState("");
  var _useState2 = _slicedToArray(_useState, 2);
  var searchTerm = _useState2[0];
  var setSearchTerm = _useState2[1];
  var _useState3 = _react.useState("all");
  var _useState32 = _slicedToArray(_useState3, 2);
  var selectedRole = _useState32[0];
  var setSelectedRole = _useState32[1];
  var filteredUsers = usersData.filter(function (user) {
    var matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });
  return /*#__PURE__*/_jsx("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsx("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsx("div", {
        children: [/*#__PURE__*/_jsx("h1", {
          className: "mb-2",
          children: "User Management"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "text-muted-foreground",
          children: "Manage team members and permissions"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("button", {
        className: "flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
        children: [/*#__PURE__*/_jsx(_lucideReact.Plus, {
          className: "w-5 h-5"
        }, void 0, false), "Add User"]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: /*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex-1 relative",
          children: [/*#__PURE__*/_jsx(_lucideReact.Search, {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
          }, void 0, false), /*#__PURE__*/_jsx("input", {
            type: "text",
            placeholder: "Search users by name or email...",
            value: searchTerm,
            onChange: function onChange(e) {
              return setSearchTerm(e.target.value);
            },
            className: "w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("select", {
          value: selectedRole,
          onChange: function onChange(e) {
            return setSelectedRole(e.target.value);
          },
          className: "px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
          children: [/*#__PURE__*/_jsx("option", {
            value: "all",
            children: "All Roles"
          }, void 0, false), /*#__PURE__*/_jsx("option", {
            value: "Admin",
            children: "Admin"
          }, void 0, false), /*#__PURE__*/_jsx("option", {
            value: "Manager",
            children: "Manager"
          }, void 0, false), /*#__PURE__*/_jsx("option", {
            value: "Sales Rep",
            children: "Sales Rep"
          }, void 0, false), /*#__PURE__*/_jsx("option", {
            value: "Analyst",
            children: "Analyst"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsx("div", {
      className: "grid grid-cols-2 gap-6",
      children: filteredUsers.map(function (user) {
        return /*#__PURE__*/_jsx("div", {
          className: "bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow",
          children: [/*#__PURE__*/_jsx("div", {
            className: "flex items-start justify-between mb-4",
            children: [/*#__PURE__*/_jsx("div", {
              className: "flex items-center gap-4",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-xl",
                children: user.avatar
              }, void 0, false), /*#__PURE__*/_jsx("div", {
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "mb-1",
                  children: user.name
                }, void 0, false), /*#__PURE__*/_jsx("div", {
                  className: "flex items-center gap-2 text-sm text-muted-foreground mb-2",
                  children: [/*#__PURE__*/_jsx(_lucideReact.Mail, {
                    className: "w-4 h-4"
                  }, void 0, false), user.email]
                }, void 0, true), /*#__PURE__*/_jsx("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "px-3 py-1 rounded-lg text-xs font-medium " + (user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : user.role === 'Manager' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'),
                    children: [/*#__PURE__*/_jsx(_lucideReact.Shield, {
                      className: "w-3 h-3 inline mr-1"
                    }, void 0, false), user.role]
                  }, void 0, true), /*#__PURE__*/_jsx("span", {
                    className: "px-3 py-1 rounded-lg text-xs font-medium " + (user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'),
                    children: user.status
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsx("button", {
              className: "p-2 hover:bg-muted rounded-lg transition-colors",
              children: /*#__PURE__*/_jsx(_lucideReact.MoreVertical, {
                className: "w-5 h-5 text-muted-foreground"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            className: "grid grid-cols-2 gap-4 pt-4 border-t border-border",
            children: [/*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground mb-1",
                children: "Companies Managed"
              }, void 0, false), /*#__PURE__*/_jsx("p", {
                className: "font-semibold",
                children: user.companies
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("div", {
              children: [/*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground mb-1",
                children: "Last Active"
              }, void 0, false), /*#__PURE__*/_jsx("p", {
                className: "font-semibold",
                children: user.lastActive
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            className: "flex items-center gap-2 mt-4",
            children: [/*#__PURE__*/_jsx("button", {
              className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm",
              children: [/*#__PURE__*/_jsx(_lucideReact.Edit2, {
                className: "w-4 h-4 inline mr-2"
              }, void 0, false), "Edit"]
            }, void 0, true), /*#__PURE__*/_jsx("button", {
              className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors text-sm",
              children: /*#__PURE__*/_jsx(_lucideReact.Trash2, {
                className: "w-4 h-4 inline"
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, user.id, true);
      })
    }, void 0, false), /*#__PURE__*/_jsx("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "mb-6",
        children: "Role Permissions"
      }, void 0, false), /*#__PURE__*/_jsx("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/_jsx("table", {
          className: "w-full",
          children: [/*#__PURE__*/_jsx("thead", {
            className: "bg-muted/50 border-b border-border",
            children: /*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("th", {
                className: "px-4 py-3 text-left font-medium",
                children: "Permission"
              }, void 0, false), /*#__PURE__*/_jsx("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Admin"
              }, void 0, false), /*#__PURE__*/_jsx("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Manager"
              }, void 0, false), /*#__PURE__*/_jsx("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Sales Rep"
              }, void 0, false), /*#__PURE__*/_jsx("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Analyst"
              }, void 0, false)]
            }, void 0, true)
          }, void 0, false), /*#__PURE__*/_jsx("tbody", {
            className: "divide-y divide-border",
            children: [/*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                className: "px-4 py-3",
                children: "View Companies"
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                className: "px-4 py-3",
                children: "Add/Edit Companies"
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                className: "px-4 py-3",
                children: "Delete Companies"
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                className: "px-4 py-3",
                children: "View Reports"
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                className: "px-4 py-3",
                children: "Manage Users"
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("tr", {
              children: [/*#__PURE__*/_jsx("td", {
                className: "px-4 py-3",
                children: "System Settings"
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsx("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsx("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}