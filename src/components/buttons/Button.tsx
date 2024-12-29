import { ButtonFill, ButtonOutline, ButtonType } from "./type";

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
  const class_name = outline ? ButtonOutline[type] : ButtonFill[type];

  return (
    <button
      className={`py-3 px-5 ${class_name} uppercase ${className} text-lg font-big-noodle-titling`}
    >
      {children}
    </button>
  );
};

export default Button;
