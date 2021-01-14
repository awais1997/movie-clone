import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <h1>Welcome</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <div className="banner-form">
          <input
            className="banner-form-input"
            type="text"
            placeholder="Search for a movie, tv show, person......"
          />
          <button className="banner-form-btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
