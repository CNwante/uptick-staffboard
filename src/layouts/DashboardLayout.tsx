import { Sidebar } from "./Sidebar";
import { sidebarItems } from "@/data/lookups";
import type { DashboardLayoutProps } from "./types";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const path = location.pathname.toLowerCase();

    if (path === "/" || path === "/dashboard") return "Dashboard";
    if (path.startsWith("/employees")) return "Employees";
    if (path.startsWith("/departments")) return "Departments";
    if (path.startsWith("/settings")) return "Settings";
    return "Page";
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarItems={sidebarItems} />
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b flex items-center justify-between px-4 bg-white shadow-sm">
          <h1 className="text-xl font-semibold">{pageTitle}</h1>
        </header>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};
