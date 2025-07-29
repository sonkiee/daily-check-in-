import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
};

export default AuthLayout;
