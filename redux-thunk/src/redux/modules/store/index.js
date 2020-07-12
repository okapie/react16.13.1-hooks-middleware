import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import fetchUsers from "../reducer/";

const middlewares = [thunk, routerMiddleware(history)];
if (process.env.NODE_ENV === "development") {
  const reduxLogger = require("redux-logger");
  const { logger } = reduxLogger;
  middlewares.push(logger);
}

export default (history) =>
  createStore(
    combineReducers({
      fetchUsers,
      router: connectRouter(history),
    }),
    applyMiddleware(...middlewares)
  )
