import type { SidebarProps } from "./types";
import { NavLink } from "react-router-dom";

export const Sidebar: React.FC<SidebarProps> = ({ sidebarItems }) => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {item.icon && <span className="mr-2 inline-block">{item.icon}</span>}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
