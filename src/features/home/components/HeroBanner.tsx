import Button from "@/components/buttons/Button";
import DonateNow from "@/components/buttons/DonateNow";
import { ButtonType } from "@/components/buttons/type";

const HeroBanner = () => {
  return (
    <section className="relative top-0 left-0 w-full h-screen bg-black">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="uppercase text-white text-center title font-normal text-7xl leading-[80px]">
          JOIN THE CHANGE, ACT FOR THE PLANET
          <br />
          <span className="text-primary">PLANTING TREES</span>
        </h1>
        <div className="flex gap-8 mt-8">
          <DonateNow type={ButtonType.primary} />
          <Button type={ButtonType.secondary_silver_green}>
            See Our Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
