import React from "react";
import "./style.css";
export default function MovieDetailPage() {
  return (
    <div className="bg">
      <div className="max-w-[1280px] mx-auto py-8 px-3.5">
        <div className="lg:grid grid-cols-8 gap-10">
          <div className="max-w-xs mx-auto mb-[20px] group overflow-hidden col-span-2 aspect-w-7 aspect-h-10 w-full">
            <img
              className="w-full h-full object-contain group-hover:scale-110 transform transition-transform duration-300"
              src="https://image-worker.momocdn.net/img/90126602072536934-kimesstu.png?size=M&referer=cinema.momocdn.net"
              alt="images"
            />
          </div>
          <div className="space-y-4 col-span-6 lg:space-y-5">
            <h1 className="text-xl text-white font-bold lg:text-4xl">
              Thanh Gươm Diệt Quỷ: Vô Hạn Thsành
            </h1>
            <p className="text-[#999995]">Kimetsu No Yaiba: Infinity Castle</p>
            <p>
              <span className="block text-[#E6E6E7] font-bold">Nội dung:</span>
              <span className="text-[#999995]">
                Kamado Tanjiro gia nhập Sát Quỷ Đoàn sau khi em gái Nezuko bị
                biến thành quỷ. Trong quá trình trưởng thành, Tanjiro đã chiến
                đấu với nhiều con quỷ cùng với các đồng đội Agatsuma Zenitsu và
                Hashibira Inosuke. Hành trình đưa cậu đến với cuộc chiến cùng
                những kiếm sĩ cấp cao nhất của Sát Quỷ Đoàn - các Trụ Cột - gồm
                Viêm Trụ Rengoku Kyojuro trên Chuyến Tàu Vô Tận, Âm Trụ Uzui
                Tengen tại Kỹ Viện Trấn, cũng như Hà Trụ Tokito Muichiro và
                Luyến Trụ Kanroji Mitsuri tại Làng Thợ Rèn. Khi các thành viên
                của Sát Quỷ Đoàn và Trụ Cột tham gia vào chương trình đặc huấn
                để chuẩn bị cho trận chiến sắp với lũ quỷ, Kibutsuji Muzan xuất
                hiện tại Dinh thự Ubuyashiki. Khi thủ lĩnh của Sát Quỷ Đoàn gặp
                nguy hiểm, Tanjiro và các Trụ Cột trở về trụ sở Thế nhưng, Muzan
                bất ngờ kéo toàn bộ Sát Quỷ Đoàn đến hang ổ cuối cùng của lũ quỷ
                là Vô Hạn Thành, mở màn cho trận đánh cuối cùng của cả hai
                phe.Thu gọn
              </span>
            </p>
            <p className="flex flex-col">
              <span className="text-[#999995]">ngày chiếu</span>
              <span className="text-white font-bold">15/08/2025</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
