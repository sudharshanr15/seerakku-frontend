"use client";
import Image from 'next/image'
import beyond from '../assets/partners/beyond sustainability.svg'
import kauvery from '../assets/partners/kauvery.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Partners = () => {
  return (
    <section className="layout-section-lg text-center">
      <h2 className="text-center heading-2">Our Partner</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        breakpoints={{
          440: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination]}
        pagination={{
          el: ".partner-pagination",
          clickable: true,
          type: "bullets",
        }}
      >
        <SwiperSlide>

            <Image className=' w-full h-36' src={beyond} alt='Beyond Sustainability'></Image>

        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>
        <Image className=' w-full h-36' src={kauvery} alt='Kauvery'></Image>

        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <div className="mt-3">
          <div className="partner-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Partners;
