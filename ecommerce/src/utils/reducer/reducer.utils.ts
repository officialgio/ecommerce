import { AnyAction } from "redux-saga";

/**
 * Extends an action creator with a `type` property and a `match` function for type checking.
 *
 * @template AC - The type of the action creator.
 */
type Matchable<AC extends () => AnyAction> = AC & {
  /** The type of the action, inferred from the action creator. */
  type: ReturnType<AC>["type"];

  /**
   * Type guard to check if a given action matches the type of the action creator.
   *
   * @param action - The action to check.
   * @returns `true` if the action matches the type of the action creator, otherwise `false`.
   */
  match(action: AnyAction): action is ReturnType<AC>;
};

////////////////// Function Overloads /////////////////////

/**
 * Enhances an action creator with a `type` property and a `match` function.
 *
 * @template AC - The type of the action creator.
 * @param actionCreator - The action creator function to be enhanced.
 * @returns The enhanced action creator with a `type` property and `match` function.
 */
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

/**
 * Enhances an action creator with a `type` property and a `match` function.
 *
 * @template AC - The type of the action creator.
 * @param actionCreator - The action creator function to be enhanced.
 * @returns The enhanced action creator with a `type` property and `match` function.
 */
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

/**
 * Implementation of the `withMatcher` function.
 *
 * @param actionCreator - The action creator function to be enhanced.
 * @returns The enhanced action creator with a `type` property and `match` function.
 */
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

////////////////// Function Overloads /////////////////////

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void // action without payloads
): Action<T>;

/**
 * A helper function that will help top return an object that
 * will help make your dispatch readable.
 * @param {String} type of action.
 * @param {Object} payload is passed to reducers.
 * @returns {Object} object of both props: type and payload
 */
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
