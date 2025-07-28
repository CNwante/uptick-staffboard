import { Sidebar } from "./Sidebar";
import { sidebarItems } from "@/data/sidebarItems";
import type { DashboardLayoutProps } from "./types";

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar sidebarItems={sidebarItems} />
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b flex items-center px-4">Header</header>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};
