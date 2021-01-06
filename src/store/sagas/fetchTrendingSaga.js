import { URL_TRENDING, KEY } from "../services";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  fetchTrendingSuccess,
  fetchTrendingFail,
} from "../actions/fetchTrending";

const apiCallFunc = async () => {
  const res = await fetch(`${URL_TRENDING}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchTrending() {
  try {
    const response = yield call(apiCallFunc);
    yield put(fetchTrendingSuccess(response));
  } catch (error) {
    yield put(fetchTrendingFail(error.message));
  }
}
function* watcherFetchTrending() {
  yield takeEvery("FETCH_TRENDING_REQUEST", workerFetchTrending);
}

export default function* rootFetchTrendingSaga() {
  yield all([fork(watcherFetchTrending)]);
}
