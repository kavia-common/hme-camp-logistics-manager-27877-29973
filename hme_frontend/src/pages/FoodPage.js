import React, { useState } from "react";

/**
 * Food sharing: List food contributions, sign up, and manage
 * PUBLIC_INTERFACE
 */
function FoodPage() {
  // Mock food slots
  const initialFood = [
    { id: 1, name: "Coffee", icon: "☕", qty: "3 lbs", contributor: null },
    { id: 2, name: "Eggs", icon: "🥚", qty: "4 dozen", contributor: null },
    { id: 3, name: "Avocados", icon: "🥑", qty: "12", contributor: null },
    { id: 4, name: "PB+J Supplies", icon: "🥜", qty: "plenty", contributor: null },
    { id: 5, name: "Jerky", icon: "🥩", qty: "bulk", contributor: "You" },
  ];
  const [list, setList] = useState(initialFood);

  // PUBLIC_INTERFACE
  const handleSignup = idx =>
    setList(list.map((item, i) =>
      i === idx
        ? { ...item, contributor: item.contributor ? null : "You" }
        : item
    ));

  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 750, marginBottom: 18
      }}>
        Food List & Sharing
      </h2>
      <div style={{
        color: "#555", marginBottom: 17
      }}>
        Sign up to bring supplies and coordinate meal contributions.
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "1.2rem",
        marginBottom: 35
      }}>
        {list.map((item, i) => (
          <div key={item.id}
            style={{
              border: "2px solid #04bfbf",
              borderRadius: 13,
              background: "#fff",
              boxShadow: "0 2px 14px #04bfbf14",
              padding: "1.15rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "start"
            }}>
            <div style={{
              fontSize: "2.15rem", color: "#04bfbf", marginBottom: 7
            }}>{item.icon}</div>
            <div style={{
              fontWeight: 730, color: "#e25822", fontSize: "1.07rem"
            }}>{item.name}</div>
            <div style={{
              fontSize: "1.02rem", color: "#333", opacity: 0.88, marginBottom: 8
            }}>{item.qty} {item.name !== "PB+J Supplies" && <span style={{ color: "#949494", fontSize: "0.99rem" }}>(needed)</span>}</div>
            <button
              style={{
                background: item.contributor
                  ? "linear-gradient(90deg, #e25822, #04bfbf 110%)"
                  : "linear-gradient(90deg, #04bfbf, #e25822 120%)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "7.5px 14px",
                fontWeight: 560,
                fontSize: 14,
                letterSpacing: "0.4px",
                cursor: "pointer",
                marginTop: "2px",
                transition: "filter .14s"
              }}
              onClick={() => handleSignup(i)}
            >
              {item.contributor ? "Signed Up" : "Sign Up"}
            </button>
            {!!item.contributor && (
              <div style={{
                fontSize: "0.9rem", marginTop: 7,
                color: "#04bfbf", fontWeight: 600
              }}>You are bringing this!</div>
            )}
          </div>
        ))}
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#949494",
        marginTop: 17
      }}>
        Have specialty needs? <span style={{
          color: "#e25822"
        }}>Contact food planner in admin.</span>
      </div>
    </section>
  );
}

export default FoodPage;
