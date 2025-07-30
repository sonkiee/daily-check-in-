import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const storage = {
  set: async (
    key: string,
    value: string,
    secure: boolean = false
  ): Promise<void> => {
    if (secure) {
      return SecureStore.setItemAsync(key, value);
    }
    return AsyncStorage.setItem(key, value);
  },

  get: async (key: string, secure: boolean = false): Promise<string | null> => {
    if (secure) {
      return SecureStore.getItemAsync(key);
    }
    return AsyncStorage.getItem(key);
  },

  remove: async (key: string, secure: boolean = false): Promise<void> => {
    if (secure) {
      return SecureStore.deleteItemAsync(key);
    }
    return AsyncStorage.removeItem(key);
  },

  clear: async (): Promise<void> => {
    return AsyncStorage.clear(); // No SecureStore.clear()
  },
};

export default storage;
