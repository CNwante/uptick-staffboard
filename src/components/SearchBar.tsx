import type { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      placeholder="Search employees..."
      className="border rounded px-3 py-2 w-64"
    />
  );
};
