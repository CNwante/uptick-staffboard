import type { SidebarProps } from "./types";

export const Sidebar: React.FC<SidebarProps> = ({ sidebarItems }) => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul className="flex flex-col gap-4">
        {sidebarItems.map((item, index) => (
          <li key={index} className="border rounded p-2">{item}</li>
        ))}
      </ul>
    </aside>
  );
};
