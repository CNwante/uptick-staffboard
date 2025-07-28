import type { EmployeeCardProps } from "../types";

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onEdit, onDelete }) => {
  const { id, profilePhoto, firstName, lastName, role, department, status, phone } =
    employee;
  return (
    <div className="border rounded py-7 px-4 grid grid-cols-2 gap-2 relative">
      <img
        src={profilePhoto}
        alt={`${firstName} ${lastName}`}
        className="w-16 h-16 rounded-full mb-2 row-span-3"
      />
      <h3 className="font-semibold">
        {firstName} {lastName}
      </h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-xs text-gray-400">{department}</p>
      <p className="text-sm text-gray-500">Status: {status}</p>
      <p className="text-sm text-gray-500">{phone}</p>

      <div className="absolute top-2 right-2 flex gap-2">
        <button
          className="px-2 py-1 text-xs bg-yellow-200 rounded"
          onClick={() => onEdit(id)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 text-xs bg-red-200 rounded"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
