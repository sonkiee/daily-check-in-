import { Redirect } from "expo-router";
import React from "react";

const Index = () => {
  // const token = usePushNotifications();
  // console.log("Expo Push Token:", token);

  // if (newDevice) {
  //   Alert.alert("Welcome", "You're most welcome to our app new tome usrr");
  // }

  return <Redirect href="/(app)/(settings)/settings" />;
};

export default Index;
