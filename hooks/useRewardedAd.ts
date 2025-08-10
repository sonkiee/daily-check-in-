import { AdMobConfig } from "@/config/admob";
import { useCallback, useEffect, useState } from "react";
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.REWARDED : AdMobConfig.rewarded;

const createRewarded = () => RewardedAd.createForAdRequest(adUnitId, {});
export const useRewardedAd = (
  onReward?: (reward: { type: string; amount: number }) => void
) => {
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
        onReward?.(reward);
        const newAd = createRewarded();
        setRewarded(newAd);
        setLoaded(false);
        newAd.load();
      }
    );

    loadAd();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, [rewarded, loadAd, onReward]);

  const showAd = useCallback(() => {
    if (loaded) {
      rewarded.show();
    } else {
      console.warn("Ad not loaded yet");
    }
  }, [loaded, rewarded]);

  return { loaded, showAd };
};
