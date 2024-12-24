import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="contact_buttons">
        <a href="https://github.com/JohnBordner" target="_blank" id="github">
          <img src="GitHub-Symbol.png" alt="GitHub" className="contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/johnathan-bordner-9496482aa"
          target="_blank"
          id="linkedin"
        >
          <img
            src="linkedinicon.webp"
            alt="LinkedIn"
            className="contact-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
