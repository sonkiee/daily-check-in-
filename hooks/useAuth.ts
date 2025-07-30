// hooks/useAuth.ts
import { apiClient } from "@/libs/api"; // or your api wrapper
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

const DEVICE_ID_KEY = "deviceId";

export const useAuth = () => {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const token = await SecureStore.getItemAsync("accessToken");
        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }
        const res = await apiClient.get(`/user/me/`);
        if (res.data && res.data.username) {
          setUser({ username: res.data.username });
        }
      } catch (err) {
        console.log("Failed to fetch authenticated user", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { user, deviceId, loading };
};
