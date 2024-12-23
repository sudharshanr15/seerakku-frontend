import WhoWeAre from "./WhoWeAre";

function VissionMission() {
  return (
    <section className="layout-section-xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-secondary-mint p-20">
          <h2 className="heading-2 mb-5">Our Vision</h2>
          <p className="text-xl">
            Our vision is a carbon-neutral India where individuals and
            organizations prioritize sustainable practices
          </p>
        </div>
        <div className="bg-primary p-20">
          <h2 className="heading-2 mb-5">Our Mission</h2>
          <p className="text-xl">
            Our mission is to create a sustainable future by enabling
            individuals to offset their carbon footprint and fund reforestation
            projects. We believe that every action counts and that by working
            together, we can create a positive impact on the planet.
          </p>
        </div>
      </div>
      <WhoWeAre />
    </section>
  );
}

export default VissionMission;
