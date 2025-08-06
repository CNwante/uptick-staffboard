import type { SearchBarProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-sm">
      {/* Font Awesome Icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <FontAwesomeIcon icon={faSearch} />
      </span>

      {/* Input */}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search employees..."
        className="
          w-full pl-10 pr-4 py-2 rounded-lg
          border border-gray-300
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500
          outline-none
          transition-all duration-200
          shadow-sm
        "
      />
    </div>
  );
};
