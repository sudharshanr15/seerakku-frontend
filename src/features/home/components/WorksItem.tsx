import ImageTint from "@/components/ImageTint";
import Image from "next/image";
import { WorksItemType } from "../types";

function WorksItem({ item }: { item: WorksItemType }) {
  return (
    <div className="relative">
      <div className="w-full">
        <Image
          src={item.image}
          alt="Work Image 1"
          className="w-full object-contain"
        />
      </div>
      <ImageTint>
        <div className="h-full flex items-end">
          <div className="text-white p-7">
            <h2 className="heading-2 text-white">{item.title}</h2>
            <p className="text-white">{item.desc}</p>
          </div>
        </div>
      </ImageTint>
    </div>
  );
}

export default WorksItem;
