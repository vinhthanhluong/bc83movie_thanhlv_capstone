import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  addMovie,
  deleteMovie,
  getMovieDetail,
  getMoviePagi,
  updateMovie,
} from "../service/movie.api";
import { showDialog } from "../utils/dialog";

export const useGetMovieDetail = (idMovie, optional = {}) =>
  useQuery({
    queryKey: ["movieDetail", idMovie],
    queryFn: () => getMovieDetail(idMovie),
    enabled: !!idMovie,
    ...optional,
  });

export const useGetMoviePagi = (numItem , currentPage, optional = {}) =>
  useQuery({
    queryKey: ["listMovie-pagi", currentPage],
    queryFn: () => getMoviePagi(numItem, currentPage),
    ...optional,
  });

export const useCreateMovie = (optional = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      showDialog({
        title: "Tạo phim thành công",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["listMovie-pagi"] });
    },
    onError: () => {
      showDialog({
        title: "Tạo phim thất bại",
        icon: "error",
      });
    },
    ...optional,
  });
};

export const useDeleteMovie = (optional = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      showDialog({
        title: "Đã xóa thành công",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["listMovie-pagi"] });
    },
    onError: () => {
      showDialog({
        title: "Đã xóa thất bại",
        icon: "error",
      });
    },
    ...optional,
  });
};

export const useUpDateMovie = (optional = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMovie,
    onSuccess: () => {
      showDialog({
        title: "Đã cập nhật thành công",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["listMovie-pagi"] });
      queryClient.invalidateQueries({ queryKey: ["movieDetail"] });
    },
    onError: (error) => {
      showDialog({
        title: "Đã cập nhật thất bại",
        text: error?.response?.data?.content,
        icon: "error",
      });
    },
    ...optional,
  });
};
