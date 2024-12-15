import Button from "@/components/buttons/Button";
import { ButtonType } from "@/components/buttons/type";

const Intro = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-screen-lg mx-auto text-center py-20">
        <h2 className="font-normal text-5xl uppercase text-center mb-4">
          {'"de Finibus Bonorum et Malorum"'}
        </h2>
        <p className="text-center font-light mb-4">
          Seerakku was born alongside the birth of our baby. We the co-founders,
          SP Dinesh and Janaganandhini D, had our baby girl in the year 2023,
          March 3rd. As we are also filled with a sense of responsibility to
          ensure a safe and sustainable future for our children and for
          generations to come. So, we were planning to offset our baby’s future
          carbon emissions with a food forest.
        </p>
        <Button type={ButtonType.secondary_silver_green}>Learn More</Button>
      </div>
    </section>
  );
};

export default Intro;
