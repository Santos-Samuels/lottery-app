import { BetState, BetActionTypes, COMPLETE_NUMBERS, CLEAR_NUMBERS, UPDATE_NUMBERS } from "@store/types/betTypes";

const initialState: BetState = []

export const betReducer = (state = initialState, action: BetActionTypes) => {
  if (action.type === UPDATE_NUMBERS)
    return action.payload

  if (action.type === COMPLETE_NUMBERS)
    return action.payload

  if (action.type === CLEAR_NUMBERS)
    return action.payload

  return state
}