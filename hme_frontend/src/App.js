import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from "./pages/SignupPage";
import AccommodationsPage from "./pages/AccommodationsPage";
import SchedulePage from "./pages/SchedulePage";
import DuesPage from "./pages/DuesPage";
import JobsPage from "./pages/JobsPage";
import FoodPage from "./pages/FoodPage";
import MealsPage from "./pages/MealsPage";
import CalendarPage from "./pages/CalendarPage";
import AdminPage from "./pages/AdminPage";
import "./App.css";

/**
 * The main Application.
 * PUBLIC_INTERFACE
 */
function App() {
  const [theme, setTheme] = useState("light");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="App">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/accommodations" element={<AccommodationsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/dues" element={<DuesPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/meals" element={<MealsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </DashboardLayout>
      </div>
    </Router>
  );
}

export default App;
