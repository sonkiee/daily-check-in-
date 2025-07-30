import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, StorageValue } from "zustand/middleware";

type User = {
  id: string;
  token: string;
  points: number;
  deviceId: string;
  streak: number;
  pushToken?: string;
};

type UserStore = {
  user: User | null;
  isLoading: boolean;
  refreshing: boolean;
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
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      setRefreshing: (state) => set({ refreshing: state }),
      setPushToken: (token) =>
        set((state) =>
          state.user ? { user: { ...state.user, pushToken: token } } : {}
        ),
    }),
    {
      name: "user-storage",
      storage: {
        getItem: async (name): Promise<StorageValue<UserStore> | null> => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value): Promise<void> => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name): Promise<void> => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);
