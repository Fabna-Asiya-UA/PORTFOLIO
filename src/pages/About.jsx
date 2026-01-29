import React from "react";

function About() {
  return (
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: "40px", 
        minHeight: "80vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color:"#dde1e9"
      }}
    >
      <div 
        style={{ 
          maxWidth: "800px", 
          width: "90%",
          padding: "30px", 
          // color:"white",
          borderRadius: "15px", 
          boxShadow: "0 8px 20px rgba(254, 250, 250, 0.25)" 
        }}
      >
        <h2 style={{ color:"#e6e8ee", textAlign: "center", marginBottom: "20px" }}>About Me</h2>
        <hr style={{ marginBottom: "20px", border: "0", height: "2px", background: "#ecf0fa" }} />
        <p style={{ lineHeight: "1.8", fontSize: "18px"  }}>
          Hi! I’m <b>Fabna Asiya UA</b>, an aspiring Full Stack Developer with hands-on experience in 
          <b> Python, Django, Django REST Framework, JavaScript, React, HTML, CSS, Bootstrap, SQL</b>. 
          I enjoy building scalable, user-friendly web applications and writing clean, efficient code.
        </p>
        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          I’m passionate about solving real-world problems through technology, continuously learning new tools, 
          and contributing to collaborative development teams. I’m seeking opportunities where I can apply my full stack skills, 
          grow as a developer, and create impactful web solutions.
        </p>
        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          Key Skills: <b>Python | Django | Django REST Framework | JavaScript | React | HTML | CSS | Bootstrap | SQL</b>
        </p>
      </div>
    </div>
  );
}

export default About;
