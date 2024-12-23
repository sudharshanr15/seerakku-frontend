import {
  ColorType,
  ColorTypeBackground,
  ColorTypeBorder,
} from "@/types/ColorType";

function ShadowContainer({
  children,
  theme,
  shadowTo = "right",
}: {
  children: React.ReactNode;
  theme: ColorType;
  shadowTo?: "left" | "right";
}) {
  return (
    <div className="relative">
      <div className={`bg-white border ${ColorTypeBorder[theme]} relative`}>
        <div className="p-10">{children}</div>
        <div
          className={`w-full h-full ${ColorTypeBackground[theme]} absolute top-6 ${shadowTo == "right" ? "-right-6" : "-left-6"} -z-10`}
        ></div>
      </div>
    </div>
  );
}

export default ShadowContainer;
