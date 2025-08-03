import React from "react";

export default function MovieIsShow() {
  return (
    <div>
      <h2 className="font-bold text-white text-xl mb-4">Phim đang chiếu</h2>
      <div>
        <ul className="grid space-y-4">
          <li className="grid grid-cols-7 gap-2.5">
            <span className="col-span-2">
              <img
                src="https://image-worker.momocdn.net/img/90126602072536934-kimesstu.png?size=M&referer=cinema.momocdn.net"
                alt=""
              />
            </span>
            <span className="col-span-5 flex flex-col space-y-2">
              <span className="font-bold text-white">
                Thanh Gươm Diệt Quỷ: Vô Hạn Thành
              </span>
              <span className="text-white">15/08/2025</span>
              <span className="text-white">Thời lượng: 100 phút</span>
            </span>
          </li>
          <li className="grid grid-cols-7 gap-2.5">
            <span className="col-span-2">
              <img
                src="https://image-worker.momocdn.net/img/90126602072536934-kimesstu.png?size=M&referer=cinema.momocdn.net"
                alt=""
              />
            </span>
            <span className="col-span-5 flex flex-col space-y-2">
              <span className="font-bold text-white">
                Thanh Gươm Diệt Quỷ: Vô Hạn Thsành
              </span>
              <span className="text-white">15/08/2025</span>
              <span className="text-white">Thời lượng: 100 phút</span>
            </span>
          </li>
          <li className="grid grid-cols-7 gap-2.5">
            <span className="col-span-2">
              <img
                src="https://image-worker.momocdn.net/img/90126602072536934-kimesstu.png?size=M&referer=cinema.momocdn.net"
                alt=""
              />
            </span>
            <span className="col-span-5 flex flex-col space-y-2">
              <span className="font-bold text-white">
                Thanh Gươm Diệt Quỷ: Vô Hạn Thsành
              </span>
              <span className="text-white">15/08/2025</span>
              <span className="text-white">Thời lượng: 100 phút</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
