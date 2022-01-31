import { ILoginInfo } from "@shared/interfaces";
import { LoginUser } from "@shared/services";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from "redux";
import { AuthActionTypes, LOG_IN } from "@store/types/authTypes";

export const login = async (dispatch: Dispatch<AuthActionTypes>, loginInfo: ILoginInfo) => {
  const response = await LoginUser(loginInfo)

  if (typeof response !== 'string') {
    await AsyncStorage.setItem('TOKEN', JSON.stringify(response.token.token))
    dispatch({ type: LOG_IN, payload: response.token.token })
    return response.token.token
  }
  
  return null
}