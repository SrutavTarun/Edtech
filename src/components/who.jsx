import "./styles/who.css";

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
          <img src="../components/whocanjoin.png" alt="Who Can Join Image" />
        </div>
      </div>
    </div>
  );
};

export default about;
