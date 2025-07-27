import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
  set: (key: string, value: string) => AsyncStorage.setItem(key, value),
  get: (key: string) => AsyncStorage.getItem(key),
  remove: (key: string) => AsyncStorage.removeItem(key),
  clear: () => AsyncStorage.clear(), // Optional utility
};

export default Storage;
