import { fromJS } from "immutable";
const initialState = fromJS({
  isloading: false,
  error: null,
  peopleList: [],
  personDetail: [],
});

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    //Fetch People

    case "FETCH_PEOPLE_REQUEST": {
      return state;
    }
    case "FETCH_PEOPLE_SUCCESS": {
      return state.set("isloading", true).set("peopleList", action.payload);
    }
    case "FETCH_PEOPLE_FAIL": {
      return state.set("error", action.payload);
    }

    //Fetch person detail

    case "FETCH_PERSONDETAIL_REQUEST": {
      return state;
    }
    case "FETCH_PERSONDETAIL_SUCCESS": {
      return state.set("isloading", true).set("personDetail", action.payload);
    }
    case "FETCH_PERSONDETAIL_FAIL": {
      return state.set("error", action.payload);
    }
    default: {
      return state;
    }
  }
};

export default peopleReducer;
