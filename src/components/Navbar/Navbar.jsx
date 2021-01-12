import React from "react";
import { Link } from "react-router-dom";
import { AppBar, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/logo.svg";
import "../../style/style.css";

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
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-tabs">
            <Link to="/upcoming" className="navbar-link">
              Upcoming
            </Link>
            <Link to="/trending" className="navbar-link">
              Trending
            </Link>
            <Link to="/tvshows" className="navbar-link">
              TV shows
            </Link>
            <Link to="/people" className="navbar-link">
              People
            </Link>
            <Link to="/search" className="navbar-link">
              <SearchIcon className="navbar-icon" />
            </Link>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
