import { Redirect } from "expo-router";
import React from "react";

const Index = () => {
  // const token = usePushNotifications();
  // console.log("Expo Push Token:", token);

  return <Redirect href={"/(app)"} />;
};

export default Index;
