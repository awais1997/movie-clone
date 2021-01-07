import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-container">
      <h1>Welcome</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <div className="Banner-form">
        <input
          className="Banner-form-input"
          type="text"
          placeholder="Search for a movie, tv show, person......"
        />
        <button className="Banner-form-btn">Search</button>
      </div>
    </div>
  );
};

export default Banner;
