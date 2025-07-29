// app/(app)/_layout.tsx
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { Stack, router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function AppLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        animation: "fade",
        animationMatchesGesture: true,
        headerShadowVisible: false,
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/(app)/(settings)/settings")}
            >
              <IconSymbol name="gearshape" color="#333" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="(settings)" options={{ headerShown: false }} />
    </Stack>
  );
}
