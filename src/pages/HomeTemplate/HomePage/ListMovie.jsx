import MovieItem from "./MovieItem";
import PaginationCustom from "../_components/PaginationCustom";
import { useQuery } from "@tanstack/react-query";
import { getMoviePagi } from "../../../service/movie.api";

export default function ListMovie() {
  const { data, isLoading } = useQuery({
    queryKey: ["Movie-list"],
    queryFn: () => getMoviePagi(10),
  });

  return (
    <div className="relative bg-gray-50 pb-6 pt-6  md:py-14">
      <div className="max-w-screen-xl px-5 mx-auto md:px-7 xl:px-5">
        <div className="md:flex justify-between mb-6 md:mb-10">
          <h2 className="text-center text-xl text-[var(--mainColor)] md:text-2xl lg:text-3xl font-bold mb-3 md:mb-0">
            Tìm phim chiếu rạp trên CycberMovie
          </h2>
          <form className="md:max-w-sm">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-300 "
                placeholder="Tìm theo tên phim..."
                required
              />
            </div>
          </form>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:grid-cols-5 mb-5 md:mb-7">
          {data?.items?.map((item, index) => {
            return <MovieItem key={index} movie={item} />;
          })}
        </div>

        <PaginationCustom />
      </div>
    </div>
  );
}
