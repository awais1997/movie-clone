import { URL_SEARCH, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { FetchSearchSuccess, FetchSearchFail } from "../actions/FetchSearch";

const apiCallFunc = async (payload) => {
  const res = await fetch(
    `${URL_SEARCH}?api_key=${KEY}&language=en-US&query=${payload}&page=1&include_adult=false`
  );
  const data = await res.json();
  return data;
};
function* workerFetchSearch({ payload }) {
  try {
    const response = yield call(apiCallFunc, payload);
    yield put(FetchSearchSuccess(response));
  } catch (error) {
    yield put(FetchSearchFail(error.message));
  }
}
function* watcherFetchSearch() {
  yield takeEvery("FETCH_SEARCH_REQUEST", workerFetchSearch);
}

export default function* rootFetchSearchSaga() {
  yield all([fork(watcherFetchSearch)]);
}
