import { Stack } from "expo-router";

const AppLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="(settings)" />
    </Stack>
  );
};

export default AppLayout;
