import { Platform } from "react-native";

export const admobConfig = {
  banner: Platform.select({
    ios: "",
    android: "",
  }),
  interstitial: Platform.select({
    ios: "",
    android: "",
  }),
  rewarded: Platform.select({
    ios: "",
    android: "",
  }),
};
