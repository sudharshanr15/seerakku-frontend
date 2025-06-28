"use client";
import Image, { StaticImageData } from 'next/image'
import beyond from '../assets/partners/beyond sustainability.svg'
import kauvery from '../assets/partners/kauvery.svg'
import Gro from '../assets/partners/Gro.png'
import * as partners from "../assets/partners_new"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import 'swiper/css/grid';
import 'swiper/css/bundle';
import Link from 'next/link'
import { useState } from 'react';
import Button from '@/components/buttons/Button';
import { ButtonType } from '@/components/buttons/type';

const partners_list: {
  name: string,
  image: StaticImageData
}[] = [
  {
    name: "Access Healthcare",
    image: partners.access_healthcare
  },
  {
    name: "Amazon",
    image: partners.amazon
  },
  {
    name: "Beyond Sustainability",
    image: partners.beyond_sustainability
  },
  {
    name: "BHEL",
    image: partners.bhel
  },
  {
    name: "Bhumi",
    image: partners.bhumi
  },
  {
    name: "BNI",
    image: partners.bni
  },
  {
    name: "CCAG",
    image: partners.ccag
  },
  {
    name: "DBS",
    image: partners.beyond_sustainability
  },
  {
    name: "Deloitte",
    image: partners.deloitte
  },
  {
    name: "Freshworks",
    image: partners.freshworks
  },
  {
    name: "Goodera",
    image: partners.goodera
  },
  {
    name: "Greater Chennai Corporation",
    image: partners.gcc
  },
  {
    name: "Green Tamilnadu",
    image: partners.green_tn
  },
  {
    name: "GRO Foundation",
    image: partners.gro_foundation
  },
  {
    name: "Grow Billion Trees",
    image: partners.grow_billion_trees
  },
  {
    name: "Grow Trees",
    image: partners.grow_trees
  },
  {
    name: "Kaleesuwari",
    image: partners.kaleesuwari
  },
  {
    name: "Kauvery Hospital",
    image: partners.kauvery_hospital
  },
  {
    name: "MGM Healthcare",
    image: partners.mgm_healthcare
  },
  {
    name: "Nirmaan Organization",
    image: partners.nirmaan_organisation
  },
  {
    name: "Rotary",
    image: partners.rotary
  },
  {
    name: "Ruva Foundation",
    image: partners.ruva_foundation
  },
  {
    name: "Saytrees",
    image: partners.saytrees
  },
  {
    name: "Sustainable Development Council",
    image: partners.sdc
  },
  {
    name: "The Executive Center",
    image: partners.the_executive_center
  },
  {
    name: "United Way of Chennai",
    image: partners.united_way_of_chennai
  },
  {
    name: "University of Madras",
    image: partners.university_of_madras
  },
  {
    name: "Wells Fargo",
    image: partners.wellsfargo
  }
]

const Partners = () => {
  const view_size = 8;
  const [end, setEnd] = useState(view_size);
  const [viewExist, setViewExist] = useState(true);

  const viewMore = () => {
    setEnd(prev => {
      const new_end = prev + view_size;

      if(partners_list.length <= new_end ){
        setViewExist(false)
      }

      return new_end;
    });
  }

  return (
    <section className="max-w-full layout-section-lg text-center">
      <h2 className="text-center heading-2">Our Partner</h2>

        <Swiper
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 3.5
          },
          1024: {
            slidesPerView: 5
          },
          1440: {
            slidesPerView: 6
          }
        }}
        slidesPerView={1.7}
        grid={{
          rows: 2
        }}
        autoplay={{
          delay: 1,
        }}
        speed={2000}
        loop={true}
        modules={[Grid, Autoplay]}
        className='swiper-wrapper_partners h-[220px]'
      >
        {
          partners_list.map((e, index) => (
            <SwiperSlide key={index}>
              <div className='text-center h-[100px] bg-neutral-200 p-4'>
                <Image className="max-w-[100px] md:max-w-[170px] object-contain h-full mx-auto" src={e.image} alt={e.name} />
                {/* <p>{index}</p> */}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      {/* { viewExist && <Button type="primary" className='mt-12' onClick={viewMore}>View More</Button>} */}
    </section>
  );
};

export default Partners;
