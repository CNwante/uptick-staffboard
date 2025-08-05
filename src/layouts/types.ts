import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface SidebarItem {
  label: string;
  path: string;
  icon?: IconDefinition;
}

export interface SidebarProps {
  sidebarItems: SidebarItem[];
}
