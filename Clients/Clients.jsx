import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import ReviewsCard from "./ReviewsCard";
import SectionTitle from "../SectionTitle";
import "./Review.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Clients() {
  return (
    <div className="max-w-6xl mx-auto pt-2 pb-16 ">
      <div className="flex justify-between items-start py-8">
        <div>
          <h2 className="font-semibold uppercase text-black text-3xl text-center">
            Client Testimonial
          </h2>
          <div className="flex items-center gap-1 mt-2">
            <div className="h-[3px]  w-4 bg-[#21262961]"></div>
            <div className="h-[3px] w-10 bg-[#212629]"></div>
            <div className="h-[3px]  w-4 bg-[#21262961]"></div>
          </div>
        </div>
        <div className="flex justify-end gap-2 ">
          <button className="swiper-button-prev button text-xl p-2 rounded-full border">
            <IoIosArrowBack />
          </button>
          <button className="swiper-button-next  button text-xl p-2 rounded-full border">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <Swiper
        // slidesPerView={3}
        // spaceBetween={10}
        freeMode={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
      >
        <div>
          <SwiperSlide>
            <ReviewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCard />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
