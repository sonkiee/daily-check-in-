import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  id: string;
  token: string;
  username: string;
  points: number;
  deviceId: string;
  streak: number;
  pushToken?: string;
};

type UserStore = {
  user: User | null;
  isLoading: boolean;
  refreshing: boolean;
  pushToken?: string;
  setUser: (user: User) => void;
  clearUser: () => void;
  setRefreshing: (state: boolean) => void;
  setPushToken: (token: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      refreshing: false,
      pushToken: undefined,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      setRefreshing: (state) => set({ refreshing: state }),
      setPushToken: (token) => set({ pushToken: token }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
