import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(app)" />
          <Stack.Screen
            name="(auth)"
            options={{
              presentation: "formSheet", // clean, lean, iOS native feel
              animation: "slide_from_bottom", // optional: nice on Android
              headerShown: false, // remove clutter
            }}
          />
          <Stack.Screen name="(onboarding)" />
        </Stack>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
