// utils/axiosInstance.ts
import axios, { AxiosInstance } from "axios";

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
