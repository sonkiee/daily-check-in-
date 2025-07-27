import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
  set: async (key: string, value: string) => {
    return await AsyncStorage.setItem(key, value);
  },
  get: async (key: string) => {
    return await AsyncStorage.getItem(key);
  },
  remove: async (key: string) => {
    return await AsyncStorage.removeItem(key);
  },
};

export default Storage;
