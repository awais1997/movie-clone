export const fetchUpcomingRequest = () => {
  return {
    type: "FETCH_UPCOMING_REQUEST",
  };
};

export const fetchUpcomingSuccess = (movies) => {
  return {
    type: "FETCH_UPCOMING_SUCCESS",
    payload: movies,
  };
};
export const fetchUpcomingFail = (err) => {
  return {
    type: "FETCH_UPCOMING_FAIL",
    payload: err,
  };
};
