import { URL_MOVIES, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { FetchMoviesSuccess, FetchMoviesFail } from "../actions/FetchMovies";

const apiCallFunc = async () => {
  const res = await fetch(`${URL_MOVIES}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchMovies() {
  try {
    const apiCall = yield call(apiCallFunc);
    const payload = apiCall;
    yield put(FetchMoviesSuccess(payload));
  } catch (error) {
    yield put(FetchMoviesFail(error.message));
  }
}
function* watcherFetchMovies() {
  yield takeEvery("FETCH_MOVIES_REQUEST", workerFetchMovies);
}

export default function* rootFetchMoviesSaga() {
  yield all([fork(watcherFetchMovies)]);
}
