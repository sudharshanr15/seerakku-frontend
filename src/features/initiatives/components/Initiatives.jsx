"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Image from "next/image";
import nova from "@/features/initiatives/assets/nova.png";
import elephant from "@/features/initiatives/assets/elephant.png";
import farmers from "@/features/initiatives/assets/farmers.png";
import newImage from "@/features/initiatives/assets/new.png";
import one from "@/features/initiatives/assets/one.png";
import plant from "@/features/initiatives/assets/plant.png";
import sparrow from "@/features/initiatives/assets/sparrow.png";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const initiatives_list = [
  {
    title: "NOVA",
    desc: "NOVA, is our prime iniative that ensures that every newborn starts life with a carbon-neutral footprint. For each child born, we plant trees and establish food forests, offsetting the carbon emissions of their lifetime. This program not only celebrates new life but also contributes to a greener planet, ensuring a sustainable and healthy future for the next generation.",
    image: nova,
  },
  {
    title: "NEW TREE FOR NEW LIFE",
    desc: "Celebrate the miracle of life with our 'New Tree, For New Life' initiative. In partnership with hospitals, we plant a tree to honor each newborn, symbolizing growth and vitality. This act of planting creates a legacy of sustainability and contributes to global reforestation efforts. Join us in welcoming new lives while also fostering a healthier environment",
    image: newImage,
  },
  {
    title: "RENTAL FREE AGRO MACHINE",
    desc: "Our 'Rental Free Agro Machine' program empowers farmers by providing access to agricultural machinery at no cost. By supporting local farmers with the tools they need we promote sustainable farming practices, and improve livelihoods. This initiative helps build a stronger agricultural community and economic prosperity.",
    image: one,
  },
  {
    title: "Plastic Pollution Mitigation",
    desc: "Join us in our 'Walk for Plastic' initiative, where we organize community walks to collect plastic waste and promote recycling. This aims to raise awareness about the impact of plastic pollution. By coming together to reduce plastic waste, we contribute to a cleaner, healthier planet and also a sense of community responsibility.",
    image: plant,
  },
  {
    title: "Agroforestry for Sustainable Livelihoods",
    desc: "Our 'Trees for Farmers' initiative collaborates with local farmers to integrate trees into their agricultural practices. By establishing agroforestry systems, we help improve soil health, increase biodiversity, and enhance crop yields. This program supports farmers' livelihoods and contributes to environmental conservation. Together, we work towards a future of ecological balance.",
    image: farmers,
  },
  {
    title: "FOREST BATHING",
    desc: "Experience the rejuvenating power of nature with our 'Forest Bathing' initiative. We encourage people to immerse themselves in the tranquility of forests, promoting mental and physical well-being. This practice not only enhances individual health but also fosters a deeper connection with the nature. By embracing forest bathing, we nurture our minds and bodies while appreciating the beauty of our forests.",
    image: sparrow,
  },
  {
    title: "Waterbody Restoration and Conservation",
    desc: "Our 'Revive Blue' program is dedicated to restoring and protecting our water bodies. Through clean-up drives and conservation efforts, we aim to rejuvenate water bodies. This initiative enhances water quality, supports aquatic life, and ensures that future generations can enjoy clean and healthy water. Join us in our mission to revive and preserve our precious blue resources.",
    image: elephant,
  },
];

function Initiative_items({ item }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <div className="w-full mb-5">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-96 object-cover"
        />
      </div>
      <h2 className="heading-2 mb-2">{item.title}</h2>
      <p>{item.desc}</p>
    </div>
  );
}

function Initiative() {
  return (
    <section data-aos="fade-right" className="layout-section-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
        {initiatives_list.map((item, index) => (
          <Initiative_items item={item} key={index} />
        ))}
      </div>
    </section>
  );
}
export default Initiative;
