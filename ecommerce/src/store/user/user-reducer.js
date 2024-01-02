export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

// state is the INITIAL_STATE and action is the dispatch
export const userReducer = (state = INITIAL_STATE, action) => {
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
