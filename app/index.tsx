import { useAuth } from "@/hooks/useAuth";
import { registerForPushNotificationsAsync } from "@/libs/notification";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const Index = () => {
  const { loading } = useAuth();
  const pushToken = registerForPushNotificationsAsync();

  console.log("pusho token", pushToken);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return <Redirect href="/(app)" />;
};

export default Index;
