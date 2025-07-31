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
    // const token = useUserStore.getState().accessToken;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyZTZjYzA4LWNlM2QtNDdkZi1iYTY3LTVjM2M3MTQ1MWIzYSIsImRldmljZUlkIjoiamRqIiwiaWF0IjoxNzUzOTI4MTU3LCJleHAiOjE3NTQ1MzI5NTd9.sdg--saptTwegCeJ0swxrw69EeCOKLJmcPNK0IOh2FY";
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
