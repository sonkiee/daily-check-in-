import { registerForPushNotificationsAsync } from "@/libs/notification";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";

export const useNotificationListeners = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef<any>(null);
  const responseListener = useRef<any>(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) setExpoPushToken(token);
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("Notification Received:", notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification Clicked:", response);
        // You can add navigation or deep linking logic here
      });

    return () => {
      notificationListener.current?.remove();
      responseListener.current?.remove();
    };
  }, []);
  return expoPushToken;
};
