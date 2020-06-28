import { GET_USERS } from "../constant/";

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        users: action.results,
      };
    default:
      return state;
  }
}
