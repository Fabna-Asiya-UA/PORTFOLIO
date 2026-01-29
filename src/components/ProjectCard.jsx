import React, { useState } from "react";

function ProjectCard({ title, description, techStack, githubLink, demoLink, screenshots }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div
      className="card h-100"
      style={{
        background: "#1e293b",
        color: "#eaeef3",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p><b>Tech Stack:</b> {techStack}</p>

      {/* Screenshots */}
      {screenshots && screenshots.length > 0 && (
        <div style={{ margin: "10px 0" }}>
          <h6>Screenshots:</h6>
          <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
            {screenshots.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                style={{
                  width: "120px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  cursor: "pointer",
                  flex: "0 0 auto",
                }}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <img
            src={screenshots[photoIndex]}
            alt="Full screenshot"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}

      <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
