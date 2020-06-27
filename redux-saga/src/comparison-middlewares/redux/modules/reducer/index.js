import { GET_USERS, FULFILLED_GET_USERS } from "../constant/";
import { all, takeLatest, put, call } from "redux-saga/effects";
import apiService from "../../service/";

const initialState = {
  users: [],
  isFulfilled: false,
};

export const fetchUsers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.results,
      };
    case FULFILLED_GET_USERS:
      return {
        isFulfilled: true,
      };
    default:
      return state;
  }
}

const sagas = function*() {
  yield all([
    takeLatest(GET_USERS, getUsers)
  ]);
};

export function* getUsers() {
  try {
    const response = yield call(apiService.getUsers);
    if (response) {
      yield put({ type: "FULFILLED_GET_USERS", users: response });
    }
  } catch (err) {
    console.error(err);
  }
}

export const modules = { sagas };
