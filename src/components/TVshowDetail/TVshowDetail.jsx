import React from "react";
import { Card } from "@material-ui/core";
import "./TVshowDetail.css";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";

const TVshowDetail = (props) => {
  const { tvshowDetail, tvshowReview, fetchTVshowReviewRequest } = props;

  const getReviewFunc = (id) => {
    fetchTVshowReviewRequest(id);
  };
  return (
    <div className="TVshowDetail-container">
      {console.log("TVshow Detail", tvshowDetail)}
      {console.log("TVshow Review", tvshowReview)}

      <Card
        className="TVshowDetail-card"
        style={{ backgroundColor: "#032541" }}
      >
        <div className="TVshowDetail-image">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshowDetail.poster_path}`}
            alt={tvshowDetail.title}
          />
        </div>
        <div class="TVshowDetail-content">
          <h1>{tvshowDetail.name}</h1>
          <i>{tvshowDetail.tagline}</i>
          <h2>OverView</h2> <p>{tvshowDetail.overview}</p>
          <table>
            <tr>
              <th>
                <StarHalfOutlinedIcon />
                Rating
              </th>
              <th>Relase date</th>
              <th>
                <LanguageOutlinedIcon />
                Popularity
              </th>
              <th>
                <TranslateOutlinedIcon />
                Language
              </th>
            </tr>
            <tr>
              <td>{tvshowDetail.vote_average}</td>
              <td>{tvshowDetail.first_air_date}</td>
              <td>{tvshowDetail.popularity}</td>
              <td>
                {tvshowDetail.original_language === "en" ? "English" : "..."}
              </td>
            </tr>
          </table>
        </div>
      </Card>
      <button
        onClick={() => {
          getReviewFunc(tvshowDetail.id);
        }}
      >
        Get Review
      </button>

      <table>
        <tr>
          <th>Author</th>
          <th>Content</th>
          <th>Created At</th>
        </tr>
        {tvshowReview?.results?.map((review, index) => {
          return (
            <tr key={index}>
              <td>{review.author === null ? "No Author" : review.author}</td>
              <td>
                <p>{review.content === null ? "No Content" : review.content}</p>
              </td>
              <td>
                {review.created_at === null
                  ? "No Created Date"
                  : review.created_at}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TVshowDetail;
