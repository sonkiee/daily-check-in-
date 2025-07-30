// hooks/useAuth.ts
import { apiClient } from "@/libs/api"; // or your api wrapper
import * as Crypto from "expo-crypto";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

const DEVICE_ID_KEY = "deviceId";

export const useAuth = () => {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let id = await SecureStore.getItemAsync(DEVICE_ID_KEY);

      if (!id) {
        id = Crypto.randomUUID();
        await SecureStore.setItemAsync(DEVICE_ID_KEY, id);
      }

      setDeviceId(id);

      // Attempt to fetch user
      try {
        const res = await apiClient.get(`/user/me/`);
        if (res.data && res.data.username) {
          setUser({ username: res.data.username });
        }
      } catch (err) {
        console.log("No user found for this device ID.", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { user, deviceId, loading };
};
