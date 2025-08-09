import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import MovieItem from "./MovieItem";
import { useQuery } from "@tanstack/react-query";
import { getMoviePagi } from "../../../service/movie.api";

export default function MovieComing() {
  const { data, isLoading } = useQuery({
    queryKey: ["movie-coming"],
    queryFn: () => getMoviePagi(14),
  });
  return (
    <div className="movieComing py-8 md:py-10 lg:py-14 ">
      <div className="max-w-screen-xl px-5 mx-auto md:px-7 xl:px-5">
        <h2 className="text-center text-[var(--mainColor)] text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          Phim sắp chiếu
        </h2>
        <div className="relative">
          <div className="movieComing-prev shadow-md shadow-gray-400 w-8 h-8 md:w-11 md:h-11 bg-white rounded-full content-center cursor-pointer absolute inset-y-0 left-[-15px] md:left-[-22px] z-2 my-auto transition-all duration-300 group hover:bg-[var(--mainColor)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 md:h-6 md:w-6 text-black m-auto transition-all duration-300 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
                className="jsx-de1540fc10b2e2a"
              />
            </svg>
          </div>
          <div className="movieComing-next shadow-md shadow-gray-400 w-8 h-8 md:w-11 md:h-11 bg-white rounded-full content-center cursor-pointer absolute inset-y-0 right-[-15px] md:right-[-22px] z-2 my-auto transition-all duration-300 group hover:bg-[var(--mainColor)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 md:h-6 md:w-6 text-black m-auto transition-all duration-300 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                className="jsx-de1540fc10b2e2a"
              />
            </svg>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              nextEl: ".movieComing-next",
              prevEl: ".movieComing-prev",
            }}
            loop={false}
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {data?.items?.map((movie, index) => {
              if (movie.sapChieu) {
                return (
                  <SwiperSlide key={index}>
                    <MovieItem movie={movie} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
