import Image from "next/image";
import { ButtonFill, ButtonOutline, ButtonType } from "./type";
import HeartPlus from "@/components/icons/HeartPlus";
import { IconColorsFill, IconColorsOutline } from "../icons/types";

const Button = ({
  type,
  children,
  className,
  outline,
}: {
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
}) => {
  const class_name = outline
    ? ButtonOutline[ButtonType[type]]
    : ButtonFill[ButtonType[type]];

  return (
    <button
      className={`py-3 px-5 ${class_name} uppercase ${className} text-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
