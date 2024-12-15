"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Partners = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="font-normal text-5xl uppercase text-center mb-7">
          Our Partner
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          modules={[Pagination]}
          pagination={{
            el: ".partner-pagination",
            clickable: true,
            type: "bullets",
          }}
        >
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-neutral-300 h-20"></div>
          </SwiperSlide>
          <div className="mt-3">
            <div className="partner-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
