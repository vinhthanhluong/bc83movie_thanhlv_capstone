import React from "react";
import MovieItem from "./MovieItem";

export default function ListMovie() {
  return (
    <div className="relative bg-gray-50 pb-6 pt-6  md:py-14">
      <div className="max-w-screen-xl px-5 mx-auto md:px-7 xl:px-5">
        <div className="md:flex justify-between mb-6 md:mb-10">
          <h2 class="text-center text-xl text-[var(--mainColor)] md:text-2xl lg:text-3xl font-bold mb-3 md:mb-0">
            Tìm phim chiếu rạp trên CycberMovie
          </h2>
          <form class="md:max-w-sm">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-[var(--mainColor)] focus:border-[var(--mainColor)] "
                placeholder="Tìm theo tên phim..."
                required
              />
            </div>
          </form>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:grid-cols-5">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>

        <ul class="mt-7 pagination flex flex-nowrap items-center justify-center space-x-2 text-sm">
          <li class="pagination-prev pagination-disable">
            <button
              class="flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none"
              disabled=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
          </li>
          <li class="pagination-active">
            <button class="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
              1
            </button>
          </li>
          <li class="">
            <button class="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
              2
            </button>
          </li>
          <li class="">
            <button class="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
              3
            </button>
          </li>
          <li class="">
            <button class="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-500 shadow-sm focus:outline-none">
              ...
            </button>
          </li>
          <li class="">
            <button class="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700  focus:outline-none ">
              15
            </button>
          </li>
          <li class="pagination-next" aria-disabled="false">
            <button class="hover:bg-white hover:shadow-sm hover:font-bold cursor-pointer flex h-8 w-8 select-none items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-700 shadow-sm focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </li>
          <li class="rc-pagination-options"></li>
        </ul>
      </div>
    </div>
  );
}
