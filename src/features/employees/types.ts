import type { Employee } from "@/types/common";

export interface EmployeeCardProps {
  employee: Employee;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export type EmployeeFormData = Omit<Employee, "id">;
export interface EmployeeFormProps {
  initialValues: EmployeeFormData;
  onSubmit: (data: EmployeeFormData) => void;
  onCancel: () => void;
}
export interface AddEmployeeModalProps {
  onClose: () => void;
  onSave: (data: EmployeeFormData) => void;
}
