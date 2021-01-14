import { URL_UPCOMING, KEY } from "../services";
import { put, spawn, takeEvery, call, all } from "redux-saga/effects";
import {
  fetchUpcomingSuccess,
  fetchUpcomingFail,
} from "../actions/fetchUpcoming";
import axios from "axios";

// fetch upcoming api

// const apiCallFunc = async () => {
//   const res = await fetch(`${URL_UPCOMING}?api_key=${KEY}`);
//   const data = await res.json();
//   return data;
// };

const callUpcomingAPi = () => {
  return axios.get(`${URL_UPCOMING}?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};
function* workerFetchUpcoming() {
  try {
    const response = yield call(callUpcomingAPi);
    yield put(fetchUpcomingSuccess(response));
  } catch (error) {
    yield put(fetchUpcomingFail(error.message));
  }
}
function* watcherFetchUpcoming() {
  yield takeEvery("FETCH_UPCOMING_REQUEST", workerFetchUpcoming);
}

export default function* rootFetchUpcomingSaga() {
  yield all([spawn(watcherFetchUpcoming)]);
}
