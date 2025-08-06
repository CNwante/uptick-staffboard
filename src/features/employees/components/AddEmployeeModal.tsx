import { EmployeeForm } from "./EmployeeForm";
import type { EmployeeFormData, AddEmployeeModalProps } from "../types";

const employeeFormData: EmployeeFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  department: "Engineering",
  role: "Frontend Developer",
  supervisor: "",
  contractType: "permanent",
  hireDate: "",
  status: "active",
  emergencyContact: {
    name: "",
    phone: "",
  },
};

export const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  onClose,
  onSave,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[95%] max-w-lg h-[95%] overflow-auto">
        <h2 className="text-lg font-bold mb-4">Add New Employee</h2>
        <EmployeeForm
          initialValues={employeeFormData}
          onSubmit={onSave}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};
