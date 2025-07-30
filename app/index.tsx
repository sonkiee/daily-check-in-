import { useAuth } from "@/hooks/useAuth";
import usePushTokenAync from "@/hooks/usePushTokenAsync";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const Index = () => {
  const { loading } = useAuth();

  const push = usePushTokenAync();

  console.log("pusho token", push);

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
