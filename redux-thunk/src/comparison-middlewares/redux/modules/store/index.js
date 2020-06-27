import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../root.js";

const reduxLogger = require("redux-logger");
const { logger } = reduxLogger;
const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

export default store;
