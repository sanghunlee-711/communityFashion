import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { handleToggle, doFetch } from "./reducers/reducer";
import rootSaga from "./saga";

const sagaMiddleWare = createSagaMiddleware();

const reducer = combineReducers({
  handleToggle,
  doFetch,
});

export let store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

// export let store = createStore(reducer);
