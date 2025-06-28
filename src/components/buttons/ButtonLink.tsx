import { HTMLAttributeAnchorTarget, MouseEventHandler } from "react";
import { ButtonFill, ButtonOutline, ButtonType } from "./type";
import Link from "next/link";
import Button from "./Button";

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

  return (
    <Button
        type={type}
    >
      <Link className="" href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
};

export default ButtonLink;
