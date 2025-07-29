import { Stack } from "expo-router";
import React from "react";

const SettingsLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: "Settings",
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Settings",
        animation: "fade",
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerBackButtonDisplayMode: "minimal",
        headerTintColor: "#111",
      }}
    >
      <Stack.Screen name="settings" />
    </Stack>
  );
};

export default SettingsLayout;
