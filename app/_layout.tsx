import { IconSymbol } from "@/components/ui/IconSymbol";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={
            {
              // animation: "fade",
              // animationMatchesGesture: true,
              // headerBackButtonDisplayMode: "minimal",
              // headerTintColor: "#111",
              // headerShadowVisible: false,
            }
          }
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
                  onPress={() => router.push("/(settings)/settings")}
                >
                  <IconSymbol name="gearshape" color={"#333"} size={24} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(settings)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
        </Stack>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
