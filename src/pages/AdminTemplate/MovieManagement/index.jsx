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
  LoaderCircle,
  Calendar,
  User,
} from "lucide-react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  useCreateMovie,
  useDeleteMovie,
  useGetMoviePagi,
  useGetMovieDetail,
  useUpDateMovie,
} from "../../../hooks/useMovieQuery";
import { confirmDialog } from "../../../utils/dialog";

import PaginationCustom from "../../HomeTemplate/_components/PaginationCustom";
import Loading from "../../HomeTemplate/_components/Loading";

export default function MovieManagement() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenDetail, setIsOpenDetail] = useState(false);

  let [currentPage, setCurrentPage] = useState(1);
  let [idDetail, setIdDetail] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    reset();
  };
  const openDetail = () => setIsOpenDetail(true);
  const closeDetail = () => setIsOpenDetail(false);

  // getMovieDetail
  const { data: movieDetail = {}, isLoading: isLoadingDetail } =
    useGetMovieDetail(idDetail);
  // getMovie
  const { data: movie, isLoading } = useGetMoviePagi(5 , currentPage);
  // addMovie
  const { mutate: createMovie, isPending: createIsPending } = useCreateMovie();
  // deleteMovie
  const { mutate: deleteMovie } = useDeleteMovie();
  // updateMovie
  const { mutate: updateMovie, isPending: updateIsPending } = useUpDateMovie();

  const handlePage = (pagi) => {
    setCurrentPage(pagi);
  };

  const handleDelete = (maPhim) => {
    confirmDialog({
      title: "Bạn có chắc muốn xóa không",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie(maPhim, {
          onSuccess: () => {
            setCurrentPage(movie?.currentPage);
          },
        });
      }
    });
  };

  // const linkYoutube = movieDetail?.trailer && movieDetail.trailer.slice(-11);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
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
  const previewImage = () => {
    if (hinhAnh) {
      return URL.createObjectURL(hinhAnh);
    }
    if (movieDetail?.hinhAnh) {
      return movieDetail.hinhAnh;
    }
    return null;
  };

  const onSubmit = (values) => {
    const { trangThai, ...rest } = values;
    const newValues = {
      ...rest,
      dangChieu: trangThai === "true",
      sapChieu: trangThai === "false",
    };

    const formData = new FormData();
    for (let key in newValues) {
      formData.append(key, newValues[key]);
    }

    if (values.maPhim) {
      updateMovie(formData, {
        onSuccess: () => {
          reset();
          setSelectedDate("");
          close();
          setIdDetail(null);
        },
      });
    } else {
      createMovie(formData, {
        onSuccess: () => {
          reset();
          setSelectedDate("");
          close();
        },
      });
    }
  };

  useEffect(() => {
    if (!idDetail || !movieDetail) return;
    const ngayKhoiChieuDate = movieDetail.ngayKhoiChieu
      ? new Date(movieDetail.ngayKhoiChieu)
      : null;

    setSelectedDate(ngayKhoiChieuDate);

    reset({
      maPhim: movieDetail.maPhim,
      tenPhim: movieDetail.tenPhim,
      biDanh: movieDetail.biDanh,
      trailer: movieDetail.trailer,
      moTa: movieDetail.moTa,
      danhGia: movieDetail.danhGia,
      hot: movieDetail.hot,
      trangThai: movieDetail.dangChieu ? "true" : "false",
    });
  }, [idDetail, movieDetail, reset]);

  return (
    <>
      <div className="p-6 lg:p-8 xl:p-10 border border-[#eee] rounded-xl shadow-sm ">
        <div className="flex justify-between">
          <div className="block w-[300px] lg:w-sm">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">
              Quản lý phim
            </h2>
            {/* <div className="mb-6">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 block w-full p-2.5"
                placeholder="Tìm kiếm phim"
              />
            </div> */}
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
                        className="w-15 h-22 object-cover object-center"
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
                        <Eye
                          onClick={() => {
                            setIsOpenDetail(true);
                            setIdDetail(item?.maPhim);
                          }}
                          className="text-blue-500 w-5 cursor-pointer hover:text-blue-800 transition-all duration-300"
                        />
                        <SquarePen
                          onClick={() => {
                            setIsOpen(true);
                            setIdDetail(item?.maPhim);
                          }}
                          className="text-yellow-500 w-5 cursor-pointer hover:text-yellow-800 transition-all duration-300"
                        />
                        <Trash2
                          onClick={() => {
                            handleDelete(item?.maPhim);
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
              Hiển thị {movie?.count} phim mỗi trang{" "}
              <span className="sm:inline-block hidden">-</span>{" "}
              <br className="sm:hidden" /> Tổng cộng {movie?.totalCount} phim
            </p>
            <PaginationCustom
              totalPages={movie?.totalPages}
              currentPage={currentPage}
              handlePage={handlePage}
            />
          </div>
        </div>
      </div>

      <Transition show={isOpen} unmount={false}>
        <Dialog as="div" className="focus:outline-none" onClose={close}>
          <div className="fixed z-[999] p-4 inset-0 flex items-center bg-[#0009]">
            <div className="w-full md:w-3xl xl:w-6xl m-auto">
              <DialogPanel
                transition
                className="w-full bg-white rounded-xl backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <div className="relative flex items-center p-3 md:p-6 bg-pink-50 rounded-t-xl">
                  <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
                    <Film className="w-8 h-8 duration-300 transition-all" />
                  </div>
                  <div className="block ml-2 md:ml-4">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">
                      Thêm phim mới
                    </p>
                  </div>

                  <div
                    onClick={close}
                    className="absolute inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]"
                  >
                    <X className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-4 md:p-6 max-h-[70vh] overflow-y-auto">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="min-h-[60vh]"
                  >
                    <div className=" md:flex gap-4 md:gap-10">
                      <div className="left md:w-1/2 space-y-1.5 md:space-y-3.5">
                        <div>
                          <label
                            htmlFor="tenPhim"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
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
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2 "
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
                          <p className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2">
                            <CalendarFold
                              width={18}
                              className="text-yellow-400"
                            />
                            Ngày khởi chiếu
                          </p>
                          <DatePicker
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                            showIcon
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            selected={selectedDate}
                            placeholderText="xx/xx/xxxx"
                            onChange={(date) => {
                              setSelectedDate(date);
                              setValue(
                                "ngayKhoiChieu",
                                format(date, "dd/MM/yyyy")
                              );
                            }}
                            icon={
                              <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                              </svg>
                            }
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="link"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
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
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 flex items-center gap-2"
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
                      <div className="right md:w-1/2 space-y-3.5">
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 "
                          >
                            Poster
                          </label>
                          <div className="flex items-center justify-center w-full relative">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-34 md:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                            >
                              {!previewImage() && (
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg
                                    className="w-8 h-8 mb-1 md:mb-4 text-gray-500 "
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
                                  <p className="mb-1 md:mb-2 text-sm text-gray-500 ">
                                    <span className="font-semibold">
                                      Nhấp để tải ảnh
                                    </span>{" "}
                                    kéo hoặc thả
                                  </p>
                                  <p className="text-xs text-gray-500 ">
                                    SVG, PNG or JPG (MAX. 400x800px)
                                  </p>
                                </div>
                              )}

                              {previewImage() && (
                                <img
                                  src={previewImage()}
                                  className="absolute max-h-full w-fit m-auto inset-0 object-cover"
                                  alt="poster"
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
                            className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 "
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
                          <p className="block mb-1 md:mb-2 text-sm font-medium text-gray-900 ">
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
                                  value="true"
                                  name="trangThai"
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
                                  value="false"
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
                      <p
                        className="cursor-pointer border border-gray-300 text-gray-600 hover:bg-gray-300 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center"
                        onClick={close}
                      >
                        Hủy bỏ
                      </p>
                      <button className="cursor-pointer text-white bg-pink-600 hover:bg-pink-800 focus:outline-none font-medium rounded-md text-sm px-3 py-3 text-center flex gap-2 items-center">
                        {createIsPending ? (
                          <LoaderCircle className="animate-spin" width={20} />
                        ) : (
                          <ArchiveRestore width={20} />
                        )}
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

      <Transition show={isOpenDetail} unmount={false}>
        <Dialog as="div" className="focus:outline-none" onClose={closeDetail}>
          <div className="fixed z-[999] p-4 inset-0 flex items-center bg-[#0009]">
            <div className="w-full md:w-3xl xl:w-6xl m-auto">
              <DialogPanel
                transition
                className="w-full bg-white rounded-xl backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <div className="relative flex items-center p-3 md:p-6 bg-pink-50 rounded-t-xl">
                  <div className="w-13 h-13 rounded-lg bg-[var(--mainColor)] flex items-center justify-center text-white">
                    <Film className="w-8 h-8 duration-300 transition-all" />
                  </div>
                  <div className="block ml-2 md:ml-4">
                    <p className="text-lg md:text-2xl font-bold text-gray-800">
                      Chi tiết phim
                    </p>
                  </div>

                  <div
                    onClick={closeDetail}
                    className="absolute inset-y-0 right-4 h-fit my-auto cursor-pointer p-2 hover:text-[var(--mainColor)]"
                  >
                    <X className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-4 md:p-6 max-h-[70vh] overflow-y-auto ">
                  <div className="w-full min-h-[60vh]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-1">
                        <div className="aspect-[3/4] max-w-sm md:max-w-auto mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                          <img
                            alt={movieDetail.tenPhim}
                            className="w-full h-full object-cover"
                            src={movieDetail.hinhAnh}
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {movieDetail.tenPhim}
                          </h1>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Star className="text-yellow-500 mr-1" />
                              <span className="text-lg font-semibold text-gray-700">
                                {movieDetail.danhGia}/10
                              </span>
                            </div>
                            <div className="flex items-center">
                              {movieDetail.dangChieu && (
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                  Đang chiếu
                                </span>
                              )}
                              {movieDetail.sapChieu && (
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                  Sắp chiếu
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="text-gray-500 size-5" />
                            <div>
                              <span className="text-sm text-gray-500">
                                Ngày khởi chiếu:
                              </span>
                              <p className="font-medium text-gray-800">
                                {movieDetail?.ngayKhoiChieu
                                  ? format(
                                      movieDetail?.ngayKhoiChieu,
                                      "dd/MM/yyyy"
                                    )
                                  : ""}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="text-gray-500 size-5" />
                            <div>
                              <span className="text-sm text-gray-500">
                                Mã phim:
                              </span>
                              <p className="font-medium text-gray-800">
                                {movieDetail.maPhim}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Mô tả
                          </h3>
                          <p className="text-gray-700 leading-relaxed break-all">
                            {movieDetail.moTa}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Trailer
                          </h3>
                          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                              // src={`https://www.youtube.com/embed/${linkYoutube}?si=Bcv6CYDRjkYWQt1k`}
                              src={movieDetail?.trailer?.replace(
                                "watch?v=",
                                "embed/"
                              )}
                              title="Movie Trailer"
                              className="w-full h-full"
                              frameBorder={0}
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
