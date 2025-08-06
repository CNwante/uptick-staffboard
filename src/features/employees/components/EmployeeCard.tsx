import type { EmployeeCardProps } from "../types";
import placeholderImage from "@/assets/images/placeholder.jpeg";

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onEdit,
  onDelete,
}) => {
  const {
    id,
    profilePhoto,
    firstName,
    lastName,
    role,
    department,
    status,
    phone,
  } = employee;

  const statusColor =
    status === "active"
      ? "bg-green-100 text-green-700"
      : status === "probation"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <img
          src={profilePhoto || placeholderImage}
          alt={`${firstName} ${lastName}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-semibold">
            {firstName} {lastName}
          </h3>
          <p className="text-sm text-gray-500">{role}</p>
          <span
            className={`inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-full ${statusColor}`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="text-sm space-y-1 text-gray-600 mb-4">
        <p className="text-center sm:text-left">
          <span className="font-medium">Department:</span> {department}
        </p>
        <p className="text-center sm:text-left">
          <span className="font-medium">Phone:</span> {phone}
        </p>
      </div>

      <div className="flex gap-3 justify-center sm:justify-end flex-wrap">
        <button
          onClick={() => onEdit(id)}
          className="px-4 py-1.5 text-sm rounded-xl bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-1.5 text-sm rounded-xl bg-red-100 text-red-800 hover:bg-red-200 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
