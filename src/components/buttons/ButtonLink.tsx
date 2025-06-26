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
        className={`${class_name} ${className} font-medium`}
    >
      <Link className="py-3 px-5 hover:px-4 hover:py-2 block hover:border-4" href={href} target={target}>
        {children}
      </Link>
    </button>
  );
};

export default ButtonLink;
