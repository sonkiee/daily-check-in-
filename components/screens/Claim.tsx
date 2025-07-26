import Wrapper from "@/components/ui/Wrapper";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface RewardItem {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  type: "giftcard" | "cashout" | "premium" | "physical";
  icon: string;
  available: boolean;
}

const RewardsScreen = () => {
  const [userPoints, setUserPoints] = useState(1250); // This should come from props or global state
  const [redeemedItems, setRedeemedItems] = useState<string[]>([]);

  const rewards: RewardItem[] = [
    {
      id: "1",
      title: "$5 Amazon Gift Card",
      description: "Redeem for Amazon shopping",
      pointsCost: 500,
      type: "giftcard",
      icon: "🛍️",
      available: true,
    },
    {
      id: "2",
      title: "$10 PayPal Cash",
      description: "Direct deposit to PayPal",
      pointsCost: 1000,
      type: "cashout",
      icon: "💰",
      available: true,
    },
    {
      id: "3",
      title: "$25 Visa Gift Card",
      description: "Use anywhere Visa is accepted",
      pointsCost: 2500,
      type: "giftcard",
      icon: "💳",
      available: true,
    },
    {
      id: "4",
      title: "Premium Features",
      description: "30 days of premium benefits",
      pointsCost: 750,
      type: "premium",
      icon: "⭐",
      available: true,
    },
    {
      id: "5",
      title: "$2 Starbucks Gift Card",
      description: "Perfect for your daily coffee",
      pointsCost: 200,
      type: "giftcard",
      icon: "☕",
      available: true,
    },
    {
      id: "6",
      title: "$50 Best Buy Gift Card",
      description: "For all your tech needs",
      pointsCost: 5000,
      type: "giftcard",
      icon: "🔌",
      available: true,
    },
    {
      id: "7",
      title: "Branded Water Bottle",
      description: "Limited edition merchandise",
      pointsCost: 1500,
      type: "physical",
      icon: "🍶",
      available: false, // Out of stock example
    },
    {
      id: "8",
      title: "$20 PayPal Cash",
      description: "Direct deposit to PayPal",
      pointsCost: 2000,
      type: "cashout",
      icon: "💰",
      available: true,
    },
  ];

  const handleRedeem = (reward: RewardItem) => {
    if (userPoints < reward.pointsCost) {
      Alert.alert(
        "Insufficient Points",
        `You need ${
          reward.pointsCost - userPoints
        } more points to redeem this reward.`,
        [{ text: "OK" }]
      );
      return;
    }

    if (!reward.available) {
      Alert.alert("Unavailable", "This reward is currently out of stock.", [
        { text: "OK" },
      ]);
      return;
    }

    Alert.alert(
      "Confirm Redemption",
      `Are you sure you want to redeem "${reward.title}" for ${reward.pointsCost} points?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Redeem",
          onPress: () => {
            setUserPoints((prev) => prev - reward.pointsCost);
            setRedeemedItems((prev) => [...prev, reward.id]);

            Alert.alert(
              "Success!",
              `You've successfully redeemed "${reward.title}"! ${
                reward.type === "cashout"
                  ? "You should receive your payment within 24-48 hours."
                  : reward.type === "giftcard"
                  ? "Your gift card code will be sent to your email shortly."
                  : reward.type === "premium"
                  ? "Your premium features are now active!"
                  : "Your item will be shipped within 5-7 business days."
              }`,
              [{ text: "Great!" }]
            );
          },
        },
      ]
    );
  };

  const getRewardsByType = (type: string) => {
    return rewards.filter((reward) => reward.type === type);
  };

  const renderRewardCard = (reward: RewardItem) => {
    const canAfford = userPoints >= reward.pointsCost;
    const isRedeemed = redeemedItems.includes(reward.id);

    return (
      <TouchableOpacity
        key={reward.id}
        style={[
          styles.rewardCard,
          !canAfford && styles.rewardCardDisabled,
          !reward.available && styles.rewardCardUnavailable,
          isRedeemed && styles.rewardCardRedeemed,
        ]}
        onPress={() => !isRedeemed && handleRedeem(reward)}
        disabled={isRedeemed}
      >
        <View style={styles.rewardHeader}>
          <Text style={styles.rewardIcon}>{reward.icon}</Text>
          <View style={styles.rewardInfo}>
            <Text
              style={[
                styles.rewardTitle,
                !canAfford && styles.rewardTextDisabled,
                !reward.available && styles.rewardTextUnavailable,
                isRedeemed && styles.rewardTextRedeemed,
              ]}
            >
              {reward.title}
            </Text>
            <Text
              style={[
                styles.rewardDescription,
                !canAfford && styles.rewardTextDisabled,
                !reward.available && styles.rewardTextUnavailable,
                isRedeemed && styles.rewardTextRedeemed,
              ]}
            >
              {reward.description}
            </Text>
          </View>
        </View>

        <View style={styles.rewardFooter}>
          <Text
            style={[
              styles.pointsCost,
              !canAfford && styles.pointsCostDisabled,
              !reward.available && styles.pointsCostUnavailable,
              isRedeemed && styles.pointsCostRedeemed,
            ]}
          >
            {reward.pointsCost.toLocaleString()} pts
          </Text>

          {isRedeemed ? (
            <View style={styles.redeemedBadge}>
              <Text style={styles.redeemedText}>✓ Redeemed</Text>
            </View>
          ) : !reward.available ? (
            <View style={styles.unavailableBadge}>
              <Text style={styles.unavailableText}>Out of Stock</Text>
            </View>
          ) : !canAfford ? (
            <View style={styles.insufficientBadge}>
              <Text style={styles.insufficientText}>
                Need {(reward.pointsCost - userPoints).toLocaleString()} more
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.redeemButton}
              onPress={() => handleRedeem(reward)}
            >
              <Text style={styles.redeemButtonText}>Redeem</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderSection = (title: string, type: string) => {
    const sectionRewards = getRewardsByType(type);
    if (sectionRewards.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {sectionRewards.map(renderRewardCard)}
      </View>
    );
  };

  return (
    <Wrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Rewards Store</Text>
          <View style={styles.pointsBadge}>
            <Text style={styles.pointsText}>
              {userPoints.toLocaleString()} points
            </Text>
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>💡 How it works</Text>
          <Text style={styles.infoText}>
            Earn points by checking in daily and maintaining your streak. Redeem
            points for gift cards, cash, or premium features!
          </Text>
        </View>

        {/* Sections */}
        {renderSection("💰 Cash Rewards", "cashout")}
        {renderSection("🎁 Gift Cards", "giftcard")}
        {renderSection("⭐ Premium Features", "premium")}
        {renderSection("📦 Physical Items", "physical")}

        {/* Footer spacing */}
        <View style={styles.footer} />
      </ScrollView>
    </Wrapper>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "700",
  },
  pointsBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  pointsText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  infoCard: {
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.2)",
  },
  infoTitle: {
    color: "#60a5fa",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  infoText: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 12,
  },
  rewardCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  rewardCardDisabled: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  rewardCardUnavailable: {
    backgroundColor: "rgba(239, 68, 68, 0.05)",
    borderColor: "rgba(239, 68, 68, 0.2)",
  },
  rewardCardRedeemed: {
    backgroundColor: "rgba(34, 197, 94, 0.05)",
    borderColor: "rgba(34, 197, 94, 0.2)",
  },
  rewardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  rewardIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 2,
  },
  rewardDescription: {
    fontSize: 14,
    color: "#bbb",
  },
  rewardTextDisabled: {
    color: "#666",
  },
  rewardTextUnavailable: {
    color: "#888",
  },
  rewardTextRedeemed: {
    color: "#22c55e",
  },
  rewardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pointsCost: {
    fontSize: 16,
    color: "#60a5fa",
    fontWeight: "700",
  },
  pointsCostDisabled: {
    color: "#666",
  },
  pointsCostUnavailable: {
    color: "#ef4444",
  },
  pointsCostRedeemed: {
    color: "#22c55e",
  },
  redeemButton: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  redeemButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  insufficientBadge: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.3)",
  },
  insufficientText: {
    color: "#ef4444",
    fontSize: 12,
    fontWeight: "500",
  },
  unavailableBadge: {
    backgroundColor: "rgba(156, 163, 175, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(156, 163, 175, 0.3)",
  },
  unavailableText: {
    color: "#9ca3af",
    fontSize: 12,
    fontWeight: "500",
  },
  redeemedBadge: {
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(34, 197, 94, 0.3)",
  },
  redeemedText: {
    color: "#22c55e",
    fontSize: 12,
    fontWeight: "600",
  },
  footer: {
    height: 20,
  },
});
