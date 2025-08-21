import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieShowing from "./MovieShowing";
import PopupMovie from "../_components/PopupMovie";
import { useHomeStore } from "../../../store/home.store.js";
import Loading from "../_components/Loading/index.jsx";
import { useCinemaDetail } from "../../../hooks/useCinemaTicket.js";
import CinemaItemCmp from "./CinemaItemCmp";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  console.log("🌲 ~ MovieDetailPage ~ movieId:", movieId)

  const setIsOpenMovie = useHomeStore((state) => state.setIsOpenMovie);

  const [isReadMore, setIsReadMore] = useState(false);
  const [cinemaItemBrand, setCinemaItemBrand] = useState(null);
  const [isActive, setIsActive] = useState(cinemaItemBrand?.maHeThongRap);

  const { data = {}, isLoading } = useCinemaDetail(movieId);

  useEffect(() => {
    data?.heThongRapChieu?.length && setCinemaItemBrand(data.heThongRapChieu[0]);
  }, [data]);

  return (
    <div className="mx-auto py-4 text-white">
      <div className="relative bg-black text-white">
        <div className="absolute inset-0">
          <img
            src={data.hinhAnh}
            alt="background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
          <div className="flex-shrink-0 w-full lg:w-[220px] cursor-pointer">
            <div
              className="relative group"
              onClick={() => setIsOpenMovie(true)}
            >
              <img
                src={data.hinhAnh}
                alt={data.tenPhim}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 m-auto w-13 h-13 transition-all duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="jsx-708c0e64c1e1a9c7"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    className="jsx-708c0e64c1e1a9c7"
                  >
                    <circle
                      stroke="#FFF"
                      strokeWidth={2}
                      fillOpacity=".24"
                      fill="#000"
                      cx={24}
                      cy={24}
                      r={23}
                      className="jsx-708c0e64c1e1a9c7"
                    />
                    <path
                      d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                      fill="#FFF"
                      fillRule="nonzero"
                      className="jsx-708c0e64c1e1a9c7"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-2">
              {data.tenPhim}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
              {data.hot && (
                <span className="bg-red-500 px-2 pt-0.5 pb-1 rounded text-xs font-semibold">
                  Hot
                </span>
              )}

              <div className="flex items-center space-x-2 text-yellow-400 font-semibold">
                <Star />
                <span className="text-white">{data.danhGia}</span>
              </div>
            </div>

            {data.moTa && (
              <div className="text-gray-400 text-sm mb-3">
                <p className={`${isReadMore ? "" : "line-clamp-2"}`}>
                  <strong>Nội dung:</strong> {data.moTa}
                </p>
                {!isReadMore && (
                  <p
                    className="text-yellow-300 hover:underline cursor-pointer"
                    onClick={() => setIsReadMore(true)}
                  >
                    ...Xem thêm
                  </p>
                )}
              </div>
            )}

            <p className="text-sm text-gray-300 mb-6">
              <strong>Ngày chiếu:</strong>{" "}
              {data.ngayKhoiChieu && format(data.ngayKhoiChieu, "dd/MM/yyyy")}
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsOpenMovie(true)}
                className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l12 6-12 6V4z" />
                </svg>
                <span>Xem trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-7 items-start w-full max-w-7xl mx-auto">
        <div className="mx-auto w-full pt-4 text-sm border-[#E7E4E6] mt-7 border col-span-4 rounded-lg overflow-hidden">
          <div className="px-5 pb-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">
                Lịch chiếu {data.tenPhim}
              </h2>
            </div>

            <div className="block">
              <div className="cinema-swiper-next bg-white px-1 absolute right-0 inset-y-0 flex items-center z-10 text-white text-3xl cursor-pointer [&.swiper-button-disabled]:opacity-0">
                <ChevronRight className="size-5" />
              </div>
              <div className="cinema-swiper-prev bg-white px-1 absolute left-0 inset-y-0 flex items-center z-10 text-white text-3xl cursor-pointer [&.swiper-button-disabled]:opacity-0">
                <ChevronLeft className="size-5" />
              </div>

              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                modules={[Navigation]}
                className="cinema-swiper"
                navigation={{
                  prevEl: ".cinema-swiper-prev",
                  nextEl: ".cinema-swiper-next",
                }}
              >
                {data?.heThongRapChieu?.map((cinema, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <button
                        className="flex flex-col items-center space-y-1 text-gray-700 cursor-pointer w-12"
                        onClick={() => {
                          setCinemaItemBrand(cinema);
                          setIsActive(cinema.maHeThongRap);
                        }}
                      >
                        <img
                          src={cinema.logo}
                          alt={cinema.maHeThongRap}
                          className={`relative mx-auto flex p-1.5 items-center justify-center overflow-hidden rounded-lg border bg-white border-gray-200 ${
                            cinema.maHeThongRap === isActive
                              ? "border-pink-600"
                              : "border-gray-200"
                          }`}
                        />
                        <span className="mt-2 w-full overflow-hidden text-ellipsis whitespace-nowrap overflow-hidden text-center text-xs text-gray-500 text-ellipsis whitespace-nowrap">
                          {cinema.tenHeThongRap}
                        </span>
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="max-w-3xl mx-auto relative min-h-[90px]">
            {isLoading && <Loading />}

            {cinemaItemBrand?.cumRapChieu?.map((item, index) => {
              return (
                <CinemaItemCmp
                  key={index}
                  index={index}
                  item={item}
                  cinemaItemBrand={cinemaItemBrand}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-4 col-span-3 lg:pl-5">
          <MovieShowing idCurrent={movieId} />
        </div>
      </div>

      <PopupMovie movie={data} />
    </div>
  );
}
