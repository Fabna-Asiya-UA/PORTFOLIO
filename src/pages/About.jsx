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
        backgroundColor: "#FFFFFF",
        color:"#334155"
      }}
    >
      <div 
        style={{ 
          maxWidth: "800px", 
          backgroundColor: "white", 
          padding: "30px", 
          borderRadius: "15px", 
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)" 
        }}
      >
        <h2 style={{ color:"#334155", textAlign: "center", marginBottom: "20px" }}>About Me</h2>
        <hr style={{ marginBottom: "20px" }} />
        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          Hi! I’m <b>Fabna Asiya UA</b>, an aspiring Full Stack Developer with hands-on training in <b>Python, Django, HTML, CSS, JavaScript, React, SQL, and Bootstrap</b>. I’m passionate about building scalable web applications and writing clean, efficient code.
        </p>
        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          I love continuous learning and enjoy solving real-world problems through technology. I’m eager to contribute to dynamic development teams, and I’m seeking a challenging role where I can apply my full stack skills while growing as a developer in a collaborative environment.
        </p>
      </div>
    </div>
  );
}

export default About;
