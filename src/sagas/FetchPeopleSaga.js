import { URL_PEOPLE, KEY } from "./api/api";
import { put, fork, takeEvery, call, all } from "redux-saga/effects";
import { FetchPeopleSuccess, FetchPeopleFail } from "../actions/FetchPeople";

const apiCallFunc = async () => {
  const res = await fetch(`${URL_PEOPLE}?api_key=${KEY}`);
  const data = await res.json();
  return data;
};
function* workerFetchPeople() {
  try {
    const response = yield call(apiCallFunc);
    yield put(FetchPeopleSuccess(response));
  } catch (error) {
    yield put(FetchPeopleFail(error.message));
  }
}
function* watcherFetchPeople() {
  yield takeEvery("FETCH_PEOPLE_REQUEST", workerFetchPeople);
}

export default function* rootFetchPeopleSaga() {
  yield all([fork(watcherFetchPeople)]);
}
