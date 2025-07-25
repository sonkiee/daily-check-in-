import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const inset = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["ivory", "#3b5998", "#192f6a"]}
      style={{ flex: 1, paddingTop: inset.top }}
    >
      {children}
    </LinearGradient>
  );
};

export default Wrapper;
