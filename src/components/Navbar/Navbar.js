import React from "react";
import "./style/Navbar.css";
import logo1 from "../../images/logo1.png";
import contact from "../../images/contact-icon.png";
const Navbar = () => {
  return (
    <nav className="Navbar_main">
      <div className="logo1_div">
        <img className="logo1" src={logo1} alt="" />
      </div>
      <div className="Navbar_right">
        <p>Contact us</p>
        <img className="contact_icon" src={contact} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
