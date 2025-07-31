import { useUserStore } from "@/store/user";
import axios from "axios";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL!,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = useUserStore.getState().accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;

      console.log("Token attached to request:", token);
    }

    console.log("Token attached to request:", token);

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    const fullUrl = `${config.baseURL}${config.url}`;
    console.log("FULL REQUEST URL:", fullUrl);
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const err = error.response?.data;
    // const message = err.message;
    // console.log("Error message", message);
    return Promise.reject(err);
  }
);
