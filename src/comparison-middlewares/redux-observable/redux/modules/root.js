import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { pingUsers } from "./epic/"
import { fetchUsers } from "./reducer/";

export const rootEpic = combineEpics(
  pingUsers
);

export const rootReducer = combineReducers({
  fetchUsers
});
