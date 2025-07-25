import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/Wrapper";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View>
          <View
            style={{
              borderRadius: 9999,
              width: 200,
              height: 200,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          />
        </View>
        <Text style={styles.text}>Hi Wanderer</Text>
        <Text style={styles.subtext}>
          “Not all those who wander are lost.” – J.R.R. Tolkien
        </Text>

        <Button title="Explore" onPress={() => console.log("button pressed")} />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "medium",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    fontStyle: "italic",
  },
});
