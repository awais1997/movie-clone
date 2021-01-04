import { URL_MOVIE_DETAIL, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  FetchMovieDetailSuccess,
  FetchMovieDetailFail,
} from "../actions/FetchMovieDetail";

const apiCallFunc = async (payload) => {
  const res = await fetch(`${URL_MOVIE_DETAIL + payload}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchMovieDetail({ payload }) {
  try {
    const apiCall = yield call(apiCallFunc, payload);
    const response = apiCall;
    yield put(FetchMovieDetailSuccess(response));
  } catch (error) {
    yield put(FetchMovieDetailFail(error.message));
  }
}
function* watcherFetchMovieDetail() {
  yield takeEvery("FETCH_MOVIEDETAIL_REQUEST", workerFetchMovieDetail);
}

export default function* rootFetchMovieDetailSaga() {
  yield all([fork(watcherFetchMovieDetail)]);
}
