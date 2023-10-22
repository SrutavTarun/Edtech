import "./styles/home.css";
import homeImage from "../assets/home.png";

const home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="links">
          <div className="learnMore">LEARN MORE</div>
          <div className="getInTouch">GET IN TOUCH</div>
        </div>
      </div>
      <div className="right">
        <div className="homeImage">
          <img src={homeImage} alt="Home" />
        </div>
      </div>
    </div>
  );
};

export default home;
