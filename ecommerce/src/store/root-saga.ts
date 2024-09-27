import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/category.saga";
import { userSaga } from "./user/user.saga";

/**
 * The main Saga
 */
export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)]);
}
