import React from "react";

function Experience() {
  const experiences = [
    {
      company: "DataSpark Analytics LLP Calicut",
      role: "Python FullStack Developer Intern",
      duration: "June 2025 – December 2025",
      description: [
        "Gained hands-on experience in front-end and back-end web development using modern technologies.",
        "Learned to build dynamic, responsive websites and web applications.",
        "Managed static and media files efficiently and followed MVT architecture to maintain clean project structure.",
        "Acquired strong programming skills in Python, including object-oriented programming and data handling.",
        "Developed web applications using Django and Bootstrap frameworks."
      ]
    }
  ];

  return (
    <div style={{ padding: "50px", minHeight: "80vh" ,color:"#334155"}}>
      <h1 style={{ textAlign: "center", marginBottom: "40px"  , color:"#334155"}}>Experience</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2><b>{exp.role}</b> @ {exp.company}</h2>
            <h4 style={{ color: "#555" }}>{exp.duration}</h4>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
