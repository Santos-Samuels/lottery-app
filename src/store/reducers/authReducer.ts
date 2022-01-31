import { AuthActionTypes, AuthState, LOG_IN } from "@store/types/authTypes";

const initialState: AuthState = null

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  if (action.type === LOG_IN)
    return action.payload

  return state
}