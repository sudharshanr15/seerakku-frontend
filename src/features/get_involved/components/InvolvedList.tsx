import DonateNow from "@/components/buttons/DonateNow";
import ShadowContainer from "@/components/ShadowContainer";
import { ColorType } from "@/types/ColorType";
import Button from '@/components/buttons/Button'
import Image from "next/image";
import { involved_1, involved_2, involved_3 } from "../assets";

function InvolvedList() {
  return (
    <section className="layout-section-xl">
      <div className="mb-16 group relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:max-w-lg w-full z-0">
            <Image
              src={involved_1}
              alt="Become A Volunteer"
              className="w-full max-md:aspect-video object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 z-10">
            <div className="relative md:right-14 top-0 w-full">
              <ShadowContainer shadowTo="right" theme={ColorType.primary_green}>
                <div className="p-10">
                  <h2 className="heading-2">Become A Volunteer</h2>
                  <p className="pb-4">
                    Join our dedicated team of volunteers and actively
                    participate in our initiatives.
                  </p>
                  <p className="pb-4">
                    Whether it's tree planting, water restoration, coastal
                    plantation, or agroforestry, your time and effort can make a
                    significant difference.
                  </p>
                  <p className="pb-4">
                    As a volunteer, you'll have the opportunity to connect with
                    nature, learn new skills, and contribute directly to the
                    well-being of our planet.
                  </p>
                  <Button type="primary_green">Become A Volunteer</Button>
                </div>
              </ShadowContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 group relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:max-w-lg w-full z-0 md:order-2">
            <Image
              src={involved_2}
              alt="Become A Donor"
              className="w-full max-md:aspect-video object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 z-10 md:order-1">
            <div className="relative md:-right-14 top-0 w-full">
              <ShadowContainer shadowTo="left" theme={ColorType.primary}>
                <div className="p-10">
                  <h2 className="heading-2">Become A Donor</h2>
                  <p className="pb-4">
                    Support our organization financially by making a donation.
                  </p>
                  <p className="pb-4">
                    Your contribution, no matter the size, directly funds our
                    initiatives and helps us implement projects that promote
                    sustainability, biodiversity, and environmental
                    conservation.
                  </p>
                  <p className="pb-4">
                    Your generosity enables us to continue our important work
                    and create a positive impact on the planet.
                  </p>
                  <DonateNow type="primary" />
                </div>
              </ShadowContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 group relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:max-w-lg w-full z-0">
            <Image
              src={involved_3}
              alt="Become A Partner"
              className="w-full max-md:aspect-video object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 z-10">
            <div className="relative md:right-14 top-0 w-full">
              <ShadowContainer shadowTo="right" theme={ColorType.primary_green}>
                <div className="p-10">
                  <h2 className="heading-2">Become A Partner</h2>
                  <p className="pb-4">
                    Collaboration is essential in driving sustainable change. If
                    you represent an organization, institution, or community
                    group that shares our vision, we invite you to become a
                    partner.
                  </p>
                  <p className="pb-4">
                    By working together, we can leverage our collective
                    resources, knowledge, and networks to implement impactful
                    projects and create a greener and healthier future.
                  </p>
                  <Button type="primary_green">Become A Partner</Button>

                </div>
              </ShadowContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvolvedList;
