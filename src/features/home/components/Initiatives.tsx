import {
  initiative_1,
  initiative_2,
  initiative_3,
  initiative_4,
  initiative_5,
  initiative_6,
  initiative_7,
  initiative_8
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
    title: "Tree Plantation & Forest Creation",
    desc: undefined,
    image: initiative_1,
  },
  {
    title: "Pollinator Protection (Bring Back Bees)",
    desc: undefined,
    image: initiative_2,
  },
  {
    title: "Beach Cleanups & Plastic-Free Drives",
    desc: undefined,
    image: initiative_3,
  },
  {
    title: "Sustainable Construction & Green Nursery",
    desc: undefined,
    image: initiative_4,
  },
  {
    title: "Agroforestry & Farmer Support",
    desc: undefined,
    image: initiative_5,
  },
  {
    title: "Eco Education & Corporate Volunteering",
    desc: undefined,
    image: initiative_6
  },
  {
    title: "Carbon-Neutral Life Journeys (Like Aadavi)",
    desc: undefined,
    image: initiative_8
  },
  {
    title: "Waterbody Restoration",
    desc: undefined,
    image: initiative_7
  },
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {initiatives_list.map((ele, ele_index) => (
              <div className={`w-full`} key={ele_index}>
                  <InitiativesItem item={ele} className="flex-grow" />
              </div>
            )
          )}
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
