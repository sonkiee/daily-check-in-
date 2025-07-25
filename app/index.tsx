import Progress from "@/components/Progress";
import SuccessModal from "@/components/SuccessModal";
import Button from "@/components/ui/Button";
import Wrapper from "@/components/ui/Wrapper";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [points, setPoints] = useState(750);
  const [totalPoints, setTotalPoints] = useState(1250);
  const [streak, setStreak] = useState(7);
  const [canClaim, setCanClaim] = useState(true);
  const [lastClaimTime, setLastClaimTime] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);

  const targetPoints = 1000;
  const progress = Math.min(points / targetPoints, 1);

  const onCheckInPress = () => {
    const earned = 25 + streak * 5;
    setPoints((prev) => prev + earned);
    setTotalPoints((prev) => prev + earned);
    setStreak((prev) => prev + 1);
    setCanClaim(false);
    setLastClaimTime(new Date());
    setShowModal(true);

    setTimeout(() => {
      setCanClaim(true);
    }, 5000); // Simulated cooldown
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <Wrapper>
      <View style={styles.container}>
        {/* Quote */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>
            &quot;Not all those who wander are lost.&quot;
          </Text>
          <Text style={styles.quoteAuthor}>– J.R.R. Tolkien</Text>
        </View>

        {/* Progress Ring */}
        <Progress points={points} streak={streak} targetPoints={targetPoints} />

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{totalPoints.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Total Points</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{Math.round(progress * 100)}%</Text>
            <Text style={styles.statLabel}>Progress</Text>
          </View>
        </View>

        <Text style={styles.greeting}>Hi Wanderer</Text>

        {!canClaim && (
          <Text style={styles.nextClaimText}>
            Next check-in available in 23h 45m
          </Text>
        )}

        <View style={styles.buttonContainer}>
          <Button
            title={
              canClaim
                ? `Check In (+${25 + streak * 5} pts)`
                : "Claimed Today ✓"
            }
            onPress={onCheckInPress}
            disabled={!canClaim}
          />
        </View>
      </View>

      <SuccessModal visible={showModal} onClose={handleCloseModal} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topRight: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 100,
  },
  quoteContainer: {
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  quote: {
    fontSize: 18,
    color: "#ddd",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 26,
    marginBottom: 5,
  },
  quoteAuthor: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    minWidth: 100,
  },
  statValue: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: "#bbb",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  greeting: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  nextClaimText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 15,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },
});
