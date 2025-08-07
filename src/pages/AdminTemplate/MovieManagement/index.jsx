import { Eye, Star, SquarePen, Trash2, Plus, Film, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

import PaginationCustom from "../../HomeTemplate/_components/PaginationCustom";

export default function MovieManagement() {
  let [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
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
          <button className="flex items-center gap-1 text-white bg-[var(--mainColor)] font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-[var(--mainColor)] hover:shadow-[0_0_10px_#e396c1] transition-all duration-300">
            <Plus className="w-5 h-5" />
            <span className="hidden md:block">Thêm phim mới</span>
          </button>
        </div>

        <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
          <div className="relative overflow-x-auto rounded-lg">
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
                <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                  <td className="px-6 py-4 pr-2">
                    <img
                      className="w-18 object-cover object-center"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 "
                  >
                    <p className="line-clamp-1">Apple MacBook Pro 17"</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="text-yellow-400 w-5" />
                      <span className="font-semibold text-black">8.8</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-center">10/10/2024</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full block w-fit mx-auto ">
                      Đang chiếu
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-center gap-3">
                      <Eye className="text-blue-500 w-5 cursor-pointer hover:text-blue-800 transition-all duration-300" />
                      <SquarePen className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300" />
                      <Trash2 className="text-red-500 w-5 cursor-pointer hover:text-red-800 transition-all duration-300" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                  <td className="px-6 py-4 pr-2">
                    <img
                      className="w-18 object-cover object-center"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    <p className="line-clamp-1">Apple MacBook Pro 17"</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="text-yellow-400 w-5" />
                      <span className="font-semibold text-black">8.8</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-center">10/10/2024</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full block w-fit mx-auto">
                      Sắp chiếu
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-center gap-3">
                      <Eye className="text-blue-500 w-5 cursor-pointer hover:text-blue-800 transition-all duration-300" />
                      <SquarePen className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300" />
                      <Trash2 className="text-red-500 w-5 cursor-pointer hover:text-red-800 transition-all duration-300" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                  <td className="px-6 py-4 pr-2">
                    <img
                      className="w-18 object-cover object-center"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    <p className="line-clamp-1">Apple MacBook Pro 17"</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="text-yellow-400 w-5" />
                      <span className="font-semibold text-black">8.8</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-center">10/10/2024</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full block w-fit mx-auto ">
                      Đang chiếu
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-center gap-3">
                      <Eye className="text-blue-500 w-5 cursor-pointer hover:text-blue-800 transition-all duration-300" />
                      <SquarePen className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300" />
                      <Trash2 className="text-red-500 w-5 cursor-pointer hover:text-red-800 transition-all duration-300" />
                    </div>
                  </td>
                </tr>
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

      <button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="focus:outline-none"
        onClose={close}
      >
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

                <div className="absolute inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]">
                  <X className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6">
                <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="movie_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Thêm phim
                      </label>
                      <input
                        type="text"
                        id="movie_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nhập tên phim..."
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Poster
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Nhấp để tải ảnh
                              </span> kéo hoặc thả
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG or JPG (MAX. 400x800px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="website"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="flowbite.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="visitors"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Unique visitors (per month)
                      </label>
                      <input
                        type="number"
                        id="visitors"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="•••••••••"
                      required
                    />
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                onClick={close}
              >
                Hủy bỏ
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
