import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const inset = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={{ flex: 1, backgroundColor: "red", paddingTop: inset.top }}
    >
      {children}
    </LinearGradient>
  );
};

export default Wrapper;
