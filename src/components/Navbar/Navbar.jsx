import React from "react";
import { Link } from "react-router-dom";
import { AppBar, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./logo/logo.svg";
import "./Navbar.css";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "#032541",
    height: 70,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <div className="Navbar-container">
          <div className="Navbar-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="Navbar-tabs">
            <Link to="/upcoming" className="Navbar-link">
              Upcoming
            </Link>
            <Link to="/trending" className="Navbar-link">
              Trending
            </Link>
            <Link to="/tvshows" className="Navbar-link">
              TV shows
            </Link>
            <Link to="/people" className="Navbar-link">
              People
            </Link>
            <Link to="/search" className="Navbar-link">
              <SearchIcon className="Navbar-icon" />
            </Link>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
