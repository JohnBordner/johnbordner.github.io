import "./Footer.css";
import linkedin from "/linkedinicon.webp";
import github from "/GitHub-Symbol.png";

const Footer = () => {
  return (
    <footer>
      <div className="contact_buttons">
        <a href="https://github.com/JohnBordner" target="_blank" id="github">
          <div className="icon-container">
            <img src={github} alt="GitHub" className="contact-icon" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/johnathan-bordner-9496482aa"
          target="_blank"
          id="linkedin"
        >
          <div className="icon-container">
            <img src={linkedin} alt="LinkedIn" className="contact-icon" />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
