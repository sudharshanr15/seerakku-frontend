function VissionMission() {
  return (
    <section className="layout-section-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="odd:bg-secondary-light-green even:bg-primary p-10 lg:p-20"
        >
          <h2 className="heading-2">Our Vision</h2>
          <div className="text-xl">
            <p className="mb-4">
              We dream of a climate-resilient India — not built by policy alone,  but by people who care.
            </p>
            <ul className="list-disc list-inside">
              <li>
                Every tree we plant.
              </li>
              <li>
                Every drop we save.
              </li>
              <li>
                Every child we inspire.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="odd:bg-secondary-light-green even:bg-primary p-10 lg:p-20"
        >
          <h2 className="heading-2">Our Mission</h2>
          <div className="text-xl">
            <p className="mb-4">
              To restore nature, empower communities, and spark a culture of action by making environmental sustainability personal, participatory, and practical.
            </p>
            <p className="mb-4">
              Through tree planting, water restoration, pollinator protection, sustainable living, and climate education,
            </p>
            <p className="mb-4">
              We turn everyday people into everyday planet protectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VissionMission;
