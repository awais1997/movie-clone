import { URL_TRENDING, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  FetchTrendingSuccess,
  FetchTrendingFail,
} from "../actions/FetchTrending";

const apiCallFunc = async () => {
  const res = await fetch(`${URL_TRENDING}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchTrending() {
  try {
    const apiCall = yield call(apiCallFunc);
    const payload = apiCall;
    yield put(FetchTrendingSuccess(payload));
  } catch (error) {
    yield put(FetchTrendingFail(error.message));
  }
}
function* watcherFetchTrending() {
  yield takeEvery("FETCH_TRENDING_REQUEST", workerFetchTrending);
}

export default function* rootFetchTrendingSaga() {
  yield all([fork(watcherFetchTrending)]);
}
