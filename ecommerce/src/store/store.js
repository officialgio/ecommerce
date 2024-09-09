import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import { thunk } from 'redux-thunk';
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"], // blaclist these reducers
  whiteList: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

// Setup persisted reducer for the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// apply any middleware in the right env
const middlewares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(
  Boolean
);

// apply redux devtools in the right env
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// This will take either compose or some composeEnhancer
// If you're adding additional middleware, set up the enhancers accordingly.
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// root reducer with redux add-ons
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

// run the root saga that contains all sagas
sagaMiddleware.run(rootSaga);

// The main store that will be available in index react app.
export const persistor = persistStore(store);
