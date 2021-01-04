import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/logo/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-container">
          <img className="Footer-logo" src={logo} alt="logo" />
    
          <Link className="Footer-links">Upcoming</Link>
          <Link className="Footer-links">TV shows</Link>
          <Link className="Footer-links">Trending</Link>
          <Link className="Footer-links">People</Link>

    </div>
  );
};

export default Footer;
