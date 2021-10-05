import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { dictionaryReducer } from "./dictionaryReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  dictionary: dictionaryReducer,
});
