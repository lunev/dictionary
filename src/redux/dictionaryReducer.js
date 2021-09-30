import { FETCH_DICTIONARY, CLEAN_DICTIONARY } from "./types";

const initialState = {
  fetchedDictionary: [],
};

export const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DICTIONARY:
      return { ...state, fetchedDictionary: action.payload };
    case CLEAN_DICTIONARY:
      return { ...state, fetchedDictionary: [] };
    default:
      return state;
  }
};
