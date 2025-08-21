import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { format } from "date-fns";

export default function CinemaItemCmp({ index, cinemaItemBrand, item }) {
  const navigate = useNavigate();
  const [timeDay, setTimeDay] = useState(null);

  const groupedByDate = item?.lichChieuPhim?.reduce((acc, dateTime) => {
    const dmy = dateTime.ngayChieuGioChieu.slice(0, 10);
    if (!acc[dmy]) {
      acc[dmy] = [];
    }
    acc[dmy].push(dateTime);
    return acc;
  }, {});

  return (
    <div
      key={index}
      className=""
    >
      <Disclosure>
        <DisclosureButton className="group relative block w-full p-5 bg-white hover:bg-gray-50 transition duration-200 border-t border-[#E7E4E6]">
          <div className="flex items-center text-left">
            <img
              className="size-[50px] p-1.5 rounded-md border border-[#E7E4E6] mr-2.5"
              src={cinemaItemBrand.logo}
              alt="logo"
            />
            <div>
              <h4 className="text-black font-semibold">{item.tenCumRap}</h4>
              <p className="text-sm text-gray-600">{item.diaChi}</p>
            </div>
          </div>
           <ChevronDown className="absolute inset-y-0 right-5 my-auto size-5 text-gray-500 transition-all duration-300 fill-white/60 group-data-open:-rotate-180" />
        </DisclosureButton>
        <DisclosurePanel
          transition
          className="origin-bottom transition duration-200 ease-out data-closed:translate-y-6 data-closed:opacity-0 full p-5 pt-0"
        >
          {/* Date */}
          <div className="relative z-0 block w-full">
            <div
              className={`cinema-day-swiper-next-${index} bg-white/70 absolute right-0 inset-y-0 flex items-center z-10 text-gray-800 text-3xl cursor-pointer [&.swiper-button-disabled]:opacity-0`}
            >
              <ChevronRight className="size-5" />
            </div>
            <div
              className={`cinema-day-swiper-prev-${index} bg-white/70 absolute left-0 inset-y-0 flex items-center z-10 text-gray-800 text-3xl cursor-pointer [&.swiper-button-disabled]:opacity-0`}
            >
              <ChevronLeft className="size-5" />
            </div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              modules={[Navigation]}
              className={`cinema-day-swiper`}
              navigation={{
                nextEl: `.cinema-day-swiper-next-${index}`,
                prevEl: `.cinema-day-swiper-prev-${index}`,
              }}
            >
              {Object.entries(groupedByDate)?.map(
                ([dateKey, dateValue], idx) => {
                  const dateCustom =
                    timeDay &&
                    format(timeDay[0].ngayChieuGioChieu, "yyy-MM-dd");
                  const isActive = dateCustom === dateKey;
                  return (
                    <SwiperSlide>
                      <div
                        onClick={() => setTimeDay(dateValue)}
                        key={idx}
                        className={`w-16 cursor-pointer overflow-hidden rounded border bg-white py-0 text-center transition-all  ${
                          isActive ? "border-pink-700" : "border-gray-300"
                        }`}
                      >
                        <div
                          className={`mx-auto justify-center py-1 text-md font-semibold ${
                            isActive
                              ? "bg-pink-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          {dateKey && format(dateKey, "dd/MM")}
                        </div>
                        <div
                          className={`text-nowrap flex  h-6 items-center justify-center text-xs ${
                            isActive ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {dateKey && format(dateKey, "EEEE")}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
          {/* Time */}
          {timeDay && (
            <div className="flex flex-wrap gap-3 pt-4">
              {timeDay?.map((itm, i) => (
                <button
                  key={i}
                  className="px-5 py-1.5 border border-pink-500 text-black rounded hover:bg-pink-100 transition cursor-pointer"
                  onClick={() => {
                    navigate(`/book-ticket/${itm.maLichChieu}`);
                  }}
                >
                  {itm.ngayChieuGioChieu &&
                    format(itm.ngayChieuGioChieu, "HH:mm")}
                </button>
              ))}
            </div>
          )}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
