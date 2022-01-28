import { ILoginInfo, Token, IUser } from "@shared/interfaces"
import { AxiosError } from "axios";
import api from "../api"

export const LoginUser = async (loginInfo: ILoginInfo) => {
  const response = await api.post<IUser>('/login', loginInfo)
    .then(response => response.data)
    .catch((error: AxiosError) => error.message)

  return response
}