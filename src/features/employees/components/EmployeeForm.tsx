import { useState } from "react";
import type { Employee } from "@/types/common";
import { employmentStatuses, contractTypes, departments,
  roles } from "@/data/lookups";

export type EmployeeFormData = Omit<Employee, "id">;

interface EmployeeFormProps {
  initialValues: EmployeeFormData;
  onSubmit: (data: EmployeeFormData) => void;
  onCancel: () => void;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState<EmployeeFormData>(initialValues);

  const handleChange = (field: keyof EmployeeFormData, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmergencyChange = (field: "name" | "phone", value: string) => {
    setForm((prev) => ({
      ...prev,
      emergencyContact: { ...prev.emergencyContact, [field]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <fieldset className="flex gap-4">
        <label htmlFor="">
          <input
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
      </fieldset>
      <fieldset className="flex gap-4">
        <label htmlFor="">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
        <label htmlFor="">
          <input
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
      </fieldset>

      <select
        value={form.department}
        onChange={(e) => handleChange("department", e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
      <select
        value={form.role}
        onChange={(e) => handleChange("role", e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <fieldset className="flex gap-4">
        <select
          value={form.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="border rounded px-3 py-2 w-full"
        >
          {employmentStatuses.map((empStatus) => (
            <option key={empStatus} value={empStatus}>
              {empStatus}
            </option>
          ))}
        </select>
        <select
          value={form.contractType}
          onChange={(e) => handleChange("contractType", e.target.value)}
          className="border rounded px-3 py-2 w-full"
        >
          {contractTypes.map((conType) => (
            <option key={conType} value={conType}>
              {conType}
            </option>
          ))}
        </select>
      </fieldset>

      <input
        type="text"
        placeholder="Supervisor"
        value={form.supervisor ?? ""}
        onChange={(e) => handleChange("supervisor", e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />

      <fieldset className="flex gap-4">
        <label htmlFor="">
          <input
            type="text"
            placeholder="Emergency Contact Name"
            value={form.emergencyContact.name}
            onChange={(e) => handleEmergencyChange("name", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
        <label htmlFor="">
          <input
            type="tel"
            placeholder="Emergency Contact Phone"
            value={form.emergencyContact.name}
            onChange={(e) => handleEmergencyChange("phone", e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />
        </label>
      </fieldset>

      <input
        type="date"
        value={form.hireDate}
        onChange={(e) => handleChange("hireDate", e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />

      <div className="flex justifyend gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
      <fieldset className="flex gap-4"></fieldset>
    </form>
  );
};
