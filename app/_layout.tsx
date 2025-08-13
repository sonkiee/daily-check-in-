import usePushTokenAync from "@/hooks/usePushTokenAsync";
import { QueryClient } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import mobileAds from "react-native-google-mobile-ads";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const RootLayout = () => {
  const pushToken = usePushTokenAync();

  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      console.log("Admob initialized", adapterStatuses);
    });

  return (
    <>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(app)" />
          <Stack.Screen
            name="(auth)"
            options={{
              animation: "slide_from_bottom",
              presentation: "modal",
            }}
          />
          <Stack.Screen name="(onboarding)" />
        </Stack>
        <StatusBar style="dark" />
      </SafeAreaProvider>
    </>
  );
};

export default RootLayout;
