import { apiClient } from "@/libs/api";

interface SignUpProps {
  username: string;
  deviceId: string;
}

const signUp = async ({
  username,
  deviceId,
}: SignUpProps): Promise<{ success: boolean; data: any }> => {
  const payload = { username, deviceId };

  try {
    const response = await apiClient.post("/auth/signup", payload);
    console.log("Sign up success:", response.data);

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error("Sign up failed:", error);
    throw new Error(error?.message || "Unknown error during sign-up");
  }
};

export default signUp;
