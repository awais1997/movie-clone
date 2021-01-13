import { fromJS } from "immutable";

const initialState = fromJS({
  moviesList: [],
  isloading: true,
  error: null,
  searchResult: [],
});

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    //Fetch search result

    case "FETCH_SEARCH_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_SEARCH_SUCCESS": {
      return state.set("isloading", true).set("searchResult", action.payload);
    }
    case "FETCH_SEARCH_FAIL": {
      return state.set("error", action.payload);
    }

    default: {
      return state;
    }
  }
};

export default searchReducer;
