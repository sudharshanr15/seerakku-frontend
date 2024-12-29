import Button from "@/components/buttons/Button";
import DonateNow from "@/components/buttons/DonateNow";
import Image from "next/image";
import { hero_image } from "../assets";

const HeroBanner = () => {
  return (
    <section className="relative top-0 left-0 w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={hero_image}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gradient-to-t absolute top-0 left-0 w-full h-full from-transparent from-5% to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="layout-section-xl flex flex-col items-center justify-center h-full">
          <h1 className="heading-1 text-white text-center">
            JOIN THE CHANGE, ACT FOR THE PLANET
            <br />
            <span className="text-primary">PLANTING TREES</span>
          </h1>
          <div className="flex gap-8 xl:mt-8">
            <DonateNow type="primary" icon />
            <Button type="primary_green">See Our Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
