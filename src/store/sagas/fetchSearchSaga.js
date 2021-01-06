import { URL_SEARCH, KEY } from "../services";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { fetchSearchSuccess, fetchSearchFail } from "../actions/fetchSearch";

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
    yield put(fetchSearchSuccess(response));
  } catch (error) {
    yield put(fetchSearchFail(error.message));
  }
}
function* watcherFetchSearch() {
  yield takeEvery("FETCH_SEARCH_REQUEST", workerFetchSearch);
}

export default function* rootFetchSearchSaga() {
  yield all([fork(watcherFetchSearch)]);
}
