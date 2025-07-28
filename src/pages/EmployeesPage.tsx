
import { useState } from "react";
import { employees } from "@/data/employees";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { EmployeeCard } from "@/features/employees/components/EmployeeCard";
import { Button } from "@/components/Button";
import { SearchBar } from "@/components/SearchBar";
import { FilterDropdown } from "@/components/FilterDropdown";
import { employmentStatuses, contractTypes, roles, departments } from "@/data/lookups";


export const EmployeesPage = () => {
  const [search, setSearch] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [contractType, setContractType] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredEmployees = employees.filter((emp) => {
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

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-wrap gap-4 mb-4">
          <SearchBar value={search} onChange={setSearch} />
          <button
            className="sm:hidden bg-gray-200 px-3 py-2 rounded"
            onClick={() => setShowFilters(true)}
          >
            Filters
          </button>
          <div className="hidden sm:flex gap-4">
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
          {showFilters && (
            <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-6 w-80">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
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
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Button>+ Add Employee</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </DashboardLayout>
  );
};
