const initialState = {
  moviesList: [],
  isloading: false,
  error: null,
  upcomingList: [],
  trendingList: [],
  tvshowsList: [],
  peopleList: [],
  movieDetail: [],
  tvshowDetail: [],
  personDetail: [],
  movieReview: [],
  tvshowReview: [],
  searchResult: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_MOVIES_SUCCESS": {
      return {
        ...state,
        isloading: true,
        moviesList: action.payload,
      };
    }
    case "FETCH_MOVIES_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }

    //Fretch UpcomingMOVIEREVIEW

    case "FETCH_UPCOMING_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_UPCOMING_SUCCESS": {
      return {
        ...state,
        isloading: true,
        upcomingList: action.payload,
      };
    }
    case "FETCH_UPCOMING_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }

    //Fetch Trending

    case "FETCH_TRENDING_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_TRENDING_SUCCESS": {
      return {
        ...state,
        isloading: true,
        trendingList: action.payload,
      };
    }
    case "FETCH_TRENDING_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }

    // Fetch TV shows

    case "FETCH_TVSHOWS_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_TVSHOWS_SUCCESS": {
      return {
        ...state,
        isloading: true,
        tvshowsList: action.payload,
      };
    }
    case "FETCH_TVSHOWS_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }

    //Fetch People

    case "FETCH_PEOPLE_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_PEOPLE_SUCCESS": {
      return {
        ...state,
        isloading: true,
        peopleList: action.payload,
      };
    }
    case "FETCH_PEOPLE_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }
    //Fetch Movie Detail

    case "FETCH_MOVIEDETAIL_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_MOVIEDETAIL_SUCCESS": {
      return {
        ...state,
        isloading: true,
        movieDetail: action.payload,
      };
    }
    case "FETCH_MOVIEDETAIL_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }

    //Fetch tvshow detail

    case "FETCH_TVSHOWDETAIL_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_TVSHOWDETAIL_SUCCESS": {
      return {
        ...state,
        isloading: true,
        tvshowDetail: action.payload,
      };
    }
    case "FETCH_TVSHOWDETAIL_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }
    //Fetch person detail
    case "FETCH_PERSONDETAIL_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_PERSONDETAIL_SUCCESS": {
      return {
        ...state,
        isloading: true,
        personDetail: action.payload,
      };
    }
    case "FETCH_PERSONDETAIL_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }
    // Fetch movie Review
    case "FETCH_MOVIEREVIEW_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_MOVIEREVIEW_SUCCESS": {
      return {
        ...state,
        isloading: true,
        movieReview: action.payload,
      };
    }
    case "FETCH_MOVIEREVIEW_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }
    //Fetch movie Tv show review
    case "FETCH_TVSHOWREVIEW_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_TVSHOWREVIEW_SUCCESS": {
      return {
        ...state,
        isloading: true,
        tvshowReview: action.payload,
      };
    }
    case "FETCH_TVSHOWREVIEW_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }
    //Fetch search result
    case "FETCH_SEARCH_REQUEST": {
      return {
        ...state,
      };
    }
    case "FETCH_SEARCH_SUCCESS": {
      return {
        ...state,
        isloading: true,
        searchResult: action.payload,
      };
    }
    case "FETCH_SEARCH_FAIL": {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
