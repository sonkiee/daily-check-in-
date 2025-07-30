// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { checkToday, performCheckin } from "../services/checkinService";
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

// export const useDoCheckin = (deviceId: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: () => performCheckin(deviceId),
//     onSuccess: () => {
//       useCheckinStore.getState().setCheckedIn(true);
//       queryClient.invalidateQueries(["checkin", "today", deviceId]);
//     },
//   });
// };
