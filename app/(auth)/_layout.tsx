import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          presentation: "formSheet",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
