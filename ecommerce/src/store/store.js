import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import { configureStore } from "@reduxjs/toolkit";

// apply any middleware in the right env
const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// root reducer with redux add-ons
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
