"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "@/components/buttons/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7 } from "./assets";
import Image, { StaticImageData } from "next/image";

const gallery_list: {
  id: number;
  name: string;
}[] = [
  { id: 1, name: "Nova" },
  { id: 2, name: "New Tree New Life" },
  { id: 3, name: "One Student One Life" },
  { id: 4, name: "Plant & Greet" },
  { id: 5, name: "Tree for Farmers" },
  { id: 6, name: "Tree for Elephants" },
  { id: 7, name: "Tree for Sparrows" },
];

const gallery_images: {
  [key: string]: StaticImageData[];
} = {
  Nova: [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
  "New Tree New Life": [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
  "One Student One Life": [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
  "Plant & Greet": [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
  "Tree for Farmers": [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
  "Tree for Elephants": [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
  "Tree for Sparrows": [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5],
};

function GalleryList() {
  const [currentGalleryItem, setCurrentGalleryItem] = useState("Nova");
  const [dynamicImage, setDynamicImage] = useState<StaticImageData>(gallery_5);

  useEffect(() => {
    const images = [gallery_5, gallery_6, gallery_7]; 
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; 
      setDynamicImage(images[index]);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

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
                    type={item.name == currentGalleryItem ? "primary" : "void"}
                    className=""
                    onClick={() => {
                      setCurrentGalleryItem(item.name);
                    }}
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
        {Object.keys(gallery_images).map((item, index) => (
          <div
            key={index}
            data-gallery-item={item}
            className={`my-5 ${currentGalleryItem == item ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {gallery_images[item].map((image, image_index) => {
                const item_length = gallery_images[item].length;
                let span_length: string = "";
                if (item_length == image_index + 1) {
                  switch (image_index % 3) {
                    case 0:
                      span_length = "last:col-span-full";
                      break;
                    case 1:
                      span_length = "last:sm:col-span-2";
                      break;
                    case 2:
                      break;
                  }
                }
                return (
                  <div className={`w-full ${span_length}`} key={image_index}>
                    <Image
                      src={image === gallery_5 ? dynamicImage : image}
                      className="w-full h-full object-cover"
                      alt="Gallery Image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryList;
