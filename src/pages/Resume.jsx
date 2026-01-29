import "./Resume.css";

function Resume() {
  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0f172a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 0,
        margin: 0,
        color: "#e2e4e7",
        overflow: "hidden",
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
          flex: 1,
          width: "100%",
          border: "none",
          backgroundColor: "#0f172a", // fill background
        }}
      >
        Your browser does not support PDF preview.
      </iframe>
    </section>
  );
}

export default Resume;
