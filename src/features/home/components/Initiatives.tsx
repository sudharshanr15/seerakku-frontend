import {
  initiative_1,
  initiative_2,
  initiative_3,
  initiative_4,
  initiative_5,
} from "../assets";
import { InitiativesListType } from "../types";
import InitiativesItem from "./InitiativesItem";

const initiatives_list_1: InitiativesListType[] = [
  {
    title: "NOVA",
    desc: "NOVA, is our prime iniative that ensures that every newborn starts life with a carbon-neareasutral footprint. ",
    image: initiative_1,
  },
  {
    title: "NEW TREE FOR NEW LIFE",
    desc: "In partnership with hospitals, we plant a tree to honor each newborn, symbolizing growth and vitality.",
    image: initiative_2,
  },
];

const initiatives_list_2: InitiativesListType[] = [
  {
    title: "RENTAL FREE AGRO MACHINE",
    desc: "Our Rental Free Agro Machine program empowers farmers by providing access to agricultural machinery at no cost.",
    image: initiative_3,
  },
  {
    title: "WALK FOR PLASTIC",
    desc: "We organize community walks to collect plastic waste and promote recycling. ",
    image: initiative_5,
  },
  {
    title: "TREE FOR FARMERS",
    desc: "Our Trees for Farmers initiative collaborates with local farmers to integrate trees into their agricultural practices.",
    image: initiative_4,
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
      <div className="flex flex-col md:flex-row xl:flex-row gap-6">
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
              // <div
              //   className={`relative ${initiatives_list_2.length == index + 1 && index % 2 == 0 ? "last:col-span-2" : ""}`}
              //   key={index}
              // >
              //   <div className="w-full">
              //     <Image
              //       src={ele.image}
              //       alt="Get Involved"
              //       className="w-full object-contain"
              //     />
              //   </div>
              //   <ImageTint>
              //     <div className="flex items-end p-7 h-full">
              //       <div className="text-white">
              //         <h3 className="heading-3">{ele.title}</h3>
              //         <p>{ele.desc}</p>
              //       </div>
              //     </div>
              //   </ImageTint>
              // </div>
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
      </div>
      {/* <div className="grid grid-cols-3 gap-6">
        {initiatives_list.map((ele, index) => {
          const length = initiatives_list.length;
          let col_span;
          if (length == index + 1) {
            switch (index % 3) {
              case 0:
                col_span = "last:col-span-3";
                break;
              case 1:
                col_span = "last:col-span-2";
                break;
              case 2:
                break;
            }
          }
          return (
            <div className={`relative ${col_span}`} key={index}>
              <div className="w-full h-full">
                <Image
                  src={ele.image}
                  alt="Get Involved"
                  className="w-full h-full object-cover"
                />
              </div>
              <ImageTint>
                <div className="flex items-end p-7 h-full">
                  <div className="text-white">
                    <h3 className="heading-3">{ele.title}</h3>
                    <p>{ele.desc}</p>
                  </div>
                </div>
              </ImageTint>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Initiatives;
