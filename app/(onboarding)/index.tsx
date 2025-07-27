import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/Wrapper";
import React, { useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const OnboardingScreen = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1));

  const screens = [
    {
      title: "Build Your Streak",
      subtitle: "Check in daily to grow your journey",
      content: "Higher streaks mean more points per check-in",
      example: "Day 1: +25 pts → Day 7: +60 pts",
      visual: "🔥",
    },
    {
      title: "Complete Your Journey",
      subtitle: "Reach 1000 points each cycle",
      content: "Every journey brings new quotes and rewards",
      example: "Track your progress with the ring",
      visual: "🎯",
    },
    {
      title: "Ready to Wander?",
      subtitle: "Your daily adventure awaits",
      content: "Tap check-in to start earning points and building your streak",
      example: '"Not all those who wander are lost"',
      visual: "✨",
    },
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      setTimeout(() => {
        setCurrentScreen(currentScreen + 1);
      }, 200);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const screen = screens[currentScreen];

  return (
    <Wrapper>
      <View style={styles.container}>
        {/* Skip button */}
        {currentScreen < screens.length - 1 && (
          <View style={styles.skipContainer}>
            <Text style={styles.skipButton} onPress={handleSkip}>
              Skip
            </Text>
          </View>
        )}

        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {/* Visual Element */}
          <View style={styles.visualContainer}>
            <Text style={styles.visual}>{screen.visual}</Text>
            {currentScreen === 0 && (
              <View style={styles.streakDemo}>
                <View style={styles.streakBar}>
                  <View
                    style={[
                      styles.streakFill,
                      { width: `${(currentScreen + 1) * 30}%` },
                    ]}
                  />
                </View>
                <Text style={styles.streakText}>
                  Streak: {currentScreen + 1}
                </Text>
              </View>
            )}
            {currentScreen === 1 && (
              <View style={styles.progressDemo}>
                <View style={styles.progressRing}>
                  <View style={styles.progressFill} />
                  <Text style={styles.progressText}>750/1000</Text>
                </View>
              </View>
            )}
          </View>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{screen.title}</Text>
            <Text style={styles.subtitle}>{screen.subtitle}</Text>
            <Text style={styles.description}>{screen.content}</Text>
            <Text style={styles.example}>{screen.example}</Text>
          </View>

          {/* Progress Dots */}
          <View style={styles.dotsContainer}>
            {screens.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentScreen && styles.activeDot,
                ]}
              />
            ))}
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <Button
              title={
                currentScreen === screens.length - 1
                  ? "Start My Journey"
                  : "Next"
              }
              onPress={handleNext}
            />
          </View>
        </Animated.View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  skipContainer: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
  },
  skipButton: {
    color: "#888",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  visualContainer: {
    alignItems: "center",
    marginBottom: 60,
    height: 150,
    justifyContent: "center",
  },
  visual: {
    fontSize: 80,
    marginBottom: 20,
  },
  streakDemo: {
    alignItems: "center",
    width: 200,
  },
  streakBar: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 10,
  },
  streakFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  streakText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  progressDemo: {
    alignItems: "center",
  },
  progressRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderTopColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-90deg" }],
  },
  progressFill: {
    transform: [{ rotate: "90deg" }],
  },
  progressText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    transform: [{ rotate: "90deg" }],
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
  },
  description: {
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 15,
  },
  example: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    fontStyle: "italic",
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 24,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default OnboardingScreen;
