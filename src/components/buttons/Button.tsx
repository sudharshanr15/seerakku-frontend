import { MouseEventHandler } from "react";
import { ButtonFill, ButtonOutline, ButtonType } from "./type";

const Button = ({
  type,
  children,
  className,
  outline,
  onClick,
  ...props
}: {
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  onClick?: MouseEventHandler;
}) => {
  const class_name = outline ? ButtonOutline[type] : ButtonFill[type];

  return (
    <button
      className={`py-3 px-5 ${class_name} uppercase ${className} text-lg font-big-noodle-titling`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
