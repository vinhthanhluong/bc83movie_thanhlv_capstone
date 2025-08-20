import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieShowing from "./MovieShowing";
import { getCinemaDetail } from "../../../service/cinema.api.js";
import PopupMovie from "../_components/PopupMovie";
import { useHomeStore } from "../../../store/home.store.js";
import { useCinemaStore } from "../../../store/cinema.store.js";
import Loading from "../_components/Loading/index.jsx";
import { useCinemaDetail } from "../../../hooks/useCinemaTicket.js";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const setIsOpenMovie = useHomeStore((state) => state.setIsOpenMovie);

  const [isReadMore, setIsReadMore] = useState(false);

  const [cinemaItem, setCinemaItem] = useState(null);
  const [isActive, setIsActive] = useState(cinemaItem?.maHeThongRap);

  const { data = {}, isLoading } = useCinemaDetail(movieId);

  useEffect(() => {
    data?.heThongRapChieu?.length && setCinemaItem(data.heThongRapChieu[0]);
  }, [data]);

  // console.log("🌲 ~ MovieDetailPage ~ cinemaItem:", cinemaItem);
  const [dateCinema, setDateCinema] = useState(null);
  // console.log("🌲 ~ MovieDetailPage ~ dateCinema:", dateCinema)

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
                        className="flex flex-col items-center space-y-1 text-gray-700 cursor-pointer w-12"
                        onClick={() => {
                          setCinemaItem(cinema);
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

          <div className="relative flex items-center overflow-x-auto py-4 px-5 border-[#E7E4E6] border-t">
            {/* Navigation buttons */}

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
                {/* {cinemaItem?.cumRapChieu?.lichChieuPhim?.map(
                  (item, index) => {}
                )} */}
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

          <div className="max-w-3xl mx-auto relative min-h-[300px]">
            {isLoading && <Loading />}

            {cinemaItem?.cumRapChieu?.map((item, index) => {
              // const showTime = item?.lichChieuPhim?.filter((dt) => {
              //   const dmy = dt?.ngayChieuGioChieu?.slice(0, 10);
              //   // 2025-04-15T14:30:00
              //   // 2025-04-08T00:00:00
              // });

              const groupedByDate = item?.lichChieuPhim?.reduce(
                (acc, dateTime) => {
                  const dmy = dateTime.ngayChieuGioChieu.slice(0, 10);
                  if (!acc[dmy]) {
                    acc[dmy] = [];
                  }
                  acc[dmy].push(dateTime);
                  return acc;
                },
                {}
              );
              return (
                <div
                  key={index}
                  className="flex justify-between items-start p-5 bg-white hover:bg-gray-50 transition border-t border-[#E7E4E6]"
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
                    {/* Date */}

                    <div className="mt-3 flex gap-2 flex-wrap">
                      {Object.entries(groupedByDate)?.map((date, index) => {
                        console.log("🌲 ~ date:", date[0]);
                        return (
                          <div
                            key={index}
                            className="w-16 cursor-pointer overflow-hidden rounded border bg-white py-0 text-center transition-all border-pink-700"
                          >
                            <div className="mx-auto justify-center py-1 text-md font-semibold bg-pink-600 text-white">
                              {date[0] && format(date[0], "dd/MM")}
                            </div>
                            <div className="text-nowrap flex  h-6 items-center justify-center text-xs text-pink-600">
                              {/* Thứ 2 */}
                              {date[0] && format(date[0], "EEEE")}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* <div className="flex flex-wrap gap-3 pt-4">
                      {item?.lichChieuPhim?.map((itm, i) => (
                        <button
                          key={i}
                          className="px-5 py-1.5 border border-pink-500 text-black rounded hover:bg-pink-100 transition cursor-pointer"
                          onClick={() => {
                            navigate(`/book-ticket/${itm.maLichChieu}`);
                          }}
                        >
                          {itm.ngayChieuGioChieu &&
                            format(itm.ngayChieuGioChieu, "dd")}
                          *{" "}
                          {itm.ngayChieuGioChieu &&
                            format(itm.ngayChieuGioChieu, "EEEE")}{" "}
                          * -{" "}
                          {itm.ngayChieuGioChieu &&
                            format(itm.ngayChieuGioChieu, "HH:mm")}
                        </button>
                      ))}
                    </div> */}
                  </div>
                </div>
              );
            })}

            {/* <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mx-auto flex mt-4 transition-all duration-300">
              Xem thêm
            </button> */}
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
