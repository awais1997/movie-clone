import axios from "axios";
import {
  URL_MOVIES,
  URL_MOVIE_DETAIL,
  URL_MOVIE_REVIEW,
  KEY,
} from "../services";
import { put, spawn, takeEvery, call, all } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMoviesFail } from "../actions/fetchMovies";
import {
  fetchMovieDetailSuccess,
  fetchMovieDetailFail,
} from "../actions/fetchMovieDetail";

import {
  fetchMovieReviewSuccess,
  fetchMovieReviewFail,
} from "../actions/fetchMovieReview";

//call Movies api

// const callMoviesApi = async () => {
//   const res = await fetch(`${URL_MOVIES}?api_key=${KEY}`);
//   const data = await res.json();
//   return data;
// };

const callMoviesApi = () => {
  return axios.get(`${URL_MOVIES}?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};
function* workerFetchMovies() {
  try {
    const response = yield call(callMoviesApi);
    yield put(fetchMoviesSuccess(response));
  } catch (error) {
    yield put(fetchMoviesFail(error.message));
  }
}
function* watcherFetchMovies() {
  yield takeEvery("FETCH_MOVIES_REQUEST", workerFetchMovies);
}

// call Movie detail api

// const callMovieDetailApi = async (payload) => {
//   const res = await fetch(`${URL_MOVIE_DETAIL + payload}?api_key=${KEY}`);
//   const data = await res.json();
//   return data;
// };
const callMovieDetailApi = (payload) => {
  return axios
    .get(`${URL_MOVIE_DETAIL + payload}?api_key=${KEY}`)
    .then((res) => {
      return res.data;
    });
};
function* workerFetchMovieDetail({ payload }) {
  try {
    const response = yield call(callMovieDetailApi, payload);
    yield put(fetchMovieDetailSuccess(response));
  } catch (error) {
    yield put(fetchMovieDetailFail(error.message));
  }
}
function* watcherFetchMovieDetail() {
  yield takeEvery("FETCH_MOVIEDETAIL_REQUEST", workerFetchMovieDetail);
}

// call Movie Review api

// const callMovieReviewApi = async (payload) => {
//   const res = await fetch(
//     `${URL_MOVIE_REVIEW + payload}/reviews?api_key=${KEY}`
//   );
//   const data = await res.json();
//   return data;
// };
const callMovieReviewApi = (payload) => {
  return axios
    .get(`${URL_MOVIE_REVIEW + payload}/reviews?api_key=${KEY}`)
    .then((res) => {
      return res.data;
    });
};
function* workerFetchMovieReview({ payload }) {
  try {
    const response = yield call(callMovieReviewApi, payload);
    yield put(fetchMovieReviewSuccess(response));
  } catch (error) {
    yield put(fetchMovieReviewFail(error.message));
  }
}
function* watcherFetchMovieReview() {
  yield takeEvery("FETCH_MOVIEREVIEW_REQUEST", workerFetchMovieReview);
}

export default function* rootFetchMoviesSaga() {
  yield all([
    spawn(watcherFetchMovies),
    spawn(watcherFetchMovieDetail),
    spawn(watcherFetchMovieReview),
  ]);
}
