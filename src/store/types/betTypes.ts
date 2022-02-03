export const UPDATE_NUMBERS = 'UPDATE_NUMBERS';
export const CLEAR_NUMBERS = 'CLEAR_NUMBERS';
export const COMPLETE_NUMBERS = 'COMPLETE_NUMBERS';

export type BetState = number[]

type UpdateNumbersAction = {
  type: typeof UPDATE_NUMBERS;
  payload: number[]
}

type CompleteNumbersAction = {
  type: typeof COMPLETE_NUMBERS;
  payload: number[]
}

type ClearNumbersAction = {
  type: typeof CLEAR_NUMBERS;
  payload: number[]
}

export type BetActionTypes = UpdateNumbersAction | CompleteNumbersAction | ClearNumbersAction