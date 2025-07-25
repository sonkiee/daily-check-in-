import { Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "green", paddingBottom: 0 }}
      edges={["top"]}
    >
      <View
        style={{
          flex: 1,

          backgroundColor: "blue",
        }}
      >
        <Text>Welcome to the Expo Router!</Text>
      </View>
    </SafeAreaView>
  );
}
