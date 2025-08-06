import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    href: "/signup",
    icon: "📝",
    title: "Signup",
    desc: "Join the camp & participate in this year's desert adventure.",
  },
  {
    href: "/accommodations",
    icon: "🏕️",
    title: "Accommodations",
    desc: "Choose your shiftpod, tent, van, or squad housing assignment.",
  },
  {
    href: "/schedule",
    icon: "📅",
    title: "Schedule",
    desc: "Set arrival/departure, crew shifts, & ride shares.",
  },
  {
    href: "/dues",
    icon: "💸",
    title: "Dues",
    desc: "Camp fees, payment tracking, and Venmo link.",
  },
  {
    href: "/jobs",
    icon: "🛠️",
    title: "Jobs",
    desc: "Sign up for camp jobs and review assignments.",
  },
  {
    href: "/food",
    icon: "🥗",
    title: "Food List",
    desc: "Share, claim, and manage food supplies.",
  },
  {
    href: "/meals",
    icon: "🍽️",
    title: "Meals",
    desc: "Meal planning, signup, and attendance.",
  },
  {
    href: "/calendar",
    icon: "🗓️",
    title: "Calendar",
    desc: "Events and camp happenings at a glance.",
  },
  {
    href: "/admin",
    icon: "👤",
    title: "Admin",
    desc: "Admin features: approvals, camp chat, and reports.",
  },
];

/**
 * Dashboard page providing card-based navigation to all features.
 * PUBLIC_INTERFACE
 */
function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{
        fontWeight: 800,
        fontSize: "2.3rem",
        letterSpacing: "2px",
        color: "#e25822",
        marginBottom: "0.6rem"
      }}>
        🎪 HME Camp Logistics
      </h1>
      <div style={{
        marginBottom: "1.5rem",
        color: "#222",
        fontSize: "1.13rem",
        fontWeight: 450
      }}>
        Welcome! Get your Burning Man experience coordinated & stress-free.<br/>
        Choose an area below to get started.
      </div>
      <div className="hme-cards">
        {cards.map(card => (
          <div
            key={card.href}
            className="hme-card"
            tabIndex={0}
            role={"button"}
            aria-label={card.title}
            onClick={() => navigate(card.href)}
            onKeyDown={e => { if (e.key === "Enter") navigate(card.href); }}
          >
            <span className="hme-card__icon" aria-hidden="true">{card.icon}</span>
            <div className="hme-card__title">{card.title}</div>
            <div className="hme-card__desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
