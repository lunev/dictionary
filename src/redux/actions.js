import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  FETCH_DICTIONARY,
  SET_QUERY,
} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchDictionary(query) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const json = await response.json();
      dispatch({ type: FETCH_DICTIONARY, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      console.error(e);
      dispatch(showAlert("Something went wrong"));
      dispatch(hideLoader());
    }
  };
}

export function setQuery(query) {
  return (dispatch) => {
    dispatch({ type: SET_QUERY, payload: query });
  };
}
