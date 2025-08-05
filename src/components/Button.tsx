import clsx from "clsx";
import type { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700", className)}
    >
      {children}
    </button>
  );
};
