// app/(app)/(settings)/_layout.tsx
import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Settings",
        headerLargeTitle: true,
        headerShadowVisible: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="settings" />
    </Stack>
  );
}
