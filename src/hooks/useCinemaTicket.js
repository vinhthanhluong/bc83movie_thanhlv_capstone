import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addTicket,
  getCinemaDetail,
  getCinemaTicket,
} from "../service/cinema.api";
import { showDialog } from "../utils/dialog";

export const useCinemaDetail = (movieId, optional) =>
  useQuery({
    queryKey: ["Movie-detail", movieId],
    queryFn: () => getCinemaDetail(movieId),
    enabled: !!movieId,
    ...optional,
  });

export const useCinemaTicket = (ticketId, optional) =>
  useQuery({
    queryKey: ["cinema-ticket"],
    queryFn: () => getCinemaTicket(ticketId),
    enabled: !!ticketId,
    ...optional,
  });

export const useAddTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTicket,
    onSuccess: () => {
      showDialog({
        title: "Đặt vé thành công",
      });
      queryClient.invalidateQueries({ queryKey: ["cinema-ticket"] });
    },
    onError: (error) => {
      showDialog({
        title: "Đặt vé thất bại",
        text: error?.message,
        icon: "error",
      });
    },
  });
};
