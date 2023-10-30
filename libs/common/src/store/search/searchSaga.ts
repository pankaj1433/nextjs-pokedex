import { takeEvery, put } from "redux-saga/effects";
import type { AxiosResponse } from "axios";
import apiService from "../../utils/apiService";
import { getSearchData } from "./searchActions";
import searchSlice from '.';

const { get } = apiService();
const { setSearchData } = searchSlice.actions;

export function* fetchData() {
  try {
    const response: AxiosResponse<unknown> = yield get(`https://pokeapi.co/api/v2/pokemon/ditto`);
    yield put(setSearchData(response.data));
    
  } catch (error) {
    // yield put(getUserErrorAction(error));
  }
}

export default function* searchSaga() {
  yield takeEvery(getSearchData, fetchData);
}
