export const FetchUpcomingRequest = () => {
  return {
    type: "FETCH_UPCOMING_REQUEST",
  };
};

export const FetchUpcomingSuccess = (movies) => {
  return {
    type: "FETCH_UPCOMING_SUCCESS",
    payload: movies,
  };
};
export const FetchUpcomingFail = (err) => {
  return {
    type: "FETCH_UPCOMING_FAIL",
    payload: err,
  };
};
