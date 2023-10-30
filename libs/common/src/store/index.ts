import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, {Task} from 'redux-saga';

import rootReducers from "./rootReducer";
import rootSaga from "./rootSaga";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([sagaMiddleware]),
  devTools: true
});

(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

