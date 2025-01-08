"use client";

import { type ButtonType } from "./type";
import HeartPlus from "@/components/icons/HeartPlus";
import { IconColorsFill, IconColorsOutline } from "../icons/types";
import Button from "./Button";
import { MouseEventHandler } from "react";
import { useModal } from "../modal/ModalProvider";

const DonateNow = ({
  type,
  className,
  outline,
  icon,
}: {
  type: ButtonType;
  className?: string;
  icon?: boolean;
  outline?: boolean;
  onClick?: MouseEventHandler;
}) => {
  const icon_colors = outline ? IconColorsOutline[type] : IconColorsFill[type];
  const { open } = useModal();
  return (
    <Button type={type} className={` ${className} hover:border-2 duration-500`} outline={outline} onClick={open}>
      Donate Now
      {icon && (
        <span className="ms-3">
          <HeartPlus className="inline" fill={icon_colors} />
        </span>
      )}
    </Button>
  );
};

export default DonateNow;
