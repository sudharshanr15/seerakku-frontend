"use client"
import {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Image, { StaticImageData } from "next/image";
import { image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11 } from "../assets";

type FocusListType = {
  title: string;
  desc: string;
  image: StaticImageData;
};

const focus_list: FocusListType[] = [
  {
    title: "SDG 2 – Zero Hunger",
    desc: "We support farmers through agroforestry, creating food-secure, climate-resilient livelihoods.",
    image: image_1,
  },
  {
    title: "SDG 4 – Quality Education",
    desc: "We run eco-education programs in schools and workplaces, turning awareness into action.",
    image: image_2,
  },
  {
    title: "SDG 6 – Clean Water and Sanitation",
    desc: "We restore ponds and canal bunds to recharge groundwater and ensure water access for all.",
    image: image_3,
  },
  {
    title: "SDG 8 – Decent Work and Economic Growth",
    desc: "We create green jobs through nurseries, tree planting, waste upcycling, and community forestry.",
    image: image_4,
  },
  {
    title: "SDG 9 – Industry, Innovation, and Infrastructure",
    desc: "We use recycled materials to build sustainable infrastructure like green nurseries and nature classrooms.",
    image: image_5,
  },
  {
    title: "SDG 11 – Sustainable Cities and Communities",
    desc: "We green urban zones with native trees, improve air quality, and restore public spaces.",
    image: image_6,
  },
  {
    title: "SDG 12 – Responsible Consumption and Production",
    desc: "We turn waste into a resource — from plastic-free drives to upcycled seedling bags and DIY kits.",
    image: image_7,
  },
  {
    title: "SDG 13 – Climate Action",
    desc: "We plant trees, offset carbon, and inspire climate-conscious citizens from birth (like Aadavi)",
    image: image_8,
  },
  {
    title: "SDG 14 – Life Below Water",
    desc: "Our beach and canal cleanups prevent plastic from entering the oceans, protecting marine life.",
    image: image_9,
  },
  {
    title: "SDG 15 – Life on Land",
    desc: "We revive biodiversity through native plantations, pollinator habitats, and forest creation.",
    image: image_10,
  },
  {
    title: "SDG 17 – Partnerships for the Goals",
    desc: "We collaborate with corporations, schools, NGOs, and the government to scale environmental impact.",
    image: image_11,
  },
];

function FocusItem({ item }: { item: FocusListType }) {
  useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

  return (
    <div className="">
      <div className="w-full mb-5">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full object-cover aspect-video"
        />
      </div>
      <h2 className="heading-2 mb-2">{item.title}</h2>
      <p>{item.desc}</p>
    </div>
  );
}

function FocusList() {
  return (
    <section data-aos="fade-right" className="layout-section-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
        {focus_list.map((item, index) => (
          <FocusItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default FocusList;
