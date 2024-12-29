"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "@/components/buttons/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const gallery_list: {
  id: number;
  name: string;
}[] = [
  {
    id: 1,
    name: "Nova",
  },
  {
    id: 2,
    name: "New Tree New Life",
  },
  {
    id: 3,
    name: "One Student One Life",
  },
  {
    id: 4,
    name: "Plant & Greet",
  },
  {
    id: 5,
    name: "Tree for Farmers",
  },
  {
    id: 6,
    name: "Tree for Elephants",
  },
  {
    id: 7,
    name: "Tree for Sparrows",
  },
];

function GalleryList() {
  const [currentGalleryItem] = useState(1);

  return (
    <section className="layout-section-xl">
      <div className="text-center">
        <h2 className="heading-2">Our Gallery</h2>
        <div className="mb-6 relative">
          <div className="mx-12">
            <Swiper
              spaceBetween={20}
              navigation={{
                enabled: true,
                nextEl: ".gallery-next-item",
                prevEl: ".gallery-prev-item",
              }}
              allowTouchMove={true}
              modules={[Navigation]}
              slidesPerView={"auto"}
            >
              {gallery_list.map((item, index) => (
                <SwiperSlide key={index} className="!w-max">
                  <Button
                    type={item.id == currentGalleryItem ? "primary" : "void"}
                    className=""
                  >
                    {item.name}
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute top-0 left-0 z-10">
            <button className="swiper-prev-btn gallery-prev-item bg-white shadow-md p-2 rounded-full">
              <ArrowBackIcon />
            </button>
          </div>
          <div className="absolute top-0 right-0 z-10">
            <button className="swiper-next-btn gallery-next-item bg-white shadow-md p-2 rounded-full">
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryList;
