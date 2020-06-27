import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import getUsers from "./epic/"
import fetchUsers from "./reducer/";

export const rootEpic = combineEpics(
  getUsers
);

export const rootReducer = combineReducers({
  fetchUsers
});
