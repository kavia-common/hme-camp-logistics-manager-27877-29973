import React from "react";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

/**
 * Dashboard layout that renders sidebar and main content area.
 * PUBLIC_INTERFACE
 */
function DashboardLayout({ children }) {
  return (
    <div className="hme-dashboard">
      <Sidebar />
      <main className="hme-dashboard__main">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
