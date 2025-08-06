import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

/**
 * Sidebar (admin menu) component for dashboard navigation.
 * PUBLIC_INTERFACE
 */
function Sidebar() {
  const menu = [
    { path: "/signup", label: "Signup", icon: "📝" },
    { path: "/accommodations", label: "Accommodations", icon: "🏕️" },
    { path: "/schedule", label: "Schedule", icon: "📅" },
    { path: "/dues", label: "Dues", icon: "💸" },
    { path: "/jobs", label: "Jobs", icon: "🛠️" },
    { path: "/food", label: "Food List", icon: "🥗" },
    { path: "/meals", label: "Meals", icon: "🍽️" },
    { path: "/calendar", label: "Calendar", icon: "🗓️" },
    { path: "/admin", label: "Admin", icon: "👤" },
  ];

  return (
    <aside className="hme-sidebar">
      <div className="hme-sidebar__brand">🔥 HME Camp</div>
      <nav className="hme-sidebar__nav">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "hme-sidebar__link hme-sidebar__link--active"
                : "hme-sidebar__link"
            }
          >
            <span className="hme-sidebar__icon">{item.icon}</span>
            <span className="hme-sidebar__label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
