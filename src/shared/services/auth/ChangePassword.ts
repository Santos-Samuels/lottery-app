import { IUser } from "@shared/interfaces"
import api from "../api"

export const ChangePassword = async (token: string, password: string) => {
  const response = api.post<IUser>(`/reset/${token}`, { password })
    .then(response => response.data)
    .catch(() => false)

  return response
}