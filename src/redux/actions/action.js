export const BURGER_TOGGLE = "BURGER_TOGGLE";
export const NAV_TOGGLE = "NAV_TOGGLE";
export const DO_FETCH = "DO_FETCH";
export const END_FETCH = "END_FETCH";
export const START_FETCH = "START_FETCH";
export const PROCESS_FETCH = "PROCESS_FETCH";

export function burgerToggle(burgerToggleState) {
  return {
    type: BURGER_TOGGLE,
    payload: burgerToggleState,
  };
}

export function navToggle(navToggleState) {
  return {
    type: NAV_TOGGLE,
    payload: navToggleState,
  };
}

export function doFetch(data) {
  return {
    type: DO_FETCH,
    payload: data,
  };
}

export function startFetch() {
  return {
    type: START_FETCH,
    loading: true,
  };
}

export function processFetch(data) {
  return {
    type: PROCESS_FETCH,
    payload: data,
  };
}

export function endFetch(error) {
  return {
    type: END_FETCH,
    payload: error,
  };
}
