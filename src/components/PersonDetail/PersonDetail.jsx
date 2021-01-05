import React from "react";
import { Card } from "@material-ui/core";
import "./PersonDetail.css";

const PersonDetail = ({ personDetail }) => {
  return (
    <div className="PersonDetail-container">
      {console.log("Person Detail", personDetail)}
      <Card
        className="PersonDetail-card"
        style={{ backgroundColor: "#032541" }}
      >
        <div className="PersonDetail-image">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${personDetail.profile_path}`}
            alt={personDetail.title}
          />
        </div>
        <div class="PersonDetail-content">
          <h1>{personDetail.name}</h1>
          <i>{personDetail.known_for_department}</i>
          <h4>Gender</h4>
          {personDetail.gender !== 1 ? "Male" : "Female"}
          <h2>Biography</h2> <p>{personDetail.biography}</p>
          <h5>Popularity</h5>
          {personDetail.popularity}
          <h5>Place of Birth</h5>
          {personDetail.place_of_birth}
        </div>
      </Card>
    </div>
  );
};

export default PersonDetail;
