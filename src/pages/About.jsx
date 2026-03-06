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
        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
  Hi! I’m <b>Fabna Asiya UA</b>, an aspiring Web Developer with hands-on experience in 
  <b> Python, Django, Django REST Framework, JavaScript, React, HTML, CSS, Bootstrap, and SQL</b>. 
  I enjoy building responsive and scalable web applications, developing RESTful APIs, 
  and creating clean and maintainable code.
</p>

<p style={{ lineHeight: "1.8", fontSize: "18px" }}>
  I have experience working on both frontend and backend development, integrating user interfaces 
  with backend services to build full-stack web applications. I am passionate about learning new 
  technologies, improving my development skills, and building practical solutions for real-world problems.
</p>

<p style={{ lineHeight: "1.8", fontSize: "18px" }}>
  Key Skills: <b>Python | Django | Django REST Framework | JavaScript | React | HTML | CSS | Bootstrap | SQL</b>
</p>
      </div>
    </div>
  );
}

export default About;
