export const FetchTVshowReviewRequest = (id) => {
  return {
    type: "FETCH_TVSHOWREVIEW_REQUEST",
    payload: id,
  };
};

export const FetchTVshowReviewSuccess = (tvshowReview) => {
  return {
    type: "FETCH_TVSHOWREVIEW_SUCCESS",
    payload: tvshowReview,
  };
};
export const FetchTVshowReviewFail = (err) => {
  return {
    type: "FETCH_TVSHOWREVIEW_FAIL",
    payload: err,
  };
};
