import { apiClient } from "@/libs/api";

const doCheckin = async () => {
  try {
    const response = await apiClient.post("/checkins");
    console.log("Check-in successful:", response);
    return { success: true, response };
  } catch (error: any) {
    console.error("Check-in failed:", error);
    return {
      success: false,
      error: error,
    };
  }
};

export default doCheckin;
