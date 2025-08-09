import { useState, Fragment } from "react";
import { Dialog, Transition, DialogPanel } from "@headlessui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// import "./style.css";

export default function MovieDetailPage() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const dates = [
    { day: "6", label: "Hôm nay" },
    { day: "7", label: "Thứ 5" },
    { day: "8", label: "Thứ 6" },
    { day: "9", label: "Thứ 7" },
    { day: "10", label: "Chủ nhật" },
    { day: "11", label: "Thứ 2" },
    { day: "12", label: "Thứ 3" },
    { day: "13", label: "Thứ 4" },
    { day: "14", label: "Thứ 5" },
  ];

  return (
    <div className="mx-auto py-4 text-white">
      {/*  */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
          <div className="flex-shrink-0 w-full lg:w-[220px]">
            <div className="relative group">
              <img
                src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
                alt="Movie Poster"
                className="rounded-lg shadow-lg w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-2">
              Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
              <span className="bg-blue-600 px-2 py-0.5 rounded text-xs font-semibold">
                K
              </span>
              <span>Conan Movie 28</span>
              <span>•</span>
              <span>2025</span>
              <span>•</span>
              <span>110 phút</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400 font-semibold mb-4">
              <svg
                className="w-5 h-5 text-pink-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.563 4.804a1 1 0 00.95.69h5.075c.969 0 1.371 1.24.588 1.81l-4.1 2.982a1 1 0 00-.364 1.118l1.563 4.804c.3.921-.755 1.688-1.538 1.118l-4.1-2.982a1 1 0 00-1.176 0l-4.1 2.982c-.783.57-1.838-.197-1.538-1.118l1.563-4.804a1 1 0 00-.364-1.118l-4.1-2.982c-.783-.57-.38-1.81.588-1.81h5.075a1 1 0 00.95-.69l1.563-4.804z" />
              </svg>
              <span className="text-white">9.6</span>
            </div>
            <p className="text-gray-200 mb-3">
              Bộ phim sẽ hé lộ quá khứ đau thương của thanh tra Yamato Kansuke,
              liên quan đến mắt trái bị mất của anh.
            </p>
            <div className="text-gray-400 text-sm mb-3">
              <strong>Nội dung:</strong> Bộ phim Conan Movie 28 đã chính thức có
              lịch khởi chiếu tại Nhật Bản vào ngày 18 tháng 4 năm 2025. Hơn
              nữa, hình ảnh teaser do Gosho Aoyama vẽ cũng đã...
              <a href="#" className="text-yellow-400 hover:underline">
                Xem thêm
              </a>
            </div>
            <div className="text-sm text-gray-300 mb-6">
              <div>
                <strong>Ngày chiếu:</strong> 25/07/2025
              </div>
              <div>
                <strong>Thể loại:</strong> Bí ẩn, Hình sự, Hành động, Hoạt hình
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={openModal}
                href="#"
                className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
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
              <a
                href="#"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16l-5-3-5 3-5-3-5 3V4z" />
                </svg>
                <span>Xem review</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-7 w-full max-w-7xl mx-auto">
        <div className="mx-auto w-full py-4 text-sm border-[#E7E4E6] mt-7 border col-span-4 rounded-lg">
          <div className="px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">
                Thanh Gươm Diệt Quỷ: Vô Hạn Thành
              </h2>
            </div>

            {/* Ngày */}
            <div className="overflow-x-auto mb-4 border-[#E7E4E6] border-b pb-5">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                modules={[Navigation]}
                className="cenima-swiper"
                navigation={{
                  nextEl: ".cenima-swiper .swiper-button-next",
                  prevEl: ".cenima-swiper .swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <button className="cursor-pointer  w-18 px-2 py-2 border border-gray-300 text-black rounded-md text-center hover:border-gray-500 transition duration-200 border-pink-600 bg-pink-600 text-white">
                    <div className="font-bold text-lg">1</div>
                    <div className="text-xs">Hôm nay</div>
                  </button>
                </SwiperSlide>
                <SwiperSlide className="w-auto">
                  <button className="cursor-pointer  w-18 px-2 py-2 border border-gray-300 text-black rounded-md text-center hover:border-gray-500 transition duration-200 bg-white">
                    <div className="font-bold text-lg">2</div>
                    <div className="text-xs">Thứ 5</div>
                  </button>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Rạp */}
          <div className="relative flex items-center overflow-x-auto py-4 px-2 border-[#E7E4E6] border-b pb-5 mb-5 pl-8">
            <Swiper
              slidesPerView={8}
              spaceBetween={1}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
                1280: { slidesPerView: 8 },
              }}
              navigation={{
                nextEl: ".mySwiper .swiper-button-next",
                prevEl: ".mySwiper .swiper-button-prev",
              }}
            >
              {[...Array(20)].map((_, index) => (
                <SwiperSlide key={index}>
                  <button className="flex flex-col items-center space-y-1 text-gray-700">
                    <img
                      src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170453-637584230934981809.png"
                      alt="BHD Star"
                      className="w-12 h-12 object-contain rounded-md border bg-[#fff]"
                    />
                    <span className="text-sm font-medium text-center text-black">
                      BHD Star
                    </span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation buttons */}
            <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer">
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
            <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer">
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
          </div>

          {/* Danh sách rạp */}
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Các rạp còn lại */}
            <div className="space-y-2">
              {/* Item */}
              <div className="flex justify-between items-start p-4 bg-white hover:bg-gray-50 transition border-b border-[#E7E4E6]">
                <div>
                  <div className="flex items-center">
                    <img
                      className="w-[32px] h-[32px] border border-[#E7E4E6] mr-2.5"
                      src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                      alt="logo"
                    />
                    <div>
                      <h4 className="text-black font-semibold">
                        Beta Trần Quang Khải
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tầng 2 và 3, Toà nhà IMC, 62 Đường Trần Quang Khải, Quận
                        1, TP. HCM
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-700 mb-3">
                      2D Lồng tiếng
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-4 py-2 border border-blue-500 text-black rounded hover:bg-blue-50 transition">
                        13:00 ~ 14:50
                      </button>
                      <button className="px-4 py-2 border border-blue-500 text-black rounded hover:bg-blue-50 transition">
                        13:40 ~ 15:30
                      </button>
                      <button className="px-4 py-2 border border-blue-500 text-black rounded hover:bg-blue-50 transition">
                        15:10 ~ 17:00
                      </button>
                      <button className="px-4 py-2 border border-blue-500 text-black rounded hover:bg-blue-50 transition">
                        16:00 ~ 17:50
                      </button>
                      <button className="px-4 py-2 border border-blue-500 text-black rounded hover:bg-blue-50 transition">
                        17:30 ~ 19:20
                      </button>
                      <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition">
                        19:00 ~ 20:50
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start p-4 bg-white hover:bg-gray-50 transition border-b border-[#E7E4E6]">
                <div className="flex items-center">
                  <img
                    className="w-[32px] h-[32px] border border-[#E7E4E6] mr-2.5"
                    src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                    alt="logo"
                  />
                  <div>
                    <h4 className="text-black font-semibold">
                      Beta Trần Quang Khải
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tầng 2 và 3, Toà nhà IMC, 62 Đường Trần Quang Khải, Quận
                      1, TP. HCM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start p-4 bg-white hover:bg-gray-50 transition border-b border-[#E7E4E6]">
                <div className="flex items-center">
                  <img
                    className="w-[32px] h-[32px] border border-[#E7E4E6] mr-2.5"
                    src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                    alt="logo"
                  />
                  <div>
                    <h4 className="text-black font-semibold">
                      Beta Trần Quang Khải
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tầng 2 và 3, Toà nhà IMC, 62 Đường Trần Quang Khải, Quận
                      1, TP. HCM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start p-4 bg-white hover:bg-gray-50 transition border-b border-[#E7E4E6]">
                <div className="flex items-center">
                  <img
                    className="w-[32px] h-[32px] border border-[#E7E4E6] mr-2.5"
                    src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                    alt="logo"
                  />
                  <div>
                    <h4 className="text-black font-semibold">
                      Beta Trần Quang Khải
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tầng 2 và 3, Toà nhà IMC, 62 Đường Trần Quang Khải, Quận
                      1, TP. HCM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto table">
              Xem thêm
            </button>
          </div>
        </div>
        <div className="mt-4 col-span-3 lg:pl-5">
          <h2 className="text-xl font-bold mb-5">Phim đang chiếu</h2>
          <div className="flex gap-3 mb-6 border-b border-gray-400 pb-5">
            <img
              src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
              alt="Thanh Gươm Diệt Quỷ: Vô Hạn Thành"
              className="w-[60px] h-[90px] object-cover rounded"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
                  K
                </span>
                <h3 className="font-semibold text-black">
                  Thanh Gươm Diệt Quỷ: Vô Hạn Thành
                </h3>
              </div>
              <p className="text-sm text-black">Chính Kịch, Gia Đình</p>
              <p className="text-sm text-yellow-500 mt-1">⭐ 7.5</p>
            </div>
          </div>
          <div className="flex gap-3 mb-6 border-b border-gray-400 pb-5">
            <img
              src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
              alt="Thanh Gươm Diệt Quỷ: Vô Hạn Thành"
              className="w-[60px] h-[90px] object-cover rounded"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
                  K
                </span>
                <h3 className="font-semibold text-black">
                  Thanh Gươm Diệt Quỷ: Vô Hạn Thành
                </h3>
              </div>
              <p className="text-sm text-black">Chính Kịch, Gia Đình</p>
              <p className="text-sm text-yellow-500 mt-1">⭐ 7.5</p>
            </div>
          </div>
          <div className="flex gap-3 mb-6 border-b border-gray-400 pb-5">
            <img
              src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
              alt="Thanh Gươm Diệt Quỷ: Vô Hạn Thành"
              className="w-[60px] h-[90px] object-cover rounded"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
                  K
                </span>
                <h3 className="font-semibold text-black">
                  Thanh Gươm Diệt Quỷ: Vô Hạn Thành
                </h3>
              </div>
              <p className="text-sm text-black">Chính Kịch, Gia Đình</p>
              <p className="text-sm text-yellow-500 mt-1">⭐ 7.5</p>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Thanh Gươm Diệt Quỷ: Vô Hạn Thành
                  </Dialog.Title>
                  <div className="mt-2">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/x7uLutVRBfI?si=C8WCIc3flbznYVd2"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p className="text-sm mt-2 leading-relaxed line-clamp-4">
                    Phim mới Thanh Gươm Diệt Quỷ: Vô Hạn Thành là phần đầu tiên
                    diễn ra khi trận chiến cuối cùng giữa Sát Quỷ Đoàn cùng
                    Muzan và bè lũ bùng nổ tại Vô Hạn Thành. Kamado Tanjiro gia
                    nhập Sát Quỷ Đoàn sau khi em gái Nezuko bị biến thành quỷ.
                    Trong quá trình trưởng thành, Tanjiro đã chiến đấu với nhiều
                    con quỷ cùng với các đồng đội Agatsuma Zenitsu và Hashibira
                    Inosuke. Hành trình đưa cậu đến với cuộc chiến cùng những
                    kiếm sĩ cấp cao nhất của Sát Quỷ Đoàn - các Trụ Cột - gồm
                    Viêm Trụ Rengoku Kyojuro trên Chuyến Tàu Vô Tận, Âm Trụ Uzui
                    Tengen tại Kỹ Viện Trấn, cũng như Hà Trụ Tokito Muichiro và
                    Luyến Trụ Kanroji Mitsuri tại Làng Thợ Rèn. Khi các thành
                    viên của Sát Quỷ Đoàn và Trụ Cột tham gia vào chương trình
                    đặc huấn để chuẩn bị cho trận chiến sắp với lũ quỷ,
                    Kibutsuji Muzan xuất hiện tại Dinh thự Ubuyashiki. Khi thủ
                    lĩnh của Sát Quỷ Đoàn gặp nguy hiểm, Tanjiro và các Trụ Cột
                    trở về trụ sở Thế nhưng, Muzan bất ngờ kéo toàn bộ Sát Quỷ
                    Đoàn đến hang ổ cuối cùng của lũ quỷ là Vô Hạn Thành, mở màn
                    cho trận đánh cuối cùng của cả hai phe. Phim mới Demon
                    Slayer -Kimetsu no Yaiba- The Movie: Infinity Castle/ Thanh
                    Gươm Diệt Quỷ: Vô Hạn Thành là phần đầu tiên trong bộ ba
                    phim điện ảnh về cuộc chiến bi tráng, đẫm máu và cảm xúc bậc
                    nhất này. Bộ phim sẽ là một trải nghiệm điện ảnh khó quên
                    tại rạp chiếu phim với các fan của Thanh Gươm Diệt Quỷ.
                  </p>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-red-700 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded"
                      onClick={closeModal}
                    >
                      Đóng
                    </button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-4 py-2 rounded ml-2.5">
                      Đặt vé
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
