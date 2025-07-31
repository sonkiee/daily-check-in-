// hooks/useAuth.ts
import { apiClient } from "@/libs/api"; // or your api wrapper
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useUserStore();

  useEffect(() => {
    (async () => {
      // if (!user?.token) {
      //   setLoading(false);
      //   return;
      // }
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
  }, [setLoading, setUser]);

  return { user, loading };
};
