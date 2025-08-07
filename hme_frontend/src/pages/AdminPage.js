import React from "react";

/**
 * Admin Dashboard: Approvals, reports, messaging
 * PUBLIC_INTERFACE
 */
function AdminPage() {
  // Mock, but styled visually per requirements
  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 800, marginBottom: 22
      }}>
        Admin Dashboard
      </h2>
      <div style={{
        color: "#222",
        fontWeight: 600,
        marginBottom: "1.3rem"
      }}>
        (Role: <span style={{
          color: "#04bfbf"
        }}>Admin</span>)
      </div>
      <div style={{
        display: "flex",
        gap: "2.2rem",
        flexWrap: "wrap",
        marginBottom: 35
      }}>
        <div style={{
          background: "#fff",
          border: "2px solid #e25822",
          borderRadius: 13,
          padding: "1.2rem 1.1rem",
          minWidth: 220,
          boxShadow: "0 2px 14px #e2582220",
        }}>
          <div style={{
            fontWeight: 700,
            marginBottom: 7,
            color: "#e25822"
          }}>
            Burner Signup Approvals
          </div>
          <div style={{ color: "#444", fontSize: "1.01rem" }}>
            Approve or reject new burner access requests.
            <div style={{
              marginTop: 8
            }}>
              <button style={{
                background: "linear-gradient(90deg, #04bfbf, #e25822 130%)",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: 7,
                padding: "7px 15px",
                marginRight: 8,
                cursor: "pointer"
              }}>Review Requests</button>
            </div>
          </div>
        </div>
        <div style={{
          background: "#fff",
          border: "2px solid #04bfbf",
          borderRadius: 13,
          padding: "1.2rem 1.1rem",
          minWidth: 220,
          boxShadow: "0 2px 14px #04bfbf10"
        }}>
          <div style={{
            fontWeight: 700,
            marginBottom: 7,
            color: "#04bfbf"
          }}>
            Campwide Messaging
          </div>
          <div style={{ color: "#444", fontSize: "1.01rem" }}>
            Send announcements to the camp.
            <div style={{
              marginTop: 8
            }}>
              <button style={{
                background: "linear-gradient(90deg, #e25822, #04bfbf 140%)",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: 7,
                padding: "7px 15px",
                cursor: "pointer"
              }}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#949494"
      }}>
        More admin features coming soon (user reports, export tools, etc).
      </div>
    </section>
  );
}

export default AdminPage;
