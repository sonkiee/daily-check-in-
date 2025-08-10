import { Platform } from "react-native";

export const admobConfig = {
  banner: Platform.select({
    ios: "ca-app-pub-2231106094660297/4676890765",
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
