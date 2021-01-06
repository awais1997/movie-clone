import { URL_UPCOMING, KEY } from "../services";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  fetchUpcomingSuccess,
  fetchUpcomingFail,
} from "../actions/fetchUpcoming";

const apiCallFunc = async () => {
  const res = await fetch(`${URL_UPCOMING}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchUpcoming() {
  try {
    const response = yield call(apiCallFunc);
    yield put(fetchUpcomingSuccess(response));
  } catch (error) {
    yield put(fetchUpcomingFail(error.message));
  }
}
function* watcherFetchUpcoming() {
  yield takeEvery("FETCH_UPCOMING_REQUEST", workerFetchUpcoming);
}

export default function* rootFetchUpcomingSaga() {
  yield all([fork(watcherFetchUpcoming)]);
}
