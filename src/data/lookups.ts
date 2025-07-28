import type { SidebarItem } from "@/layouts/types";
import type {
  Department,
  Role,
  ContractType,
  EmploymentStatus,
} from "@/types/common";

export const departments: Department[] = [
  "Engineering",
  "Human Resources",
  "Marketing",
  "Sales",
  "Finance",
  "Product",
  "Customer Support",
  "Legal",
];

export const roles: Role[] = [
  "Frontend Developer",
  "Backend Developer",
  "DeveOps Engineer",
  "Product Manager",
  "HR Manager",
  "Recuruitrt",
  "Marketing Specialist",
  "Sales Executive",
  "Customer Support Agent",
  "Legal Advisor",
];

export const contractTypes: ContractType[] = [
  "permanent",
  "contract",
  "intern",
];

export const employmentStatuses: EmploymentStatus[] = [
  "active",
  "inactive",
  "probation",
];

export const contractTypeOptions = contractTypes.map((type) => ({
  label: type.charAt(0).toUpperCase() + type.slice(1),
  value: type,
}));

export const statusOptions = employmentStatuses.map((status) => ({
  label: status.charAt(0).toUpperCase() + status.slice(1),
  value: status,
}));

export const sidebarItems:SidebarItem[] = [
  { label: "Dashboard", path: "/" },
  { label: "Employees", path: "/employees" },
];
