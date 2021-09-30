import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  FETCH_DICTIONARY,
  CLEAN_DICTIONARY,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

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

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
    dispatch(hideLoader());
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

export function cleanDictionary() {
  return (dispatch) => {
    dispatch({ type: CLEAN_DICTIONARY });
  };
}
