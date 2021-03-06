import { URL_TRENDING, KEY } from "../services";
import { put, spawn, takeEvery, call, all } from "redux-saga/effects";
import {
  fetchTrendingSuccess,
  fetchTrendingFail,
} from "../actions/fetchTrending";
import axios from "axios";

// call trending api

// const callTrendingAPi = async () => {
//   const res = await fetch(`${URL_TRENDING}?api_key=${KEY}`);
//   const data = await res.json();
//   return data;
// };
const callTrendingAPi = () => {
  return axios.get(`${URL_TRENDING}?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

function* workerFetchTrending() {
  try {
    const response = yield call(callTrendingAPi);
    yield put(fetchTrendingSuccess(response));
  } catch (error) {
    yield put(fetchTrendingFail(error.message));
  }
}
function* watcherFetchTrending() {
  yield takeEvery("FETCH_TRENDING_REQUEST", workerFetchTrending);
}

export default function* rootFetchTrendingSaga() {
  yield all([spawn(watcherFetchTrending)]);
}
