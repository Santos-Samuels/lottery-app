import { ILoginInfo } from "@shared/interfaces";
import { LoginUser } from "@shared/services";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from "redux";
import { AuthActionTypes, LOG_IN, LOG_OUT } from "@store/types/authTypes";

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
  console.log(await AsyncStorage.getItem('TOKEN'))
  dispatch({ type: LOG_OUT, payload: {token: '', user: null} })
}