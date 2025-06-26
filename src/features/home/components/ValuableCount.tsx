import Button from "@/components/buttons/Button";

import carbon from "../assets/carbon.svg";
import tree from "../assets/tree.svg";
import plastic from "../assets/plastic.svg";
import water from "../assets/water.svg";
import hours from "../assets/hours.svg";
import Image, { StaticImageData } from "next/image";

const valuable_count: {
  icon: StaticImageData,
  count: string,
  title: string
}[] = [
  {
    icon: tree,
    count: "4,00,000",
    title: "Trees Planted"
  },
  {
    icon: carbon,
    count: "20",
    title: "Urban Dense Forests Created"
  },
  {
    icon: tree,
    count: "400",
    title: "Farmer Communities Empowered"
  },
  {
    icon: hours,
    count: "2500+",
    title: "Volunteering Hours"
  },
  {
    icon: water,
    count: "1M",
    title: "Litres Water Stored",
  },
  {
    icon: plastic,
    count: "5,000kg",
    title: "Plastics Recycled"
  }
]

const ValuableCount = () => {
  return (
    <section className="layout-section-xl">
      <div className="flex flex-col xl:flex-row gap-6 items-center">
        <div className="w-full xl:w-1/3 text-center xl:text-left">
          <h2 className="heading-2">Our Impact</h2>
          <p className="mb-5">
          At Seerakku, we’re committed to creating a positive, lasting change for our planet. Our ongoing efforts in sustainability, conservation, and community empowerment are making a significant difference. Here’s a snapshot of what we’ve achieved so far
          </p>
          {/* <Button type="primary">View More</Button> */}
        </div>
        <div className="w-full xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-shrink-0">
          {
            valuable_count.map((item, index) => (
              <div key={index} className="odd:bg-opacity-50 bg-primary transition duration-150 p-5 text-center flex flex-col justify-center items-center xl:aspect-square">
                <Image src={item.icon} alt="Plastics Collected"></Image>

                <h4 className="heading-1 mt-2">{item.count}</h4>
                <p className="">{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ValuableCount;
