// runs before an action hits a reducer
// This can take many types of middleware. Therefore, ensure to compose.

import { Middleware } from "redux";
import { RootState } from "../store";

// const middleware = [logger];
export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: any) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
  };
