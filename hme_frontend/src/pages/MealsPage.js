import React, { useState } from "react";

/**
 * Meals: Meal planner, signup, and attendance.
 * PUBLIC_INTERFACE
 */
function MealsPage() {
  // Mockup for meal days and attendance signups
  const mockMeals = [
    { id: 1, day: "Monday", meal: "Chili Night", icon: "🌶️", going: false },
    { id: 2, day: "Tuesday", meal: "Taco Tuesday", icon: "🌮", going: false },
    { id: 3, day: "Wednesday", meal: "Burger Feast", icon: "🍔", going: false },
    { id: 4, day: "Thursday", meal: "Stir Fry", icon: "🍜", going: false },
    { id: 5, day: "Friday", meal: "BBQ Dinner", icon: "🍖", going: false }
  ];
  const [meals, setMeals] = useState(mockMeals);

  // PUBLIC_INTERFACE
  const toggleGoing = idx => setMeals(
    meals.map((m, i) => i === idx ? { ...m, going: !m.going } : m)
  );

  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 750, marginBottom: 20
      }}>Meal Planner</h2>
      <div style={{
        color: "#555", marginBottom: 18
      }}>
        Sign up to attend camp dinners and help with meal prep.
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "1.18rem",
        marginBottom: 34
      }}>
        {meals.map((m, i) => (
          <div key={m.id}
            style={{
              border: "2px solid #04bfbf",
              borderRadius: 13,
              background: "#fff",
              boxShadow: "0 2.5px 14px #04bfbf12",
              padding: "1.15rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "start"
            }}>
            <div style={{
              fontSize: "2.18rem", color: "#04bfbf", marginBottom: 7
            }}>{m.icon}</div>
            <div style={{
              fontWeight: 730, color: "#e25822", fontSize: "1.1rem"
            }}>{m.day}</div>
            <div style={{
              fontSize: "1.02rem", color: "#333", opacity: 0.87, marginBottom: 7
            }}>{m.meal}</div>
            <button
              style={{
                background: m.going
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
                transition: "filter .16s"
              }}
              onClick={() => toggleGoing(i)}
            >
              {m.going ? "Attending" : "Sign Up"}
            </button>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#949494",
        marginTop: 27
      }}>
        Want to propose or cook a special meal? <span style={{ color: "#e25822" }}>Ping admin.</span>
      </div>
    </section>
  );
}

export default MealsPage;
