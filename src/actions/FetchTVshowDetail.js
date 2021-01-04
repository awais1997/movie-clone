export const FetchTVshowDetailRequest = (id) => {
  return {
    type: "FETCH_TVSHOWDETAIL_REQUEST",
    payload: id,
  };
};

export const FetchTVshowDetailSuccess = (tvshow) => {
  return {
    type: "FETCH_TVSHOWDETAIL_SUCCESS",
    payload: tvshow,
  };
};
export const FetchTVshowDetailFail = (err) => {
  return {
    type: "FETCH_TVSHOWDETAIL_FAIL",
    payload: err,
  };
};
