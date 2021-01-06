import { all } from "redux-saga/effects";
import rootFetchMoviesSaga from "../sagas/fetchMoviesSaga";
import rootFetchUpcomingSaga from "../sagas/fetchUpcomingSaga";
import rootFetchTrendingSaga from "../sagas/fetchTrendingSaga";
import rootFetchTvshowsSaga from "../sagas/fetchTvshowsSaga";
import rootFetchPeopleSaga from "../sagas/fetchPeopleSaga";
import rootFetchSearchSaga from "../sagas/fetchSearchSaga";

export default function* RootSaga() {
  yield all([
    rootFetchMoviesSaga(),
    rootFetchUpcomingSaga(),
    rootFetchTrendingSaga(),
    rootFetchTvshowsSaga(),
    rootFetchPeopleSaga(),
    rootFetchSearchSaga(),
  ]);
}
