import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: <b>Social Media Web Application</b>,
      description:
        "A Django-based social media application with user authentication and posts.",
      techStack: "Python, Django, HTML, CSS, Bootstrap, SQL",
      githubLink:
        "https://github.com/Fabna-Asiya-UA/SOCIAL-MEDIA-WEB-APPLICATION.git",
      demoLink: ""
    },
    {
      id: 2,
      title: <b>Hospital Web Application</b>,
      description:
        "A web-based hospital management system designed to manage patient records, doctor appointments, and administrative operations efficiently.",
      techStack: "Python, Django, HTML, CSS, Bootstrap, SQL",
      githubLink: "https://github.com/Fabna-Asiya-UA/HOSPITAL-WEB-APPLICATION.git",
      demoLink: ""
    },
    {
      id: 3,
      title: <b>Student Management System</b>,
      description:
        "A web application to manage student records with CRUD operations.",
      techStack: "Python, Django, SQLite, HTML, CSS, Bootstrap",
      githubLink: "https://github.com/Fabna-Asiya-UA/STUDENT-MANAGEMENT-SYSTEM.git",
      demoLink: ""
    },
    {
      id: 4,
      title: <b>Portfolio Website</b> ,
      description:
        "A personal portfolio website built using React to showcase projects and skills.",
      techStack: "React, JavaScript, HTML, CSS, Bootstrap",
      githubLink: "",
      demoLink: ""
    }
  ];

  return (
    
    <div
      className="container mt-5"
      style={{ minHeight: "80vh", paddingBottom: "50px" ,color:"#334155"}} 
    >
      <h2 className="text-center mb-5" style={{ color:"#334155" }}>
        My Projects
      </h2>
      <hr />

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <ProjectCard
              title= {project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
