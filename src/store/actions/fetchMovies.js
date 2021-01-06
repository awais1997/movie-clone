export const fetchMoviesRequest = () => {
  return {
    type: "FETCH_MOVIES_REQUEST",
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: movies,
  };
};
export const fetchMoviesFail = (err) => {
  return {
    type: "FETCH_MOVIES_FAIL",
    payload: err,
  };
};
