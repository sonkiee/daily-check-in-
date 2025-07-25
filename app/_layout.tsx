import { IconSymbol } from "@/components/ui/IconSymbol";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            // headerTransparent: true,
            headerTitle: "",
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log("Settings")}>
                <IconSymbol name="gear" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="(settings)" />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
