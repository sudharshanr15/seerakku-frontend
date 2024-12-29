import Button from "@/components/buttons/Button";
import Image from "next/image";
import { get_involved_image_1 } from "../assets";
import ImageTint from "@/components/ImageTint";

const GetInvolved = () => {
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
          {Array(3)
            .fill(0)
            .map((ele, index) => (
              <div
                className="w-full bg-primary text-white relative overflow-hidden aspect-square"
                key={index}
              >
                <Image
                  src={get_involved_image_1}
                  alt="Image 1"
                  className="object-cover bg-center h-full w-full"
                />
                <ImageTint>
                  <div className="flex items-end p-7 h-full">
                    <div>
                      <h3 className="heading-3">Become A Volunteer</h3>
                      <p className="text-white font-normal mb-3">
                        Join our dedicated team of volunteers and actively
                        participate in our initiatives.
                      </p>
                      <Button type="primary_green">Register Here</Button>
                    </div>
                  </div>
                </ImageTint>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
