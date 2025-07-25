import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CIRCLE_SIZE = 250;
const STROKE_WIDTH = 15;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const progress = 0.8; // 80%

export default function Index() {
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.progressWrapper}>
          <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
            {/* Background ring */}
            <Circle
              stroke="#ffffff33"
              fill="none"
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              strokeWidth={STROKE_WIDTH}
            />
            <Text> jjj</Text>
            {/* Progress ring */}
            <Circle
              stroke="#4CAF50"
              fill="none"
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              strokeWidth={STROKE_WIDTH + 5} // Slightly wider than background
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              rotation="-90"
              origin={`${CIRCLE_SIZE / 2}, ${CIRCLE_SIZE / 2}`}
            />
          </Svg>
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
  progressWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 20,
  },
});
