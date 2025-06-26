import Image from "next/image";
import { who_we_are } from "../assets";
import DonateNow from "@/components/buttons/DonateNow";

function WhoWeAre() {
  return (
    <section className="layout-section-xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 max-w-1/2 relative z-0">
          <Image src={who_we_are} className="w-full" alt="Who We Are" />
        </div>
        <div className="w-full md:w-[60%] md:-ms-14 relative z-20">
          <div className="bg-white border border-primary relative">
            <div className="p-10">
              <h2 className="heading-2">Who We Are</h2>
              <p className="text-xl mb-5">
                Seerakku is a registered environmental trust driving grassroots climate action across India.
                <br />
                <br />
                We plant trees, revive waterbodies, protect pollinators, and inspire people to act, not just care.
                <br />
                <br />
                Trust Reg. No: BK 4/322/2023
                <br />
                <br />
                Since: 27 April 2023
              </p>
              <DonateNow type="primary" icon />
            </div>
            <div className="sm:w-full w-[270px] sm:h-full h-[445px] bg-primary absolute top-6 left-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
