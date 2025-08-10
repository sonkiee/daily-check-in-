import { AdMobConfig } from "@/config/admob";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-native";
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.REWARDED : AdMobConfig.rewarded;

const createRewarded = () => RewardedAd.createForAdRequest(adUnitId, {});
const RewardedAds = () => {
  const [loaded, setLoaded] = useState(false);
  const [rewarded, setRewarded] = useState(createRewarded);

  const loadAd = useCallback(() => {
    setLoaded(false);
    rewarded.load();
  }, [rewarded]);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log("User earned reward of ", reward);

        const newAd = createRewarded();
        setRewarded(newAd);
        setLoaded(false);
        newAd.load();
      }
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, [rewarded]);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <Button
      title="Show Rewarded Ad"
      onPress={() => {
        rewarded.show();
      }}
    />
  );
};

export default RewardedAds;
