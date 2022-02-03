import { IBet } from "@shared/interfaces";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export type CartState = { items: IBet[], totalAmount: number }

type AddCartAction = {
  type: typeof ADD_TO_CART;
  payload: CartState
}

type RemoveCartAction = {
  type: typeof REMOVE_FROM_CART;
  payload: CartState
}

type ClearCartAction = {
  type: typeof CLEAR_CART;
  payload: CartState
}

export type CartActionTypes = AddCartAction | RemoveCartAction | ClearCartAction