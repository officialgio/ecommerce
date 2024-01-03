import USER_ACTION_TYPES from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

/**
 * This is a function that will return the object of the type and payload.
 * @param {Object} user
 */
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
