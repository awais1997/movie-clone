import { URL_TVSHOW_DETAIL, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import {
  FetchTVshowDetailSuccess,
  FetchTVshowDetailFail,
} from "../actions/FetchTVshowDetail";

const apiCallFunc = async (payload) => {
  const res = await fetch(`${URL_TVSHOW_DETAIL + payload}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchTVshowDetail({ payload }) {
  try {
    const apiCall = yield call(apiCallFunc, payload);
    const response = apiCall;
    yield put(FetchTVshowDetailSuccess(response));
  } catch (error) {
    yield put(FetchTVshowDetailFail(error.message));
  }
}
function* watcherFetchTVshowDetail() {
  yield takeEvery("FETCH_TVSHOWDETAIL_REQUEST", workerFetchTVshowDetail);
}

export default function* rootFetchTVshowDetailSaga() {
  yield all([fork(watcherFetchTVshowDetail)]);
}
