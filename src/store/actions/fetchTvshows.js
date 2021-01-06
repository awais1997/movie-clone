export const fetchTvshowsRequest = () => {
  return {
    type: "FETCH_TVSHOWS_REQUEST",
  };
};

export const fetchTvshowsSuccess = (shows) => {
  return {
    type: "FETCH_TVSHOWS_SUCCESS",
    payload: shows,
  };
};
export const fetchTvshowsFail = (err) => {
  return {
    type: "FETCH_TVSHOWS_FAIL",
    payload: err,
  };
};
