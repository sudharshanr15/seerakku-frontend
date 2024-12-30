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
  p1h: string;
  p2h: string;
  p3h: string;
  p4h: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}[] = [
  {
    image: tree_planting,
    title: "Tree Planting",
     p1h : 'Urban Afforestation Initiatives:',
     p1 : "Large-scale afforestation in urban spaces to promote green cover and improve air quality.",
     p2h : "Agroforestry Programs:",
     p2: "Enhancing green corridors and providing sustainable agricultural solutions for farmers.",
     p3h : 'Palm Tree Plantation:',
     p3 : 'Focusing on planting palm trees in various regions as they are known for their resilience and long-lasting ecological benefits. Palm trees also play a crucial role in stabilizing ecosystems, particularly in coastal areas.',
     p4h : 'Special Day Tree Plantations: ',
     p4 : 'Partnering with organizations for meaningful tree planting drives to celebrate corporate milestones and special occasions.'

  },
  {
    image: water_restoration,
    title: "Corporate Volunteering Activities:",
     p1h : 'Tree Plantation Volunteering:',
     p1 : "Corporate employees join hands to plant trees, contributing to sustainability efforts while fostering team-building.",
     p2h : "Seedball Making:",
     p2: "Engaging volunteers in creating seed balls to support reforestation projects, a hands-on activity that creates awareness and leaves a lasting impact.",
     p3h : 'Plastic Cleanup Drives:',
     p3 : 'These drives focus on water bodies and urban areas to reduce pollution, promote recycling, and enhance public awareness of environmental conservation.',
     p4h : 'Environment Education Programs: ',
     p4 : 'Workshops and programs for corporates to increase awareness about sustainable living, waste management, and energy conservation.'

  },
  {
    image: afforestation,
    title: "Additional Projects",
     p1h : 'Carbon-Neutrality Projects: ',
     p1 : "Helping individuals and businesses calculate their carbon footprints and providing opportunities to offset them through tree planting initiatives.",
     p2h : "Pond and Waterbody Restoration: ",
     p2: "Reviving ponds and lakes to enhance biodiversity and improve community access to clean water.",
     p3h : 'Wildlife Conservation:',
     p3 : 'Our wildlife conservation efforts aim to preserve local biodiversity, with a special focus on endangered species. These initiatives involve habitat restoration, conservation awareness programs, and the protection of critical wildlife corridors.',
     p4h : 'Human-Elephant Conflict Mitigation: ',
     p4 : 'Seerakku is actively engaged in projects to mitigate human-elephant conflict in areas where human habitation overlaps with elephant migration routes. We work closely with local communities to implement solutions like creating safe passageways for elephants and promoting sustainable agricultural practices to reduce conflict.'

  },
  
];

function WhatWeDo() {
  return (
    <section className="layout-section-xl">
      <div className="max-w-screen-md mx-auto text-center mb-10">
        <h2 className="heading-2 text-center">What We Do</h2>
        <p>
        At Seerakku, we’ve initiated several impactful programs and initiatives to create a positive ecological footprint. For instance, Dinesh SP (Founder) and Mrs Janaganandhini Dinesh became the proud parents of the world's first carbon-neutral baby. They planted 6,000 trees during pregnancy to offset their child’s future carbon emissions. The United Nations has officially recognized our efforts, and our daughter now serves as the Young Green Ambassador for the Green Tamil Nadu Mission.
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
              <ul className=" list-disc">
              <li className=" my-2"><span className=" font-semibold">{ele.p1h}</span>{" "}{ele.p1}</li>
              <li className=" my-2"><span className=" font-semibold">{ele.p2h}</span>{" "}{ele.p2}</li>
              <li className=" my-2"><span className=" font-semibold">{ele.p3h}</span>{" "}{ele.p3}</li>
              <li className=" my-2"><span className=" font-semibold">{ele.p4h}</span>{" "}{ele.p4}</li>
              </ul>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
