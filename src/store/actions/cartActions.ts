import { IBet, IGameRole } from "@shared/interfaces";
import {
  ADD_TO_CART,
  CartActionTypes,
  CartState,
  CLEAR_CART,
} from "@store/types/cartTypes";
import { Alert } from "react-native";
import { Dispatch } from "redux";

const cartAlert = (title: string, message: string) => {
  Alert.alert(title, message, [
    { text: "OK" },
  ]);
};

export const addToCart = (
  dispatch: Dispatch<CartActionTypes>,
  cartState: CartState,
  newItem: number[],
  currentRule: IGameRole
) => {
  const sortedNewItem = newItem.sort((a: number, b: number) => a - b);

  if (
    sortedNewItem.length === currentRule.max_number &&
    !cartState.items.some(
      (item) => item.choosen_numbers === sortedNewItem.toLocaleString()
    )
  ) {
    const newCartItem: IBet = {
      id: Date.now(),
      choosen_numbers: sortedNewItem.toLocaleString(),
      created_at: new Date().toJSON(),
      updated_at: new Date().toJSON(),
      game_id: currentRule.id,
      price: currentRule.price,
      user_id: 0,
    };

    cartAlert('Item adicionado!', 'sei la')
    dispatch({ type: ADD_TO_CART, payload: { items: [...cartState.items, newCartItem], totalAmount: cartState.totalAmount + newCartItem.price } });
    return true
  }

  if (cartState.items.some(item => item.choosen_numbers === sortedNewItem.toLocaleString())) {
    cartAlert('Ops!', 'This bet is already in the cart')
    return false
  }

  cartAlert('Ops!', `You need ${currentRule.max_number - sortedNewItem.length} numbers to fill your bet`)
  return false
};

export const removeFromCart = (
  dispatch: Dispatch<CartActionTypes>,
  cartState: CartState,
  itemId: number
) => {
  const item = cartState.items.find(item => item.id === itemId)
  const updatedItems = cartState.items.filter(item => item.id !== itemId)
  
  dispatch({ type: ADD_TO_CART, payload: { items: updatedItems, totalAmount: cartState.totalAmount - item!.price } });
};

export const clearCart = (dispatch: Dispatch<CartActionTypes>) => {
  dispatch({ type: CLEAR_CART, payload: { items: [], totalAmount: 0 } });
};
