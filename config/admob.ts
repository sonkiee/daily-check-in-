import { Platform } from "react-native";

export const AdMobConfig = {
  banner: Platform.select({
    ios: "ca-app-pub-2231106094660297/4676890765",
    android: "ca-app-pub-2231106094660297/1182107115",
    default: "", // fallback to empty string
  })!,
  interstitial: Platform.select({
    ios: "",
    android: "",
    default: "", // fallback to empty string
  })!,
  rewarded: Platform.select({
    ios: "ca-app-pub-2231106094660297/1237947434",
    android: "ca-app-pub-2231106094660297/3927689953",
    default: "", // fallback to empty string
  })!,
};
