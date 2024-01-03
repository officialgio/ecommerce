import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";

/**
 * Holds all reducers that are in used.
 */
export const rootReducer = combineReducers({
  user: userReducer,
});
