import {
  NAV_TOGGLE,
  BURGER_TOGGLE,
  START_FETCH,
  PROCESS_FETCH,
  END_FETCH,
} from "../actions/action";
import { states } from "../../redux/states.js";

export let handleToggle = (state = states.burgerToggleState, action) => {
  let newState;
  switch (action.type) {
    case BURGER_TOGGLE:
      newState = state;
      newState = !action.payload;

      console.log("burgerWork!", newState);

      return newState;

    default:
      break;
  }
  return state;
};

export let doFetch = (state = states.data, action) => {
  switch (action.type) {
    case START_FETCH:
      console.log("STARTFETCH?", action.payload);
      return {
        ...state,
        loading: true,
      };
    case PROCESS_FETCH:
      console.log("processFETCH", action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case END_FETCH:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      break;
  }
  return state;
};
