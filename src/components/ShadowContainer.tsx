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
      <div
        className={`bg-white border ${ColorTypeBorder[theme]} h-full relative`}
      >
        <div
          className={`w-full h-full ${ColorTypeBackground[theme]} absolute max-md:scale-105 md:top-6 ${shadowTo == "right" ? "md:-right-6" : "md:-left-6"} -z-20`}
        ></div>
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}

export default ShadowContainer;
