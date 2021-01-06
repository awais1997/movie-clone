export const fetchPeopleRequest = () => {
  return {
    type: "FETCH_PEOPLE_REQUEST",
  };
};

export const fetchPeopleSuccess = (people) => {
  return {
    type: "FETCH_PEOPLE_SUCCESS",
    payload: people,
  };
};
export const fetchPeopleFail = (err) => {
  return {
    type: "FETCH_PEOPLE_FAIL",
    payload: err,
  };
};
