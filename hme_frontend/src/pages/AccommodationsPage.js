import React, { useState } from "react";

/**
 * Accommodations: Plan and select camp lodging (tent/shiftpod/van/etc).
 * PUBLIC_INTERFACE
 */
function AccommodationsPage() {
  const mockSpaces = [
    { id: 1, type: "Shiftpod", desc: "8x8 Shiftpod", icon: "🏕️", assigned: false },
    { id: 2, type: "Tent", desc: "4-Person Tent", icon: "⛺", assigned: false },
    { id: 3, type: "Van", desc: "Camper Van", icon: "🚐", assigned: false },
    { id: 4, type: "Other", desc: "Bring Your Own", icon: "🎒", assigned: false }
  ];
  const [spaces, setSpaces] = useState(mockSpaces);

  // PUBLIC_INTERFACE
  const handleAssign = idx => {
    setSpaces(spaces.map((s, i) =>
      i === idx ? { ...s, assigned: !s.assigned } : s
    ));
  };

  return (
    <section>
      <h2 style={{ color: "#e25822", fontWeight: 750, marginBottom: "1rem" }}>Accommodations</h2>
      <div style={{
        color: "#555",
        marginBottom: "1.5rem"
      }}>
        Choose your camp lodging and view/claim available beds/units.
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "1.3rem",
        marginBottom: 40,
      }}>
        {spaces.map((s, i) => (
          <div key={s.id}
            style={{
              border: "2px solid #04bfbf",
              borderRadius: 14,
              padding: "1.3rem 1rem",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              minHeight: 120,
              boxShadow: "0 2px 14px #04bfbf27",
              position: "relative"
            }}
          >
            <div style={{
              fontSize: "2rem", color: "#04bfbf", marginBottom: 7
            }}>{s.icon}</div>
            <div style={{
              fontWeight: 730, color: "#e25822", fontSize: "1.19rem"
            }}>{s.type}</div>
            <div style={{
              fontSize: "1.02rem", color: "#333", opacity: 0.85, marginBottom: 9
            }}>{s.desc}</div>
            <button
              style={{
                background: s.assigned
                  ? "linear-gradient(90deg, #e25822, #04bfbf)"
                  : "linear-gradient(90deg, #04bfbf, #e25822)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 15px",
                fontWeight: 590,
                fontSize: 15,
                letterSpacing: "0.6px",
                cursor: "pointer",
                marginTop: "2px",
                transition: "filter .14s"
              }}
              onClick={() => handleAssign(i)}
            >
              {s.assigned ? "Assigned to you" : "Claim"}
            </button>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#949494",
        marginTop: 24
      }}>
        Looking for a specific setup?<br />
        <span style={{ color: "#04bfbf" }}>Contact an admin for special requests.</span>
      </div>
    </section>
  );
}

export default AccommodationsPage;
