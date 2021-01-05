export const FetchSearchRequest = (query) => {
  return {
    type: "FETCH_SEARCH_REQUEST",
    payload: query,
  };
};

export const FetchSearchSuccess = (result) => {
  return {
    type: "FETCH_SEARCH_SUCCESS",
    payload: result,
  };
};
export const FetchSearchFail = (err) => {
  return {
    type: "FETCH_SEARCH_FAIL",
    payload: err,
  };
};
