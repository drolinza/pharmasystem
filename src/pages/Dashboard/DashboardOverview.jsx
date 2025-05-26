import { 
  Users, 
  Clock, 
  CheckCircle, 
  UserPlus, 
  FlaskConical, 
  BarChart3, 
  Settings,
  TrendingUp,
  TrendingDown,
  User
} from "lucide-react";

export const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Users",
      value: 128,
      change: "+12%",
      changeType: "increase",
      bg: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      icon: Users,
    },
    {
      title: "Pending Lab Request",
      value: 42,
      change: "+8%",
      changeType: "increase",
      bg: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
      icon: Clock,
    },
    {
      title: "Completed Labs",
      value: 87,
      change: "-5%",
      changeType: "decrease",
      bg: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      icon: CheckCircle,
    },
  ];

  const quickActions = [
    {
      title: "Add New User",
      description: "Create a new user account",
      icon: UserPlus,
      color: "hover:border-blue-300 hover:bg-blue-50",
    },
    {
      title: "New Lab Request",
      description: "Submit a lab request",
      icon: FlaskConical,
      color: "hover:border-green-300 hover:bg-green-50",
    },
    {
      title: "View Reports",
      description: "Access detailed reports",
      icon: BarChart3,
      color: "hover:border-purple-300 hover:bg-purple-50",
    },
    {
      title: "Settings",
      description: "Configure system settings",
      icon: Settings,
      color: "hover:border-gray-300 hover:bg-gray-50",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Welcome section */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Welcome to <span className="text-blue-500">Pharma</span>System
          <span className="ml-2">✨</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Here's your overview, analytics, and management tools.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} ${stat.borderColor} rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className={`text-xs sm:text-sm font-semibold ${stat.textColor} uppercase tracking-wide`}>
                  {stat.title}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                  {stat.value.toLocaleString()}
                </p>
                <div className="flex items-center mt-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      stat.changeType === "increase"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {stat.changeType === "increase" ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {stat.change}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <stat.icon className="w-8 h-8 text-gray-400 ml-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Quick Actions
          </h2>
          <div className="text-sm text-gray-500">
            Click to get started
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`p-4 sm:p-6 text-left rounded-xl border-2 border-gray-200 ${action.color} transition-all duration-300 transform hover:scale-105 hover:shadow-md group`}
            >
              <action.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                {action.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {action.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[
            { action: "New user registration", user: "John Doe", time: "2 hours ago", type: "user", icon: User },
            { action: "Lab request submitted", user: "Jane Smith", time: "4 hours ago", type: "lab", icon: FlaskConical },
            { action: "Report generated", user: "Admin", time: "6 hours ago", type: "report", icon: BarChart3 },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'user' ? 'bg-blue-100' : 
                  activity.type === 'lab' ? 'bg-yellow-100' : 'bg-green-100'
                }`}>
                  <activity.icon className={`w-4 h-4 ${
                    activity.type === 'user' ? 'text-blue-600' : 
                    activity.type === 'lab' ? 'text-yellow-600' : 'text-green-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};