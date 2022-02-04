import { AuthActionTypes, AuthState, EDIT_USER_INFO, LOG_IN, LOG_OUT } from "@store/types/authTypes";

const initialState: AuthState = {token: '', user: null}

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  if (action.type === LOG_IN)
    return action.payload

  if (action.type === LOG_OUT)
    return action.payload

  if (action.type === EDIT_USER_INFO)
    return action.payload

  return state
}