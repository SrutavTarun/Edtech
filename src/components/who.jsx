import "./styles/who.css";
import whobg from "../assets/whocanjoin.png";
const about = () => {
  return (
    <div className="whomain">
      <div className="whoheading">
        <h2>WHO CAN JOIN US?</h2>
        <div className="whounderline"></div>
      </div>
      <div className="whobody">
        <div className="who-container">
          <div className="who">Lorem ipsum dolor sit amet</div>
          <div className="who">Lorem ipsum dolor sit amet</div>
          <div className="who">Lorem ipsum dolor sit amet</div>
          <div className="who">Lorem ipsum dolor sit amet</div>
          <div className="who">Lorem ipsum dolor sit amet</div>
        </div>
        <div className="who-img">
          <img src={whobg} alt="Who Can Join Image" />
        </div>
      </div>
    </div>
  );
};

export default about;
