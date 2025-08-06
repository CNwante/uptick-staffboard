import type { EmployeeStatsProps } from "../employees/types";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export function EmployeeStats({ employees }: EmployeeStatsProps) {
  const totalEmployees = employees.length;

  // Grouping
  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusCounts = employees.reduce((acc, emp) => {
    acc[emp.status] = (acc[emp.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Totals
  const totalDepartments = Object.keys(departmentCounts).length;
  const totalStatuses = Object.keys(statusCounts).length;

  const departmentData = Object.entries(departmentCounts).map(([dep, count]) => ({
    name: dep,
    value: count,
  }));

  const statusData = Object.entries(statusCounts).map(([st, count]) => ({
    name: st,
    value: count,
  }));

  return (
    <div className="space-y-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center">
          <p className="text-gray-500 text-sm font-bold">Total Employees</p>
          <div className="mt-4 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-700">{totalEmployees}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center">
          <p className="text-gray-500 text-sm font-bold">Total Departments</p>
          <div className="mt-4 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-green-700">{totalDepartments}</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center">
          <p className="text-gray-500 text-sm font-bold">Total Status Types</p>
          <div className="mt-4 w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
            <span className="text-2xl font-bold text-yellow-700">{totalStatuses}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 shadow">
          <p className="font-semibold text-gray-700 mb-6">Departments</p>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                innerRadius={50}
                label
              >
                {departmentData.map((_entry, index) => (
                  <Cell key={`cell-dept-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <p className="font-semibold text-gray-700 mb-6">Status</p>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                innerRadius={50}
                label
              >
                {statusData.map((_entry, index) => (
                  <Cell key={`cell-status-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
