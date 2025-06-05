import { Menu, X, Search, Bell, User, ChevronDown } from "lucide-react";

export const Header = ({ setSidebarOpen, isSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Left side - Mobile menu button and Logo */}
      <div className="flex items-center space-x-4">
        {/* Mobile hamburger menu */}
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>

        {/* Mobile logo - only show when sidebar is closed */}
        <div className="md:hidden flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-lg text-gray-800">
            <span className="text-blue-500">Pharma</span>System
          </span>
        </div>

        {/* Page title for larger screens */}
        <div className="hidden md:block">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
      </div>

      {/* Right side - User actions */}
      <div className="flex items-center space-x-4">
        {/* Search bar - hidden on mobile */}
        <div className="hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-300 transition-colors relative">
          <Bell className="w-6 h-6 text-gray-600" />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* User profile dropdown */}
        <div className="relative">
          <button className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-200 transition-colors">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              Admin
            </span>
            <ChevronDown className="hidden md:block w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};