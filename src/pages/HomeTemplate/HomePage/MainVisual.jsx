import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function MainVisual() {
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
        <SwiperSlide>
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
            alt="mainVisual"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
            alt="mainVisual"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png"
            alt="mainVisual"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
            alt="mainVisual"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
