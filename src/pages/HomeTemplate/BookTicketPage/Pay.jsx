import React from "react";

export default function Pay() {
  return (
    <div className="pt-8">
      <p className="text-white text-2xl uppercase flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-9 mr-2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Thông tin thanh toán
      </p>
      <div className="calcTbl mt-6">
        <table className="text-white w-full mt-">
          <tr>
            <th>Ghế ngồi</th>
            <th>Gía tiền</th>
            <th>Hủy</th>
          </tr>
          <tr>
            <td>Tổng tiền</td>
            <td>1500000000</td>
            <td>
              <button
                type="button"
                className="cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Xóa
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
