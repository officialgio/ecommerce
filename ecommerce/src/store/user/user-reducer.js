import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

/**
 * This is the user reducer to override initial state. The function will
 * be used for the store object that will be globally available.
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} new state with override props.
 */
export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log("dispatching user");

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
