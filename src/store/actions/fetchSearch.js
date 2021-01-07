export const fetchSearchRequest = (query) => {
  return {
    type: "FETCH_SEARCH_REQUEST",
    payload: query,
  };
};

export const fetchSearchSuccess = (result) => {
  return {
    type: "FETCH_SEARCH_SUCCESS",
    payload: result,
  };
};
export const fetchSearchFail = (err) => {
  return {
    type: "FETCH_SEARCH_FAIL",
    payload: err,
  };
};
