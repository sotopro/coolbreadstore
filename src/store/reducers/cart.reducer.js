import { cartTypes } from "../types";

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART } = cartTypes;

const initialState = {
  data: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  return state;
};

export default cartReducer;
