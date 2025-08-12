import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CircleX } from "lucide-react";
import { getCinemaTicket } from "../../../service/cinema.api";
import { useCinemaStore } from "../../../store/cinema.store";

export default function BookTicketPage() {
  let [isOpen, setIsOpen] = useState(false);

  const { cartTicket, setCartTicket, setDeleteTicket } = useCinemaStore();
  console.log("🌲 ~ BookTicketPage ~ cartTicket:", cartTicket);
  

  const { ticketId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["cinema-ticket"],
    queryFn: () => getCinemaTicket(ticketId),
  });
  const dataInfo = data?.thongTinPhim;
  const dataSeat = data?.danhSachGhe;

  const formatMoney = (val) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(val)
      .replace("₫", "đ")
      .trim();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-8">
        <div className="md:col-span-2 lg:col-span-5 space-y-6 overflow-scroll lg:overflow-auto">
          <div className="border-b border-orange-400 pb-2 text-center">
            <div className="text-sm text-gray-700 mb-2">Màn hình</div>
            <div className="w-full h-1 bg-orange-300" />
          </div>
          <div className="bg-[#eee] shadow-md p-4 rounded w-fit mx-auto">
            <div className="grid grid-cols-15 gap-2">
              {/* {isLoading && <p>..........Loading</p>} */}
              {dataSeat?.map((item, index) => (
                <div key={index}>
                  <input
                    disabled={item.daDat}
                    type="checkbox"
                    id={index}
                    className="hidden peer"
                    defaultChecked={cartTicket.some(t => t.stt === item.stt ? true : false)}
                  />
                  <label
                    htmlFor={index}
                    className={`w-11 h-11 text-[14px] flex items-center justify-center rounded text-white font-bold cursor-pointer ${
                      item.loaiGhe === "Thuong" ? "bg-[#b1b3b6]" : "bg-red-500"
                    } peer-checked:bg-green-500 ${
                      item.daDat ? "pointer-events-none bg-black" : ""
                    }`}
                    onClick={() => setCartTicket(item)}
                  >
                    {`A${item.tenGhe}`}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div color="gray-700" label="Đã đặt" />
            <div color="pink-400" label="Ghế bạn chọn" />
            <div color="purple-600" label="Ghế thường" />
            <div color="red-500" label="Ghế VIP" />
          </div>
          <div className="border-t-4 border-pink-400 p-4 bg-white rounded text-gray-800 flex flex-wrap gap-6 items-center justify-start shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-red-400" />
              <span>Ghế đã bán</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-green-500" />
              <span>Ghế đang chọn</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#b1b3b6]" />
              <span>Ghế thường</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-pink-500" />
              <span className="text-blue-600 font-medium">Ghế VIP</span>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] shadow-lg p-8 rounded-lg space-y-4 lg:col-span-3">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            {dataInfo?.tenPhim}
          </h2>
          {/* <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="" /> */}
          <div className="space-y-4 text-gray-800 mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink">
                <span>🏛️</span>
                <span>Rạp chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                {`${dataInfo?.tenCumRap} - ${dataInfo?.tenRap}`}
              </span>
            </div>
            <hr className="border-dashed border-gray-300" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>📍</span>
                <span>Địa chỉ</span>
              </div>
              <span className="font-semibold text-blue-900">
                {dataInfo?.diaChi}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>⏳</span>
                <span>Thời lượng</span>
              </div>
              <span className="font-semibold text-blue-900">--- phút</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>📅</span>
                <span>Ngày chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                {dataInfo?.ngayChieu}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>🕰️</span>
                <span>Giờ chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                {dataInfo?.gioChieu}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>💺</span>
                <span>Ghế ngồi</span>
              </div>
              <span className="font-semibold text-blue-900 break-all flex items-center gap-1">
                {cartTicket.map((item) => `A${item.tenGhe}`).join(",")}
                <CircleX
                  className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
                  onClick={() => setDeleteTicket()}
                />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>🎟️</span>
                <span>Tổng tiền</span>
              </div>
              <span className="font-semibold text-blue-900">
                {formatMoney(
                  cartTicket.reduce((total, item) => total + item.giaVe, 0)
                )}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-full cursor-pointer bg-[#E82E96] hover:bg-[#E82E96] text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 mt-4"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="max-w-md mx-auto p-6 rounded-lg bg-gray-900 shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#E82E96] text-center mb-6">
                      Xác nhận thông tin đặt vé
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Mã lịch chiếu</span>
                        <span className="text-white">LC123456</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Tên phim</span>
                        <span className="text-white">Inside Out 2</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Tên rạp chiếu</span>
                        <span className="text-white">Beta Quang Trung</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Địa chỉ</span>
                        <span className="text-right text-white">
                          101 Quang Trung, Gò Vấp, TP.HCM
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Phòng chiếu</span>
                        <span className="text-white">P4</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Ngày chiếu</span>
                        <span className="text-white">05/08/2025</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Giờ chiếu</span>
                        <span className="text-white">23:40</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-700 pb-2">
                        <span className="text-purple-400">Ghế ngồi</span>
                        <span className="text-white">A1, A2, A3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-400">Giá vé</span>
                        <span className="text-white">111111111111</span>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-gradient-to-r bg-[#E82E96] to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white py-2 rounded-md transition duration-300">
                      Xác nhận &amp; Thanh toán
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
