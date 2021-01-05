import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/logo/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Footer-tabs">
        <Link to="/upcoming" className="Footer-links">
          Upcoming
        </Link>
        <Link to="/tvshows" className="Footer-links">
          TV shows
        </Link>
        <Link to="/trending" className="Footer-links">
          Trending
        </Link>
        <Link to="/people" className="Footer-links">
          People
        </Link>
      </div>
    </div>
  );
};

export default Footer;
