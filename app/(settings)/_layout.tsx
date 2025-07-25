import { Stack } from "expo-router";
import React from "react";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          headerTransparent: true,
          headerTitle: "",
          animation: "fade",
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
