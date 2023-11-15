import { Link } from "react-scroll";
import { useState } from "react";

import "./styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={`nav-navbar ${mobileMenu ? 'active' : ''}`}>
      <div className="nav-logo"><img src={logo} alt="" className="nav-logo-img"/></div>
      <div>
        <ul>
          <li>
            <Link to="home" smooth={true} offset={-70} duration={500}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-70} duration={500}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-70} duration={500}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-contact"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile" onClick={toggleMobileMenu}>
        {mobileMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>
    </div>
  );
};

export default Navbar;
