import { QueryClient } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Slot />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
