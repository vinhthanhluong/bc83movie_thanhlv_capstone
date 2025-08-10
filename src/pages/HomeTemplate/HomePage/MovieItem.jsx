import { useNavigate } from "react-router-dom";
import { useHomeStore } from "../../../store/home.store.js";

export default function MovieItem({ movie = {} }) {
  const navigate = useNavigate();
  const setIsOpenMovie = useHomeStore((state) => state.setIsOpenMovie);
  const setMoviePopup = useHomeStore((state) => state.setMoviePopup);

  return (
    <div className="item" onClick={() => setMoviePopup(movie)}>
      <div
        className="relative border border-gray-500 rounded-lg mb-2 cursor-pointer group cImg"
        onClick={() => setIsOpenMovie(true)}
      >
        <div className=" absolute top-3 left-3 z-1">
          {movie.hot && (
            <p className="px-2 py-1 text-sm md:text-xs lg:text-sm font-medium rounded-xs leading-none bg-red-500  text-white">
              Hot
            </p>
          )}
        </div>
        <div className="aspect-w-7 aspect-h-10 w-full scale-100 rounded-lg overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            src={movie.hinhAnh}
            alt={movie.biDanh}
          />
        </div>
        <div className="absolute inset-0 m-auto w-10 h-10 transition-all duration-300 group-hover:scale-110">
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="jsx-708c0e64c1e1a9c7"
          >
            <g fill="none" fillRule="evenodd" className="jsx-708c0e64c1e1a9c7">
              <circle
                stroke="#FFF"
                strokeWidth={2}
                fillOpacity=".24"
                fill="#000"
                cx={24}
                cy={24}
                r={23}
                className="jsx-708c0e64c1e1a9c7"
              />
              <path
                d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                fill="#FFF"
                fillRule="nonzero"
                className="jsx-708c0e64c1e1a9c7"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="block hover:text-[var(--mainColor)]  mt-2 group">
        <p
          className="cursor-pointer text-sm font-medium line-clamp-1 transition-all duration-300 md:text-base"
          onClick={() => navigate(`/movie-detail/${movie.maPhim}`)}
        >
          {movie.tenPhim}
        </p>
      </div>
      <p className=" text-sm flex items-center mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="mr-1 h-4 w-4 text-yellow-400"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span>{movie.danhGia}</span>
      </p>
    </div>
  );
}
