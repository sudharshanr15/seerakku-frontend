import { HTMLAttributeAnchorTarget, MouseEventHandler } from "react";
import { ButtonFill, ButtonOutline, ButtonType } from "./type";
import Link from "next/link";

const ButtonLink = ({
  type,
  children,
  className,
  outline,
  href,
  target
}: {
  type: ButtonType;
  children: React.ReactNode;
  href: string,
  className?: string;
  outline?: boolean;
  target?: HTMLAttributeAnchorTarget
}) => {
  const class_name = outline ? ButtonOutline[type] : ButtonFill[type];

  return (
    <button
        type="button"
        className={`py-3 px-5 ${class_name} uppercase ${className} text-lg font-big-noodle-titling hover:border-4 hover:px-4 hover:py-2  `}
    >
      <Link href={href} target={target}>
        {children}
      </Link>
    </button>
  );
};

export default ButtonLink;
