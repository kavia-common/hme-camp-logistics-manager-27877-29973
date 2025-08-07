import React from "react";

/**
 * Burn Calendar: Events and playa happenings at a glance
 * PUBLIC_INTERFACE
 */
function CalendarPage() {
  // Mock events list
  const events = [
    { id: 1, name: "Camp Arrival", date: "2024-08-26", icon: "🎪", desc: "Early crew arrives" },
    { id: 2, name: "Welcome Party", date: "2024-08-28", icon: "🎉", desc: "All burners welcome!" },
    { id: 3, name: "Chili Night", date: "2024-08-30", icon: "🌶️", desc: "Mega cookoff & music" },
    { id: 4, name: "Burn Night", date: "2024-08-31", icon: "🔥", desc: "The Man burns" },
    { id: 5, name: "Strike/Depart", date: "2024-09-02", icon: "🚚", desc: "Takedown/cleanup" }
  ];

  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 770, marginBottom: 20
      }}>Camp Calendar</h2>
      <div style={{
        color: "#555", marginBottom: 20
      }}>
        See camp events, parties, and playa happenings.
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.25rem",
        marginBottom: 37
      }}>
        {events.map(ev => (
          <div key={ev.id}
            style={{
              border: "2px solid #04bfbf",
              borderRadius: 14,
              background: "#fff",
              boxShadow: "0 2.5px 14px #04bfbf15",
              padding: "1.5rem 1.1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "start"
            }}>
            <div style={{
              fontSize: "2.2rem", color: "#04bfbf", marginBottom: 10
            }}>{ev.icon}</div>
            <div style={{
              fontWeight: 700, color: "#e25822", fontSize: "1.16rem"
            }}>{ev.name}</div>
            <div style={{
              fontSize: "1.02rem", color: "#111", opacity: 0.8, marginBottom: 6
            }}>{ev.desc}</div>
            <span style={{
              background: "#04bfbf11",
              color: "#e25822",
              border: "1px solid #04bfbf44",
              borderRadius: 8,
              fontSize: 14,
              padding: "3px 10px",
              marginTop: 4,
              marginBottom: -9,
              fontWeight: 600,
              letterSpacing: ".2px"
            }}>
              {ev.date}
            </span>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#949494",
        marginTop: 19
      }}>
        Want to add something? <span style={{ color: "#e25822" }}>Admin can add/edit events.</span>
      </div>
    </section>
  );
}

export default CalendarPage;
