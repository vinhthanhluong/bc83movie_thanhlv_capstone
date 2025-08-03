import React from "react";

export default function InfoMovie() {
  return (
    <div className="pt-5">
      <div className="mx-auto max-w-sm">
        <img
          className="w-full h-full object-contain group-hover:scale-110 transform transition-transform duration-300"
          src="https://image-worker.momocdn.net/img/90126602072536934-kimesstu.png?size=M&referer=cinema.momocdn.net"
          alt=""
        />
      </div>
      <h2 className="text-white text-xl font-bold mt-4">
        Thanh Gươm Diệt Quỷ: Vô Hạn Thành
      </h2>

      <div className="pt-5">
        <ul className="text-white">
          <li className="flex justify-start border-b border-dashed border-white py-2.5">
            <span className="w-[140px] flex">
              <svg
                className="w-6 h-6 text-white dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
              Thời lượng
            </span>
            <span className="w-[calc(100% - 120px)] pl-5">107 phút</span>
          </li>
          <li className="flex justify-start border-b border-dashed border-white py-2.5">
            <span className="w-[140px] flex pr-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Rạp chiếu
            </span>
            <span className="w-[calc(100% - 120px)] pl-5">
              MegaGS - Cao Thắng
            </span>
          </li>
          <li className="flex justify-start border-b border-dashed border-white py-2.5">
            <span className="w-[140px] flex">
              <svg
                className="w-6 h-6 text-white dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Ngày chiếu
            </span>
            <span className="w-[calc(100% - 120px)] pl-5">07/08/2025</span>
          </li>
          <li className="flex justify-start border-b border-dashed border-white py-2.5">
            <span className="w-[140px] flex">
              <svg
                className="w-6 h-6 text-white dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clipRule="evenodd"
                />
              </svg>
              Giờ chiếu
            </span>
            <span className="w-[calc(100% - 120px)] pl-5">18:20</span>
          </li>
          <li className="flex justify-start border-b border-dashed border-white py-2.5">
            <span className="w-[140px] flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              Địa chỉ
            </span>
            <span className="w-[calc(100% - 120px)] pl-5">
              1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7
            </span>
          </li>
          <li className="flex justify-start border-b border-dashed border-white py-2.5">
            <span className="w-[140px] flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>
              Phòng chiếu
            </span>
            <span className="w-[calc(100% - 120px)] pl-5">Rạp 7</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
