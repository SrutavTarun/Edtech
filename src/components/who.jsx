import "./styles/who.css";
import whobg from "../assets/whocanjoin.png";
const about = () => {
  return (
    <div className="whomain">
      <div className="whoheading">
        <h2>WHO CAN JOIN US?</h2>
        <div className="whounderline"></div>
      </div>
      <div class="whobody">
        <div class="who-container">
          <div class="who">Lorem ipsum dolor sit amet</div>
          <div class="who">Lorem ipsum dolor sit amet</div>
          <div class="who">Lorem ipsum dolor sit amet</div>
          <div class="who">Lorem ipsum dolor sit amet</div>
          <div class="who">Lorem ipsum dolor sit amet</div>
        </div>
        <div class="who-img">
          <img src={whobg} alt="Who Can Join Image" />
        </div>
      </div>
    </div>
  );
};

export default about;
