import { useState, type DragEvent } from "react";
import type { EmployeeFormData, EmployeeFormProps } from "../types";
import {
  employmentStatuses,
  contractTypes,
  departments,
  roles,
} from "@/data/lookups";

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState<EmployeeFormData>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [photoPreview, setPhotoPreview] = useState<string | null>(
    initialValues.profilePhoto || null
  );
  const [dragOver, setDragOver] = useState(false);

  const handleChange = (field: keyof EmployeeFormData, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmergencyChange = (field: "name" | "phone", value: string) => {
    setForm((prev) => ({
      ...prev,
      emergencyContact: { ...prev.emergencyContact, [field]: value },
    }));
  };

  const handlePhoto = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setPhotoPreview(base64);
      setForm((prev) => ({ ...prev, profilePhoto: base64 }));
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handlePhoto(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handlePhoto(file);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields: (keyof EmployeeFormData)[] = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "department",
      "role",
      "status",
      "contractType",
      "hireDate",
    ];

    requiredFields.forEach((field) => {
      const value = form[field];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        newErrors[field] = "This field is required";
      }
    });

    if (!form.emergencyContact.name.trim()) {
      newErrors["emergencyContact.name"] = "Required";
    }
    if (!form.emergencyContact.phone.trim()) {
      newErrors["emergencyContact.phone"] = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(form);
  };

  const errorMsg = (field: string) =>
    errors[field] && (
      <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow"
    >
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
        {initialValues ? "Edit Employee" : "Add New Employee"}
      </h2>

      <div
        className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition ${
          dragOver ? "border-blue-500 bg-blue-50" : "border-dashed border-gray-300"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("photo-upload")?.click()}
      >
        {photoPreview ? (
          <img
            src={photoPreview}
            alt="Profile Preview"
            className="w-24 h-24 object-cover rounded-full mb-2"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <p className="mb-1">Drag & Drop Photo</p>
            <p className="text-sm">or Click to Upload</p>
          </div>
        )}
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoUpload}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="input-field"
          />
          {errorMsg("firstName")}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="input-field"
          />
          {errorMsg("lastName")}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="input-field"
          />
          {errorMsg("email")}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="input-field"
          />
          {errorMsg("phone")}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <select
            value={form.department}
            onChange={(e) => handleChange("department", e.target.value)}
            className="input-field"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errorMsg("department")}
        </div>
        <div>
          <select
            value={form.role}
            onChange={(e) => handleChange("role", e.target.value)}
            className="input-field"
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errorMsg("role")}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <select
            value={form.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="input-field"
          >
            <option value="">Select Status</option>
            {employmentStatuses.map((empStatus) => (
              <option key={empStatus} value={empStatus}>
                {empStatus}
              </option>
            ))}
          </select>
          {errorMsg("status")}
        </div>
        <div>
          <select
            value={form.contractType}
            onChange={(e) => handleChange("contractType", e.target.value)}
            className="input-field"
          >
            <option value="">Select Contract Type</option>
            {contractTypes.map((conType) => (
              <option key={conType} value={conType}>
                {conType}
              </option>
            ))}
          </select>
          {errorMsg("contractType")}
        </div>
      </div>

      <input
        type="text"
        placeholder="Supervisor (optional)"
        value={form.supervisor ?? ""}
        onChange={(e) => handleChange("supervisor", e.target.value)}
        className="input-field"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Emergency Contact Name"
            value={form.emergencyContact.name}
            onChange={(e) => handleEmergencyChange("name", e.target.value)}
            className="input-field"
          />
          {errorMsg("emergencyContact.name")}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Emergency Contact Phone"
            value={form.emergencyContact.phone}
            onChange={(e) => handleEmergencyChange("phone", e.target.value)}
            className="input-field"
          />
          {errorMsg("emergencyContact.phone")}
        </div>
      </div>

      <div>
        <input
          type="date"
          value={form.hireDate}
          onChange={(e) => handleChange("hireDate", e.target.value)}
          className="input-field"
        />
        {errorMsg("hireDate")}
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};
