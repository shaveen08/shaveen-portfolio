import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        Shaveen<span>.</span>
      </div>
      <p className="footer-text">© 2025 Shaveen Kumar · Chennai, India</p>
      <div className="footer-socials">
        <a
          href="https://github.com/shaveen08"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          title="GitHub"
        >
          GH
        </a>
        <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          title="Behance"
        >
          Be
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          title="LinkedIn"
        >
          in
        </a>
      </div>
    </footer>
  );
};

export default Footer;