import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Social Media Web Application",
      description: "A Django-based social media application with user authentication, posts, and interactive features.",
      techStack: "Python, Django, HTML, CSS, Bootstrap, SQL",
      githubLink: "https://github.com/Fabna-Asiya-UA/SOCIAL-MEDIA-WEB-APPLICATION.git",
      demoLink: "",
      screenshots: [
        "/images/social.png",
        "/images/social2.png",
        "/images/social3.png",
      ]
    },
    {
      id: 2,
      title: "Role-Based Task & Project Management System",
      description: "A full-stack web app to manage projects and tasks with role-based access. Built with Django + DRF + JWT and React, featuring dynamic dashboards and charts.",
      techStack: "Django, DRF, JWT, React, Axios, Bootstrap, Chart.js",
      githubLink: "https://github.com/Fabna-Asiya-UA/ROLE-BASED-TASK-AND-PROJECT-MANAGEMENT-SYSTEM.git",
      demoLink: "",
      screenshots: [
        "/images/role.png.png",
        "/images/role2.png.png",
        "/images/role3.png.png",
      ]
    },
{
      id: 3,
      title: "Student Management System",
      description:
        "A web application to manage student records with CRUD operations and easy administrative access.",
      techStack: "Python, Django, SQLite, HTML, CSS, Bootstrap",
      githubLink: "https://github.com/Fabna-Asiya-UA/STUDENT-MANAGEMENT-SYSTEM.git",
      demoLink: "",
      screenshots: [
        "/images/student1.png",
        "/images/student2.png",
        "/images/student3.png",
      ],
    },
    {
      id: 4,
      title: "Hospital Web Application",
      description:
        "A web-based hospital management system to efficiently manage patient records, doctor appointments, and administrative operations.",
      techStack: "Python, Django, HTML, CSS, Bootstrap, SQL",
      githubLink: "https://github.com/Fabna-Asiya-UA/HOSPITAL-WEB-APPLICATION.git",
      demoLink: "",
      screenshots: [
        "/images/hospital1.png",
        "/images/hospital2.png",
        "/images/hospital3.png",
      ],
    },  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "#eaeef3",
        boxSizing: "border-box",
      }}
    >
      <h2
        className="text-center mb-4"
        style={{ fontSize: "2.5rem", color: "#eff1f4" }}
      >
        My Projects
      </h2>
      <hr
        style={{
          border: "1px solid #334155",
          width: "80%",
          margin: "0 auto 40px auto",
        }}
      />

      <div className="row g-4">
        {projects.map(project => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
