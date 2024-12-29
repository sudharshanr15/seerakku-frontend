import { type ButtonType } from "./type";
import HeartPlus from "@/components/icons/HeartPlus";
import { IconColorsFill, IconColorsOutline } from "../icons/types";
import Button from "./Button";

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
}) => {
  const icon_colors = outline ? IconColorsOutline[type] : IconColorsFill[type];

  return (
    <Button type={type} className={className} outline={outline}>
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
