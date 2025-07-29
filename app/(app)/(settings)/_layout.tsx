// app/(app)/(settings)/_layout.tsx
import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Settings",
        animation: "fade",
        headerLargeTitle: true,
        headerBackButtonDisplayMode: "minimal",
        headerShadowVisible: false,
        headerTintColor: "#111",
      }}
    >
      <Stack.Screen name="settings" />
    </Stack>
  );
}
