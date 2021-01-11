import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import "../../style/style.css";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";

const TVshowDetail = (props) => {
  const {
    tvshowDetail,
    tvshowReview,
    fetchTVshowReviewRequest,
    fetchTVshowDetailRequest,
  } = props;
  const [getReviews, setGetReview] = useState(false);

  useEffect(() => {
    fetchTVshowDetailRequest(props?.match?.params?.tvId);
  }, [fetchTVshowDetailRequest, props?.match?.params?.tvId]);
  const getReviewFunc = (id) => {
    setGetReview(true);
    fetchTVshowReviewRequest(id);
  };
  return (
    <div className="tvshowDetail-container">
      {console.log("TVshow Detail", tvshowDetail)}
      {console.log("TVshow Review", tvshowReview)}

      <Card className="detail-card" style={{ backgroundColor: "#032541" }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshowDetail.poster_path}`}
            alt={tvshowDetail.title}
          />
        </div>
        <div className="detail-content">
          <h1>{tvshowDetail.name}</h1>
          <i>{tvshowDetail.tagline}</i>
          <h2>OverView</h2> <p>{tvshowDetail.overview}</p>
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </Card>
      {getReviews === true ? (
        <table>
          <tbody>
            <tr>
              <th>Author</th>
              <th>Content</th>
              <th>Created At</th>
            </tr>
            {tvshowReview?.results?.map((review, index) => {
              const date = new Date(review.created_at);
              return (
                <tr key={index}>
                  <td>
                    {review.author === null ? "No Author" : review.author}
                  </td>
                  <td>
                    {review.content === null
                      ? "No Content"
                      : review.content.slice(0, 250)}
                    ...
                  </td>
                  <td>
                    {review.created_at === null
                      ? "No Created Date"
                      : date.getFullYear()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <button
          onClick={() => {
            getReviewFunc(tvshowDetail.id);
          }}
        >
          Get Review
        </button>
      )}
    </div>
  );
};

export default TVshowDetail;
