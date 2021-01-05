export const FetchMovieReviewRequest = (id) => {
  return {
    type: "FETCH_MOVIEREVIEW_REQUEST",
    payload: id,
  };
};

export const FetchMovieReviewSuccess = (movieReview) => {
  return {
    type: "FETCH_MOVIEREVIEW_SUCCESS",
    payload: movieReview,
  };
};
export const FetchMovieReviewFail = (err) => {
  return {
    type: "FETCH_MOVIEREVIEW_FAIL",
    payload: err,
  };
};
