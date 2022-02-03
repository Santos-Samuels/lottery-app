import { IGameRole } from "@shared/interfaces";
import {
  BetActionTypes,
  CLEAR_NUMBERS,
  COMPLETE_NUMBERS,
  UPDATE_NUMBERS,
} from "@store/types/betTypes";
import { Dispatch } from "redux";

export const updateNumbers = (
  dispatch: Dispatch<BetActionTypes>,
  betNumbers: number[],
  number: number
) => {
  let updetedNumbers: number[] = []

  if (!betNumbers.includes(number))
    updetedNumbers = [...betNumbers, number];
  else
    updetedNumbers = betNumbers.filter((num) => num !== number);
  
  dispatch({ type: UPDATE_NUMBERS, payload: updetedNumbers });
};

export const completeNumbers = (
  dispatch: Dispatch<BetActionTypes>,
  betNumbers: number[],
  currentRule: IGameRole
) => {
  const newNumbers = [...betNumbers];

  while (newNumbers.length < currentRule.max_number) {
    let num = Math.floor(Math.random() * currentRule.range + 1);

    if (!newNumbers.includes(num)) {
      newNumbers.push(num);
    }
  }

  dispatch({ type: COMPLETE_NUMBERS, payload: newNumbers });
};

export const clearNumbers = (dispatch: Dispatch<BetActionTypes>) => {
  dispatch({ type: CLEAR_NUMBERS, payload: [] });
};
