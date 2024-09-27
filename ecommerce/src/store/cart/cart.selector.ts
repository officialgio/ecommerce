import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

/**
 * Get the state of the cart reducer
 * @see rootReducer
 */
const selectCartReducer = (state: RootState): CartState => state.cart;

/**
 * Selects the current state for isCartOpen
 */
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

/**
 * Selects the current cartItems from the store
 */
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

/**
 * Selects the current state for cartTotal which is based off on selectCartItems
 */
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

/**
 * Selects the current state for cartCount which is based off on selectCartItems
 */
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
