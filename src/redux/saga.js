import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { startFetch, processFetch, endFetch } from "../redux/actions/action";

export function* fetchData(payload) {
  const BaseURL = "https://sanghunlee-711.github.io/communityFashion";

  try {
    yield call(startFetch());

    fetch(`${BaseURL}/data/data.json`, {})
      .then((res) => res.json())
      .then((res) => {
        call(processFetch(res["main-data"]));
      });
  } catch (err) {
    yield call(endFetch(err.message));
    console.log("errMessage", err.message);
    console.log("err", err);
  }
}
