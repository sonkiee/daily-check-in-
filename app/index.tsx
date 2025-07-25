import Wrapper from "@/components/ui/Wrapper";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <Wrapper>
      <View style={{ backgroundColor: "tranparent" }}>
        <Text>Welcome to the Expo Router!</Text>
      </View>
    </Wrapper>
  );
}
