import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsReducer";
import { dictionaryReducer } from "./dictionaryReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
  dictionary: dictionaryReducer,
});
