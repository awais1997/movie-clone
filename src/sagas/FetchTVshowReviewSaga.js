import { URL_TVSHOW_REVIEW, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  FetchTVshowReviewSuccess,
  FetchTVshowReviewFail,
} from "../actions/FetchTVshowReview";

const apiCallFunc = async (payload) => {
  const res = await fetch(
    `${URL_TVSHOW_REVIEW + payload}/reviews?api_key=${KEY}`
  );
  const data = await res.json();
  return data;
};
function* workerFetchTVshowReview({ payload }) {
  try {
    const response = yield call(apiCallFunc, payload);
    yield put(FetchTVshowReviewSuccess(response));
  } catch (error) {
    yield put(FetchTVshowReviewFail(error.message));
  }
}
function* watcherFetchTVshowReview() {
  yield takeEvery("FETCH_TVSHOWREVIEW_REQUEST", workerFetchTVshowReview);
}

export default function* rootFetchTVshowReviewSaga() {
  yield all([fork(watcherFetchTVshowReview)]);
}
