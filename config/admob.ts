import { Platform } from "react-native";

export const admobConfig = {
  banner: Platform.select({
    ios: "",
    android: "",
  }),
};
