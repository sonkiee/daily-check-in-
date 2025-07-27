import ClaimScreen from "@/components/screens/Claim";
import HomeScreen from "@/components/screens/Home";
import Wrapper from "@/components/ui/Wrapper";
import usePushNotifications from "@/hooks/usePushNotifications";
import React from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const Index = () => {
  const token = usePushNotifications();
  console.log("Expo Push Token:", token);

  return (
    <Wrapper>
      <PagerView style={styles.container} initialPage={0} overdrag>
        <HomeScreen key={1} />
        <ClaimScreen key={2} />
      </PagerView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Index;
