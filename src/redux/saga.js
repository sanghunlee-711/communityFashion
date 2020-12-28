import {
  call,
  put,
  takeEvery,
  takeLatest,
  take,
  fork,
} from "redux-saga/effects";
import {
  startFetch,
  processFetch,
  endFetch,
  START_FETCH,
} from "../redux/actions/action";
import api from "./api";

function* fetchData() {
  while (true) {
    const action = yield take(START_FETCH);
    console.log("sagaAction?", action);
    const { payload, error } = yield call(api, action.payload);
    console.log("sagapayload", payload, "action", action);
    if (payload && !error) {
      // let checkYield = yield put(processFetch(payload));
      // console.log("checkYield", checkYield);
      yield put(processFetch(payload));
    } else {
      console.log("fail?");
      yield put(endFetch(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(fetchData);
}
