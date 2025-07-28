import { EmployeeForm } from "./EmployeeForm";
import type { Employee } from "@/types/common";
import type { EmployeeFormData } from "../types";

interface EditEmployeeModalProps {
  employee: Employee;
  onClose: () => void;
  onSave: (data: EmployeeFormData) => void;
}

export const EditEmployeeModal: React.FC<EditEmployeeModalProps> = ({
  employee,
  onClose,
  onSave,
}) => {
  const { id, ...formData } = employee;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
        <EmployeeForm
          initialValues={formData}
          onSubmit={onSave}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};
