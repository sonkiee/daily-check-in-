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
      }}
    >
      <Stack.Screen name="settings" />
    </Stack>
  );
};

export default SettingsLayout;
