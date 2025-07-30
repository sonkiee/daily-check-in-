import { registerForPushNotificationsAsync } from "@/libs/notification";
import { useUserStore } from "@/store/user";
import { useEffect, useState } from "react";

const usePushTokenAync = () => {
  const [pushToken, setPushToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        console.log("Push Token:", token);
        useUserStore.getState().setPushToken(token);
        setPushToken(token);
      }
    })();
  }, []);

  return pushToken;
};

export default usePushTokenAync;
