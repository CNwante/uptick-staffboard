export type Department =
  | "Engineering"
  | "Human Resources"
  | "Marketing"
  | "Sales"
  | "Finance"
  | "Product"
  | "Customer Support"
  | "Legal";

export type Role =
  | "Frontend Developer"
  | "Backend Developer"
  | "DeveOps Engineer"
  | "Product Manager"
  | "HR Manager"
  | "Recuruitrt"
  | "Marketing Specialist"
  | "Sales Executive"
  | "Customer Support Agent"
  | "Legal Advisor"

export type ContractType = "permanent" | "contract" | "intern";

export type EmploymentStatus = "active" | "inactive" | "probation";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: Department;
  role: Role;
  supervisor?: string;
  contractType: ContractType;
  hireDate: string;
  status: EmploymentStatus;
  emergencyContact: {
    name: string;
    phone: string;
  };
  profilePhoto?: string;
}

export interface SettingsData {
  companyName: string;
  address: string;
  contactEmail: string;
  logo?: string;
  theme: "light" | "dark";
  notifications: boolean;
}

export interface SettingsPageProps {
  initialValues: SettingsData;
  onSubmit: (data: SettingsData) => void;
}
