export const fetchTrendingRequest = () => {
  return {
    type: "FETCH_TRENDING_REQUEST",
  };
};

export const fetchTrendingSuccess = (movies) => {
  return {
    type: "FETCH_TRENDING_SUCCESS",
    payload: movies,
  };
};
export const fetchTrendingFail = (err) => {
  return {
    type: "FETCH_TRENDING_FAIL",
    payload: err,
  };
};
