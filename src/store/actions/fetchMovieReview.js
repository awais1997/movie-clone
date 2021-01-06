export const fetchMovieReviewRequest = (id) => {
  return {
    type: "FETCH_MOVIEREVIEW_REQUEST",
    payload: id,
  };
};

export const fetchMovieReviewSuccess = (movieReview) => {
  return {
    type: "FETCH_MOVIEREVIEW_SUCCESS",
    payload: movieReview,
  };
};
export const fetchMovieReviewFail = (err) => {
  return {
    type: "FETCH_MOVIEREVIEW_FAIL",
    payload: err,
  };
};
