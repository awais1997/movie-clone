import React from "react";
import { Card } from "@material-ui/core";
import "./MovieDetail.css";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";

const MovieDetail = (props) => {
  const { movieDetail, fetchMovieReviewRequest, movieReview } = props;
  // useEffect(() => {
  //   console.log("Movie id for review:", movieDetail.id);
  //   //movieDetail.length && FetchMovieReviewRequest(movieDetail.id);
  // }, [movieDetail]);

  const getReviewFunc = (id) => {
    fetchMovieReviewRequest(id);
  };
  return (
    <div className="MovieDetail-container">
      {console.log("Movie Detail", movieDetail)}
      {console.log("Movie Review", movieReview)}

      <Card className="MovieDetail-card" style={{ backgroundColor: "#032541" }}>
        <div className="MovieDetail-image">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
        <div className="MovieDetail-content">
          <h1>{movieDetail.title}</h1>
          <i>{movieDetail.tagline}</i>
          <h2>OverView</h2> <p>{movieDetail.overview}</p>
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
              <td>{movieDetail.vote_average}</td>
              <td>{movieDetail.release_date}</td>
              <td>{movieDetail.release_date}</td>
              <td>
                {movieDetail.original_language === "en" ? "English" : "..."}
              </td>
            </tr>
          </table>
        </div>
      </Card>
      <button
        onClick={() => {
          getReviewFunc(movieDetail.id);
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
        {movieReview?.results?.map((review, index) => {
          return (
            <tr key={index}>
              <td>{review.author}</td>
              <td>
                <p>{review.content}</p>
              </td>
              <td>{review.created_at}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MovieDetail;
