import { URL_PEOPLE, URL_PERSON_DETAIL, KEY } from "../services";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { fetchPeopleSuccess, fetchPeopleFail } from "../actions/fetchPeople";
import {
  fetchPersonDetailSuccess,
  fetchPersonDetailFail,
} from "../actions/fetchPersonDetail";

// call People api

const callPeopleApi = async () => {
  const res = await fetch(`${URL_PEOPLE}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchPeople() {
  try {
    const response = yield call(callPeopleApi);
    yield put(fetchPeopleSuccess(response));
  } catch (error) {
    yield put(fetchPeopleFail(error.message));
  }
}
function* watcherFetchPeople() {
  yield takeEvery("FETCH_PEOPLE_REQUEST", workerFetchPeople);
}

//call Person detail api

const callPersonDetailApi = async (payload) => {
  const res = await fetch(`${URL_PERSON_DETAIL + payload}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchPersonDetail({ payload }) {
  try {
    const response = yield call(callPersonDetailApi, payload);
    yield put(fetchPersonDetailSuccess(response));
  } catch (error) {
    yield put(fetchPersonDetailFail(error.message));
  }
}
function* watcherFetchPersonDetail() {
  yield takeEvery("FETCH_PERSONDETAIL_REQUEST", workerFetchPersonDetail);
}
export default function* rootFetchPeopleSaga() {
  yield all([fork(watcherFetchPeople), fork(watcherFetchPersonDetail)]);
}
