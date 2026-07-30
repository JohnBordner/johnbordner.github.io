import "./Bio.css";
import ImageContainer from "../ImageContainer/ImageContainer";
import headshot from "/headshot.jpg";

const Bio = () => {
  return (
    <div className="home-all">
      <ImageContainer src={headshot} alt="Headshot" />
      <div className="home-content">
        <h1>John Bordner</h1>
        <h3>Software Developer</h3>
        <p id="mainpara">
          I build web applications and work with embedded systems, focusing on clean engineering from software to hardware.
        </p>
      </div>
    </div>
  );
};

export default Bio;
