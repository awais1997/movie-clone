export const FetchMovieDetailRequest = (id) => {
  return {
    type: "FETCH_MOVIEDETAIL_REQUEST",
    payload: id,
  };
};

export const FetchMovieDetailSuccess = (movie) => {
  return {
    type: "FETCH_MOVIEDETAIL_SUCCESS",
    payload: movie,
  };
};
export const FetchMovieDetailFail = (err) => {
  return {
    type: "FETCH_MOVIEDETAIL_FAIL",
    payload: err,
  };
};
