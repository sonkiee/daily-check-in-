import { SymbolView } from "expo-symbols";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Circle } from "react-native-svg";

const CIRCLE_SIZE = 280;
const STROKE_WIDTH = 15;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Progress = ({
  points = 750,
  streak = 7,
  targetPoints = 1000,
}: {
  points?: number;
  streak?: number;
  targetPoints?: number;
}) => {
  const [animatedProgress] = useState(new Animated.Value(0));

  // Calculate progress based on points (example: 1000 points = 100%)

  const progress = Math.min(points / targetPoints, 1);

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [progress, animatedProgress]);

  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  const getProgressColor = () => {
    if (progress >= 0.8) return "#4CAF50";
    if (progress >= 0.5) return "#FF9800";
    return "#F44336";
  };
  return (
    <View style={styles.progressWrapper}>
      <Svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
        {/* Background ring */}
        <Circle
          stroke="#ffffff1a"
          fill="none"
          cx={CIRCLE_SIZE / 2}
          cy={CIRCLE_SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
        />
        {/* Progress ring */}
        <Circle
          stroke={getProgressColor()}
          fill="none"
          cx={CIRCLE_SIZE / 2}
          cy={CIRCLE_SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH + 3}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${CIRCLE_SIZE / 2}, ${CIRCLE_SIZE / 2}`}
        />
        {/* Subtle glow */}
        <Circle
          stroke={getProgressColor()}
          fill="none"
          cx={CIRCLE_SIZE / 2}
          cy={CIRCLE_SIZE / 2}
          r={RADIUS}
          strokeWidth={2}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${CIRCLE_SIZE / 2}, ${CIRCLE_SIZE / 2}`}
          opacity={0.3}
        />
      </Svg>

      <View style={styles.innerContent}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.innerText}>{points}</Text>
          <Text style={styles.pointsLabel}>points</Text>
          <View style={styles.streakContainer}>
            <SymbolView
              name="flame"
              type="palette"
              colors={["#FF3B30", "#FF9500", "#FFD60A"]}
              size={15}
            />
            <Text style={styles.streakText}>{streak} day streak</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    position: "relative",
  },
  innerContent: {
    position: "absolute",
    width: CIRCLE_SIZE - 60,
    height: CIRCLE_SIZE - 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (CIRCLE_SIZE - 60) / 2,
  },
  innerText: {
    fontSize: 48,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pointsLabel: {
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "500",
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  streakText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginLeft: 4,
    opacity: 0.7,
  },
});

export default Progress;
