import { ILoginInfo } from "@shared/interfaces";
import { LoginUser, UpdateMyUser } from "@shared/services";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from "redux";
import { AuthActionTypes, EDIT_USER_INFO, LOG_IN, LOG_OUT } from "@store/types/authTypes";

export const login = async (dispatch: Dispatch<AuthActionTypes>, loginInfo: ILoginInfo) => {
  const response = await LoginUser(loginInfo)

  if (typeof response !== 'string') {
    await AsyncStorage.setItem('TOKEN', JSON.stringify(response.token.token))
    dispatch({ type: LOG_IN, payload: { token: response.token.token, user: response.user } })
    return response.token.token
  }
  
  return null
}

export const logout = async (dispatch: Dispatch<AuthActionTypes>) => {
  await AsyncStorage.removeItem('TOKEN')
  dispatch({ type: LOG_OUT, payload: {token: '', user: null} })
}

export const editUserInfo = async (dispatch: Dispatch<AuthActionTypes>, newInfo: {name: string, email: string}) => {
  const response = await UpdateMyUser(newInfo)
  
  if (typeof response !== 'boolean') {
    const token = await AsyncStorage.getItem('TOKEN')
    dispatch({ type: EDIT_USER_INFO, payload: {token: token!, user: response} })
  }
}