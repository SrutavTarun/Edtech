import { Link } from "react-scroll";

import "./styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ftop">
        <div className="fleft">
          <div className="flogo"><img src={logo} alt="" className="footer-logo-img"/></div>
          {/* <div className="fltext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet,
          </div> */}
        </div>
        <div className="fleft-mid">
          <div className="fmid">
            <div className="fmhead">Useful Links</div>
            <div className="flist">
              <div className="f-mid-row1">
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
              </div>
              <div className="f-mid-row2">
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
          </div>
          <div className="fright">
            <div className="frhead">Follow us</div>
            <div className="flinks">
              <div className="f-right-row1">
                <div className="flink-item">Facebook</div>
                <div className="flink-item">Instagram</div>
              </div>
              <div className="f-right-row2">
                <div className="flink-item">Twitter</div>
                <div className="flink-item">Youtube</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fline"></div>
      <div className="fbottom">
        <div className="fcopyright">Copyright &copy; 2023 Knowlumi</div>
        <div className="f-bottom-row2">
          <div className="fprivacy">Privacy Policy</div>
          <div className="fterms">Terms &#38; Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
