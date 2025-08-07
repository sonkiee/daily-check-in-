import React from "react";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const BannerAds = () => {
  return <BannerAd unitId={adUnitId} />;
};

export default BannerAds;
