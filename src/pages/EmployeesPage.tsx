import { useState } from "react";
import { employees as initialEmployees } from "@/data/employees";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { EmployeeCard } from "@/features/employees/components/EmployeeCard";
import { Button } from "@/components/Button";
import { SearchBar } from "@/components/SearchBar";
import { FilterDropdown } from "@/components/FilterDropdown";
import { AddEmployeeModal } from "@/features/employees/components/AddEmployeeModal";
import { EditEmployeeModal } from "@/features/employees/components/EditEmployeeModal";
import { employmentStatuses, contractTypes, roles, departments } from "@/data/lookups";
import type { Employee, Department, Role, ContractType, EmploymentStatus } from "@/types/common";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const EmployeesPage = () => {
  const [employeeList, setEmployeeList] = useLocalStorageState<Employee[]>("employeeList", initialEmployees)
  const [search, setSearch] = useState<string>("");
  const [department, setDepartment] = useState<Department | string>("");
  const [role, setRole] = useState<Role | string>("");
  const [status, setStatus] = useState<EmploymentStatus | string>("");
  const [contractType, setContractType] = useState<ContractType | string>("");
  const [filters, setFilters] = useState(false);
  const [addEmployee, setAddEmployee] = useState<boolean>(false);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  const filteredEmployees = employeeList.filter((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
    const matchSearch =
      fullName.includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment = department ? emp.department === department : true;
    const matchesRole = role ? emp.role === role : true;
    const matchesStatus = status ? emp.status === status : true;
    const matchesContract = contractType
      ? emp.contractType === contractType
      : true;

    return (
      matchSearch &&
      matchesDepartment &&
      matchesRole &&
      matchesStatus &&
      matchesContract
    );
  });

  const handleAdd = (data: Omit<Employee, "id">) => {
    const newEmployee: Employee = {
      ...data,
      id: `emp-${Date.now()}`,
    };
    setEmployeeList((prev) => [...prev, newEmployee]);
    setAddEmployee(false);
  }

  const handleEdit = (updated: Omit<Employee, "id">) => {
    if (!editEmployee) return;
    setEmployeeList((prev) =>
      prev.map((emp) => (emp.id === editEmployee.id ? { ...emp, ...updated} : emp))
    );
    setEditEmployee(null);
  }

  const handleDelete = (id: string) => {
    if (confirm("Delete this employee")) {
      setEmployeeList((prev) => prev.filter((emp) => emp.id !== id));
    }
  }

  return (
    <DashboardLayout>
      <div className="mb-4 w-full">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex justify-between items-baseline w-full gap-4">
            <SearchBar value={search} onChange={setSearch} />
            <Button onClick={() => setAddEmployee(true)}>
              <span className="sm:hidden"><FontAwesomeIcon icon={faUserPlus}/></span>
              <span className="hidden sm:block font-bold">+ Add Employee</span>
            </Button>
          </div>

          <button
            className="sm:hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
            onClick={() => setFilters(true)}
          >
            <FontAwesomeIcon icon={faFilter} className="w-5 h-5 text-gray-700" /> Filter
          </button>

          <div className="hidden sm:flex gap-4 justify-end w-full my-4">
            <FilterDropdown
              label={"Department"}
              options={departments}
              value={department}
              onChange={setDepartment}
            />
            <FilterDropdown
              label={"Role"}
              options={roles}
              value={role}
              onChange={setRole}
            />
            <FilterDropdown
              label={"Status"}
              options={employmentStatuses}
              value={status}
              onChange={setStatus}
            />
            <FilterDropdown
              label={"Contract"}
              options={contractTypes}
              value={contractType}
              onChange={setContractType}
            />
          </div>

          {filters && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-6 w-80 max-w-sm">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <FilterDropdown
                    label="Department"
                    options={departments}
                    value={department}
                    onChange={setDepartment}
                  />
                  <FilterDropdown
                    label="Role"
                    options={roles}
                    value={role}
                    onChange={setRole}
                  />
                  <FilterDropdown
                    label="Status"
                    options={employmentStatuses}
                    value={status}
                    onChange={setStatus}
                  />
                  <FilterDropdown
                    label="Contract"
                    options={contractTypes}
                    value={contractType}
                    onChange={setContractType}
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={() => setFilters(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onEdit={(id) => {
              const found = employeeList.find((e) => e.id === id);
              if (found) setEditEmployee(found);
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {addEmployee && (
        <AddEmployeeModal
          onClose={() => setAddEmployee(false)}
          onSave={handleAdd}
        />
      )}

      {editEmployee && (
        <EditEmployeeModal
          employee={editEmployee}
          onClose={() => setEditEmployee(null)}
          onSave={handleEdit}
        />
      )}
    </DashboardLayout>
  );
};
