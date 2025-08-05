import React from "react";

export default function Menu() {
  return (
    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Trang chủ
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Phim chiếu
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Rạp phim
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Blog phim
        </a>
      </li>
    </ul>
  );
}
