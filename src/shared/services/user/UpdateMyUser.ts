import { IUser } from "@shared/interfaces"
import api from "../api"

export const UpdateMyUser = async (newInfo: {name: string, email: string}) => {
  const response = api.put<IUser>('/user/update', newInfo)
    .then(response => response.data)
    .catch(() => false)

  return response
}