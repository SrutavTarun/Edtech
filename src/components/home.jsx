import "./styles/home.css";
import homeImage from "../assets/home.png";

const home = () => {
  return (
    <div className="home" id="home">
      <div className="home-left">
        <div className="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="home-links">
          <div className="home-learnMore">LEARN MORE</div>
          <div className="home-getInTouch">GET IN TOUCH</div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-homeImage">
          <img src={homeImage} alt="Home" />
        </div>
      </div>
    </div>
  );
};

export default home;
