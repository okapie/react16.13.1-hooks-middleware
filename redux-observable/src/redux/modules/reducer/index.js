import { GET_USERS, FULFILLED_GET_USERS } from "../constant/";

const initialState = {
  users: [],
  isFulfilled: false,
};

export default (state = initialState, action) => {
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
