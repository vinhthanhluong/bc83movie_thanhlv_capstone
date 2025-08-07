import React from "react";

export default function PaginationCustom() {
  return (
    <ul className="pagination flex flex-nowrap items-center justify-center space-x-2 text-sm">
      <li className="pagination-prev pagination-disable">
        <button
          className="flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none"
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </li>
      <li className="pagination-active">
        <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
          1
        </button>
      </li>
      <li>
        <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
          2
        </button>
      </li>
      <li>
        <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
          3
        </button>
      </li>
      <li>
        <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-500 shadow-sm focus:outline-none">
          ...
        </button>
      </li>
      <li>
        <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
          15
        </button>
      </li>
      <li className="pagination-next" aria-disabled="false">
        <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 shadow-sm focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </li>
      <li className="rc-pagination-options" />
    </ul>
  );
}
