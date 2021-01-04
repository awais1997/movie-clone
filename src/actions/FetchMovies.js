export const FetchMoviesRequest = () => {
  return {
    type: "FETCH_MOVIES_REQUEST",
  };
};

export const FetchMoviesSuccess = (movies) => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: movies,
  };
};
export const FetchMoviesFail = (err) => {
  return {
    type: "FETCH_MOVIES_FAIL",
    payload: err,
  };
};
