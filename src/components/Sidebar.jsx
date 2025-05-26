import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  FlaskConical,
  ChevronLeft,
  User,
} from "lucide-react";

export const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
  isCollapsed,
  setIsCollapsed,
}) => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard",
      icon: BarChart3,
      label: "Overview",
    },
    {
      path: "/dashboard/users",
      icon: Users,
      label: "Users",
    },
    {
      path: "/dashboard/lab",
      icon: FlaskConical,
      label: "Laboratory",
    },
  ];

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out 
          ${isSidebarOpen ? 
            isCollapsed ? 
               'w-16 translate-x-0' 
              : 'w-64 translate-x-0' 
              : 'w-64 -translate-x-full'
            }
            md:translate-x-0
            `}
      >
        {/* Logo section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-gray-800">
                <span className="text-blue-400">Pharma</span>
                <span className="text-gray-600">System</span>
              </span>
            </div>
          )}

          {isCollapsed && (
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">P</span>
            </div>
          )}

          {/* Collapse button - only show on desktop */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft
              className={`w-5 h-5 text-gray-500 transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <ul className="space-y-2 px-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                  to={item.path}
                  onClick={() => {
                    if(window.innerWidth < 768) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-300 
                    ${isActive(item.path) ? 
                      'bg-blue-100 text-blue-700 border-r-2 border-blue-500' : 
                      'text-gray-700 hover:bg-gray-100'} ${isCollapsed? 'justify-center' : ''

                  } 
                  title={isCollapsed? item.label : ''}
                  `}
                  >
                    <item.icon className="w-5 h-5"/>
                    {!isCollapsed && (
                      <span className="ml-3 font-medium">{item.label}</span>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        {/* Bottom section - only show when not collapse */}
        {!isCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600"/>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin user</p>
                <p className="text-xs text-gray-500 truncate">admin@pharmasystem.com</p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};