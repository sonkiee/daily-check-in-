// hooks/useAuth.ts
import { apiClient } from "@/libs/api"; // or your api wrapper
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useUserStore();

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyZTZjYzA4LWNlM2QtNDdkZi1iYTY3LTVjM2M3MTQ1MWIzYSIsImRldmljZUlkIjoiamRqIiwiaWF0IjoxNzUzOTI4MTU3LCJleHAiOjE3NTQ1MzI5NTd9.sdg--saptTwegCeJ0swxrw69EeCOKLJmcPNK0IOh2FY";

  useEffect(() => {
    (async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }
      try {
        const response = await apiClient.get(`/user/me/`);
        const userData = response.data.user;

        console.log("profile date", response);

        setUser({
          id: userData.id,
          username: userData.username,
          points: userData.totalPoints,
          deviceId: userData.deviceId,
          streak: userData.currentStreak,
        });
      } catch (error) {
        console.log("Failed to fetch authenticated user", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [setLoading, setUser, accessToken]);

  return { user, loading };
};
