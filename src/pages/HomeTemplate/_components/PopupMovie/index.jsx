import { Dialog, DialogPanel } from "@headlessui/react";
import { useHomeStore } from "../../../../store/home.store.js";
import { useNavigate } from "react-router-dom";

export default function PopupMovie({ movie }) {
  const isOpenMovie = useHomeStore((state) => state.isOpenMovie);
  const setIsOpenMovie = useHomeStore((state) => state.setIsOpenMovie);

  const navigate = useNavigate();

  const linkYoutube = movie?.trailer && movie.trailer.slice(-11);

  return (
    <>
      <Dialog
        open={isOpenMovie}
        onClose={() => setIsOpenMovie(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#0009]">
          <DialogPanel className="max-w-3xl bg-[#191617] text-white rounded-lg relative slide-in-bottom">
            <div
              className="absolute z-2 top-[-20px] right-[-20px] cursor-pointer"
              onClick={() => setIsOpenMovie(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-10 w-10 text-white opacity-80 hover:opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="relative aspect-video bg-white rounded-t-lg">
              <iframe
                className="absolute inset-0 object-cover w-full h-full"
                width="560"
                height="315"
                src={movie?.trailer.replace("watch?v=" , "embed/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex p-5 gap-5">
              <div className="w-20 flex-shrink-0">
                <div className="relative aspect-w-7 aspect-h-10 w-full">
                  <img
                    src={movie?.hinhAnh}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt={movie?.biDanh}
                  />
                </div>
              </div>
              <div className="block">
                <p className="font-bold text-xl mb-2">{movie?.tenPhim}</p>
                <p className="text-sm opacity-70">{movie?.moTa}</p>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    className="text-white bg-[var(--mainColor)] hover:bg-[#991d61] font-medium rounded-md transition-all duration-300 cursor-pointer text-sm px-5 py-2.5"
                    onClick={() => {
                      navigate(`/movie-detail/${movie?.maPhim}`);
                      setIsOpenMovie(false);
                    }}
                  >
                    Đặt vé
                  </button>
                  <button
                    className="text-white bg-[#796b73] hover:bg-[#574d53] font-medium rounded-md transition-all duration-300 cursor-pointer text-sm px-5 py-2.5"
                    onClick={() => setIsOpenMovie(false)}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
