import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen name="sign-up" options={{}} />
    </Stack>
  );
};

export default AuthLayout;
