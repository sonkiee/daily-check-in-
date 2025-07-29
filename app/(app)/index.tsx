import ClaimScreen from "@/components/screens/Claim";
import Wrapper from "@/components/ui/Wrapper";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

const HomeScreen = () => {
  return (
    <Wrapper>
      <PagerView style={styles.container} initialPage={0} overdrag>
        <HomeScreen key={1} />
        <ClaimScreen key={2} />
      </PagerView>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
