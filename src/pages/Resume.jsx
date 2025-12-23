import "./Resume.css";

function Resume() {
  return (
    <section className="resume-container">
      <h2 className="resume-title" style={{color:"#334155"}}>My Resume</h2><br />
      <hr />

     

      <div className="resume-actions">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="resume-btn outline"
        >
          Download Resume
        </a>
      </div>

      <div className="resume-preview">
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          loading="lazy"
        >
          Your browser does not support PDF preview.
        </iframe>
      </div>
    </section>
  );
}

export default Resume;
