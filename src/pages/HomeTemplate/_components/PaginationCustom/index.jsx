import React from "react";

export default function PaginationCustom({
  totalPages,
  currentPage,
  handlePage,
}) {
  const handleArrow = (num) => {
    if (num == 1 && currentPage < totalPages) {
      handlePage(currentPage + num);
    }

    if (num == -1 && currentPage >= 2) {
      handlePage(currentPage + num);
    }
  };

  return (
    <ul className="pagination flex flex-nowrap items-center justify-center space-x-2 text-sm">
      <li
        onClick={() => handleArrow(-1)}
        className={`pagination-prev  ${
          currentPage == 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <button className="flex h-8 w-8 cursor-pointer hover:bg-white hover:shadow-sm hover:font-bold select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none">
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
          {currentPage}
        </button>
      </li>
      {currentPage !== totalPages && (
        <li onClick={() => handleArrow(1)}>
          <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
            {currentPage + 1}
          </button>
        </li>
      )}

      {currentPage !== totalPages - 1 && currentPage !== totalPages && (
        <li>
          <button className="flex h-5 w-5 select-none items-center justify-center text-gray-500 focus:outline-none">
            ...
          </button>
        </li>
      )}

      {currentPage !== totalPages - 1 && currentPage !== totalPages && (
        <li onClick={() => handlePage(totalPages)}>
          <button className="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
            {totalPages}
          </button>
        </li>
      )}

      <li
        onClick={() => handleArrow(1)}
        className={`pagination-next  ${
          currentPage >= totalPages - 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
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
