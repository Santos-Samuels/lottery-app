import { IRegisterInfo, IToken, IUser } from "@shared/interfaces"
import api from "../api"

export const RegisterUser = async (newUser: IRegisterInfo) => {
  const response = api.post<{ user: IUser, token: IToken }>('/user/create', newUser)
    .then(response => response.data)
    .catch(() => false)

  return response
}