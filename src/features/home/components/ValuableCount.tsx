import Button from "@/components/buttons/Button";

import carbon from "../assets/carbon.png";
import tree from "../assets/tree.png";
import plastic from "../assets/plastic.png";
import water from "../assets/water.png";
import hours from "../assets/hours.png";
import Image from "next/image";

const ValuableCount = () => {
  return (
    <section className="layout-section-xl">
      <div className="flex flex-col xl:flex-row gap-6 items-center">
        <div className="w-full xl:w-1/3 text-center xl:text-left">
          <h2 className="heading-2">Valuable Count</h2>
          <p className="mb-5">
          At Seerakku, we’re committed to creating a positive, lasting change for our planet. Our ongoing efforts in sustainability, conservation, and community empowerment are making a significant difference. Here’s a snapshot of what we’ve achieved so far
          </p>
          {/* <Button type="primary">View More</Button> */}
        </div>
        <div className="w-full xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-shrink-0">
          <div className="odd:bg-primary-green even:bg-secondary-forest hover:scale-105 transition duration-150 p-5 text-center text-white flex flex-col justify-center items-center xl:aspect-square">
            <Image src={tree} alt="Trees Planted"></Image>
            <h4 className="text-white heading-1 mt-2 !text-80">400</h4>
            <p className="text-white">Trees Planted</p>
          </div>
          <div className="odd:bg-primary-green even:bg-secondary-forest hover:scale-105 transition duration-150 p-5 text-center text-white flex flex-col justify-center items-center xl:aspect-square">
            <Image src={carbon} alt="Carbon Offseted"></Image>

            <h4 className="text-white heading-1 mt-2 !text-80">8M+</h4>
            <p className="text-white">Carbon Offseted</p>
          </div>
          <div className="odd:bg-primary-green even:bg-secondary-forest hover:scale-105 transition duration-150 p-5 text-center text-white flex flex-col justify-center items-center xl:aspect-square">
            <Image src={tree} alt="Communities Empowered"></Image>

            <h4 className="text-white heading-1 mt-2 !text-80">400</h4>
            <p className="text-white">Communitites Empowered</p>
          </div>
          <div className="odd:bg-primary-green even:bg-secondary-forest hover:scale-105 transition duration-150 p-5 text-center text-white flex flex-col justify-center items-center xl:aspect-square">
            <Image src={hours} alt="Volunteering Hours"></Image>

            <h4 className="text-white heading-1 mt-2 !text-80">2190</h4>
            <p className="text-white">Total Volunteering Hours</p>
          </div>
          <div className="odd:bg-primary-green even:bg-secondary-forest hover:scale-105 transition duration-150 p-5 text-center text-white flex flex-col justify-center items-center xl:aspect-square">
            <Image src={water} alt="Water Conserved"></Image>

            <h4 className="text-white heading-1 mt-2 !text-80">1M</h4>
            <p className="text-white">Water Conserved</p>
          </div>
          <div className="odd:bg-primary-green even:bg-secondary-forest hover:scale-105 transition duration-150 p-5 text-center text-white flex flex-col justify-center items-center xl:aspect-square">
            <Image src={plastic} alt="Plastics Collected"></Image>

            <h4 className="text-white heading-1 mt-2 !text-80">2T</h4>
            <p className="text-white">Plastics Collected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuableCount;
