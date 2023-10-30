import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";

const logError = (loggerData: unknown) => {
  console.error('pokedex.service', loggerData);

  return loggerData;
}

const apiService = ():AxiosInstance => {
  const axiosInstance = axios.create({

  });

  axiosInstance.interceptors.response.use((response: AxiosResponse) => response, logError)

  return axiosInstance;
}

export default apiService;
