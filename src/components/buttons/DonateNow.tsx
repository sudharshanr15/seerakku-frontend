import { ButtonType } from "./type";

const DonateNow = ({
  type,
  className,
}: {
  type: ButtonType;
  className?: string;
}) => {
  return (
    <button className={`py-3 px-5 ${type} uppercase ${className} text-lg`}>
      Donate Now
    </button>
  );
};

export default DonateNow;
