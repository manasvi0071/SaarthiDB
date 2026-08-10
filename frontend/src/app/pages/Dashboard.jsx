import _react2 from "react";
import * as _lucideReact from "lucide-react";
import * as _recharts from "recharts";
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var kpiData = [{
  title: "Total Companies",
  value: "1,234",
  change: "+12.5%",
  trend: "up",
  icon: _lucideReact.Building2,
  color: "bg-blue-500"
}, {
  title: "Active Prospects",
  value: "456",
  change: "+8.2%",
  trend: "up",
  icon: _lucideReact.TrendingUp,
  color: "bg-green-500"
}, {
  title: "Hiring Companies",
  value: "89",
  change: "+23.1%",
  trend: "up",
  icon: _lucideReact.Briefcase,
  color: "bg-purple-500"
}, {
  title: "Total HR Contacts",
  value: "2,567",
  change: "-3.2%",
  trend: "down",
  icon: _lucideReact.Users,
  color: "bg-orange-500"
}];
var industryData = [{
  name: "Technology",
  value: 342,
  color: "#3b82f6"
}, {
  name: "Finance",
  value: 234,
  color: "#8b5cf6"
}, {
  name: "Healthcare",
  value: 198,
  color: "#10b981"
}, {
  name: "Manufacturing",
  value: 167,
  color: "#f59e0b"
}, {
  name: "Retail",
  value: 145,
  color: "#ef4444"
}, {
  name: "Other",
  value: 148,
  color: "#6b7280"
}];
var cityData = [{
  city: "Mumbai",
  companies: 345
}, {
  city: "Bangalore",
  companies: 298
}, {
  city: "Delhi",
  companies: 267
}, {
  city: "Pune",
  companies: 189
}, {
  city: "Hyderabad",
  companies: 156
}, {
  city: "Chennai",
  companies: 134
}];
var hiringTrendData = [{
  month: "Jan",
  companies: 45
}, {
  month: "Feb",
  companies: 52
}, {
  month: "Mar",
  companies: 48
}, {
  month: "Apr",
  companies: 61
}, {
  month: "May",
  companies: 73
}, {
  month: "Jun",
  companies: 89
}];
var recentActivity = [{
  company: "TechCorp Solutions",
  action: "Added to prospects",
  time: "2 hours ago",
  status: "new"
}, {
  company: "Global Finance Ltd",
  action: "Contact updated",
  time: "5 hours ago",
  status: "updated"
}, {
  company: "HealthCare Innovations",
  action: "Started hiring",
  time: "1 day ago",
  status: "hiring"
}, {
  company: "Manufacturing Pro",
  action: "Meeting scheduled",
  time: "1 day ago",
  status: "meeting"
}, {
  company: "Retail Giant Inc",
  action: "Proposal sent",
  time: "2 days ago",
  status: "proposal"
}];
var aiSummary = [{
  title: "Strong growth",
  description: "Healthcare sector showing increasing opportunities"
}, {
  title: "Expansion",
  description: "Company presence increasing in Maharashtra"
}, {
  title: "Competition",
  description: "Medium competition risk detected"
}, {
  title: "Recommendation",
  description: "Good candidate for partnership outreach"
}];
var industryBenchmark = {
  employeeGrowth: "+15%",
  industryAverage: "+8%",
  performance: "Above Average"
};
var trendData = [{
  industry: "AI",
  reason: "High hiring growth and market demand"
}, {
  industry: "Cybersecurity",
  reason: "Increasing enterprise security spending"
}, {
  industry: "FinTech",
  reason: "Strong investment and digital adoption"
}];
export function Dashboard() {
  return _react2.createElement("div", {
    className: "space-y-8"
  }, _react2.createElement("div", null, _react2.createElement("h1", {
    className: "mb-2"
  }, "Dashboard"), _react2.createElement("p", {
    className: "text-muted-foreground"
  }, "Welcome back! Here's your business overview.")), _react2.createElement("div", {
    className: "grid grid-cols-4 gap-6"
  }, kpiData.map(function (kpi) {
    return _react2.createElement("div", {
      key: kpi.title,
      className: "bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
    }, _react2.createElement("div", {
      className: "flex items-start justify-between mb-4"
    }, _react2.createElement("div", {
      className: kpi.color + " w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-10"
    }, _react2.createElement(kpi.icon, {
      className: "w-6 h-6 " + kpi.color.replace('bg-', 'text-')
    })), kpi.trend === "up" ? _react2.createElement("span", {
      className: "flex items-center gap-1 text-sm text-green-600 font-medium"
    }, _react2.createElement(_lucideReact.ArrowUpRight, {
      className: "w-4 h-4"
    }), kpi.change) : _react2.createElement("span", {
      className: "flex items-center gap-1 text-sm text-red-600 font-medium"
    }, _react2.createElement(_lucideReact.ArrowDownRight, {
      className: "w-4 h-4"
    }), kpi.change)), _react2.createElement("h3", {
      className: "text-3xl font-bold mb-1"
    }, kpi.value), _react2.createElement("p", {
      className: "text-sm text-muted-foreground"
    }, kpi.title));
  })), _react2.createElement("div", {
    className: "grid grid-cols-2 gap-6"
  }, _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "mb-6 font-semibold text-xl"
  }, "Companies by Industry"), _react2.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 280
  }, _react2.createElement(_recharts.PieChart, null, _react2.createElement(_recharts.Pie, {
    data: industryData,
    cx: "50%",
    cy: "50%",
    labelLine: false,
    label: function label(_ref) {
      var name = _ref.name;
      var percent = _ref.percent;
      return name + " " + (percent * 100).toFixed(0) + "%";
    },
    outerRadius: 90,
    fill: "#8884d8",
    dataKey: "value"
  }, industryData.map(function (entry, index) {
    return _react2.createElement(_recharts.Cell, {
      key: "cell-" + index,
      fill: entry.color
    });
  })), _react2.createElement(_recharts.Tooltip, null)))), _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "mb-6 font-semibold text-xl"
  }, "Companies by City"), _react2.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 280
  }, _react2.createElement(_recharts.BarChart, {
    data: cityData
  }, _react2.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#e2e8f0"
  }), _react2.createElement(_recharts.XAxis, {
    dataKey: "city",
    tick: {
      fontSize: 12
    }
  }), _react2.createElement(_recharts.YAxis, {
    tick: {
      fontSize: 12
    }
  }), _react2.createElement(_recharts.Tooltip, null), _react2.createElement(_recharts.Bar, {
    dataKey: "companies",
    fill: "#1e40af",
    radius: [8, 8, 0, 0]
  }))))), _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "mb-6 font-semibold text-xl"
  }, "Hiring Activity Trend"), _react2.createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: 300
  }, _react2.createElement(_recharts.LineChart, {
    data: hiringTrendData
  }, _react2.createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#e2e8f0"
  }), _react2.createElement(_recharts.XAxis, {
    dataKey: "month",
    tick: {
      fontSize: 12
    }
  }), _react2.createElement(_recharts.YAxis, {
    tick: {
      fontSize: 12
    }
  }), _react2.createElement(_recharts.Tooltip, null), _react2.createElement(_recharts.Legend, null), _react2.createElement(_recharts.Line, {
    type: "monotone",
    dataKey: "companies",
    stroke: "#1e40af",
    strokeWidth: 3,
    dot: {
      fill: '#1e40af',
      r: 6
    },
    name: "Hiring Companies"
  })))), _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("div", {
    className: "mb-6"
  }, _react2.createElement("h3", {
    className: "text-xl font-semibold"
  }, "AI Executive Summary"), _react2.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Auto-generated business insights")), _react2.createElement("div", {
    className: "space-y-4"
  }, aiSummary.map(function (item, index) {
    return _react2.createElement("div", {
      key: index,
      className: "p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
    }, _react2.createElement("div", {
      className: "flex gap-3"
    }, _react2.createElement("span", null, "✨"), _react2.createElement("div", null, _react2.createElement("p", {
      className: "font-medium"
    }, item.title), _react2.createElement("p", {
      className: "text-sm text-muted-foreground"
    }, item.description))));
  }))), _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "text-xl font-semibold mb-6"
  }, "📊 Industry Benchmarking"), _react2.createElement("div", {
    className: "space-y-5"
  }, _react2.createElement("div", {
    className: "flex justify-between"
  }, _react2.createElement("span", {
    className: "text-muted-foreground"
  }, "Employee Growth"), _react2.createElement("span", {
    className: "font-semibold text-green-600"
  }, industryBenchmark.employeeGrowth)), _react2.createElement("div", {
    className: "flex justify-between"
  }, _react2.createElement("span", {
    className: "text-muted-foreground"
  }, "Industry Average"), _react2.createElement("span", {
    className: "font-semibold"
  }, industryBenchmark.industryAverage)), _react2.createElement("div", {
    className: "border-t pt-5"
  }, _react2.createElement("div", {
    className: "flex justify-between items-center"
  }, _react2.createElement("span", {
    className: "text-muted-foreground"
  }, "Performance"), _react2.createElement("span", {
    className: "px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium"
  }, industryBenchmark.performance))))), _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "text-xl font-semibold mb-6"
  }, "📈 Trend Detection"), _react2.createElement("p", {
    className: "text-sm text-muted-foreground mb-5"
  }, "AI identifies emerging industries"), _react2.createElement("div", {
    className: "space-y-4"
  }, trendData.map(function (trend, index) {
    return _react2.createElement("div", {
      key: index,
      className: "p-4 rounded-xl bg-muted/50"
    }, _react2.createElement("div", {
      className: "flex justify-between mb-2"
    }, _react2.createElement("span", {
      className: "font-medium"
    }, index + 1, ". ", trend.industry), _react2.createElement("span", {
      className: "text-green-600"
    }, "↑ Trending")), _react2.createElement("p", {
      className: "text-sm text-muted-foreground"
    }, trend.reason));
  }))), _react2.createElement("div", {
    className: "grid grid-cols-3 gap-6"
  }, _react2.createElement("div", {
    className: "col-span-2 bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "mb-6 font-semibold text-xl"
  }, "Recent Activity"), _react2.createElement("div", {
    className: "space-y-4"
  }, recentActivity.map(function (activity, index) {
    return _react2.createElement("div", {
      key: index,
      className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
    }, _react2.createElement("div", {
      className: "flex items-center gap-3 flex-1"
    }, activity.status === "new" && _react2.createElement(_lucideReact.UserPlus, {
      className: "w-5 h-5 text-blue-600"
    }), activity.status === "updated" && _react2.createElement(_lucideReact.FileText, {
      className: "w-5 h-5 text-purple-600"
    }), activity.status === "hiring" && _react2.createElement(_lucideReact.Building, {
      className: "w-5 h-5 text-green-600"
    }), activity.status === "meeting" && _react2.createElement(_lucideReact.Calendar, {
      className: "w-5 h-5 text-orange-600"
    }), activity.status === "proposal" && _react2.createElement(_lucideReact.Clock, {
      className: "w-5 h-5 text-gray-600"
    }), _react2.createElement("div", null, _react2.createElement("p", {
      className: "font-medium"
    }, activity.company), _react2.createElement("p", {
      className: "text-sm text-muted-foreground"
    }, activity.action))), _react2.createElement("div", {
      className: "flex items-center gap-4"
    }, _react2.createElement("span", {
      className: "text-sm text-muted-foreground"
    }, activity.time), _react2.createElement("span", {
      className: "px-3 py-1 rounded-lg text-xs font-medium " + (activity.status === 'new' ? 'bg-blue-100 text-blue-700' : activity.status === 'hiring' ? 'bg-green-100 text-green-700' : activity.status === 'updated' ? 'bg-purple-100 text-purple-700' : activity.status === 'meeting' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700')
    }, activity.status)));
  }))), _react2.createElement("div", {
    className: "bg-card rounded-xl p-6 border border-border shadow-sm"
  }, _react2.createElement("h3", {
    className: "mb-6 font-semibold text-xl"
  }, "Quick Actions"), _react2.createElement("div", {
    className: "space-y-3"
  }, _react2.createElement("button", {
    className: "w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
  }, "Add New Company"), _react2.createElement("button", {
    className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors"
  }, "Import Contacts"), _react2.createElement("button", {
    className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors"
  }, "Generate Report"), _react2.createElement("button", {
    className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors"
  }, "Export Data"), _react2.createElement("button", {
    className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors"
  }, "Upload Data")), _react2.createElement("div", {
    className: "mt-6 p-4 bg-accent rounded-xl"
  }, _react2.createElement("p", {
    className: "text-sm font-medium text-accent-foreground mb-1"
  }, "Pro Tip"), _react2.createElement("p", {
    className: "text-xs text-muted-foreground"
  }, "Use filters in the Companies page to quickly find hiring companies in your target industry.")))));
}

/* KPI Cards */ /* Charts Row */ /* Industry Distribution */ /* Cities Distribution */ /* Hiring Trend */ /* AI Executive Summary */ /* Industry Benchmarking */ /* Trend Detection */ /* Recent Activity & Quick Actions */ /* Recent Activity */ /* Quick Actions */