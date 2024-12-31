import Button from "@/components/buttons/Button";

const Intro = () => {
  return (
    <section className="bg-primary">
      <div className="layout-section-xl mx-auto text-center py-20">
        <h2 className="heading-2">{"Our Story"}</h2>
        <p className="text-center mb-4">
          Seerakku was born alongside the birth of our founder's daughter. The
          co-founders, SP Dinesh and Janaganandhini D had a baby girl on March
          3rd, 2023. <br></br>
          Our founders also felt a sense of responsibility to ensure a safe and
          sustainable future for their children and future generations. So, they
          planned to offset their baby’s future carbon emissions with a food
          forest. With the help of farmers in Krishnagiri district
          Shivalingapuram village, our founders have planted six thousand trees,
          shrubs, and plants that provide food and habitat for local wildlife
          and absorb and store carbon from the atmosphere. 
        </p>
        <Button type="primary_green">Learn More</Button>
      </div>
    </section>
  );
};

export default Intro;
