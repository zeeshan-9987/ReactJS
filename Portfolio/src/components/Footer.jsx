import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>Zeeshan</h2>

        <p>
          Frontend Developer | React.js | Next.js
        </p>

        <div className="social-icons">

  <a
    href="https://github.com/zeeshan-9987"
    target="_blank"
    rel="noreferrer"
  >
    <i className="ri-github-fill"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/zeeshan-ansari01"
    target="_blank"
    rel="noreferrer"
  >
    <i className="ri-linkedin-box-fill"></i>
  </a>

</div>

        <p className="copyright">
          © 2026  All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}