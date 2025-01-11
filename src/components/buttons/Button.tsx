import { MouseEventHandler } from "react";
import { ButtonFill, ButtonOutline, ButtonType } from "./type";

const Button = ({
  button_type = "button",
  type,
  children,
  className,
  outline,
  onClick,
  ...props
}: {
  button_type?: "button" | "submit" | "reset" | undefined;
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  onClick?: MouseEventHandler;
}) => {
  const class_name = outline ? ButtonOutline[type] : ButtonFill[type];

  return (
    <button
      type={button_type}
      className={`py-3 px-5 ${class_name} uppercase ${className} text-lg font-big-noodle-titling hover:border-2 duration-500 transition box-border`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
