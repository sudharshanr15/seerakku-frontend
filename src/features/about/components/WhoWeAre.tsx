import Image from "next/image";
import { who_we_are } from "../assets";

function WhoWeAre() {
  return (
    <section className="layout-section-xl pb-0">
      <div className="flex items-center">
        <div className="w-1/2 max-w-1/2 relative z-0">
          <Image src={who_we_are} className="w-full" alt="Who We Are" />
        </div>
        <div className="w-[60%] -ms-14 relative z-20">
          <div className="bg-white border border-secondary-silver-green relative">
            <div className="p-10">
              <h2 className="heading-2 mb-5">Who We Are</h2>
              <p className="text-xl">
                We are a non-profit organization committed to mitigating the
                effects of climate change through a range of initiatives in
                India.
              </p>
            </div>
            <div className="w-full h-full bg-secondary-silver-green absolute top-6 left-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
