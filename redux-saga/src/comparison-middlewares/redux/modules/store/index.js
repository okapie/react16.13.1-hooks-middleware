import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer, sagas } from "../root.js";

const saga = createSagaMiddleware();
const middlewares = [saga];

const reduxLogger = require("redux-logger");
const { logger } = reduxLogger;
middlewares.push(logger);

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

store.runSagaTask = () => (store.sagaTask = saga.run(sagas.queue));
store.runSagaTask();

export default store;
