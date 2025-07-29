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
          <Stack.Screen name="(auth)" options={{}} />
          <Stack.Screen name="(onboarding)" />
        </Stack>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
