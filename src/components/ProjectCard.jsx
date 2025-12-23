import React from "react";

function ProjectCard({ title, description, techStack, githubLink, demoLink }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          {description}
        </p>

        {techStack && (
          <p className="text-muted">
            <strong>Tech Stack:</strong> {techStack}
          </p>
        )}

        <div className="d-flex gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm"
            >
              GitHub
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
