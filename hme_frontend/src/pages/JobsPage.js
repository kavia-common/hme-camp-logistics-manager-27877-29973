import React, { useState } from "react";

/**
 * Camp Jobs: Signup for job shifts and see assignments
 * PUBLIC_INTERFACE
 */
function JobsPage() {
  // Mock jobs (to be fetched from backend)
  const jobsData = [
    { id: 1, title: "Build Crew", desc: "Help set up camp structure", icon: "🔨" },
    { id: 2, title: "Moop Patrol", desc: "Keep camp clean & green", icon: "♻️" },
    { id: 3, title: "Chill Host", desc: "Host in the lounge", icon: "🛋️" },
    { id: 4, title: "Meal Team", desc: "Prep & serve a meal", icon: "🍳" },
    { id: 5, title: "Strike Crew", desc: "Take down on Sunday", icon: "🧹" }
  ];
  const [jobs, setJobs] = useState(
    jobsData.map(j => ({ ...j, joined: false }))
  );

  // PUBLIC_INTERFACE
  const toggleJob = idx => setJobs(
    jobs.map((j, i) => i === idx ? { ...j, joined: !j.joined } : j)
  );

  return (
    <section>
      <h2 style={{
        color: "#e25822", fontWeight: 750, marginBottom: 20
      }}>Camp Jobs</h2>
      <div style={{
        color: "#555", marginBottom: 18
      }}>
        Sign up for shifts and help the HME village run smoothly!
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "1.3rem",
        marginBottom: 38
      }}>
        {jobs.map((job, i) => (
          <div key={job.id}
            style={{
              border: "2px solid #04bfbf",
              borderRadius: 13,
              background: "#fff",
              boxShadow: "0 2px 14px #04bfbf16",
              padding: "1.2rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "start"
            }}>
            <div style={{
              fontSize: "2.2rem", color: "#04bfbf", marginBottom: 7
            }}>{job.icon}</div>
            <div style={{
              fontWeight: 730, color: "#e25822", fontSize: "1.13rem"
            }}>{job.title}</div>
            <div style={{
              fontSize: "1.02rem", color: "#333", opacity: 0.87, marginBottom: 8
            }}>{job.desc}</div>
            <button
              style={{
                background: job.joined
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
              onClick={() => toggleJob(i)}
            >
              {job.joined ? "Signed Up" : "Sign Up"}
            </button>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#949494",
        marginTop: 30
      }}>
        Can't find a job? <span style={{
          color: "#e25822"
        }}>Propose your own job to an admin.</span>
      </div>
    </section>
  );
}

export default JobsPage;
