export const fetchTVshowDetailRequest = (id) => {
  return {
    type: "FETCH_TVSHOWDETAIL_REQUEST",
    payload: id,
  };
};

export const fetchTVshowDetailSuccess = (tvshow) => {
  return {
    type: "FETCH_TVSHOWDETAIL_SUCCESS",
    payload: tvshow,
  };
};
export const fetchTVshowDetailFail = (err) => {
  return {
    type: "FETCH_TVSHOWDETAIL_FAIL",
    payload: err,
  };
};
