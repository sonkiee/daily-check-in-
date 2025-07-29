import ClaimScreen from "@/components/screens/Claim";
import HomeScreen from "@/components/screens/Home";
import Wrapper from "@/components/ui/Wrapper";
import usePushNotifications from "@/hooks/usePushNotifications";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const Index = () => {
  const token = usePushNotifications();
  console.log("Expo Push Token:", token);

  const [newDevice, setNewDevice] = useState(true);

  // if (newDevice) {
  //   Alert.alert("Welcome", "You're most welcome to our app new tome usrr");
  // }

  if (newDevice) return <Redirect href={"/(auth)"} />;

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
