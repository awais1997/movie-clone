import { URL_TVSHOWS, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { FetchTvshowsSuccess, FetchTvshowsFail } from "../actions/FetchTvshows";

const apiCallFunc = async () => {
  const res = await fetch(`${URL_TVSHOWS}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchTvshows() {
  try {
    const apiCall = yield call(apiCallFunc);
    const payload = apiCall;
    yield put(FetchTvshowsSuccess(payload));
  } catch (error) {
    yield put(FetchTvshowsFail(error.message));
  }
}
function* watcherFetchTvshows() {
  yield takeEvery("FETCH_TVSHOWS_REQUEST", workerFetchTvshows);
}

export default function* rootFetchTvshowsSaga() {
  yield all([fork(watcherFetchTvshows)]);
}
