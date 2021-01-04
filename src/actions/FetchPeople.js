export const FetchPeopleRequest = () => {
  return {
    type: "FETCH_PEOPLE_REQUEST",
  };
};

export const FetchPeopleSuccess = (people) => {
  return {
    type: "FETCH_PEOPLE_SUCCESS",
    payload: people,
  };
};
export const FetchPeopleFail = (err) => {
  return {
    type: "FETCH_PEOPLE_FAIL",
    payload: err,
  };
};
