import Image from "next/image";
import { ButtonType } from "./type";
import HeartPlus from "@/components/icons/HeartPlus";

const DonateNow = ({
  type,
  className,
}: {
  type: ButtonType;
  className?: string;
}) => {
  return (
    <button className={`py-3 px-5 ${type} uppercase ${className} text-lg`}>
      Donate Now
      <span className="ms-3">
        <HeartPlus className="stroke-1 stroke-black inline" />
      </span>
    </button>
  );
};

export default DonateNow;
