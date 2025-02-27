"use client"
import {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Image, { StaticImageData } from "next/image";
import { climate, clean, lifebelowwater, image_4, image_5 } from "../assets";

type FocusListType = {
  title: string;
  desc: string;
  image: StaticImageData;
};

const focus_list: FocusListType[] = [
  {
    title: "No Poverty",
    desc: "We provide agroforestry opportunities for farmers to improve their livelihoods and promote sustainable land use practices.",
    image: image_4,
  },
  {
    title: "Clean Water & Sanitation",
    desc: "We work towards restoring water sources through reforestation and watershed management initiatives.",
    image: clean,
  },
  {
    title: "Zero Hunger",
    desc: "Our afforestation initiatives provide food and habitat for wildlife, while our agroforestry programs promote sustainable farming practices and help increase crop yields.",
    image: image_5,
  },
  {
    title: "Climate Action",
    desc: "Seerakku primarily focuses on climate action. We plant trees, promote sustainable practices, and engage in coastal plantations to reduce carbon footprint and offset emissions.",
    image: climate,
  },
  {
    title: "Life Below Water",
    desc: "Seerakku is committed to promoting coastal plantation and marine conservation initiatives to protect and preserve marine ecosystems.",
    image: lifebelowwater,
  },
  {
    title: "Partnership for the Goals",
    desc: "We work with local communities, government bodies, and other organizations to achieve our sustainability goals and positively impact the environment and local communities in India.",
    image: image_5,
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
          className="w-full object-contain"
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
