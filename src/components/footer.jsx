import { Link } from "react-scroll";

import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ftop">
        <div className="fleft">
          <div className="flogo">LOGO</div>
          {/* <div className="fltext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet,
          </div> */}
        </div>
        <div className="fmid">
          <div className="fmhead">Useful Links</div>
          <div className="flist">
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className="flist-item"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="flist-item"
            >
              About Us
            </Link>
            <Link
              to="services"
              smooth={true}
              offset={-70}
              duration={500}
              className="flist-item"
            >
              Services
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="flist-item"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="fright">
          <div className="frhead">Follow us</div>
          <div className="flinks">
            <div className="flink-item">Facebook</div>
            <div className="flink-item">Instagram</div>
            <div className="flink-item">Twitter</div>
            <div className="flink-item">Youtube</div>
          </div>
        </div>
      </div>
      <div className="fline"></div>
      <div className="fbottom">
        <div className="fcopyright">&copy; Copyright Logo</div>
        <div className="fprivacy">Privacy Policy</div>
        <div className="fterms">Terms &#38; Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
