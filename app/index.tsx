import Wrapper from "@/components/ui/Wrapper";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Hi Wanderer</Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
