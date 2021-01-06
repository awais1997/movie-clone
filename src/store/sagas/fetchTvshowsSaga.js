import {
  URL_TVSHOWS,
  URL_TVSHOW_DETAIL,
  URL_TVSHOW_REVIEW,
  KEY,
} from "../services";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { fetchTvshowsSuccess, fetchTvshowsFail } from "../actions/fetchTvshows";
import {
  fetchTVshowDetailSuccess,
  fetchTVshowDetailFail,
} from "../actions/fetchTVshowDetail";

import {
  fetchTVshowReviewSuccess,
  fetchTVshowReviewFail,
} from "../actions/fetchTVshowReview";

// call TV shows api

const callTVshowsApi = async () => {
  const res = await fetch(`${URL_TVSHOWS}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchTvshows() {
  try {
    const response = yield call(callTVshowsApi);
    yield put(fetchTvshowsSuccess(response));
  } catch (error) {
    yield put(fetchTvshowsFail(error.message));
  }
}
function* watcherFetchTvshows() {
  yield takeEvery("FETCH_TVSHOWS_REQUEST", workerFetchTvshows);
}

// call TV show Detail api

const callTVshowDetailApi = async (payload) => {
  const res = await fetch(`${URL_TVSHOW_DETAIL + payload}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchTVshowDetail({ payload }) {
  try {
    const response = yield call(callTVshowDetailApi, payload);
    yield put(fetchTVshowDetailSuccess(response));
  } catch (error) {
    yield put(fetchTVshowDetailFail(error.message));
  }
}
function* watcherFetchTVshowDetail() {
  yield takeEvery("FETCH_TVSHOWDETAIL_REQUEST", workerFetchTVshowDetail);
}

// call TV show Review api

const callTVshowReviewApi = async (payload) => {
  const res = await fetch(
    `${URL_TVSHOW_REVIEW + payload}/reviews?api_key=${KEY}`
  );
  const data = await res.json();
  return data;
};
function* workerFetchTVshowReview({ payload }) {
  try {
    const response = yield call(callTVshowReviewApi, payload);
    yield put(fetchTVshowReviewSuccess(response));
  } catch (error) {
    yield put(fetchTVshowReviewFail(error.message));
  }
}
function* watcherFetchTVshowReview() {
  yield takeEvery("FETCH_TVSHOWREVIEW_REQUEST", workerFetchTVshowReview);
}

export default function* rootFetchTvshowsSaga() {
  yield all([
    fork(watcherFetchTvshows),
    fork(watcherFetchTVshowDetail),
    fork(watcherFetchTVshowReview),
  ]);
}
