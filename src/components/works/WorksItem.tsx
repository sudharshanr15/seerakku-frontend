import ImageTint from "@/components/ImageTint";
import Image from "next/image";
import { WorksItemType } from "./types/index";

function WorksItem({ item }: { item: WorksItemType }) {
  return (
    <div className="relative">
      <ImageTint className="-z-10"></ImageTint>
      <div className="absolute top-0 left-0 -z-20 w-full h-full">
        <Image
          src={item.image}
          alt="Work Image 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full flex items-end aspect-video">
        <div className="text-white p-7">
          <h2 className="heading-3 text-white">{item.title}</h2>
          <p className="text-white">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WorksItem;
