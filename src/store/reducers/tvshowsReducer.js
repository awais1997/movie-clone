import { fromJS } from "immutable";

const initialState = fromJS({
  isloading: true,
  error: null,
  tvshowsList: [],
  tvshowDetail: [],
  tvshowReview: [],
});

const tvshowsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch TV shows

    case "FETCH_TVSHOWS_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_TVSHOWS_SUCCESS": {
      return state.set("isloading", true).set("tvshowsList", action.payload);
    }
    case "FETCH_TVSHOWS_FAIL": {
      return state.set("error", action.payload);
    }

    //Fetch tvshow detail

    case "FETCH_TVSHOWDETAIL_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_TVSHOWDETAIL_SUCCESS": {
      return state.set("isloading", true).set("tvshowDetail", action.payload);
    }
    case "FETCH_TVSHOWDETAIL_FAIL": {
      return state.set("error", action.payload);
    }

    //Fetch movie Tv show review

    case "FETCH_TVSHOWREVIEW_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_TVSHOWREVIEW_SUCCESS": {
      return state.set("isloading", true).set("tvshowReview", action.payload);
    }
    case "FETCH_TVSHOWREVIEW_FAIL": {
      return state.set("error", action.payload);
    }

    default: {
      return state;
    }
  }
};

export default tvshowsReducer;
