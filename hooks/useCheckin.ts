import { apiClient } from "@/libs/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// import { useCheckinStore } from "../stores/checkinStore";

// export const useTodayCheckin = (deviceId: string) => {
//   return useQuery({
//     queryKey: ["checkin", "today", deviceId],
//     queryFn: () => checkToday(deviceId),
//     onSuccess: (data) => {
//       useCheckinStore.getState().setCheckedIn(data.checkedIn);
//     },
//   });
// };

const performCheckin = async () => {
  const response = await apiClient.post("/checkin");
  return response;
};

export const useDoCheckin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => performCheckin(),
    onSuccess: () => {},
  });
};
