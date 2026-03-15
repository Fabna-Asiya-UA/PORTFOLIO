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
          borderRadius: "15px", 
          boxShadow: "0 8px 20px rgba(254, 250, 250, 0.25)" 
        }}
      >
        <h2 style={{ color:"#e6e8ee", textAlign: "center", marginBottom: "20px" }}>About Me</h2>
        <hr style={{ marginBottom: "20px", border: "0", height: "2px", background: "#ecf0fa" }} />

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          Hi! I'm <b>Fabna Asiya UA</b>, a passionate <b> Python Full Stack Web Developer</b> with hands-on experience 
          in building modern web applications using both frontend and backend technologies. 
          I specialize in developing scalable backend systems using Python and Django, and 
          creating responsive user interfaces using React and modern web technologies.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          I have experience developing RESTful APIs, implementing authentication systems such as JWT, 
          and integrating frontend applications with backend services. Through my projects, 
          I have built full-stack applications including a social media platform and a role-based 
          task and project management system.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          I enjoy solving real-world problems through technology and continuously learning new 
          tools and frameworks to improve my development skills.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          <b>Key Skills:</b> Python | Django | Django REST Framework | JavaScript | React | HTML | CSS | Bootstrap | SQL
        </p>

      </div>
    </div>
  );
}

export default About;