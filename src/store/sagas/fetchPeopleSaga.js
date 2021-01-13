import { URL_PEOPLE, URL_PERSON_DETAIL, KEY } from "../services";
import { put, spawn, takeEvery, call, all } from "redux-saga/effects";
import { fetchPeopleSuccess, fetchPeopleFail } from "../actions/fetchPeople";
import {
  fetchPersonDetailSuccess,
  fetchPersonDetailFail,
} from "../actions/fetchPersonDetail";
import axios from "axios";

// call People api

// const callPeopleApi = async () => {
//   const res = await fetch(`${URL_PEOPLE}?api_key=${KEY}`);
//   const data = await res.json();
//   return data;
// };

const callPeopleApi = () => {
  return axios.get(`${URL_PEOPLE}?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

function* workerFetchPeople() {
  console.log(" api start");
  try {
    const response = yield call(callPeopleApi);
    yield put(fetchPeopleSuccess(response));
  } catch (error) {
    yield put(fetchPeopleFail(error.message));
  }
  console.log("api end");
}
function* watcherFetchPeople() {
  console.log("spawn  start");
  yield takeEvery("FETCH_PEOPLE_REQUEST", workerFetchPeople);
  console.log("spawn  end");
}

//call Person detail api

// const callPersonDetailApi = async (payload) => {
//   const res = await fetch(`${URL_PERSON_DETAIL + payload}?api_key=${KEY}`);
//   const data = await res.json();
//   return data;
// };

const callPersonDetailApi = (payload) => {
  return axios
    .get(`${URL_PERSON_DETAIL + payload}?api_key=${KEY}`)
    .then((res) => {
      return res.data;
    });
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
  console.log("main start");
  yield all([spawn(watcherFetchPeople), spawn(watcherFetchPersonDetail)]);
  console.log("main end");
}
