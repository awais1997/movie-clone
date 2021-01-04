export const FetchTvshowsRequest = () => {
  return {
    type: "FETCH_TVSHOWS_REQUEST",
  };
};

export const FetchTvshowsSuccess = (shows) => {
  return {
    type: "FETCH_TVSHOWS_SUCCESS",
    payload: shows,
  };
};
export const FetchTvshowsFail = (err) => {
  return {
    type: "FETCH_TVSHOWS_FAIL",
    payload: err,
  };
};
