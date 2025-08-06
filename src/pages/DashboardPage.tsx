import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { employees as initialEmployees } from "@/data/employees";
import type { Employee } from "@/types/common";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { EmployeeStats } from "@/features/dashboard/EmployeeStats";

export function DashboardPage() {
  const [employeeList] = useLocalStorageState<Employee[]>(
    "employeeList",
    initialEmployees
  );

  return (
    <DashboardLayout>
      <EmployeeStats employees={employeeList} />
    </DashboardLayout>
  )
}
