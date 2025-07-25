import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const Index = () => {
  return (
    <Wrapper>
      <PagerView style={styles.container} overdrag />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Index;
