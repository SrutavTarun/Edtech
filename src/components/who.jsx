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
          <div className="who">
            Creators : Whether you are a teacher, industry expert, or passionate
            about a subject, you can join us as a creator . We welcome anyone
            with knowledge to share
          </div>
          <div className="who">
            Students : If you're eager to learn, you can join us as a student.
            Our platform is designed to accommodate learners of all levels and
            backgrounds.
          </div>
          <div className="who">
            Organisations :Companies and organisations can also join us to
            provide training and professional development courses for their
            employees.
          </div>
        </div>
        <div className="who-img">
          <img src={whobg} alt="Who Can Join Image" />
        </div>
      </div>
    </div>
  );
};

export default about;
