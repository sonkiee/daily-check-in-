import { QueryClient } from "@tanstack/react-query";
import { randomUUID } from "expo-crypto";
import { Redirect } from "expo-router";
import { useState } from "react";

const queryClient = new QueryClient();

const RootLayout = () => {
  const [newDevice, setNewDevice] = useState(true);
  const uuid = randomUUID();

  // if (newDevice) {
  //   Alert.alert("Welcome", "You're most welcome to our app new tome usrr");
  // }

  return <Redirect href={"/(auth)"} />;

  // return (
  //   <SafeAreaProvider>
  //     <QueryClientProvider client={queryClient}>
  //       <Stack
  //         screenOptions={{
  //           animation: "fade",
  //           animationMatchesGesture: true,
  //           headerBackButtonDisplayMode: "minimal",
  //           headerTintColor: "#111",
  //           headerShadowVisible: false,
  //         }}
  //       >
  //         <Stack.Screen
  //           name="index"
  //           options={{
  //             title: "Home",
  //             headerShown: true,
  //             headerTransparent: true,
  //             headerTitle: "",
  //             headerRight: () => (
  //               <TouchableOpacity
  //                 onPress={() => router.push("/(settings)/settings")}
  //               >
  //                 <IconSymbol name="gearshape" color={"#333"} size={24} />
  //               </TouchableOpacity>
  //             ),
  //           }}
  //         />
  //         <Stack.Screen
  //           name="(settings)"
  //           options={{
  //             headerShown: false,
  //           }}
  //         />
  //       </Stack>
  //     </QueryClientProvider>
  //     <StatusBar style="dark" />
  //   </SafeAreaProvider>
  // );
};

export default RootLayout;
