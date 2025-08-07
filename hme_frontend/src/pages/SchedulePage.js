import React, { useState } from "react";

/**
 * Schedule: Arrival, departure, and crew assignment planner.
 * PUBLIC_INTERFACE
 */
function SchedulePage() {
  const [arrive, setArrive] = useState("2024-08-25");
  const [depart, setDepart] = useState("2024-09-02");
  const crews = [
    { id: 1, name: "Build Crew", icon: "🔨", joined: false },
    { id: 2, name: "Moop Patrol", icon: "♻️", joined: false }
  ];
  const [myCrews, setMyCrews] = useState(crews);

  // PUBLIC_INTERFACE
  const handleCrew = idx => setMyCrews(
    myCrews.map((c, i) => i === idx ? { ...c, joined: !c.joined } : c)
  );

  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 750, marginBottom: "1.2rem"
      }}>Your Schedule</h2>
      <div style={{ marginBottom: 12, color: "#444" }}>
        Set arrival/departure and sign up for crew shifts.
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2.5rem",
        marginBottom: 30
      }}>
        <div style={{
          border: "2px solid #04bfbf",
          borderRadius: 14,
          padding: "1.6rem 1.1rem",
          background: "#fff",
          minWidth: 220,
          marginBottom: 18
        }}>
          <div style={{ color: "#e25822", fontWeight: 600, marginBottom: 7 }}>
            Arrival
          </div>
          <input
            type="date"
            value={arrive}
            style={{
              border: "2px solid #eee",
              borderRadius: 6,
              padding: "7.5px 7px",
              fontSize: 16,
              marginBottom: 13,
              color: "#333",
              background: "#f9f8f5"
            }}
            onChange={e => setArrive(e.target.value)}
          />
          <div style={{ color: "#e25822", fontWeight: 600, marginBottom: 7 }}>
            Departure
          </div>
          <input
            type="date"
            value={depart}
            style={{
              border: "2px solid #eee",
              borderRadius: 6,
              padding: "7.5px 7px",
              fontSize: 16,
              color: "#333",
              background: "#f9f8f5"
            }}
            onChange={e => setDepart(e.target.value)}
          />
        </div>
        <div style={{
          border: "2px solid #e25822",
          borderRadius: 14,
          padding: "1.6rem 1.1rem",
          background: "#fff",
          minWidth: 220
        }}>
          <div style={{ color: "#04bfbf", fontWeight: 650, marginBottom: 10 }}>
            Crew Signups
          </div>
          {myCrews.map((c, i) => (
            <button
              key={c.id}
              style={{
                background: c.joined
                  ? "linear-gradient(90deg, #e25822, #04bfbf 100%)"
                  : "linear-gradient(90deg, #04bfbf, #e25822 120%)",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 8,
                padding: "7px 18px",
                marginBottom: 7,
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer"
              }}
              onClick={() => handleCrew(i)}
            >
              <span style={{ fontSize: "1.07rem" }}>{c.icon}</span>
              {c.name}
              <span style={{
                marginLeft: "auto",
                fontSize: 14,
                color: c.joined ? "#fff" : "#bcbcbc"
              }}>
                {c.joined ? "On crew" : "Not joined"}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div style={{
        fontSize: "0.99rem",
        color: "#949494",
        marginTop: 19
      }}>
        Need a ride? Crew rideshare signups: <span style={{ color: "#e25822" }}>Coming Soon</span>
      </div>
    </section>
  );
}

export default SchedulePage;
