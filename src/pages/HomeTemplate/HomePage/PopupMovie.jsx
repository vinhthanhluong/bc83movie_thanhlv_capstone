import { Dialog, DialogPanel } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../../store/homeSlice";

export default function PopupMovie() {
  const isOpen = useSelector((state) => state.homeSlice.isOpenPopup);
  const dispatch = useDispatch()
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => dispatch(setOpenPopup(false))}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-3xl bg-[#191617] text-white rounded-lg relative">
            <div className="absolute top-[-20px] right-[-20px] cursor-pointer" onClick={() => dispatch(setOpenPopup(false))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-10 w-10 text-white opacity-80 hover:opacity-100"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="aspect-video bg-yellow-50">zxczxc</div>
            <div className="flex p-5 gap-5">
              <div className="w-20 flex-shrink-0">
                <div className="relative aspect-w-7 aspect-h-10 w-full">
                  <img
                    src="https://image-worker.momocdn.net/img/89520077420501400-conannn.png?size=M&referer=cinema.momocdn.net"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="block">
                <p className="font-bold text-xl mb-2">
                  Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn
                </p>
                <p className="text-sm font-bold opacity-70 text-white mb-2">
                  - Hoạt Hình, Hình Sự, Bí Ẩn, Hành Động
                </p>
                <p className="text-sm opacity-70">
                  Bộ phim Conan Movie 28 đã chính thức có lịch khởi chiếu tại
                  Nhật Bản vào ngày 18 tháng 4 năm 2025. Hơn nữa, hình ảnh
                  teaser do Gosho Aoyama vẽ cũng đã được phát hành! Với cảnh
                  tượng được cho là vùng núi tuyết của tỉnh Nagano.
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <button className="text-white bg-[var(--mainColor)] hover:bg-[#991d61] font-medium rounded-md transition-all duration-300 cursor-pointer text-sm px-5 py-2.5">
                    Đặt vé
                  </button>
                  <button
                    className="text-white bg-[#796b73] hover:bg-[#574d53] font-medium rounded-md transition-all duration-300 cursor-pointer text-sm px-5 py-2.5"
                    onClick={() => dispatch(setOpenPopup(false))}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
