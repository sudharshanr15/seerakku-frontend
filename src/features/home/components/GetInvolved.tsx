import Button from "@/components/buttons/Button";
import { ButtonType } from "@/components/buttons/type";
import Image from "next/image";
import { get_involved_image_1 } from "../assets";
import ImageTint from "@/components/ImageTint";

const GetInvolved = () => {
  return (
    <section className="bg-primary bg-opacity-30">
      <div className="py-20">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="font-normal text-5xl uppercase text-center mb-5">
            Get Involved
          </h2>
          <p className="text-center font-light mb-5">
            Together, let&apos;s take action and create a sustainable future for
            all. Choose your preferred way of getting involved and join Seerakku
            in making a lasting difference.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-5">
            <div className="w-full bg-primary text-white relative overflow-hidden aspect-square max-w-[413px]">
              <Image
                src={get_involved_image_1}
                alt="Image 1"
                className="object-cover bg-center h-full"
              />
              <ImageTint>
                <div className="flex items-end p-7 h-full">
                  <div>
                    <h1 className="text-white uppercase text-4xl mb-3">
                      Become A Volunteer
                    </h1>
                    <p className="text-white font-normal mb-3">
                      Join our dedicated team of volunteers and actively
                      participate in our initiatives.
                    </p>
                    <Button type={ButtonType.secondary_silver_green}>
                      Register Here
                    </Button>
                  </div>
                </div>
              </ImageTint>
            </div>
            <div className="w-full bg-secondary-silver-green text-white relative overflow-hidden aspect-square max-w-[413px]">
              <Image
                src={get_involved_image_1}
                alt="Image 1"
                className="object-cover bg-center h-full"
              />
              <ImageTint>
                <div className="flex items-end p-7 h-full">
                  <div>
                    <h1 className="text-white uppercase text-4xl mb-3">
                      Become A Volunteer
                    </h1>
                    <p className="text-white font-normal mb-3">
                      Join our dedicated team of volunteers and actively
                      participate in our initiatives.
                    </p>
                    <Button type={ButtonType.primary}>Register Here</Button>
                  </div>
                </div>
              </ImageTint>
            </div>
            <div className="w-full bg-secondary-forest text-white relative overflow-hidden aspect-square max-w-[413px]">
              <Image
                src={get_involved_image_1}
                alt="Image 1"
                className="object-cover bg-center h-full"
              />
              <ImageTint>
                <div className="flex items-end p-7 h-full">
                  <div>
                    <h1 className="text-white uppercase text-4xl mb-3">
                      Become A Volunteer
                    </h1>
                    <p className="text-white font-normal mb-3">
                      Join our dedicated team of volunteers and actively
                      participate in our initiatives.
                    </p>
                    <Button type={ButtonType.primary}>Register Here</Button>
                  </div>
                </div>
              </ImageTint>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;