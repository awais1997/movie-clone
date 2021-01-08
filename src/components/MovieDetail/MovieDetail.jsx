import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import "../../style/style.css";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";

const MovieDetail = (props) => {
  const {
    movieDetail,
    fetchMovieReviewRequest,
    fetchMovieDetailRequest,
    movieReview,
  } = props;

  const [getReviews, setGetReviews] = useState(false);

  useEffect(() => {
    fetchMovieDetailRequest(props?.match?.params?.movieId);
  }, [fetchMovieDetailRequest]);

  // const movie =
  //   movieDetail.length && movieDetail.find((movie) => movie.id === movieId);
  // console.log(movie);

  const getReviewFunc = (id) => {
    setGetReviews(true);
    fetchMovieReviewRequest(id);
  };
  return (
    <div className="movieDetail-container">
      {console.log("Movie Detail", movieDetail)}
      {console.log("Movie Review", movieReview)}
      <Card className="detail-card" style={{ backgroundColor: "#032541" }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
        <div className="detail-content">
          <h1>{movieDetail.title}</h1>
          <i>{movieDetail.tagline}</i>
          <h2>OverView</h2>
          <p>{movieDetail.overview}</p>
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
                <td>{movieDetail.vote_average}</td>
                <td>{movieDetail.release_date}</td>
                <td>{movieDetail.release_date}</td>
                <td>
                  {movieDetail.original_language === "en" ? "English" : "..."}
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
            {movieReview?.results?.map((review, index) => {
              return (
                <tr key={index}>
                  <td>{review.author}</td>

                  <td>{review.content.slice(0, 250)} ...</td>

                  <td>{review.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <button
          onClick={() => {
            getReviewFunc(movieDetail.id);
          }}
        >
          Get Review
        </button>
      )}
    </div>
  );
};

export default MovieDetail;
