export const FetchTrendingRequest = () => {
  return {
    type: "FETCH_TRENDING_REQUEST",
  };
};

export const FetchTrendingSuccess = (movies) => {
  return {
    type: "FETCH_TRENDING_SUCCESS",
    payload: movies,
  };
};
export const FetchTrendingFail = (err) => {
  return {
    type: "FETCH_TRENDING_FAIL",
    payload: err,
  };
};
