"use client";
import Image from 'next/image'
import beyond from '../assets/partners/beyond sustainability.svg'
import kauvery from '../assets/partners/kauvery.svg'
import Gro from '../assets/partners/Gro.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link'

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
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>

        <Link href={'https://beyondsustainability.in/'}>
            <Image className=' w-full h-36 object-contain' src={beyond} alt='Beyond Sustainability'></Image>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'https://www.kauveryhospital.com/'}>
        <Image className=' w-full h-36 object-contain' src={kauvery} alt='Kauvery'></Image>
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-transparent h-20"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'https://gro-withus.com/'}>
        <Image className=' w-full h-36 object-contain' src={Gro} alt='GroWithUs'></Image>
          </Link>
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
