import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PopupMovie from "./PopupMovie";
// import { useState } from 'react'


export default function MovieShow() {
//   let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="movieShow text-white py-8 md:py-10 lg:py-14 bg-[url(/images/movie_show_bg.jpg)] bg-bottom">
      <div className="max-w-screen-xl px-5 mx-auto md:px-7 xl:px-5">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          Phim đang chiếu
        </h2>
        <div className="relative">
          <div className="movieShow-prev w-8 h-8 md:w-11 md:h-11 bg-white rounded-full content-center cursor-pointer absolute inset-y-0 left-[-15px] md:left-[-22px] z-2 my-auto transition-all duration-300 group hover:bg-[var(--mainColor)]">
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
          <div className="movieShow-next w-8 h-8 md:w-11 md:h-11 bg-white rounded-full content-center cursor-pointer absolute inset-y-0 right-[-15px] md:right-[-22px] z-2 my-auto transition-all duration-300 group hover:bg-[var(--mainColor)]">
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
              nextEl: ".movieShow-next",
              prevEl: ".movieShow-prev",
            }}
            loop={false}
            className="w-full"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="item">
                <div className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group">
                  <div className="flex gap-2 absolute top-3 left-3 z-1">
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-red-500">
                      New
                    </p>
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-[#E88021]">
                      16+
                    </p>
                  </div>
                  <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
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
                  <p className="absolute -bottom-2 left-0 z-1 text-4xl font-bold text-shadow-sm text-shadow-gray-500 md:text-5xl">
                    1
                  </p>
                </div>
                <div className="block hover:text-[var(--mainColor)] cursor-pointer group">
                  <p className="text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base">
                    Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm transition-all duration-300 group-hover:text-[var(--mainColor)]">
                    Hoạt hình, Hình sự
                  </p>
                </div>
                <p className="text-gray-200 text-sm flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <span>8.8</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group">
                  <div className="flex gap-2 absolute top-3 left-3 z-1">
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-red-500">
                      New
                    </p>
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-[#E88021]">
                      16+
                    </p>
                  </div>
                  <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
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
                  <p className="absolute -bottom-2 left-0 z-1 text-4xl font-bold text-shadow-sm text-shadow-gray-500 md:text-5xl">
                    1
                  </p>
                </div>
                <div className="block hover:text-[var(--mainColor)] cursor-pointer group">
                  <p className="text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base">
                    Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm transition-all duration-300 group-hover:text-[var(--mainColor)]">
                    Hoạt hình, Hình sự
                  </p>
                </div>
                <p className="text-gray-200 text-sm flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>8.8</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group">
                  <div className="flex gap-2 absolute top-3 left-3 z-1">
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-red-500">
                      New
                    </p>
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-[#E88021]">
                      16+
                    </p>
                  </div>
                  <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <circle
                          stroke="#FFF"
                          strokeWidth="2"
                          fillOpacity=".24"
                          fill="#000"
                          cx="24"
                          cy="24"
                          r="23"
                        ></circle>
                        <path
                          d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                          fill="#FFF"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute -bottom-2 left-0 z-1 text-4xl font-bold text-shadow-sm text-shadow-gray-500 md:text-5xl">
                    1
                  </p>
                </div>
                <div className="block hover:text-[var(--mainColor)] cursor-pointer group">
                  <p className="text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base">
                    Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm transition-all duration-300 group-hover:text-[var(--mainColor)]">
                    Hoạt hình, Hình sự
                  </p>
                </div>
                <p className="text-gray-200 text-sm flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>8.8</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group">
                  <div className="flex gap-2 absolute top-3 left-3 z-1">
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-red-500">
                      New
                    </p>
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-[#E88021]">
                      16+
                    </p>
                  </div>
                  <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <circle
                          stroke="#FFF"
                          strokeWidth="2"
                          fillOpacity=".24"
                          fill="#000"
                          cx="24"
                          cy="24"
                          r="23"
                        ></circle>
                        <path
                          d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                          fill="#FFF"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute -bottom-2 left-0 z-1 text-4xl font-bold text-shadow-sm text-shadow-gray-500 md:text-5xl">
                    1
                  </p>
                </div>
                <div className="block hover:text-[var(--mainColor)] cursor-pointer group">
                  <p className="text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base">
                    Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm transition-all duration-300 group-hover:text-[var(--mainColor)]">
                    Hoạt hình, Hình sự
                  </p>
                </div>
                <p className="text-gray-200 text-sm flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>8.8</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group">
                  <div className="flex gap-2 absolute top-3 left-3 z-1">
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-red-500">
                      New
                    </p>
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-[#E88021]">
                      16+
                    </p>
                  </div>
                  <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <circle
                          stroke="#FFF"
                          strokeWidth="2"
                          fillOpacity=".24"
                          fill="#000"
                          cx="24"
                          cy="24"
                          r="23"
                        ></circle>
                        <path
                          d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                          fill="#FFF"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute -bottom-2 left-0 z-1 text-4xl font-bold text-shadow-sm text-shadow-gray-500 md:text-5xl">
                    1
                  </p>
                </div>
                <div className="block hover:text-[var(--mainColor)] cursor-pointer group">
                  <p className="text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base">
                    Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm transition-all duration-300 group-hover:text-[var(--mainColor)]">
                    Hoạt hình, Hình sự
                  </p>
                </div>
                <p className="text-gray-200 text-sm flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>8.8</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group">
                  <div className="flex gap-2 absolute top-3 left-3 z-1">
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-red-500">
                      New
                    </p>
                    <p className="px-2 py-1 text-sm md:text-xs lg:text-sm rounded-xs leading-none bg-[#E88021]">
                      16+
                    </p>
                  </div>
                  <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                      src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                      alt="Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc "
                    />
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <circle
                          stroke="#FFF"
                          strokeWidth="2"
                          fillOpacity=".24"
                          fill="#000"
                          cx="24"
                          cy="24"
                          r="23"
                        ></circle>
                        <path
                          d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                          fill="#FFF"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="absolute -bottom-2 left-0 z-1 text-4xl font-bold text-shadow-sm text-shadow-gray-500 md:text-5xl">
                    1
                  </p>
                </div>
                <div className="block hover:text-[var(--mainColor)] cursor-pointer group">
                  <p className="text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base">
                    Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                  </p>
                  <p className="text-xs text-gray-400 md:text-sm transition-all duration-300 group-hover:text-[var(--mainColor)]">
                    Hoạt hình, Hình sự
                  </p>
                </div>
                <p className="text-gray-200 text-sm flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>8.8</span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <PopupMovie/>
     
    </div>
  );
}
