import Image, { StaticImageData } from "next/image";
import {
  afforestation,
  agroforestry,
  coastal_plantation,
  tree_planting,
  water_restoration,
} from "../assets";

const what_we_do: {
  image: StaticImageData;
  title: string;
  desc: string;
}[] = [
  {
    image: tree_planting,
    title: "Tree Planting",
    desc: "At Seerakku, we believe in the power of trees to combat climate change and restore ecosystems. We actively engage in tree planting initiatives, where we plant and nurture a variety of tree species. By doing so, we aim to increase green cover, improve air quality, and provide habitats for wildlife.",
  },
  {
    image: water_restoration,
    title: "Water Restoration",
    desc: "Water is a precious resource, and we work towards restoring and conserving it. We strive to protect and replenish water sources through reforestation and watershed management projects. Our efforts focus on preserving water quality, enhancing groundwater recharge, and ensuring sustainable water management practices.",
  },
  {
    image: afforestation,
    title: "Afforestation",
    desc: "Promoting afforestation is a key aspect of our work. We establish and maintain new forests and woodlands, contributing to the conservation of biodiversity and the protection of natural habitats. Afforestation not only sequesters carbon dioxide but also provides numerous ecological, economic, and social benefits.",
  },
  {
    image: coastal_plantation,
    title: "Coastal Plantation",
    desc: "Protecting our coastlines and marine ecosystems is crucial for a sustainable future. Seerakku actively engages in coastal zplantation initiatives, where we plant mangroves, dune vegetation, and other coastal plants. These plantations help prevent coastal erosion, support marine biodiversity, and act as natural buffers against natural disasters.",
  },
  {
    image: agroforestry,
    title: "Agroforsetry",
    desc: "We promote agroforestry as a sustainable farming practice integrating trees with agriculture. By combining tree planting with crop cultivation, we help farmers improve their livelihoods, enhance soil health, conserve water, and diversify their income sources. Agroforestry contributes to food security, climate resilience, and sustainable land use.",
  },
];

function WhatWeDo() {
  return (
    <section className="layout-section-xl">
      <div className="max-w-screen-md mx-auto text-center mb-10">
        <h2 className="heading-2 text-center">What We Do</h2>
        <p>
          {"Seerakku's"} initiatives focus on tree planting, water restoration,
          afforestation, coastal plantation, and agroforestry,working towards
          the
          {"UN's"} Sustainable Development Goals. Through our efforts, we strive
          to create a sustainable future for all and mitigate the effects of
          climate change.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {what_we_do.map((ele, index) => (
          <div className="bg-primary-green bg-opacity-20" key={index}>
            <div className="w-full">
              <Image
                alt={`${ele.title} Image`}
                src={ele.image}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-7">
              <h3 className="heading-3">{ele.title}</h3>
              <p>{ele.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
