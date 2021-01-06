export const fetchPersonDetailRequest = (id) => {
  return {
    type: "FETCH_PERSONDETAIL_REQUEST",
    payload: id,
  };
};

export const fetchPersonDetailSuccess = (person) => {
  return {
    type: "FETCH_PERSONDETAIL_SUCCESS",
    payload: person,
  };
};
export const fetchPersonDetailFail = (err) => {
  return {
    type: "FETCH_PERSONDETAIL_FAIL",
    payload: err,
  };
};
