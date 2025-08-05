import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MovieDetailPage() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="max-w-6xl mx-auto p-4 text-white">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
          alt="alt"
          className="w-full md:w-1/3 rounded-lg shadow-md"
        />
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">
            Thanh Gươm Diệt Quỷ: Vô Hạn Thành
          </h1>
          <p className="text-gray-300 mb-4">
            Phim mới Thanh Gươm Diệt Quỷ: Vô Hạn Thành là phần đầu tiên diễn ra
            khi trận chiến cuối cùng giữa Sát Quỷ Đoàn cùng Muzan và bè lũ bùng
            nổ tại Vô Hạn Thành. Kamado Tanjiro gia nhập Sát Quỷ Đoàn sau khi em
            gái Nezuko bị biến thành quỷ. Trong quá trình trưởng thành, Tanjiro
            đã chiến đấu với nhiều con quỷ cùng với các đồng đội Agatsuma
            Zenitsu và Hashibira Inosuke. Hành trình đưa cậu đến với cuộc chiến
            cùng những kiếm sĩ cấp cao nhất của Sát Quỷ Đoàn - các Trụ Cột - gồm
            Viêm Trụ Rengoku Kyojuro trên Chuyến Tàu Vô Tận, Âm Trụ Uzui Tengen
            tại Kỹ Viện Trấn, cũng như Hà Trụ Tokito Muichiro và Luyến Trụ
            Kanroji Mitsuri tại Làng Thợ Rèn. Khi các thành viên của Sát Quỷ
            Đoàn và Trụ Cột tham gia vào chương trình đặc huấn để chuẩn bị cho
            trận chiến sắp với lũ quỷ, Kibutsuji Muzan xuất hiện tại Dinh thự
            Ubuyashiki. Khi thủ lĩnh của Sát Quỷ Đoàn gặp nguy hiểm, Tanjiro và
            các Trụ Cột trở về trụ sở Thế nhưng, Muzan bất ngờ kéo toàn bộ Sát
            Quỷ Đoàn đến hang ổ cuối cùng của lũ quỷ là Vô Hạn Thành, mở màn cho
            trận đánh cuối cùng của cả hai phe. Phim mới Demon Slayer -Kimetsu
            no Yaiba- The Movie: Infinity Castle/ Thanh Gươm Diệt Quỷ: Vô Hạn
            Thành là phần đầu tiên trong bộ ba phim điện ảnh về cuộc chiến bi
            tráng, đẫm máu và cảm xúc bậc nhất này. Bộ phim sẽ là một trải
            nghiệm điện ảnh khó quên tại rạp chiếu phim với các fan của Thanh
            Gươm Diệt Quỷ.
          </p>
          {/* Thông tin rạp gần nhất */}
          <div class="bg-gray-800 rounded-lg p-4 mb-6">
            <h2 class="text-xl font-semibold text-[#E82E96] mb-2">
              Thông tin suất chiếu gần nhất:
            </h2>
            <p class="text-sm text-gray-300 mb-1">Mã rạp: GLX01</p>
            <p class="text-sm text-gray-300 mb-1">Tên rạp: GLX - Nguyễn Du</p>
            <p class="text-sm text-gray-300 mb-1">Ngày chiếu: 17/08/2025</p>
            <p class="text-sm text-gray-300 mb-1">Giờ chiếu: 18:00</p>
            <p class="text-sm text-gray-300 mb-1">Giá vé: 75.000đ</p>
            <p class="text-sm text-gray-300 mb-1">Thời lượng: 132 phút</p>
          </div>
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={openModal}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold"
            >
              Xem Trailer
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold">
              Mua vé ngay
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h2 class="text-2xl font-bold mb-4">Lịch chiếu</h2>
        <div class="mb-6 border-b border-gray-700 pb-4">
          <h3 class="text-xl font-semibold text-[#E82E96]">
            GLX - Nguyễn Du (GLX01)
          </h3>
          <p class="text-gray-400 italic mb-2">116 Nguyễn Du, Q1</p>
          <p class="text-sm mb-2">Ngày chiếu: 17/08/2025</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="bg-gray-800 rounded-xl p-3 border border-[#E82E96] hover:shadow-lg">
              <p class="font-semibold text-lg text-[#E82E96]">18:00</p>
              <p class="text-sm text-gray-300">2D Sub</p>
              <p class="text-sm text-gray-300">Giá vé: 75.000đ</p>
              <p class="text-sm text-gray-300">Thời lượng: 132 phút</p>
            </div>
            <div class="bg-gray-800 rounded-xl p-3 border border-[#E82E96] hover:shadow-lg">
              <p class="font-semibold text-lg text-[#E82E96]">20:15</p>
              <p class="text-sm text-gray-300">2D Sub</p>
              <p class="text-sm text-gray-300">Giá vé: 75.000đ</p>
              <p class="text-sm text-gray-300">Thời lượng: 132 phút</p>
            </div>
            <div class="bg-gray-800 rounded-xl p-3 border border-[#E82E96] hover:shadow-lg">
              <p class="font-semibold text-lg text-[#E82E96]">22:30</p>
              <p class="text-sm text-gray-300">2D Sub</p>
              <p class="text-sm text-gray-300">Giá vé: 75.000đ</p>
              <p class="text-sm text-gray-300">Thời lượng: 132 phút</p>
            </div>
          </div>
        </div>
        <div class="mb-6 border-b border-gray-700 pb-4">
          <h3 class="text-xl font-semibold text-[#E82E96]">
            GLX - Tân Bình (GLX02)
          </h3>
          <p class="text-gray-400 italic mb-2">246 Nguyễn Hồng Đào, Tân Bình</p>
          <p class="text-sm mb-2">Ngày chiếu: 17/08/2025</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="bg-gray-800 rounded-xl p-3 border border-[#E82E96] hover:shadow-lg">
              <p class="font-semibold text-lg text-[#E82E96]">19:00</p>
              <p class="text-sm text-gray-300">2D Sub</p>
              <p class="text-sm text-gray-300">Giá vé: 70.000đ</p>
              <p class="text-sm text-gray-300">Thời lượng: 132 phút</p>
            </div>
            <div class="bg-gray-800 rounded-xl p-3 border border-[#E82E96] hover:shadow-lg">
              <p class="font-semibold text-lg text-[#E82E96]">21:15</p>
              <p class="text-sm text-gray-300">2D Sub</p>
              <p class="text-sm text-gray-300">Giá vé: 70.000đ</p>
              <p class="text-sm text-gray-300">Thời lượng: 132 phút</p>
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
                    TraiLer
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

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Đóng
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
