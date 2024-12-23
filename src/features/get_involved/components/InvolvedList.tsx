import DonateNow from "@/components/buttons/DonateNow";
import { ButtonType } from "@/components/buttons/type";
import ShadowContainer from "@/components/ShadowContainer";
import { ColorType } from "@/types/ColorType";
import Image, { StaticImageData } from "next/image";
import { involved_1, involved_2, involved_3 } from "../assets";

const involved_list: {
  title: string;
  desc: string[];
  image: StaticImageData;
}[] = [
  {
    title: "Become A Volunteer",
    desc: [
      "Join our dedicated team of volunteers and actively participate in our initiatives.",
      "Whether it's tree planting, water restoration, coastal plantation, or agroforestry, your time and effort can make a significant difference.",
      "As a volunteer, you'll have the opportunity to connect with nature, learn new skills, and contribute directly to the well-being of our planet.",
    ],
    image: involved_1,
  },
  {
    title: "Become A Donor",
    desc: [
      "Support our organization financially by making a donation.",
      "Your contribution, no matter the size, directly funds our initiatives and helps us implement projects that promote sustainability, biodiversity, and environmental conservation.",
      "Your generosity enables us to continue our important work and create a positive impact on the planet.",
    ],
    image: involved_2,
  },
  {
    title: "Become A Partner",
    desc: [
      "Collaboration is essential in driving sustainable change. If you represent an organization, institution, or community group that shares our vision, we invite you to become a partner.",
      "By working together, we can leverage our collective resources, knowledge, and networks to implement impactful projects and create a greener and healthier future.",
    ],
    image: involved_3,
  },
];

function InvolvedList() {
  return (
    <section className="layout-section-xl">
      {involved_list.map((item, index) => (
        <div className="mb-16 group relative" key={index}>
          <div className="flex items-center">
            <div className="max-w-lg z-0 group-even:order-2">
              <Image
                src={item.image}
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div className="w-2/3 z-10 group-even:order-1">
              <div className="relative group-odd:right-14 group-even:-right-14 top-0 w-full">
                <ShadowContainer
                  shadowTo={index % 2 == 0 ? "right" : "left"}
                  theme={
                    index % 2 == 0 ? ColorType.primary_green : ColorType.primary
                  }
                >
                  <h2 className="heading-2">{item.title}</h2>
                  {item.desc.map((text, index) => (
                    <p className="pb-4" key={index}>
                      {text}
                    </p>
                  ))}
                  <DonateNow
                    type={
                      index % 2 == 0
                        ? ButtonType.primary_green
                        : ButtonType.primary
                    }
                  />
                </ShadowContainer>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default InvolvedList;
