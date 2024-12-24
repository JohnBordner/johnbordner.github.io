import "./Footer.css";
import linkedin from "/linkedinicon.webp";
import github from "/GitHub-Symbol.png";

const Footer = () => {
  return (
    <footer>
      <div className="contact_buttons">
        <a href="https://github.com/JohnBordner" target="_blank" id="github">
          <img src={github} alt="GitHub" className="contact-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/johnathan-bordner-9496482aa"
          target="_blank"
          id="linkedin"
        >
          <img src={linkedin} alt="LinkedIn" className="contact-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
