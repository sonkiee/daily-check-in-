import HomeScreen from "@/components/screens/Home";
import SettingsScreen from "@/components/screens/Settings";
import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const Index = () => {
  return (
    <Wrapper>
      <PagerView style={styles.container} initialPage={0} overdrag>
        <HomeScreen key={1} />
        <SettingsScreen key={2} />
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
