import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieShowing from "./movieShowing";
import { getCinemaDetail } from "../../../service/cinema.api.js";
import PopupMovie from "../_components/PopupMovie";
import { useHomeStore } from "../../../store/home.store.js";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const setIsOpenMovie = useHomeStore((state) => state.setIsOpenMovie);

  const [isReadMore, setIsReadMore] = useState(false);

  const [cinemaItem, setCinemaItem] = useState(null);
  // console.log("🌲 ~ MovieDetailPage ~ cinemaItem:", cinemaItem);
  const [isActive, setIsActive] = useState(cinemaItem?.maHeThongRap);

  const { data = {}, isLoading } = useQuery({
    queryKey: ["Movie-detail", movieId],
    queryFn: () => getCinemaDetail(movieId),
    enabled: !!movieId,
  });

  useEffect(() => {
    data?.heThongRapChieu?.length && setCinemaItem(data.heThongRapChieu[0]);
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
        <div className="mx-auto w-full py-4 text-sm border-[#E7E4E6] mt-7 border col-span-4 rounded-lg">
          <div className="px-5 border-b pb-5 border-[#E7E4E6]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">
                Lịch chiếu {data.tenPhim}
              </h2>
            </div>

            <div className="block">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                modules={[Navigation]}
                className="cinema-day-swiper"
                navigation={{
                  nextEl: ".cinema-day-swiper-next .swiper-button-next",
                  prevEl: ".cinema-day-swiper-prev .swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="w-16 cursor-pointer overflow-hidden rounded border bg-white py-0 text-center transition-all border-pink-700">
                    <div className="mx-auto justify-center py-1 text-lg font-semibold bg-pink-600 text-white">
                      11
                    </div>
                    <div className="text-nowrap flex  h-6 items-center justify-center text-xs text-pink-600">
                      Thứ 2
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-16 cursor-pointer overflow-hidden rounded border bg-white py-0 text-center transition-all border-gray-300 hover:border-gray-400 ">
                    <div className="mx-auto justify-center py-1 text-lg font-semibold text-gray-800 bg-gray-100 ">
                      12
                    </div>
                    <div className="text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400">
                      Thứ 3
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-16 cursor-pointer overflow-hidden rounded border bg-white py-0 text-center transition-all border-gray-300 hover:border-gray-400 ">
                    <div className="mx-auto justify-center py-1 text-lg font-semibold text-gray-800 bg-gray-100 ">
                      13
                    </div>
                    <div className="text-nowrap flex  h-6 items-center justify-center text-xs text-gray-400">
                      Thứ 4
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="relative flex items-center overflow-x-auto py-4 px-5 border-[#E7E4E6] border-b">
            {/* Navigation buttons */}
            <div className="cinema-swiper-next bg-white px-1 absolute right-0 inset-y-0 flex items-center z-10 text-white text-3xl cursor-pointer [&.swiper-button-disabled]:opacity-0">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </div>
            <div className="cinema-swiper-prev bg-white px-1 absolute left-0 inset-y-0 flex items-center z-10 text-white text-3xl cursor-pointer [&.swiper-button-disabled]:opacity-0">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m15 19-7-7 7-7"
                />
              </svg>
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
                      className={`flex flex-col items-center space-y-1 text-gray-700 cursor-pointer`}
                      onClick={() => {
                        setCinemaItem(cinema);
                        setIsActive(cinema.maHeThongRap);
                      }}
                    >
                      <img
                        src={cinema.logo}
                        alt={cinema.maHeThongRap}
                        className={`relative mx-auto flex h-12 w-12 p-1.5 items-center justify-center overflow-hidden rounded-lg border bg-white border-gray-200 ${
                          cinema.maHeThongRap === isActive
                            ? "border-pink-600"
                            : "border-gray-200"
                        }`}
                      />
                      <span className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs text-gray-500">
                        {cinema.tenHeThongRap}
                      </span>
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-gray-300 animate-spin fill-pink-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}

            {cinemaItem?.cumRapChieu?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start p-5 bg-white hover:bg-gray-50 transition border-b border-[#E7E4E6]"
              >
                <div>
                  <div className="flex items-center">
                    <img
                      className="w-[32px] h-[32px] border border-[#E7E4E6] mr-2.5"
                      src={item.hinhAnh}
                      alt="logo"
                    />
                    <div>
                      <h4 className="text-black font-semibold">
                        {item.tenCumRap}
                      </h4>
                      <p className="text-sm text-gray-600">{item.diaChi}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {item?.lichChieuPhim?.map((itm, i) => (
                      <button
                        key={i}
                        className="px-5 py-1.5 border border-blue-500 text-black rounded hover:bg-blue-50 transition"
                      >
                        {itm.ngayChieuGioChieu &&
                          format(itm.ngayChieuGioChieu, "HH:mm")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mx-auto flex mt-4 transition-all duration-300">
              Xem thêm
            </button>
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
