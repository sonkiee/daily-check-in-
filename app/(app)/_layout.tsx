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
        headerBackButtonDisplayMode: "minimal",
        headerTintColor: "#111",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          headerTransparent: true,
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
