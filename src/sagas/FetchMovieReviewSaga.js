import { URL_MOVIE_REVIEW, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  FetchMovieReviewSuccess,
  FetchMovieReviewFail,
} from "../actions/FetchMovieReview";

const apiCallFunc = async (payload) => {
  const res = await fetch(
    `${URL_MOVIE_REVIEW + payload}/reviews?api_key=${KEY}`
  );
  const data = await res.json();
  return data;
};
function* workerFetchMovieReview({ payload }) {
  try {
    const response = yield call(apiCallFunc, payload);
    yield put(FetchMovieReviewSuccess(response));
  } catch (error) {
    yield put(FetchMovieReviewFail(error.message));
  }
}
function* watcherFetchMovieReview() {
  yield takeEvery("FETCH_MOVIEREVIEW_REQUEST", workerFetchMovieReview);
}

export default function* rootFetchMovieReviewSaga() {
  yield all([fork(watcherFetchMovieReview)]);
}
