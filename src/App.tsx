import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { SettingsPage } from "./pages/Settings";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </main>
  );
}

export default App;
