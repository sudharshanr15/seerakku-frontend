import Button from "@/components/buttons/Button";
import { ButtonType } from "@/components/buttons/type";

const ValuableCount = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex gap-6 items-center">
          <div className="w-1/3">
            <h2 className="font-normal text-5xl uppercase mb-5">
              Valuable Count
            </h2>
            <p className="font-light mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <Button type={ButtonType.primary}>View More</Button>
          </div>
          <div className="w-2/3 grid grid-cols-3 gap-5 flex-shrink-0">
            {Array(6)
              .fill(0)
              .map((el, index) => (
                <div
                  className="odd:bg-secondary-silver-green even:bg-secondary-forest p-5 text-center text-white flex flex-col justify-center aspect-square"
                  key={index}
                >
                  <h4 className="text-white text-7xl">400</h4>
                  <p className="text-white">Trees Planted</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuableCount;
