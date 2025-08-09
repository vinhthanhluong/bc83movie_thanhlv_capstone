import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getBannerMovie } from "../../../service/movie.api";

export default function MainVisual() {
  const { data: banner, isLoading } = useQuery({
    queryKey: ["banner-movies"],
    queryFn: () => getBannerMovie(),
  });

  return (
    <div className="mainVisual">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ height: "min(calc(220/375*100vw) , 700px)" }}
        className="w-full  2xl:h-[calc(100vh-165px)]"
      >
        {banner?.map((item) => (
          <SwiperSlide key={item.maBanner}>
            <img
              src={item.hinhAnh}
              alt={item.maBanner}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
