import { IconSymbol } from "@/components/ui/IconSymbol";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          animation: "fade",
          animationMatchesGesture: true,
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "#111",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Homse",
            headerShown: true,
            headerTransparent: true,
            headerTitle: "Home",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.push("/(settings)/settings")}
              >
                <IconSymbol name="gearshape" color={"#333"} size={24} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="(settings)" />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
