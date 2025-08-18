import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addUserApi,
  deleteUserApi,
  getSearchUserApi,
  getTypeUserApi,
  //   getDetailUserApi,
  getUserApi,
  updateUserApi,
} from "../service/user.api";
import { showDialog } from "../utils/dialog";

export const useGetListUser = (numItem, numPagi, optional) =>
  useQuery({
    queryKey: ["list-user", numPagi],
    queryFn: () => getUserApi(numItem, numPagi),
    ...optional,
  });

export const useGetTypeUser = (optional) =>
  useQuery({
    queryKey: ["type-user"],
    queryFn: () => getTypeUserApi(),
    ...optional,
  });

// export const useGetDetailUser = (optional) => {
//   return useMutation({
//     mutationFn: getDetailUserApi,
//     ...optional,
//   });
// };

export const useAddUser = (optional) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      showDialog({
        title: "Tạo người dùng thành công",
      });
      queryClient.invalidateQueries({
        queryKey: ["list-user"],
      });
    },
    onError: (error) => {
      showDialog({
        title: "Tạo người dùng thất bại",
        text: error?.response?.data?.content,
        icon: "error",
      });
    },
    ...optional,
  });
};

export const useDeleteUser = (optional) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      showDialog({
        title: "Xóa người dùng thành công",
      });
      queryClient.invalidateQueries({
        queryKey: ["list-user"],
      });
    },
    onError: (error) => {
      showDialog({
        title: "Xóa người dùng thất bại",
        text: error?.response?.data?.content,
        icon: "error",
      });
    },
    ...optional,
  });
};

export const useUpdateUser = (optional) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      showDialog({
        title: "Sửa người dùng thành công",
      });
      queryClient.invalidateQueries({
        queryKey: ["list-user"],
      });
    },
    onError: (error) => {
      showDialog({
        title: "Sửa người dùng thất bại",
        text: error?.response?.data?.content,
        icon: "error",
      });
    },
    ...optional,
  });
};

export const useGetSearchUser = (optional) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getSearchUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list-user"],
      });
    },
    ...optional,
  });
};
