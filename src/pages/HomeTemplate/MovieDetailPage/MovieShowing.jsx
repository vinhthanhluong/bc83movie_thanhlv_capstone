import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMoviePagi } from "../../../service/movie.api";
import { useNavigate } from "react-router-dom";

export default function MovieShowing({ idCurrent }) {
  const navigate = useNavigate();
  const [dataNew, setDataNew] = useState(null);

  const { data = {}, isLoading } = useQuery({
    queryKey: ["movie-detail-showing"],
    queryFn: () => getMoviePagi(14),
  });

  useEffect(() => {
    const dNew = data?.items?.filter(
      (item) => item.maPhim !== Number(idCurrent)
    );
    setDataNew(dNew);
  }, [idCurrent, data]);
  return (
    <>
      <h2 className="text-xl font-bold mb-5 text-gray-800">Phim đang chiếu</h2>
      {dataNew?.map(
        (item, index) =>
          item.dangChieu && (
            <div
              key={index}
              className="flex items-start gap-3 mb-3 pb-3 border-b border-gray-200"
            >
              <div
                className="shrink w-[16%] h-[120px] hover:scale-105 cursor-pointer transition-all duration-300"
                onClick={() => navigate(`/movie-detail/${item.maPhim}`)}
              >
                <img
                  src={item.hinhAnh}
                  alt={item.tenPhim}
                  className="h-full w-full max-w-full object-cover rounded"
                />
              </div>
              <div className="w-[79%]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                    Hot
                  </span>
                  <h3 className="font-semibold text-black line-clamp-1 hover:text-pink-500 transition-all duration-300 cursor-pointer">
                    {item.tenPhim}
                  </h3>
                </div>
                <p className="text-sm text-black line-clamp-2">{item.moTa}</p>
                <p className="text-sm text-yellow-500 mt-1">
                  ⭐ {item.danhGia}
                </p>
              </div>
            </div>
          )
      )}
      {/* <div className="flex gap-3 mb-5 border-b border-gray-400 pb-5">
        <img
          src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
          alt="Thanh Gươm Diệt Quỷ: Vô Hạn Thành"
          className="w-[60px] h-[90px] object-cover rounded"
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
              K
            </span>
            <h3 className="font-semibold text-black">
              Thanh Gươm Diệt Quỷ: Vô Hạn Thành
            </h3>
          </div>
          <p className="text-sm text-black">Chính Kịch, Gia Đình</p>
          <p className="text-sm text-yellow-500 mt-1">⭐ 7.5</p>
        </div>
      </div>
      <div className="flex gap-3 mb-5 border-b border-gray-400 pb-5">
        <img
          src="https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg"
          alt="Thanh Gươm Diệt Quỷ: Vô Hạn Thành"
          className="w-[60px] h-[90px] object-cover rounded"
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded">
              K
            </span>
            <h3 className="font-semibold text-black">
              Thanh Gươm Diệt Quỷ: Vô Hạn Thành
            </h3>
          </div>
          <p className="text-sm text-black">Chính Kịch, Gia Đình</p>
          <p className="text-sm text-yellow-500 mt-1">⭐ 7.5</p>
        </div>
      </div> */}
    </>
  );
}
