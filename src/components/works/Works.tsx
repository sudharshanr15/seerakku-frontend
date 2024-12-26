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
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et...",
    image: works_1,
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et...",
    image: works_1,
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et...",
    image: works_1,
  },
  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et...",
    image: works_1,
  },
];

function Works() {
  return (
    <section className="">
      <div className="layout-section-lg pb-0 mb-10">
        <div className="text-center">
          <h2 className="heading-2">Our Works</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti
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
                slidesPerView: 1.75,
              },
              1024: {
                slidesPerView: 2.75,
              },
            }}
            centeredSlides={true}
            navigation={{
              nextEl: ".works-next-item",
              prevEl: ".works-prev-item",
              enabled: true,
            }}
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
