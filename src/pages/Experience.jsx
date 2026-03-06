import React from "react";

function Experience() {
  const experiences = [
  {
    company: "DataSpark Analytics LLP, Calicut",
    role: "Web Developer Intern",
    duration: "June 2025 – December 2025",
    description: [
      "Worked on front-end and back-end web development using Python and Django.",
      "Developed responsive web pages using HTML, CSS, and Bootstrap.",
      "Built and tested web application features following Django’s MVT architecture.",
      "Assisted in developing and integrating RESTful APIs for web applications.",
      "Improved understanding of debugging, code optimization, and web development best practices."
    ]
  }
];
  return (
    <div style={{ padding: "50px", minHeight: "80vh" ,color:"#f1f4f8" ,background: "linear-gradient(135deg, #0f172a, #020617)",
}}>
      <h1 style={{ textAlign: "center", marginBottom: "40px"  , color:"#e7e9ec"}}>Experience</h1>
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
 