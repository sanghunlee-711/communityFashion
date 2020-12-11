import { createStore, applyMiddleware } from "redux";
import { fetchData } from "./saga";
import { combineReducers } from "redux";
import { handleToggle } from "./reducers/reducer";

const reducer = combineReducers({
  handleToggle,
});

export let store = createStore(reducer);
