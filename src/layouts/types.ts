export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface SidebarItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface SidebarProps {
  sidebarItems: SidebarItem[];
}
