import React from "react";

/**
 * Dues and payments: Track, show, and pay camp dues.
 * PUBLIC_INTERFACE
 */
function DuesPage() {
  // Mock data for now
  const dueAmount = 333;
  const paid = false;
  const venmo = "@HME-Camp-2024";

  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 770, marginBottom: 20
      }}>
        Camp Dues & Payments
      </h2>
      <div style={{
        background: "#fff",
        border: "2px solid #e25822",
        boxShadow: "0 3px 16px #e2582220",
        borderRadius: "1.1rem",
        maxWidth: 410,
        margin: "32px auto",
        padding: "2.1rem 1.6rem",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          fontWeight: 630,
          fontSize: "1.13rem",
          color: "#222",
          letterSpacing: "0.7px"
        }}>
          {paid
            ? <span>✅ You are all paid up!<br /></span>
            : <span>🕑 Dues Outstanding</span>}
        </div>
        <div style={{
          color: paid ? "#04bfbf" : "#e25822",
          fontWeight: 800,
          fontSize: "2.4rem",
          margin: "18px 0 12px 0"
        }}>
          ${paid ? "0" : dueAmount}
        </div>
        <div style={{
          color: "#222",
          fontSize: "1.05rem",
          marginBottom: 11
        }}>
          {paid ? ("Thank you for supporting HME Camp!") :
            (<>
              Please pay your dues to secure your spot. <br />
              <b>
                Payment via Venmo:
                <span style={{
                  color: "#fff",
                  background: "#04bfbf",
                  padding: "3px 14px",
                  borderRadius: 6,
                  marginLeft: 9,
                  fontWeight: 790,
                  letterSpacing: "1px",
                  fontSize: "1.09rem"
                }}>
                  {venmo}
                </span>
              </b>
            </>)
          }
        </div>
        <button
          style={{
            background: "linear-gradient(90deg, #04bfbf 60%, #e25822 140%)",
            color: "#fff",
            border: "none",
            padding: "12px 0px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: "1.12rem",
            letterSpacing: "1px",
            cursor: "pointer",
            marginTop: "0"
          }}
        >
          {paid ? "Payment Complete" : "I Paid!"}
        </button>
        <div style={{
          marginTop: 22,
          color: "#949494",
          fontSize: "0.94rem"
        }}>
          Questions? <span style={{ color: "#e25822" }}>Contact admin</span>
        </div>
      </div>
    </section>
  );
}

export default DuesPage;
