import { QueryClient } from "@tanstack/react-query";
import { Slot } from "expo-router";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <Slot />
    // <SafeAreaProvider>
    //   <QueryClientProvider client={queryClient}>

    //   </QueryClientProvider>
    //   <StatusBar style="dark" />
    // </SafeAreaProvider>
  );
};

export default RootLayout;
