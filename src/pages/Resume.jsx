import "./Resume.css";

function Resume() {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#0f172a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#e2e4e7",
      }}
    >
      {/* Title */}
      <h2 style={{ marginTop: "20px", marginBottom: "10px", color: "#e2e4e7" }}>
        My Resume
      </h2>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#334155",
            color: "#e2e4e7",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          style={{
            padding: "10px 20px",
            border: "2px solid #e2e4e7",
            borderRadius: "8px",
            color: "#e2e4e7",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>
      </div>

      {/* PDF Preview */}
      <iframe
        src="/resume.pdf#zoom=page-width"
        title="Resume Preview"
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
          backgroundColor: "#0f172a",
        }}
      >
        Your browser does not support PDF preview.
      </iframe>
    </section>
  );
}

export default Resume;