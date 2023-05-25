import { cartTypes } from "../types";

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  item: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmOrder = (order) => ({
  type: CONFIRM_ORDER,
  order,
});
