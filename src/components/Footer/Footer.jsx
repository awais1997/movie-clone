import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-tabs">
        <Link to="/upcoming" className="footer-links">
          Upcoming
        </Link>
        <Link to="/tvshows" className="footer-links">
          TV shows
        </Link>
        <Link to="/trending" className="footer-links">
          Trending
        </Link>
        <Link to="/people" className="footer-links">
          People
        </Link>
      </div>
    </div>
  );
};

export default Footer;
