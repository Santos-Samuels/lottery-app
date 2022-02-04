import { IUser } from "@shared/interfaces"
import api from "../api"

export const ResetPassword = async (email: string) => {
  const response = api.post<IUser>('/reset', { email })
    .then(response => response.data)
    .catch(() => false)

  return response
}