import { combineReducers } from "redux";
import fetchUsers from "./reducer/";

export const rootReducer = combineReducers({
  fetchUsers
});
