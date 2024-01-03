// import { createContext, useState, useEffect, useReducer } from "react";
// import {
//   onAuthStateChangedListener,
//   signOutUser,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";

// import { createAction } from "../utils/reducer/reducer.utils";

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// // state is the INITIAL_STATE and action is the dispatch
// const userReducer = (state, action) => {
//   const { type, payload } = action;
//   console.log("dispatching user");

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`unhandled type ${type} in userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
