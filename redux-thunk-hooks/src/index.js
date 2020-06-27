import React  from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import client from "axios";

import App from "./App";
import user from "./customHooksRedux/user";

const reducer = combineReducers({
  user,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const thunkWithClient = thunk.withExtraArgument(client);
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkWithClient)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
