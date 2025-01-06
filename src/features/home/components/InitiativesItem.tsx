import Image from "next/image";
import { InitiativesListType } from "../types";
import ImageTint from "@/components/ImageTint";

function InitiativesItem({
  item,
  className,
}: {
  item: InitiativesListType;
  className?: string;
}) {
  return (
    <div className={`relative group h-80 ${className}`}>
      <div className="w-full h-full overflow-hidden">
        <Image
          src={item.image}
          alt="Get Involved"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <ImageTint>
        <div className="flex items-end p-7 h-full">
          <div className="text-white">
            <h3 className="heading-3">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      </ImageTint>
    </div>
  );
}

export default InitiativesItem;
