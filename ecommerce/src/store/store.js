import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// runs before an action hits a reducer
// This can take many types of middleware. Therefore, ensure to compose.
// const middleware = [logger];

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

const composedEnhancers = compose(applyMiddleware(loggerMiddleware));

// root reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
