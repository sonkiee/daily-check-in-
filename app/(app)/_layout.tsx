import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

const AppLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/(app)/(settings)/settings")}
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
    </Stack>
  );
};

export default AppLayout;
