// pages/projects.js
import Image from "next/image";
import Plantation from "../assets/plantation.png";
import Corporate from "../assets/corporate.png";
import Additional from "../assets/additional.png";

export default function Projects() {
  return (
    <main>
      <section className="flex flex-col items-center py-16">
        <div className="relative w-full  h-96  layout-section-xl">
          <Image
            src={Plantation}
            alt="Tree Plantation Projects"
            layout="fill"
            objectFit="cover"
            className=" shadow-lg px-5"
          />
        </div>

        <div className="relative -mt-20 w-full max-w-4xl bg-white shadow-xl border-8 border-primary-green px-8 py-10 z-10">
          <h2 className="text-4xl font-bold uppercase mb-6">
            Tree Plantation Projects
          </h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">
                Urban Afforestation Initiatives:{" "}
              </span>
              Large-scale afforestation in urban spaces to promote green cover
              and improve air quality.
            </p>
            <p>
              <span className="font-semibold">Agroforestry Programs: </span>
              Enhancing green corridors and providing sustainable agricultural
              solutions for farmers.
            </p>
            <p>
              <span className="font-semibold">Palm Tree Plantation: </span>
              Focusing on planting palm trees in various regions as they are
              known for their resilience and long-lasting ecological benefits.
              Palm trees also play a crucial role in stabilizing ecosystems,
              particularly in coastal areas.
            </p>
            <p>
              <span className="font-semibold">
                Special Day Tree Plantations:{" "}
              </span>
              Partnering with organizations for meaningful tree planting drives
              to celebrate corporate milestones and special occasions.
            </p>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center py-16">
        <div className="relative w-full  h-96  layout-section-xl">
          <Image
            src={Corporate}
            alt="Corporate Volunteering Activities"
            layout="fill"
            objectFit="cover"
            className=" shadow-lg px-5"
          />
        </div>

        <div className="relative -mt-20 w-full max-w-4xl bg-white shadow-xl border-8 border-primary-yellow px-8 py-10 z-10">
          <h2 className="text-4xl font-bold uppercase mb-6">
          Corporate Volunteering Activities          </h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">
              Tree Plantation Volunteering:{" "}
              </span>
              Corporate employees join hands to plant trees, contributing to sustainability efforts while fostering team-building.

            </p>
            <p>
              <span className="font-semibold">Seedball Making: </span>
              Engaging volunteers in creating seed balls to support reforestation projects, a hands-on activity that creates awareness and leaves a lasting impact.
            </p>
            <p>
              <span className="font-semibold">Waste Cleanup Drives: </span>
              Focus on water bodies and urban areas to reduce pollution, promote recycling, and enhance public awareness of environmental conservation.
            </p>
            <p>
              <span className="font-semibold">
              Environment Education Programs:{" "}
              </span>
              Workshops and programs for corporates to increase awareness about sustainable living, waste management, and energy conservation.
            </p>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center py-16">
        <div className="relative w-full  h-96  layout-section-xl">
          <Image
            src={Additional}
            alt="Additional Projects"
            layout="fill"
            objectFit="cover"
            className=" shadow-lg px-5"
          />
        </div>

        <div className="relative -mt-20 w-full max-w-4xl bg-white shadow-xl border-8 border-secondary-light-green px-8 py-10 z-10">
          <h2 className="text-4xl font-bold uppercase mb-6">
            Tree Plantation Projects
          </h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">
              Carbon-Neutrality Projects:{" "}
              </span>
              Helping individuals and businesses calculate their carbon footprints and providing opportunities to offset them through tree planting initiatives.
            </p>
            <p>
              <span className="font-semibold">Pond and Waterbody Restoration: </span>
              Reviving ponds and lakes to enhance biodiversity and improve community access to clean water.
            </p>
            <p>
              <span className="font-semibold">Wildlife Conservation: </span>
              Our wildlife conservation efforts aim to preserve local biodiversity, with a special focus on endangered species. These initiatives involve habitat restoration, conservation awareness programs, and the protection of critical wildlife corridors.

            </p>
            <p>
              <span className="font-semibold">
              Human-Elephant Conflict Mitigation:{" "}
              </span>
              Seerakku is actively engaged in projects to mitigate human-elephant conflict in areas where human habitation overlaps with elephant migration routes. We work closely with local communities to implement solutions like creating safe passageways for elephants and promoting sustainable agricultural practices to reduce conflict.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
