import { IUser } from "@shared/interfaces"

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const EDIT_USER_INFO = 'EDIT_USER_INFO'
export const SIGN_UP = 'SIGN_UP'
export const RESET_PASSWORD = 'RESET_PASSWORD'

export type AuthState = {
    token: string,
    user: IUser | null
  }

type LogInAction = {
  type: typeof LOG_IN,
  payload: AuthState;
}

type LogOutAction = {
  type: typeof LOG_OUT
  payload: AuthState;
}

type EditUserInfoAction = {
  type: typeof EDIT_USER_INFO
  payload: AuthState;
}

type SignUpAction = {
  type: typeof SIGN_UP
}

type ResetPasswordAction = {
  type: typeof RESET_PASSWORD
}


export type AuthActionTypes = LogInAction | LogOutAction | EditUserInfoAction | SignUpAction | ResetPasswordAction