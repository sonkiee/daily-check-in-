import ClaimScreen from "@/components/screens/Claim";
import HomeScreen from "@/components/screens/Home";
import Wrapper from "@/components/ui/Wrapper";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const IndexScreen = () => {
  return (
    <Wrapper>
      <PagerView style={styles.container} initialPage={1} overdrag>
        <HomeScreen key={1} />
        <ClaimScreen key={2} />
      </PagerView>
    </Wrapper>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
