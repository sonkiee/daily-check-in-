import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  id: string;
  username: string;
  points: number;
  // totalPoints: number;
  // currentStreak: number;
  // longestStreak: number;
  // lastCheckin: string;
  deviceId: string;
  streak: number;
};

type UserStore = {
  user: User | null;
  accessToken: string | null;
  pushToken?: string | null;
  loading: boolean;
  refreshing: boolean;

  setUser: (user: User) => void;
  setAccessToken: (token: string) => void;
  setPushToken: (token: string) => void;

  setLoading: (state: boolean) => void;
  setRefreshing: (state: boolean) => void;

  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      pushToken: null,
      loading: false,
      refreshing: false,

      setUser: (user) => set({ user }),
      setAccessToken: (token) => set({ accessToken: token }),
      setPushToken: (token) => set({ pushToken: token }),

      clearUser: () =>
        set({
          user: null,
          accessToken: null,
          pushToken: null,
        }),

      setLoading: (state) => set({ loading: state }),
      setRefreshing: (state) => set({ refreshing: state }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
