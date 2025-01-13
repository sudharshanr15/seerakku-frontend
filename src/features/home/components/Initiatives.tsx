import {
  initiative_1,
  initiative_2,
  initiative_3,
  initiative_4,
  initiative_5,
  initiative_6,
} from "../assets";
import { InitiativesListType } from "../types";
import InitiativesItem from "./InitiativesItem";
import Button from "@/components/buttons/Button";
import Link from "next/link";

// const initiatives_list_1: InitiativesListType[] = [
//   {
//     title: "Community Engagement and Corporate Volunteering",
//     desc: "Foster community participation in conservation efforts.",
//     image: initiative_1,
//   },
//   {
//     title: "Reforestation and Afforestation Programs",
//     desc: "Increase green cover in urban and rural areas while enhancing biodiversity.",
//     image: initiative_2,
//   },
// ];

// const initiatives_list_2: InitiativesListType[] = [
//   {
//     title: "Eco-Education and Awareness",
//     desc: "Inspire a culture of environmental responsibility.",
//     image: initiative_3,
//   },
//   {
//     title: "Wildlife Conservation",
//     desc: "Protect and restore wildlife habitats. ",
//     image: initiative_5,
//   },
//   {
//     title: "Sustainable Waste Management",
//     desc: "Turn waste into a resource through eco-friendly solutions.",
//     image: initiative_4,
//   },
// ];

const initiatives_list: InitiativesListType[] = [
  {
    title: "Community Engagement and Corporate Volunteering",
    desc: "Foster community participation in conservation efforts.",
    image: initiative_1,
  },
  {
    title: "Eco-Education and Awareness",
    desc: "Inspire a culture of environmental responsibility.",
    image: initiative_3,
  },
  {
    title: "Wildlife Conservation",
    desc: "Protect and restore wildlife habitats. ",
    image: initiative_5,
  },
  {
    title: "Reforestation and Afforestation Programs",
    desc: "Increase green cover in urban and rural areas while enhancing biodiversity.",
    image: initiative_2,
  },
  {
    title: "Sustainable Waste Management",
    desc: "Turn waste into a resource through eco-friendly solutions.",
    image: initiative_4,
  },
  {
    title: "Urban Green Spaces Creation",
    desc: "Develop small green patches in urban areas to improve air quality and aesthetics.",
    image: initiative_6
  }
];

const Initiatives = () => {
  return (
    <section className="layout-section-xl">
      <div className="layout-section-lg p-0 text-center mb-10">
        <h2 className="heading-2">Our Initiatives</h2>
        <p className="text-center mb-5">
          At Seerakku, we are dedicated to creating a sustainable future through
          our various initiatives. Join us in making a positive impact and
          contributing to environmental conservation with the following
          programs:
        </p>
      </div>
      {/* <div className="flex flex-col md:flex-row xl:flex-row gap-6">
        <div className="w-full md:w-[49%] xl:w-1/3">
          <div className="flex flex-col gap-6 h-full">
            {initiatives_list_1.map((ele, index) => (
              <InitiativesItem item={ele} key={index} className="flex-grow" />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {initiatives_list_2.map((ele, index) => (
              <InitiativesItem
                item={ele}
                key={index}
                className={
                  initiatives_list_2.length == index + 1 && index % 2 == 0
                    ? "xl:last:col-span-2"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {initiatives_list.map((ele, ele_index) => {
            const item_length = initiatives_list.length;
            let span_length: string = "";
            if (item_length == ele_index + 1) {
              switch (ele_index % 3) {
                case 0:
                  span_length = "last:col-span-full";
                  break;
                case 1:
                  span_length = "last:sm:col-span-2";
                  break;
                case 2:
                  break;
              }
            }
            return (
              <div className={`w-full ${span_length}`} key={ele_index}>
                  <InitiativesItem item={ele} className="flex-grow" />
              </div>
            );
          })}
        </div>
      <div className=" flex justify-center mt-10">
        <Link href={"/initiatives"}>
          <Button type="primary">See More</Button>
        </Link>
      </div>
    </section>
  );
};

export default Initiatives;
