"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Image from "next/image";
import { initiative_1, initiative_2, initiative_3, initiative_4, initiative_5, initiative_6, initiative_7, initiative_8 } from "../assets/initiatives";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import ShadowContainer from "@/components/ShadowContainer";
import ButtonLink from "@/components/buttons/ButtonLink";

const initiatives_list = [
  {
    title: "Tree Plantation & Forest Creation",
    desc: "We create micro-forests and green corridors using native species to fight climate change, cool cities, and restore lost ecosystems.",
    image: initiative_1,
  },
  {
    title: "Pollinator Protection (Bring Back Bees)",
    desc: "Through insect hotels and pollinator gardens, we create safe spaces for bees and butterflies — the silent heroes of biodiversity.",
    image: initiative_2,
  },
  {
    title: "Beach Cleanups & Plastic-Free Drives",
    desc: "We organize community cleanups to remove plastic from coastlines, canals, and streets, turning awareness into real impact.",
    image: initiative_3,
  },
  {
    title: "Sustainable Construction & Green Nursery",
    desc: "Using upcycled and eco-friendly materials, we build green nurseries and nature learning spaces that support long-term regeneration.",
    image: initiative_4,
  },
  {
    title: "Agroforestry & Farmer Support",
    desc: "We help farmers plant trees alongside crops, ensuring food, fodder, fuel, and climate resilience for future generations.",
    image: initiative_5,
  },
  {
    title: "Eco Education & Corporate Volunteering",
    desc: "From seed ball making to DIY insect hotels, we turn education into action through workshops, school programs, and CSR engagement.",
    image: initiative_6,
  },
  {
    title: "Waterbody Restoration",
    desc: "We revive ponds, lakes, and canal bunds — recharging groundwater, boosting biodiversity, and building water-secure communities.",
    image: initiative_7,
  },
  {
    title: "Carbon-Neutral Life Journeys (Like Aadavi)",
    desc: "We help individuals and families offset their carbon footprint through tree planting, inspired by DJ Aadavi, the world’s first carbon-neutral baby.",
    image: initiative_8,
  },
];

function Initiative_items({ item, order }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="even:bg-primary group even:bg-opacity-30">
      <div className="layout-section-xl">
        <div className="flex flex-col md:flex-row md:items-center group-even:md:flex-row-reverse gap-7">
          <div className="md:max-w-[50%]">
            <ShadowContainer theme="primary" shadowTo={order % 2 == 0 ? "left" : "right"}>
              <Image
                src={item.image}
                alt={item.title}
                className="w-full object-cover aspect-[59/48]"
              />
            </ShadowContainer>
          </div>
          <div className="even:order-0">
            <h2 className="heading-2 mb-5">{item.title}</h2>
            <p className="mb-5">{item.desc}</p>       
            <ButtonLink href="/gallery" type="primary">
              See our gallery
            </ButtonLink> 
          </div>
          {/* <div className="w-full mb-5">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover aspect-video"
            />
          </div>
          <h2 className="heading-2 mb-2">{item.title}</h2>
          <p>{item.desc}</p> */}
        </div>
      </div>
    </div>
  );
}

function Initiative() {
  return (
    <section data-aos="fade-right" className="w-full">
      {initiatives_list.map((item, index) => (
        <Initiative_items item={item} key={index} order={index} />
      ))}
    </section>
  );
}
export default Initiative;
