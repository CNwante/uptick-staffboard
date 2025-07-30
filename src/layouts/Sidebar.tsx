import { useState } from "react";
import type { SidebarProps } from "./types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Sidebar: React.FC<SidebarProps> = ({ sidebarItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="md:hidden p-2 m-2 rounded bg-gray-200 hover:bg-gray-300 z-30 absolute right-0"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <aside
        className={`
          fixed md:static top-0 left-0 h-full z-20 bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 w-64
        `}
      >
        <div className="flex items-center gap-2 p-4 border-b border-gray-200">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="font-bold text-lg whitespace-nowrap">
            Decklify
          </span>
        </div>

        <ul className="flex flex-col gap-1 p-4">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.icon && (
                  <span className="text-xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                )}
                <span className="transition-all">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
