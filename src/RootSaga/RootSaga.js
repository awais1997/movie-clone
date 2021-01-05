import { all } from "redux-saga/effects";
import rootFetchMoviesSaga from "../sagas/FetchMoviesSaga";
import rootFetchUpcomingSaga from "../sagas/FetchUpcomingSaga";
import rootFetchTrendingSaga from "../sagas/FetchTrendingSaga";
import rootFetchTvshowsSaga from "../sagas/FetchTvshowsSaga";
import rootFetchPeopleSaga from "../sagas/FetchPeopleSaga";
import rootFetchMovieDetailSaga from "../sagas/FetchMovieDetailSaga";
import rootFetchTVshowDetailSaga from "../sagas/FetchTVshowDetailSaga";
import rootFetchPersonDetailSaga from "../sagas/FetchPersonDetailSaga";
import rootFetchMovieReviewSaga from "../sagas/FetchMovieReviewSaga";
import rootFetchTVshowReviewSaga from "../sagas/FetchTVshowReviewSaga";
import rootFetchSearchSaga from "../sagas/FetchSearchSaga";

export default function* RootSaga() {
  yield all([
    rootFetchMoviesSaga(),
    rootFetchUpcomingSaga(),
    rootFetchTrendingSaga(),
    rootFetchTvshowsSaga(),
    rootFetchPeopleSaga(),
    rootFetchMovieDetailSaga(),
    rootFetchTVshowDetailSaga(),
    rootFetchPersonDetailSaga(),
    rootFetchMovieReviewSaga(),
    rootFetchTVshowReviewSaga(),
    rootFetchSearchSaga(),
  ]);
}
