import { ADD_TO_CART, CartActionTypes, CartState, CLEAR_CART, REMOVE_FROM_CART } from "@store/types/cartTypes"

const initialState: CartState = { items: [], totalAmount: 0 }

export const cartReducer = (state = initialState, action: CartActionTypes) => {
  if (action.type === ADD_TO_CART)
    return action.payload

  if (action.type === REMOVE_FROM_CART)
    return action.payload

  if (action.type === CLEAR_CART)
    return action.payload

  return state
}