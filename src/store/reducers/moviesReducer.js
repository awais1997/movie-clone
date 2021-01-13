import { fromJS } from "immutable";

const initialState = fromJS({
  moviesList: [],
  isloading: true,
  error: null,
  upcomingList: [],
  trendingList: [],
  movieDetail: [],
  movieReview: [],
});

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch movies

    case "FETCH_MOVIES_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_MOVIES_SUCCESS": {
      return state.set("isloading", true).set("moviesList", action.payload);
    }
    case "FETCH_MOVIES_FAIL": {
      return state.set("error", action.payload);
    }

    //Fretch Upcoming

    case "FETCH_UPCOMING_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_UPCOMING_SUCCESS": {
      return state.set("isloading", true).set("upcomingList", action.payload);
    }
    case "FETCH_UPCOMING_FAIL": {
      return state.set("error", action.payload);
    }

    //Fetch Trending

    case "FETCH_TRENDING_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_TRENDING_SUCCESS": {
      return state.set("isloading", true).set("trendingList", action.payload);
    }
    case "FETCH_TRENDING_FAIL": {
      return state.set("error", action.payload);
    }

    //Fetch Movie Detail

    case "FETCH_MOVIEDETAIL_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_MOVIEDETAIL_SUCCESS": {
      return state.set("isloading", true).set("movieDetail", action.payload);
    }
    case "FETCH_MOVIEDETAIL_FAIL": {
      return state.set("error", action.payload);
    }

    // Fetch movie Review

    case "FETCH_MOVIEREVIEW_REQUEST": {
      return state.set("isloading", false);
    }
    case "FETCH_MOVIEREVIEW_SUCCESS": {
      return state.set("isloading", true).set("movieReview", action.payload);
    }
    case "FETCH_MOVIEREVIEW_FAIL": {
      return state.set("error", action.payload);
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
