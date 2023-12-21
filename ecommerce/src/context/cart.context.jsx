import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Find if there's an already cartItem with the same id
  // to increment the count respectively
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment the quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified/new cart item (initially added to cart)
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], // current # of items in cart
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Compute cart count when user picks a new item to be added to cart
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // Add cart items
  const addItemToCart = (product) => {
    setCartItem(addCartItem(cartItems, product));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

