import { FETCH_DICTIONARY, SET_QUERY } from "./types";

const initialState = {
  fetchedDictionary: [],
  query: "",
};

export const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DICTIONARY:
      return { ...state, fetchedDictionary: action.payload };
    case SET_QUERY: {
      return { ...state, query: action.payload };
    }
    default:
      return state;
  }
};
