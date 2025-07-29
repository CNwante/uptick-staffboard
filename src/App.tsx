import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { EmployeesPage } from "./pages/EmployeesPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </main>
  );
}

export default App;
