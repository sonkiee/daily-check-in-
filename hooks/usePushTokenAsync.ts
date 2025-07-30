import { registerForPushNotificationsAsync } from "@/libs/notification";
import { useEffect, useState } from "react";

const usePushTokenAync = () => {
  const [pushToken, setPushToken] = useState("");
  useEffect(() => {
    (async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        console.log("Push Token:", token);
        setPushToken(token);
      }
    })();
  }, []);

  return pushToken;
};

export default usePushTokenAync;
