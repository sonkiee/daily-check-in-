import { registerForPushNotificationsAsync } from "@/libs/notification";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

const usePushTokenAync = () => {
  const setPushToken = useUserStore((state) => state.setPushToken);

  useEffect(() => {
    (async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        console.log("Push Token:", token);
        setPushToken(token);
      }
    })();
  }, [setPushToken]);
};

export default usePushTokenAync;
