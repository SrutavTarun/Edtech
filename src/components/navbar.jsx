import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT US</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#" className="contact">CONTACT US</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
