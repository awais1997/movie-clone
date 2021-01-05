import { URL_PERSON_DETAIL, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  FetchPersonDetailSuccess,
  FetchPersonDetailFail,
} from "../actions/FetchPersonDetail";

const apiCallFunc = async (payload) => {
  const res = await fetch(`${URL_PERSON_DETAIL + payload}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchPersonDetail({ payload }) {
  try {
    const response = yield call(apiCallFunc, payload);
    yield put(FetchPersonDetailSuccess(response));
  } catch (error) {
    yield put(FetchPersonDetailFail(error.message));
  }
}
function* watcherFetchPersonDetail() {
  yield takeEvery("FETCH_PERSONDETAIL_REQUEST", workerFetchPersonDetail);
}

export default function* rootFetchPersonDetailSaga() {
  yield all([fork(watcherFetchPersonDetail)]);
}
