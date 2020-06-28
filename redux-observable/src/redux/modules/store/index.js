import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer } from "../root.js";

const epicMiddleware = createEpicMiddleware();
const reduxLogger = require("redux-logger");
const { logger } = reduxLogger;
const store = createStore(
  rootReducer,
  applyMiddleware(logger, epicMiddleware)
);

export default store;
