export const fetchTVshowReviewRequest = (id) => {
  return {
    type: "FETCH_TVSHOWREVIEW_REQUEST",
    payload: id,
  };
};

export const fetchTVshowReviewSuccess = (tvshowReview) => {
  return {
    type: "FETCH_TVSHOWREVIEW_SUCCESS",
    payload: tvshowReview,
  };
};
export const fetchTVshowReviewFail = (err) => {
  return {
    type: "FETCH_TVSHOWREVIEW_FAIL",
    payload: err,
  };
};
