import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMysql } from "react-icons/si";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        minHeight: "80vh",
        color: "#e5e7eb",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "12px",
          color: "#f8fafc",
          letterSpacing: "1px",
        }}
      >
        <b>Fabna Asiya UA</b>
      </h1>

      <h3
        style={{
          fontSize: "24px",
          fontWeight: "400",
          marginBottom: "22px",
          color: "#cbd5f5",
        }}
      >
         Python Full Stack Developer
      </h3>

      <img
        src="images/fabna1.png"
        alt="Fabna Asiya"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          margin: "20px auto 30px",
          border: "4px solid #38bdf8",
          boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
        }}
      />

      <p
        style={{
          fontSize: "18px",
          marginBottom: "45px",
          color: "#94a3b8",
          maxWidth: "800px",
        }}
      >
        Full Stack Developer specializing in building responsive and scalable web
        applications using Python, Django, Django REST Framework, and React.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "35px",
          fontSize: "50px",
        }}
      >
        <FaPython title="Python" color="#3776AB" />
        <SiDjango title="Django" color="#22c55e" />
        <FaReact title="React" color="#61DBFB" />
        <SiHtml5 title="HTML5" color="#E34F26" />
        <SiCss3 title="CSS3" color="#3b82f6" />
        <SiJavascript title="JavaScript" color="#facc15" />
        <SiBootstrap title="Bootstrap" color="#8b5cf6" />
        <SiMysql title="SQL" color="#38bdf8" />
      </div>

      <p
        style={{
          fontWeight: "500",
          fontSize: "15px",
          color: "#cbd5f5",
          letterSpacing: "0.5px",
        }}
      >
        Python · Django · Django REST Framework · React · HTML5 · CSS3 ·
        JavaScript · Bootstrap · SQL
      </p>

      {/* Resume Button */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#334155",
            color: "#e2e4e7",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          View Resume
        </a>
      </div>

    </div>
  );
}

export default Home;