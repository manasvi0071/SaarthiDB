import _react2 from "react";
import * as _react from "react";
import * as _reactRouter from "react-router";
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
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
export function AddCompany() {
  var navigate = _reactRouter.useNavigate();
  var _useState = _react.useState({
    companyName: "",
    industry: "",
    city: "",
    address: "",
    pincode: "",
    state: "",
    gst: "",
    cin: "",
    website: "",
    employees: "",
    phone: "",
    email: "",
    hrName: "",
    hrEmail: "",
    hrPhone: "",
    hrLinkedIn: "",
    rating: "B",
    status: "Prospect",
    notes: ""
  });
  var _useState2 = _slicedToArray(_useState, 2);
  var formData = _useState2[0];
  var setFormData = _useState2[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/companies");
  };
  var handleChange = function handleChange(e) {
    setFormData(_extends({}, formData, _defineProperty({}, e.target.name, e.target.value)));
  };
  return /*#__PURE__*/_jsx("div", {
    className: "max-w-5xl",
    children: [/*#__PURE__*/_jsx("div", {
      className: "flex items-center justify-between mb-6",
      children: [/*#__PURE__*/_jsx("div", {
        children: [/*#__PURE__*/_jsx("h1", {
          className: "mb-2",
          children: "Add New Company"
        }, void 0, false), /*#__PURE__*/_jsx("p", {
          className: "text-muted-foreground",
          children: "Fill in the company details and contact information"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsx("button", {
        onClick: function onClick() {
          return navigate("/companies");
        },
        className: "flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
        children: [/*#__PURE__*/_jsx(_lucideReact.X, {
          className: "w-5 h-5"
        }, void 0, false), "Cancel"]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsx("form", {
      onSubmit: handleSubmit,
      className: "space-y-6",
      children: [/*#__PURE__*/_jsx("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center gap-3 mb-6",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/_jsx(_lucideReact.Building2, {
              className: "w-5 h-5 text-primary"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsx("h3", {
            children: "Company Information"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "companyName",
              className: "block mb-2",
              children: ["Company Name ", /*#__PURE__*/_jsx("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "companyName",
              name: "companyName",
              value: formData.companyName,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter company name"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "industry",
              className: "block mb-2",
              children: ["Industry ", /*#__PURE__*/_jsx("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("select", {
              id: "industry",
              name: "industry",
              value: formData.industry,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsx("option", {
                value: "",
                children: "Select industry"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Technology",
                children: "Technology"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Finance",
                children: "Finance"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Healthcare",
                children: "Healthcare"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Manufacturing",
                children: "Manufacturing"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Retail",
                children: "Retail"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Education",
                children: "Education"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Construction",
                children: "Construction"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "F&B",
                children: "Food & Beverage"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "city",
              className: "block mb-2",
              children: ["City ", /*#__PURE__*/_jsx("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "city",
              name: "city",
              value: formData.city,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter city"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "state",
              className: "block mb-2",
              children: ["State ", /*#__PURE__*/_jsx("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "state",
              name: "state",
              value: formData.state,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter state"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "address",
              className: "block mb-2",
              children: "Address"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "address",
              name: "address",
              value: formData.address,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter full address"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "pincode",
              className: "block mb-2",
              children: "Pincode"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "pincode",
              name: "pincode",
              value: formData.pincode,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter pincode"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "employees",
              className: "block mb-2",
              children: "Employee Strength"
            }, void 0, false), /*#__PURE__*/_jsx("select", {
              id: "employees",
              name: "employees",
              value: formData.employees,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsx("option", {
                value: "",
                children: "Select range"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "1-50",
                children: "1-50"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "51-100",
                children: "51-100"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "101-500",
                children: "101-500"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "501-1000",
                children: "501-1000"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "1001-5000",
                children: "1001-5000"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "5000+",
                children: "5000+"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "mb-6",
          children: "GST & CIN Details"
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "gst",
              className: "block mb-2",
              children: "GST Number"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "gst",
              name: "gst",
              value: formData.gst,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "27AABCT1234F1Z5"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "cin",
              className: "block mb-2",
              children: "CIN Number"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "cin",
              name: "cin",
              value: formData.cin,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "U12345MH2020PTC123456"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "mb-6",
          children: "Contact Information"
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "phone",
              className: "block mb-2",
              children: "Phone Number"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "tel",
              id: "phone",
              name: "phone",
              value: formData.phone,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "+91 98765 43210"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "email",
              className: "block mb-2",
              children: "Email Address"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "email",
              id: "email",
              name: "email",
              value: formData.email,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "contact@company.com"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "website",
              className: "block mb-2",
              children: "Website"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "url",
              id: "website",
              name: "website",
              value: formData.website,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "https://www.company.com"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "mb-6",
          children: "HR Contact Details"
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "hrName",
              className: "block mb-2",
              children: "HR Name"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "hrName",
              name: "hrName",
              value: formData.hrName,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter HR contact name"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "hrEmail",
              className: "block mb-2",
              children: "HR Email"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "email",
              id: "hrEmail",
              name: "hrEmail",
              value: formData.hrEmail,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "hr@company.com"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "hrPhone",
              className: "block mb-2",
              children: "HR Phone"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "tel",
              id: "hrPhone",
              name: "hrPhone",
              value: formData.hrPhone,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "+91 98765 43210"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "hrLinkedIn",
              className: "block mb-2",
              children: "HR LinkedIn"
            }, void 0, false), /*#__PURE__*/_jsx("input", {
              type: "url",
              id: "hrLinkedIn",
              name: "hrLinkedIn",
              value: formData.hrLinkedIn,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "https://linkedin.com/in/..."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsx("h3", {
          className: "mb-6",
          children: "Prospect Information"
        }, void 0, false), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "rating",
              className: "block mb-2",
              children: "Prospect Rating"
            }, void 0, false), /*#__PURE__*/_jsx("select", {
              id: "rating",
              name: "rating",
              value: formData.rating,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsx("option", {
                value: "A+",
                children: "A+ (Top Priority)"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "A",
                children: "A (High Priority)"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "B+",
                children: "B+ (Medium-High)"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "B",
                children: "B (Medium)"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "C",
                children: "C (Low Priority)"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "status",
              className: "block mb-2",
              children: "Status"
            }, void 0, false), /*#__PURE__*/_jsx("select", {
              id: "status",
              name: "status",
              value: formData.status,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsx("option", {
                value: "Prospect",
                children: "Prospect"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Active",
                children: "Active"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Hiring",
                children: "Hiring"
              }, void 0, false), /*#__PURE__*/_jsx("option", {
                value: "Inactive",
                children: "Inactive"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsx("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "notes",
              className: "block mb-2",
              children: "Notes"
            }, void 0, false), /*#__PURE__*/_jsx("textarea", {
              id: "notes",
              name: "notes",
              value: formData.notes,
              onChange: handleChange,
              rows: 4,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none",
              placeholder: "Add any additional notes or comments..."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsx("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/_jsx("button", {
          type: "submit",
          className: "flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
          children: [/*#__PURE__*/_jsx(_lucideReact.Save, {
            className: "w-5 h-5"
          }, void 0, false), "Save Company"]
        }, void 0, true), /*#__PURE__*/_jsx("button", {
          type: "button",
          onClick: function onClick() {
            return navigate("/companies");
          },
          className: "px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
          children: "Cancel"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}