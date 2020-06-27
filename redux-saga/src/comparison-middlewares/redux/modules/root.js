import { combineReducers } from "redux";
import { fork, all } from "redux-saga/effects"
import { fetchUsers, modules } from "./reducer/";

export const rootReducer = combineReducers({
  fetchUsers
});

export const sagas = {
  queue: function* saga() {
    yield all([
      fork(modules.sagas)
    ])
  }
}
