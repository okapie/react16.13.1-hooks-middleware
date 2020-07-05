const LOAD = "user/LOAD";

const initialState = {
  users: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        users: action.results,
      };
    default:
      return state
  }
}

export function load() {
  return (dispatch, getState, client) =>
    client
      .get("http://127.0.0.1:8080/api/v1/user")
      .then(response => {
        dispatch({ type: LOAD, results: response.data })
      })
}
