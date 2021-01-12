import React, { useEffect } from "react";
import { Card } from "@material-ui/core";
import "../../style/style.css";

const PersonDetail = (props) => {
  const { personDetail, fetchPersonDetailRequest } = props;
  useEffect(() => {
    fetchPersonDetailRequest(props?.match?.params?.personId);
  }, [fetchPersonDetailRequest, props?.match?.params?.personId]);

  return (
    <div className="personDetail-container">
      {console.log("Person Detail", personDetail)}
      <Card className="detail-card" style={{ backgroundColor: "#032541" }}>
        <div>
          <img
            src={
              personDetail.profile_path === undefined
                ? ""
                : `https://image.tmdb.org/t/p/w220_and_h330_face${personDetail.profile_path}`
            }
            alt={personDetail.title}
          />
        </div>
        <div className="detail-content">
          <h1>{personDetail.name}</h1>
          <i>{personDetail.known_for_department}</i>
          <h2>Biography</h2> <p>{personDetail.biography}</p>
          <table>
            <tbody>
              <tr>
                <th>Popularity</th>
                <th>Gender</th>
                <th>Place of Birth</th>
              </tr>
              <tr>
                <td>{personDetail.popularity}</td>
                <td>{personDetail.gender !== 1 ? "Male" : "Female"}</td>
                <td>{personDetail.place_of_birth}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PersonDetail;
