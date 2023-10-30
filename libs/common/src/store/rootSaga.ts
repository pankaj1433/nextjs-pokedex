import { all, fork } from "redux-saga/effects";
import searchSaga from "./search/searchSaga";

const rootSaga = function* () {
  yield all([
    fork(searchSaga),
  ]);
};

export default rootSaga;