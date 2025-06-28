import DonateNow from "@/components/buttons/DonateNow";
import { donor_bg } from "../assets";
import Image from "next/image";
import ImageTint from "@/components/ImageTint";

function Donor() {
  return (
    <section className="layout-section-xl max-md:p-0">
      <div className="relative p-12 bg-[url(/assets/images/donor_bg.jpg)]">
        {/* <div className="absolute w-full h-full top-0 left-0 bg-red-100 z-0 overflow-hidden">
          <Image src={donor_bg} alt="Donor backgroud image" className="w-full" />
        </div> */}
        <ImageTint className="z-0">
        </ImageTint>
        <div className="lg:w-2/3 relative w-full h-full text-white">
            <h2 className="heading-2">Your Contribution Fuels Change</h2>
            <p className="mb-5 font-medium text-lg">
              Every rupee you donate helps us restore ecosystems, empower communities, and combat climate change. From planting trees to supporting underprivileged farmers, your generosity drives our mission forward.
            </p>
            <DonateNow type="white" icon />
        </div>
      </div>
    </section>
  );
}

export default Donor;
