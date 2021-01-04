export const FetchPersonDetailRequest = (id) => {
  return {
    type: "FETCH_PERSONDETAIL_REQUEST",
    payload: id,
  };
};

export const FetchPersonDetailSuccess = (person) => {
  return {
    type: "FETCH_PERSONDETAIL_SUCCESS",
    payload: person,
  };
};
export const FetchPersonDetailFail = (err) => {
  return {
    type: "FETCH_PERSONDETAIL_FAIL",
    payload: err,
  };
};
