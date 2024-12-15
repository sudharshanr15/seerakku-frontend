import { ButtonType } from "./type";

const Button = ({
  type,
  children,
  className,
}: {
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={`py-3 px-5 ${type} uppercase ${className} text-lg`}>
      {children}
    </button>
  );
};

export default Button;
