"use client"
import { useState, useEffect } from "react";
import Button from "@/components/buttons/Button";
import DonateNow from "@/components/buttons/DonateNow";
import Image from "next/image";
import { get_involved_image_1 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Link from 'next/link'
import "swiper/css/bundle";
import { slide_1, slide_2, slide_3, slide_4, slide_5 } from "../assets/slides";
import anime from "animejs/lib/anime.es";

import { Montserrat } from "next/font/google";

const montserrat_font = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
})


const slides = [
  {
    name: "Planting Trees",
    image: slide_1,
  },
  {
    name: "Restoring Water",
    image: slide_2,
  },
  {
    name: "Enriching Forests",
    image: slide_3,
  },
  {
    name: "Naturing Coasts",
    image: slide_4,
  },
  {
    name: "Empowering Agriculture",
    image: slide_5,
  },
];

const HeroBanner = () => {
  const data = [
    'Planting Trees',
    'Restoring Water',
    'Enriching Feels',
    'Nurturing Coasts',
    'Empowering Agriculture'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative top-0 left-0 w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="hero-slide-pagination ${className}">0${index + 1}</span>`;
            },
            el: ".hero-pagination",
          }}
          effect={"fade"}
          modules={[Autoplay, EffectFade, Pagination]}
          className="h-full"
          onSlideChange={(core) => {
            const { activeIndex, previousIndex } = core;
            anime
              .timeline()
              .add({
                targets: ".hero-slide-" + activeIndex,
                translateY: [50, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 500,
              })
              .add({
                targets: ".hero-slide-" + activeIndex,
                translateY: [0, -50],
                opacity: [1, 0],
                easing: "easeInExpo",
                delay: 800,
                duration: 500,
              });
          }}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <Image
                  src={image.image}
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="bg-gradient-to-t absolute z-10 top-0 left-0 w-full h-full from-transparent from-5% to-black"></div>
                <div className="layout-section-xl flex relative z-10 flex-col items-center justify-center h-full">
                  <h1 className={`heading-1 xl:heading-2 font-bold ${montserrat_font.className} text-white text-center`}>
                    PEOPLE. PLANET. PURPOSE.
                  </h1>
                  {/* <h1
                    className={`heading-2 font-semibold ${montserrat_font.className} text-center text-primary hero-slide-${index} ${index != 0 ? "-translate-y-1/2" : ""} block`}
                  >
                    {image.name}
                  </h1> */}
                  <h1 className={`text-xl xl:text-2xl mb-4 ${montserrat_font.className} text-center font-semibold text-primary`}>
                    Not just a slogan. A movement rooted in action.
                  </h1>
                  <div className="flex gap-8 xl:mt-8 mt-4">
                    <DonateNow type="primary" icon />
                    <Link href="/initiatives">
                    <Button type="primary" outline={true} className="hover:text-black hover:bg-primary">Our Initiatives</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hero-pagination !left-[unset] !right-2 !top-[unset] !bottom-3 absolute z-20 flex flex-col items-end gap-2"></div>
    </section>
  );
};

export default HeroBanner;
