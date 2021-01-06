export const fetchMovieDetailRequest = (id) => {
  return {
    type: "FETCH_MOVIEDETAIL_REQUEST",
    payload: id,
  };
};

export const fetchMovieDetailSuccess = (movie) => {
  return {
    type: "FETCH_MOVIEDETAIL_SUCCESS",
    payload: movie,
  };
};
export const fetchMovieDetailFail = (err) => {
  return {
    type: "FETCH_MOVIEDETAIL_FAIL",
    payload: err,
  };
};
