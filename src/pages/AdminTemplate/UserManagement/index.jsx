import {
  Eye,
  SquarePen,
  Trash2,
  Plus,
  Film,
  X,
  User,
  SquareAsterisk,
  UserRoundPen,
  Mail,
  Phone,
  CircleUserRound,
  Pencil,
  LoaderCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";

import PaginationCustom from "../../HomeTemplate/_components/PaginationCustom";
import Loading from "../../HomeTemplate/_components/Loading";
import {
  useAddUser,
  useDeleteUser,
  // useGetDetailUser,
  useGetListUser,
  useGetSearchUser,
  useGetTypeUser,
  useUpdateUser,
} from "../../../hooks/useUserQuery";
import { useForm } from "react-hook-form";
import { confirmDialog } from "../../../utils/dialog";
import useDebounce from "../../../hooks/useDebounce";

export default function UserManagement() {
  const [detailUser, setDetailUser] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setDetailUser(null);
  };

  const handlePage = (pagi) => {
    setCurrentPage(pagi);
  };

  const { data: listUser = {}, isLoading } = useGetListUser(5, currentPage);
  const { data: typeUser = [], isLoading: isLoadingType } = useGetTypeUser();

  const { mutate: mutateAdd, isPending: isPendingAdd } = useAddUser();
  const { mutate: mutateDelete, isPending: isPendingDelete } = useDeleteUser();
  const { mutate: mutateUpdate, isPending: isPendingUpdate } = useUpdateUser();
  const { mutate: mutateSearch, isPending: isPendingSearch } =
    useGetSearchUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
  });

  const { register: registerFilter, watch: watchFilter } = useForm({
    defaultValues: {
      keyword: "",
    },
  });
  const keyword = watchFilter("keyword");
  const debounceKeyword = useDebounce(keyword, 500);
  
  useEffect(() => {
    console.log("🌲 ~ UserManagement ~ debounceKeyword:", debounceKeyword)
    // mutateSearch(debounceKeyword);
  }, [debounceKeyword]);

  const onSubmit = (data) => {
    if (detailUser) {
      mutateUpdate(data, {
        onSuccess: () => {
          close();
          reset();
        },
      });
    } else {
      mutateAdd(data, {
        onSuccess: () => {
          close();
          reset();
        },
      });
    }
  };

  const handleDetailUser = (ur) => {
    setIsOpen(true);
    const newsUser = listUser?.items?.find((u) => u.taiKhoan === ur);
    setDetailUser(newsUser);
  };

  useEffect(() => {
    reset({
      maNhom: detailUser?.maNhom,
      taiKhoan: detailUser?.taiKhoan,
      matKhau: detailUser?.matKhau,
      email: detailUser?.email,
      soDt: detailUser?.soDt,
      maLoaiNguoiDung: detailUser?.maLoaiNguoiDung,
      hoTen: detailUser?.hoTen,
    });
  }, [detailUser]);

  const handleDelete = (taiKhoan) => {
    confirmDialog({
      title: "Bạn có chắc muốn xóa không",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateDelete(taiKhoan, {
          onSuccess: () => {
            setCurrentPage(listUser?.currentPage);
          },
        });
      }
    });
  };

  return (
    <>
      <div className="p-6 lg:p-8 xl:p-10 border border-[#eee] rounded-xl shadow-sm ">
        <div className="flex justify-between">
          <div className="block w-[300px] lg:w-fit">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">
              Quản lý người dùng
            </h2>
            <div className="mb-6 flex gap-4">
              <input
                type="text"
                className="w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 block  p-2.5"
                placeholder="Tìm người dùng"
                {...registerFilter("keyword")}
              />

              <select
                className="w-[180px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue=""
              >
                <option value="">Tất cả</option>
                {typeUser.map((item, index) => {
                  return (
                    <option key={index} value={item.maLoaiNguoiDung}>
                      {item.tenLoai}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button
            onClick={open}
            className="flex items-center gap-1 text-white bg-[var(--mainColor)] font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-[var(--mainColor)] hover:shadow-[0_0_10px_#e396c1] transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden md:block">Thêm người dùng</span>
          </button>
        </div>

        <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
          <div className="relative overflow-x-auto rounded-lg min-h-[200px]">
            <table className="w-full text-sm text-left text-gray-500 min-w-[840px]">
              <thead className="text-sm text-gray-500  bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-4 w-[10%]">
                    Tên
                  </th>
                  <th scope="col" className="px-3 py-4 w-[15%]">
                    Tài khoản
                  </th>
                  <th scope="col" className="px-3 py-4 w-[10%]">
                    Mật khẩu
                  </th>
                  <th scope="col" className="px-3 py-4 w-[15%]">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-4 w-[18%]">
                    Sđt
                  </th>
                  <th scope="col" className="px-3 py-4 w-[15%]">
                    Loại
                  </th>
                  <th scope="col" className="px-3 py-4 w-[12%]">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {listUser?.items?.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200 hover:bg-gray-50 "
                  >
                    <td className="px-3 py-4 pr-2">{item.hoTen}</td>
                    <td className="px-3 py-4 font-medium text-gray-900 ">
                      {item.taiKhoan}
                    </td>
                    <td className="px-3 py-4">{item.matKhau}</td>
                    <td className="px-3 py-4">{item.email}</td>
                    <td className="px-3 py-4">{item.soDt}</td>
                    <td className="px-3 py-4">
                      {item.maLoaiNguoiDung === "QuanTri"
                        ? "Quản trị"
                        : "Khách hàng"}
                    </td>

                    <td className="px-3 py-4 text-right">
                      <div className="flex gap-3">
                        <SquarePen
                          onClick={() => handleDetailUser(item.taiKhoan)}
                          className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300"
                        />
                        <Trash2
                          onClick={() => {
                            handleDelete(item.taiKhoan);
                          }}
                          className="text-red-500 w-5 cursor-pointer hover:text-red-800 transition-all duration-300"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5">
            <p className="text-gray-500 text-sm text-center">
              Hiển thị 10 người dùng mỗi trang
              <span className="sm:inline-block hidden">-</span>{" "}
              <br className="sm:hidden" /> Tổng cộng 60 người dùng
            </p>
            <PaginationCustom
              totalPages={listUser?.totalPages}
              currentPage={currentPage}
              handlePage={handlePage}
            />
          </div>
        </div>
      </div>

      <Transition show={isOpen} unmount={false}>
        <Dialog as="div" className="focus:outline-none" onClose={close}>
          <div className="fixed z-[999] inset-0 overflow-auto  bg-[#0009]">
            <div className="w-full md:flex items-center md:h-full md:w-3xl xl:w-6xl p-4 m-auto ">
              <DialogPanel
                transition
                className=" w-full rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <div className="relative flex items-center p-3 md:p-6 bg-pink-50 rounded-t-xl">
                  <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
                    <Film className="w-8 h-8 duration-300 transition-all" />
                  </div>
                  <div className="block ml-2 md:ml-4">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">
                      {!detailUser ? "Thêm" : "Sửa"} người dùng
                    </p>
                  </div>

                  <div
                    onClick={close}
                    className="absolute top-0 right-0 md:inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]"
                  >
                    <X className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" md:flex gap-4 md:gap-10">
                      <div className="left md:w-1/2 space-y-1.5 md:space-y-3.5">
                        <div>
                          <label
                            htmlFor="taiKhoan"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
                          >
                            <User width={20} className="text-pink-500" />
                            Tài khoản
                          </label>
                          <input
                            type="text"
                            id="taiKhoan"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Nhập tài khoản..."
                            {...register("taiKhoan")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="matKhau"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
                          >
                            <SquareAsterisk
                              width={20}
                              className="text-blue-400"
                            />
                            Mật khẩu
                          </label>
                          <input
                            type="text"
                            id="matKhau"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Nhập mật khẩu..."
                            {...register("matKhau")}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="hoTen"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
                          >
                            <UserRoundPen
                              width={18}
                              className="text-yellow-400"
                            />
                            Họ tên
                          </label>
                          <input
                            type="text"
                            id="hoTen"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Nhập họ tên..."
                            {...register("hoTen")}
                          />
                        </div>
                      </div>
                      <div className="right md:w-1/2 space-y-3.5">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
                          >
                            <Mail width={18} className="text-red-400" />
                            Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="abc@gmail.com"
                            {...register("email")}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="soDt"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
                          >
                            <Phone width={18} className="text-green-400" />
                            Số điện thoại
                          </label>
                          <input
                            type="text"
                            id="soDt"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="xxx-xxx-xxxx"
                            {...register("soDt")}
                          />
                        </div>
                        <div>
                          <div>
                            <label
                              htmlFor="countries"
                              className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
                            >
                              <CircleUserRound
                                width={18}
                                className="text-purple-400"
                              />
                              Loại tài khoản
                            </label>
                            <select
                              defaultValue=""
                              id="countries"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              {...register("maLoaiNguoiDung")}
                            >
                              <option value="">Chọn tài khoản</option>
                              {/* <option value="QuanTri">Quản trị</option>
                              <option value="KhachHang">Khách hàng</option> */}
                              {typeUser.map((item, index) => {
                                return (
                                  <option
                                    key={index}
                                    value={item.maLoaiNguoiDung}
                                  >
                                    {item.tenLoai}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-5 pt-5 mt-5 border-t border-gray-300">
                      <p
                        className="cursor-pointer border border-gray-300 text-gray-600 hover:bg-gray-300 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center"
                        onClick={close}
                      >
                        Hủy bỏ
                      </p>
                      {!detailUser ? (
                        <button className="cursor-pointer text-white bg-pink-600 hover:bg-pink-800 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center">
                          {isPendingAdd ? (
                            <LoaderCircle className="animate-spin" width={20} />
                          ) : (
                            <Plus width={20} />
                          )}
                          Thêm phim mới
                        </button>
                      ) : (
                        <button className="cursor-pointer text-white bg-pink-600 hover:bg-pink-800 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center">
                          {isPendingAdd ? (
                            <LoaderCircle className="animate-spin" width={20} />
                          ) : (
                            <Pencil width={16} />
                          )}
                          Sửa phim
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
