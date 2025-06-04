"use client"
import Button from "@/components/buttons/Button";
import Image from "next/image";
import { get_involved_image_1, partner, volunteer, donate } from "../assets";
import ImageTint from "@/components/ImageTint";
import { useDonateModal } from "@/components/modal/DonateModalProvider";
import ButtonLink from "@/components/buttons/ButtonLink";
import { BECOME_PARTNER_LINK, BECOME_VOLUNTEER_LINK } from "@/global";

const GetInvolved = () => {
  const { open } = useDonateModal();
  return (
    <section className="bg-primary bg-opacity-30">
      <div className="layout-section-lg pb-0 text-center">
        <h2 className="heading-2">Get Involved</h2>
        <p className="text-center mb-5">
          Together, let&apos;s take action and create a sustainable future for
          all. Choose your preferred way of getting involved and join Seerakku
          in making a lasting difference.
        </p>
      </div>
      <div className="layout-section-xl pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-full bg-primary text-white relative overflow-hidden aspect-square group">
            <Image
              src={get_involved_image_1}
              alt="Image 1"
              className="object-cover bg-center h-full w-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <ImageTint>
              <div className="flex items-end p-7 h-full">
                <div>
                  <h3 className="heading-3">Become A Volunteer</h3>
                  <p className="text-white font-normal mb-3">
                    Join our dedicated team of volunteers and actively participate in our initiatives.
                  </p>
                  <ButtonLink className="hover:scale-105 transition" type={"primary_green"} href={BECOME_VOLUNTEER_LINK}>Register Here</ButtonLink>
                </div>
              </div>
            </ImageTint>
          </div>

          <div className="w-full bg-primary-green text-white relative overflow-hidden aspect-square group">
            <Image
              src={donate}
              alt="Image 1"
              className="object-cover bg-center h-full w-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <ImageTint>
              <div className="flex items-end p-7 h-full">
                <div>
                  <h3 className="heading-3">Donate</h3>
                  <p className="text-white font-normal mb-3">
                    Support our organization financially by donating.
                  </p>
                  <Button onClick={open} className="hover:scale-105 transition" type="primary">Donate Now</Button>
                </div>
              </div>
            </ImageTint>
          </div>

          <div className="w-full bg-secondary-forest text-white relative overflow-hidden aspect-square group">
            <Image
              src={partner}
              alt="Image 1"
              className="object-cover bg-center h-full w-full transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <ImageTint>
              <div className="flex items-end p-7 h-full">
                <div>
                  <h3 className="heading-3">Become A Partner</h3>
                  <p className="text-white font-normal mb-3">
                    Collaboration is essential in driving sustainable change.
                  </p>
                  <ButtonLink className="hover:scale-105 transition" type="primary_green" href={BECOME_PARTNER_LINK}>Partnering with us</ButtonLink>
                </div>
              </div>
            </ImageTint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
