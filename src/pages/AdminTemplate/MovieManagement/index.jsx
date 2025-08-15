import {
  Eye,
  Star,
  SquarePen,
  Trash2,
  Plus,
  Film,
  X,
  ArchiveRestore,
  VenetianMask,
  Link,
  FileText,
  CalendarFold,
} from "lucide-react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import PaginationCustom from "../../HomeTemplate/_components/PaginationCustom";
import { getMoviePagi } from "../../../service/movie.api";
import Loading from "../../HomeTemplate/_components/Loading";
import { useForm } from "react-hook-form";
import { number } from "zod";
import { fa } from "zod/v4/locales";

export default function MovieManagement() {
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movide-admin"],
    queryFn: () => getMoviePagi(5),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: null,
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: null,
      danhGia: 0,
      hot: false,
      trangThai: false,
      // dangChieu: false,
      // sapChieu: false,
    },
  });

  const hinhAnh = watch("hinhAnh");
  const previewImage = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    return url;
  };

  const onSubmit = (data) => {
    console.log("🌲 ~ onSubmit ~ data:", data);
  };

  return (
    <>
      <div className="p-6 lg:p-8 xl:p-10 border border-[#eee] rounded-xl shadow-sm ">
        <div className="flex justify-between">
          <div className="block w-[300px] lg:w-sm">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">
              Quản lý phim
            </h2>
            <div className="mb-6">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 block w-full p-2.5"
                placeholder="Tìm kiếm phim"
              />
            </div>
          </div>
          <button
            onClick={open}
            className="flex items-center gap-1 text-white bg-[var(--mainColor)] font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-[var(--mainColor)] hover:shadow-[0_0_10px_#e396c1] transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span className="hidden md:block">Thêm phim mới</span>
          </button>
        </div>

        <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
          <div className="relative overflow-x-auto rounded-lg min-h-[200px]">
            {isLoading && <Loading />}

            <table className="w-full text-sm text-left text-gray-500 min-w-[840px]">
              <thead className="text-sm text-gray-500 text-center bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left w-[10%]">
                    Poster
                  </th>
                  <th scope="col" className="px-3 py-4 text-left w-[35%]">
                    Tên phim
                  </th>
                  <th scope="col" className="px-3 py-4 w-[10%]">
                    Đánh giá
                  </th>
                  <th scope="col" className="px-3 py-4 w-[16%]">
                    Ngày phát hành
                  </th>
                  <th scope="col" className="px-3 py-4 w-[17%]">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-3 py-4 w-[12%]">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {movie?.items?.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200 hover:bg-gray-50 "
                  >
                    <td className="px-6 py-4 pr-2">
                      <img
                        className="w-18 object-cover object-center"
                        src={item?.hinhAnh}
                        alt={item?.tenPhim}
                      />
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 "
                    >
                      <p className="line-clamp-1">{item?.tenPhim}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="text-yellow-400 w-5" />
                        <span className="font-semibold text-black">
                          {item?.danhGia}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-500 text-center">
                        {item?.ngayKhoiChieu
                          ? format(item?.ngayKhoiChieu, "dd/MM/yyyy")
                          : ""}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      {item?.dangChieu && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full block w-fit mx-auto ">
                          Đang chiếu
                        </span>
                      )}
                      {item?.sapChieu && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full block w-fit mx-auto ">
                          Sắp chiếu
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-center gap-3">
                        <Eye className="text-blue-500 w-5 cursor-pointer hover:text-blue-800 transition-all duration-300" />
                        <SquarePen className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300" />
                        <Trash2 className="text-red-500 w-5 cursor-pointer hover:text-red-800 transition-all duration-300" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5">
            <p className="text-gray-500 text-sm text-center">
              Hiển thị 10 phim mỗi trang{" "}
              <span className="sm:inline-block hidden">-</span>{" "}
              <br className="sm:hidden" /> Tổng cộng 50 phim
            </p>
            <PaginationCustom />
          </div>
        </div>
      </div>
      <Transition show={isOpen} unmount={false}>
        <Dialog as="div" className="focus:outline-none" onClose={close}>
          <div className="fixed z-[999] inset-0 flex w-screen items-center justify-center p-4 bg-[#0009]">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className=" w-6xl rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <div className="relative flex items-center p-6 bg-pink-50 rounded-t-xl">
                  <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
                    <Film className="w-8 h-8 duration-300 transition-all" />
                  </div>
                  <div className="block ml-4">
                    <p className="text-2xl font-bold text-gray-800">
                      Thêm phim mới
                    </p>
                    <p className="text-base text-gray-600">
                      Điền thông tin phim để thêm vào hệ thống
                    </p>
                  </div>

                  <div
                    onClick={close}
                    className="absolute inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]"
                  >
                    <X className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                      <div className="left w-1/2 space-y-3.5">
                        <div>
                          <label
                            htmlFor="tenPhim"
                            className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
                          >
                            <Film width={20} className="text-pink-500" /> Thêm
                            phim
                          </label>
                          <input
                            type="text"
                            id="tenPhim"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Nhập tên phim..."
                            {...register("tenPhim")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="biDanh"
                            className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
                          >
                            <VenetianMask
                              width={20}
                              className="text-blue-400"
                            />
                            Bí danh
                          </label>
                          <input
                            type="text"
                            id="biDanh"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="Nhập Bí danh..."
                            {...register("biDanh")}
                          />
                        </div>
                        <div>
                          <p className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-2">
                            <CalendarFold
                              width={18}
                              className="text-yellow-400"
                            />
                            Ngày khởi chiếu
                          </p>
                          <div className="relative  z-10">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-500 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                              </svg>
                            </div>
                            <input
                              datepicker="true"
                              // id="default-datepicker"
                              type="date"
                              // type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                              placeholder="mm/dd/yyyy"
                              {...register("ngayKhoiChieu")}
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="link"
                            className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
                          >
                            <Link width={18} className="text-red-400" />
                            Link Trailer YouTube
                          </label>
                          <input
                            type="text"
                            id="link"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="https://www.youtube.com/watch...."
                            {...register("trailer")}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="moTa"
                            className="block mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
                          >
                            <FileText width={18} className="text-green-400" />
                            Mô tả
                          </label>
                          <textarea
                            id="moTa"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Nhập mô tả nội dung phim..."
                            {...register("moTa")}
                          />
                        </div>
                      </div>
                      <div className="right w-1/2 space-y-3.5">
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Poster
                          </label>
                          <div className="flex items-center justify-center w-full relative">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="w-8 h-8 mb-4 text-gray-500 "
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 ">
                                  <span className="font-semibold">
                                    Nhấp để tải ảnh
                                  </span>{" "}
                                  kéo hoặc thả
                                </p>
                                <p className="text-xs text-gray-500 ">
                                  SVG, PNG or JPG (MAX. 400x800px)
                                </p>
                              </div>

                              {hinhAnh && (
                                <img
                                  src={previewImage(hinhAnh)}
                                  className="absolute max-h-full w-fit mx-auto inset-0 object-cover"
                                  alt=""
                                />
                              )}
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  setValue("hinhAnh", file);
                                }}
                              />
                            </label>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="minmax-range"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Đánh giá
                          </label>
                          <input
                            id="minmax-range"
                            type="range"
                            min={0}
                            max={10}
                            defaultValue={0}
                            step={1}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
                            {...register("danhGia")}
                          />
                        </div>

                        <div>
                          <p className="block mb-2 text-sm font-medium text-gray-900 ">
                            Trạng thái
                          </p>
                          <div>
                            <div className="flex items-center mb-4">
                              <input
                                id="hot"
                                type="checkbox"
                                name="hot"
                                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                                {...register("hot")}
                              />
                              <label
                                htmlFor="hot"
                                className="block ms-2 text-sm font-medium text-gray-900 flex gap-2 items-center"
                              >
                                🔥Phim Hot
                              </label>
                            </div>

                            <div>
                              <div className="flex items-center mb-4">
                                <input
                                  id="default-radio-1"
                                  type="radio"
                                  name="trangThai"
                                  defaultValue
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  {...register("trangThai")}
                                />
                                <label
                                  htmlFor="default-radio-1"
                                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  📽️Đang chiếu
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  id="default-radio-2"
                                  type="radio"
                                  name="trangThai"
                                  defaultValue
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  {...register("trangThai")}
                                />
                                <label
                                  htmlFor="default-radio-2"
                                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  🕰️Sắp chiếu
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-5 pt-5 mt-5 border-t border-gray-300">
                      <button
                        className="cursor-pointer border border-gray-300 text-gray-600 hover:bg-gray-300 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center"
                        onClick={close}
                      >
                        Hủy bỏ
                      </button>
                      <button
                        // type="submit"
                        className="cursor-pointer text-white bg-pink-600 hover:bg-pink-800 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center"
                      >
                        <ArchiveRestore width={20} />
                        Thêm phim mới
                      </button>
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
