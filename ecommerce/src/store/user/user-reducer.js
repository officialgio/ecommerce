import { createSlice } from "@reduxjs/toolkit";
import USER_ACTION_TYPES from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

/**
 * The slice object that handles state management for user in
 * the redux store.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
})

// action
export const { setCurrentUser } = userSlice;

// reducer
export const userReducer = userSlice.reducer;

