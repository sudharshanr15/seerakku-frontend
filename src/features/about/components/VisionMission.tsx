const vission_mission: {
  name: string;
  desc: string;
}[] = [
  {
    name: "Our Vision",
    desc: "Our vision is a carbon-neutral India where individuals and organizations prioritize sustainable practices.",
  },
  {
    name: "Our Mission",
    desc: "Our mission is to create a sustainable future for all.",
  },
];

function VissionMission() {
  return (
    <section className="layout-section-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vission_mission.map((item, index) => (
          <div
            className="odd:bg-secondary-light-green even:bg-primary p-10 lg:p-20"
            key={index}
          >
            <h2 className="heading-2">{item.name}</h2>
            <p className="text-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VissionMission;
