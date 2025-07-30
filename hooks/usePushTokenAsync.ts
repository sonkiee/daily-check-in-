import { registerForPushNotificationsAsync } from "@/libs/notification";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

const usePushTokenAync = () => {
  const setPushToken = useUserStore((state) => state.setPushToken);
  const pushToken = useUserStore((state) => state.pushToken);

  useEffect(() => {
    (async () => {
      if (!pushToken) {
        const token = await registerForPushNotificationsAsync();
        if (token) {
          console.log("Push Token:", token);
          setPushToken(token);
        }
      }
    })();
  }, [setPushToken, pushToken]);

  return pushToken;
};

export default usePushTokenAync;
