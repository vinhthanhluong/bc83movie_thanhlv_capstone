import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addMovie, deleteMovie, getMovieDetail, getMoviePagi, updateMovie } from "../service/movie.api";
import { showDialog } from "../utils/dialog";

export const useGetMovieDetail = (idMovie, optional = {}) =>
  useQuery({
    queryKey: ["movieDetail", idMovie],
    queryFn: () => getMovieDetail(idMovie),
    enabled: !!idMovie,
    ...optional,
  });

export const useGetMovieAdmin = (currentPage, optional = {}) =>
  useQuery({
    queryKey: ["addMovie-admin", currentPage],
    queryFn: () => getMoviePagi(5, currentPage),
    ...optional,
  });

export const useCreateMovie = (optional = {}) =>
  useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      showDialog({
        title: "Tạo phim thành công",
        icon: "success",
      });
    },
    onError: () => {
      showDialog({
        title: "Tạo phim thất bại",
        icon: "error",
      });
    },
    ...optional,
  });

export const useDeleteMovie = (optional = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      showDialog({
        title: "Đã xóa thành công",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["addMovie-admin"] });
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
      queryClient.invalidateQueries({ queryKey: ["addMovie-admin"] });
      queryClient.invalidateQueries({ queryKey: ["movieDetail"] });
    },
    onError: () => {
      showDialog({
        title: "Đã cập nhật thất bại",
        icon: "error",
      });
    },
    ...optional,
  });
};
