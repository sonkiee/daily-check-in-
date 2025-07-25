import { Ionicons } from "@expo/vector-icons";
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
            headerShown: true,
            headerTransparent: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log("Settings")}>
                <Ionicons name="settings-outline" size={24} color="#ccc" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
