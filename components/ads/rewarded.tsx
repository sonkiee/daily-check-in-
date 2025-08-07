import { useEffect, useState } from "react";
import { View } from "react-native";
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const rewarded = RewardedAd.createForAdRequest(adUnitId, {});
const RewardedAds = () => {
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventsListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );
  }, []);
  return <View></View>;
};

export default RewardedAds;
