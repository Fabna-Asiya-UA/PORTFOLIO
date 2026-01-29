import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "40px",
        background: "linear-gradient(135deg, #0f172a, #020617)",      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #020617)",
          padding: "30px 40px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(234, 228, 228, 0.82)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          color:"#e9ecf1"
        }}
      >
        <h2 style={{ marginBottom: "20px", color:"#d0d7df"}}>Contact Me</h2>
        <hr style={{ marginBottom: "20px" }} />

        <p
          style={{
            fontSize: "18px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <FaEnvelope />
          <a
            href="mailto:fabnaasiya22@gmail.com"
            style={{ textDecoration: "none", color: "#f5f1f1" }}
          >
            fabnaasiya22@gmail.com
          </a>
        </p>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <FaGithub />
          <a
            href="https://github.com/Fabna-Asiya-UA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#f1ecec" }}
          >
            github.com/Fabna-Asiya-UA
          </a>
        </p>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/fabna-asiya-ua"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#e7dfdf" }}
          >
            linkedin.com/in/fabna-asiya-ua
          </a>
        </p>

        
      </div>
    </div>
  );
}

export default Contact;