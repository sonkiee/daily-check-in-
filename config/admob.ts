import { Platform } from "react-native";

export const admobConfig = {
  banner: Platform.select({
    ios: "ca-app-pub-2231106094660297/4676890765",
    android: "ca-app-pub-2231106094660297/1182107115",
  }),
  interstitial: Platform.select({
    ios: "",
    android: "",
  }),
  rewarded: Platform.select({
    ios: "ca-app-pub-2231106094660297/1237947434",
    android: "ca-app-pub-2231106094660297/3927689953",
  }),
};
