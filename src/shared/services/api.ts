import { getToken } from "@shared/utils";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333",
});


api.interceptors.request.use(async config => {
  const TOKEN = await getToken()

  if (TOKEN) {
    config.headers!['Authorization'] = `Bearer ${JSON.parse(TOKEN)}`
  }

  return config
},

  (error: AxiosError) => {
    return Promise.reject(error);
  }
)

export default api