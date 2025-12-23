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
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px 40px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          color:"#334155"
        }}
      >
        <h2 style={{ marginBottom: "20px", color:"#334155"}}>Contact Me</h2>
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
            style={{ textDecoration: "none", color: "#333" }}
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
            style={{ textDecoration: "none", color: "#333" }}
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
            style={{ textDecoration: "none", color: "#333" }}
          >
            linkedin.com/in/fabna-asiya-ua
          </a>
        </p>

        
      </div>
    </div>
  );
}

export default Contact;