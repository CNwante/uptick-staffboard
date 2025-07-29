import type { EmployeeStatsProps } from "../employees/types";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA33AA"];

export function EmployeeStats({ employees }: EmployeeStatsProps) {
  const totalEmployees = employees.length;

  const departmentCounts = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusCounts = employees.reduce((acc, emp) => {
    acc[emp.status] = (acc[emp.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="border rounded p-4 text-center">
          <p className="text-gray-500">Total Employees</p>
          <p className="text-2xl font-bold">{totalEmployees}</p>
        </div>

        <div className="border rounded p-4">
          <p className="font-semibold mb-2">By Department</p>
          <ul className="space-y-1 text-sm">
            {Object.entries(departmentCounts).map(([dep, count]) => (
              <li key={dep}>
                {dep}: <span className="font-semibold">{count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded p-4">
          <p className="font-semibold mb-2">By Status</p>
          <ul className="space-y-1 text-sm">
            {Object.entries(statusCounts).map(([st, count]) => (
              <li key={st}>
                {st}: <span className="font-semibold">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="border rounded p-4">
          <p className="font-semibold mb-4">Departments</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {departmentData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="border rounded p-4">
          <p className="font-semibold mb-4">Status</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {statusData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
