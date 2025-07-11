import { MouseEventHandler } from "react";
import { ButtonFill, ButtonOutline, ButtonType } from "./type";

const Button = ({
  button_type = "button",
  type,
  children,
  className="",
  outline,
  onClick,
  disabled,
  ...props
}: {
  button_type?: "button" | "submit" | "reset" | undefined;
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
  outline?: boolean;
  onClick?: MouseEventHandler;
  disabled?: boolean
}) => {
  const class_name = outline ? ButtonOutline[type] : ButtonFill[type];

  return (
    <button
      type={button_type}
      className={`py-3 px-5 ${class_name} font-medium ${className} hover:scale-[1.03] transition-transform ease-linear`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
