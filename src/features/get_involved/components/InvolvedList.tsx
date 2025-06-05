import DonateNow from "@/components/buttons/DonateNow";
import ShadowContainer from "@/components/ShadowContainer";
import { ColorType } from "@/types/ColorType";
import Button from '@/components/buttons/Button'
import Image from "next/image";
import { involved_1, involved_2, involved_3 } from "../assets";
import ButtonLink from "@/components/buttons/ButtonLink";
import { BECOME_PARTNER_LINK, BECOME_VOLUNTEER_LINK } from "@/global";

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
                  <h2 className="heading-2">Be the Change You Want to See in the World</h2>
                  <p className="mb-4">
                    Join Seerakku’s mission to protect our environment and create a sustainable future! As a volunteer, you’ll be part of a community working toward impactful initiatives, including tree plantation, waterbody restoration, plastic collection drives, and eco-education programs.
                  </p>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Why Volunteer with Us?</p>
                    <ul className="list-inside list-disc">
                      <li key={"volunteer-list-1"}>
                        Make a tangible impact on the environment.
                      </li>
                      <li key={"volunteer-list-2"}>
                        Learn eco-friendly practices and sustainable solutions.
                      </li>
                      <li key={"volunteer-list-3"}>
                        Connect with like-minded individuals and organizations.
                      </li>
                    </ul>
                  </div>
                  <ButtonLink type="primary_green" href={BECOME_VOLUNTEER_LINK}>Become A Volunteer</ButtonLink>
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
                  <h2 className="heading-2">Your Contribution Fuels Change</h2>
                  <p className="mb-4">
                    Every rupee you donate helps us restore ecosystems, empower communities, and combat climate change. From planting trees to supporting underprivileged farmers, your generosity drives our mission forward.
                  </p>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Where Your Donations Go:</p>
                    <ul className="list-inside list-disc">
                      <li key={"donate-list-1"}>
                        Reforestation and afforestation projects.
                      </li>
                      <li key={"donate-list-2"}>
                        Agroforestry initiatives to uplift marginalized farmers.
                      </li>
                      <li key={"donate-list-3"}>
                        Waterbody restoration for cleaner, healthier ecosystems.
                      </li>
                      <li key={"donate-list-4"}>
                        Educational programs to spread environmental awareness.
                      </li>
                    </ul>
                  </div>
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
                  <h2 className="heading-2">Let’s Build a Sustainable Future Together</h2>
                  <p className="pb-4">
                    Partner with Seerakku to amplify your organization’s environmental impact. Collaborate on initiatives like corporate volunteering, tree plantation drives, and eco-education programs to demonstrate your commitment to sustainability.
                  </p>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Why Partner with Us?</p>
                    <ul className="list-inside list-disc">
                      <li key={"parter-list-1"}>
                        Enhance your CSR initiatives with impactful projects.
                      </li>
                      <li key={"parter-list-2"}>
                        Engage employees in meaningful volunteering activities.
                      </li>
                      <li key={"parter-list-3"}>
                        Showcase your organization’s dedication to environmental stewardship.
                      </li>
                    </ul>
                  </div>
                  <ButtonLink type="primary_green" href={BECOME_PARTNER_LINK}>Become A Partner</ButtonLink>
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
