import { registerForPushNotificationsAsync } from "@/libs/notification";
import { useEffect } from "react";

const usePushTokenAync = () => {
  useEffect(() => {
    (async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        console.log("Push Token:", token);
      }
    })();
  }, []);
};

export default usePushTokenAync;
