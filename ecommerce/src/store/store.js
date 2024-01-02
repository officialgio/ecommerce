import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// runs before an action hits a reducer
// This can take many types of middleware. Therefore, ensure to compose.
const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

// root reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
