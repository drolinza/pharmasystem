import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Initialize sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Desktop: sidebar open by default
        setSidebarOpen(true);
        setIsCollapsed(false);
      } else if (window.innerWidth >= 768) {
        // Tablet: collapsed sidebar (icons only)
        setSidebarOpen(true);
        setIsCollapsed(true);
      } else {
        // Mobile: sidebar hidden by default
        setSidebarOpen(false);
        setIsCollapsed(false);
      }
    };

    // Set initial state
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Main content area */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? isCollapsed
              ? "lg:ml-16 md:ml-16" // Collapsed sidebar width
              : "lg:ml-64 md:ml-64" // Full sidebar width
            : "ml-0" // No sidebar
        }`}
      >
        {/* Header */}
        <Header
          setSidebarOpen={setSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          isCollapsed={isCollapsed}
        />

        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)] bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
