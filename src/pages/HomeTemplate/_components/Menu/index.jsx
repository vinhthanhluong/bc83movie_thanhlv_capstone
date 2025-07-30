import React from "react";

export default function Menu() {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Movie
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Cinema
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-1 px-2 text-gray-900 hover:text-[#d42a87] dark:text-white dark:hover:text-[#d42a87]"
        >
          Blog
        </a>
      </li>
    </ul>
  );
}
