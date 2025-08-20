import { useParams } from "react-router-dom";
import { CircleX, LoaderCircle } from "lucide-react";
import { useCinemaStore } from "../../../store/cinema.store";
import Loading from "../_components/Loading";
import { useAddTicket, useCinemaTicket } from "../../../hooks/useCinemaTicket";
import { confirmDialog } from "../../../utils/dialog";

export default function BookTicketPage() {
  const { cartTicket, setCartTicket, setDeleteTicket } = useCinemaStore();
  const { ticketId } = useParams();

  const { data: cinema, isLoading } = useCinemaTicket(ticketId);
  const { mutate: mutateTicket, isPending: isPendingTicket } = useAddTicket();
  const dataInfo = cinema?.thongTinPhim;
  const dataSeat = cinema?.danhSachGhe;

  const handleBooking = () => {
    let ticketCutom = cartTicket.map(({ giaVe, maGhe }) => ({
      giaVe,
      maGhe,
    }));
    if (ticketCutom.length == 0) return;
    const dataTicket = {
      maLichChieu: dataInfo?.maLichChieu,
      danhSachVe: ticketCutom,
    };
    confirmDialog().then((result) => {
      if (result.isConfirmed) {
        mutateTicket(dataTicket);
        setDeleteTicket();
      }
    });
  };

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
      <div className="max-w-7xl mx-auto xl:grid xl:grid-cols-8 gap-6 items-start">
        <div className="xl:col-span-5 space-y-6">
          <div className="overflow-auto">
            <div className="border-b border-orange-400 pb-2 text-center mb-5 min-w-[700px]">
              <div className="text-sm text-gray-700 mb-2">Màn hình</div>
              <div className="w-full h-1 bg-orange-300" />
            </div>
            <div className="bg-[#eee] shadow-md p-4 min-h-[200px] min-w-[200px] relative rounded w-fit mx-auto">
              {isLoading && <Loading />}

              <div className="grid grid-cols-15 gap-2  min-w-[700px] ">
                {dataSeat?.map((item, index) => (
                  <div key={index}>
                    <input
                      disabled={item.daDat}
                      type="checkbox"
                      id={index}
                      className="hidden peer"
                      defaultChecked={cartTicket.some((t) =>
                        t.stt === item.stt ? true : false
                      )}
                    />
                    <label
                      htmlFor={index}
                      className={`peer-disabled:bg-red-400 peer-disabled:pointer-events-none w-10 h-10 text-[14px] flex items-center justify-center rounded text-white font-bold cursor-pointer ${
                        item.loaiGhe === "Thuong"
                          ? "bg-[#b1b3b6]"
                          : "bg-pink-500"
                      } peer-checked:bg-green-500 `}
                      onClick={() => setCartTicket(item)}
                    >
                      {`A${item.tenGhe}`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-4 border-pink-400 p-4 bg-white rounded text-gray-800 flex flex-wrap gap-3 md:gap-6 items-center justify-start shadow-md">
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

        <div className="bg-[#fff] shadow-lg p-4 md:p-8 rounded-lg space-y-4 xl:col-span-3">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            {dataInfo?.tenPhim}
          </h2>
          {/* <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="" /> */}
          <div className="space-y-4 text-gray-800 mx-auto">
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
              <div className="flex items-center gap-2 shrink">
                <span>🏛️</span>
                <span>Rạp chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                {`${dataInfo?.tenCumRap} - ${dataInfo?.tenRap}`}
              </span>
            </div>
            <hr className="border-dashed border-gray-300" />
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>📍</span>
                <span>Địa chỉ</span>
              </div>
              <span className="font-semibold text-blue-900">
                {dataInfo?.diaChi}
              </span>
            </div>
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>⏳</span>
                <span>Thời lượng</span>
              </div>
              <span className="font-semibold text-blue-900">120 phút</span>
            </div>
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>📅</span>
                <span>Ngày chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                {dataInfo?.ngayChieu}
              </span>
            </div>
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>🕰️</span>
                <span>Giờ chiếu</span>
              </div>
              <span className="font-semibold text-blue-900">
                {dataInfo?.gioChieu}
              </span>
            </div>
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
              <div className="flex items-center gap-2 shrink pr-3">
                <span>💺</span>
                <span>Ghế ngồi</span>
              </div>
              <span className="font-semibold text-blue-900 break-all flex items-center gap-1">
                {cartTicket.map((item) => `A${item.tenGhe}`).join(",")}
                {cartTicket.length > 0 && (
                  <CircleX
                    className="w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
                    onClick={() => setDeleteTicket()}
                  />
                )}
              </span>
            </div>
            <div className="flex md:items-center justify-between flex-wrap flex-col md:flex-row">
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
              onClick={handleBooking}
              className="flex justify-center gap-2 cursor-pointer mt-6 w-full bg-gradient-to-r bg-[#E82E96] to-purple-700 hover:from-pink-500 hover:to-pink-500 text-white py-2 rounded-md transition duration-300"
            >
              {isPendingTicket && (
                <LoaderCircle className="animate-spin" width={20} />
              )}
              Xác nhận &amp; Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
