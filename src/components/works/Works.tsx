"use client";

import { works_1 } from "./assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { WorksItemType } from "./types/index";
import WorksItem from "./WorksItem";
import { Navigation } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "swiper/css";
import "swiper/css/navigation";

const works_list: WorksItemType[] = [
  {
    title:
      "NO POVERTY",
    desc: "We provide agroforestry opportunities for farmers to improve their livelihoods and promote sustainable land-use practices.",
    image: works_1,
  },
  {
    title:
      "CLEARN WATER & SANITATION",
    desc: "We work towards restoring water sources through reforestation and watershed management initiatives.",
    image: works_1,
  },
  {
    title:
      "ZERO HUNGER",
    desc: "Our afforestation initiatives provide food and habitat for wildlife, while our agroforestry programs promote sustainable farming practices and help increase crop yields.",
    image: works_1,
  },
  {
    title:
      "CLIMATE ACTION",
    desc: "Seerakku is committed to promoting coastal plantations and marine conservation initiatives to protect and preserve marine ecosystems.",
    image: works_1,
  },
  {
    title:
      "LIFE BELOW WATER",
    desc: "Seerakku is committed to promoting coastal plantations and marine conservation initiatives to protect and preserve marine ecosystems.",
    image: works_1,
  },
  {
    title:
      "Partnership for the Goals",
    desc: "We work with local communities, government bodies, and other organizations to achieve our sustainability goals and positively impact the environment and local communities in India.",
    image: works_1,
  },
];

function Works() {
  return (
    <section className="" id="ourworks">
      <div className="layout-section-lg pb-0 mb-10">
        <div className="text-center">
          <h2 className="heading-2">Our Works</h2>
          <p>
          Working towards the United Nations' Sustainable Development Goals, Seerakku focuses on the following areas
          </p>
        </div>
      </div>
      <div className="mb-20 relative">
        <div className="mx-4 xl:m-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
              },
              1024: {
                slidesPerView: 2.25,
              },
            }}
            centeredSlides={true}
            navigation={{
              nextEl: ".works-next-item",
              prevEl: ".works-prev-item",
              enabled: true,
            }}
            loop={true}
            watchOverflow={true}
            modules={[Navigation]}
            initialSlide={1}
            allowTouchMove={true}
          >
            {works_list.map((ele, index) => (
              <SwiperSlide key={index}>
                <WorksItem item={ele} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-between top-1/2 w-full absolute -translate-y-1/2 z-10">
          <button className="swiper-prev-btn works-prev-item bg-white shadow-md p-2 rounded-full">
            <ArrowBackIcon />
          </button>
          <button className="swiper-next-btn works-next-item bg-white shadow-md p-2 rounded-full">
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
