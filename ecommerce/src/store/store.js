import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'] // blaclist these reducers
}

// Setup persisted reducer for the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(loggerMiddleware));

// root reducer with redux add-ons
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);