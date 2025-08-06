import React, { useState } from "react";

/**
 * Signup form for new users.
 * PUBLIC_INTERFACE
 *
 * Renders a playful, minimal, card-based signup form for name, email, and camp role.
 * Role options: Burner or Admin. Contains basic validation for required fields.
 * On submit, placeholder (TODO) for backend integration is present, currently does mock confirmation.
 * Confirmation message is shown upon pseudo-successful signup.
 */
function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Burner",
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Simple validation rules
  const errors = {
    name: !form.name ? "Name is required" : "",
    email: !form.email
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? "Invalid email address"
      : "",
    role: !form.role ? "Role is required" : "",
  };

  // PUBLIC_INTERFACE
  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // PUBLIC_INTERFACE
  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  // PUBLIC_INTERFACE
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mark all as touched to show errors if present
    setTouched({ name: true, email: true, role: true });

    if (Object.values(errors).some((x) => x)) {
      return;
    }

    // MOCK logic for submission.
    // TODO: Replace this with backend API call/integration.
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#fffbea",
          border: "2px solid #e25822",
          borderRadius: "1.4rem",
          padding: "2.5rem 2rem",
          boxShadow: "0 6px 26px #04040417",
          maxWidth: 400,
          margin: "36px auto",
          textAlign: "center",
          color: "#333",
        }}
      >
        <div style={{ fontSize: "2.2rem" }}>🎉</div>
        <h3 style={{ color: "#e25822", marginBottom: 7, marginTop: 14 }}>
          Welcome to HME Camp!
        </h3>
        <div>Signup successful. Check your email for next steps.</div>
        <div
          style={{
            fontSize: "0.93rem",
            color: "#949494",
            marginTop: 16,
          }}
        >
          {"We'll see you on the playa!🔥"}
        </div>
      </div>
    );
  }

  // Card form style
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "2.5px solid #e25822",
        borderRadius: "1.5rem",
        boxShadow: "0 5px 30px #e2582265, 0 2px 6px #04bfbf15",
        maxWidth: 430,
        margin: "44px auto",
        padding: "2.5rem 2rem 2rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        position: "relative",
        minWidth: 0
      }}
      noValidate
      autoComplete="off"
      aria-label="Signup form"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <span
          style={{
            fontSize: "2rem",
            marginRight: 4,
            color: "#e25822",
            textShadow: "1px 0 #04bfbf88"
          }}
          aria-hidden="true"
        >📝</span>
        <h2 style={{
          margin: 0, fontWeight: 730, color: "#e25822", letterSpacing: "1.5px", fontSize: "1.5rem"
        }}>
          Signup for Camp
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.17rem" }}>
        <label htmlFor="name" style={{ fontWeight: 580, fontSize: "1.01rem" }}>
          Name
          <span style={{ color: "#e25822", marginLeft: 4 }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          inputMode="text"
          autoComplete="off"
          placeholder="Your Playa Name or Real Name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          style={{
            border: errors.name && touched.name ? "2px solid #e25822" : "1.5px solid #eee",
            borderRadius: "7px",
            padding: "11px 14px",
            outline: "none",
            fontSize: "1.04rem",
            background: "#fdf6f0",
            marginBottom: 3
          }}
        />
        {errors.name && touched.name && (
          <span id="name-error" style={{ color: "#e25822", fontSize: 13 }}>{errors.name}</span>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.17rem" }}>
        <label htmlFor="email" style={{ fontWeight: 580, fontSize: "1.01rem" }}>
          Email
          <span style={{ color: "#e25822", marginLeft: 4 }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          placeholder="you@burningman.com"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          style={{
            border: errors.email && touched.email ? "2px solid #e25822" : "1.5px solid #eee",
            borderRadius: "7px",
            padding: "11px 14px",
            outline: "none",
            fontSize: "1.04rem",
            background: "#fdf6f0",
            marginBottom: 3
          }}
        />
        {errors.email && touched.email && (
          <span id="email-error" style={{ color: "#e25822", fontSize: 13 }}>{errors.email}</span>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.17rem" }}>
        <label htmlFor="role" style={{ fontWeight: 580, fontSize: "1.01rem" }}>
          Camp Role
          <span style={{ color: "#e25822", marginLeft: 4 }}>*</span>
        </label>
        <select
          id="role"
          name="role"
          value={form.role}
          required
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            border: "1.5px solid #eee",
            borderRadius: "7px",
            padding: "10px 14px",
            outline: "none",
            fontSize: "1.04rem",
            background: "#fdf6f0",
            marginBottom: 3,
            color: "#333"
          }}
          aria-invalid={!!errors.role}
          aria-describedby={errors.role ? "role-error" : undefined}
        >
          <option value="Burner">Burner (Member)</option>
          <option value="Admin">Admin</option>
        </select>
        {errors.role && touched.role && (
          <span id="role-error" style={{ color: "#e25822", fontSize: 13 }}>{errors.role}</span>
        )}
      </div>

      <button
        type="submit"
        style={{
          background: "linear-gradient(90deg, #e25822 70%, #04bfbf 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.13rem",
          padding: "12px 0 10px 0",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
          transition: "background 0.25s, transform 0.18s",
          letterSpacing: "1.5px",
          boxShadow: "0 4px 16px #e2582222"
        }}
      >
        Sign Up
      </button>
      <div
        style={{
          fontSize: "0.97rem",
          marginTop: "-10px",
          color: "#959595",
          textAlign: "center",
          marginBottom: "-0.7rem",
        }}
      >
        {"By signing up, you can access camp features and logistics tools."}
      </div>
      <div
        style={{
          color: "#04bfbf",
          background: "#f8fffd",
          fontSize: "0.86rem",
          marginTop: "0.8rem",
          padding: 9,
          borderRadius: 7,
          border: "1px dashed #04bfbf55",
          textAlign: "center",
        }}
      >
        <b>NOTE:</b> Signup requests will be reviewed by an admin!
      </div>
      <div
        style={{
          color: "#949494",
          fontSize: "0.84rem",
          textAlign: "center",
          marginTop: "-1rem",
        }}
      >
        <b>TODO:</b> Integrate with backend API for real signup.
      </div>
    </form>
  );
}

export default SignupForm;
