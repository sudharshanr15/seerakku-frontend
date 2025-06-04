import DonateNow from "@/components/buttons/DonateNow";

function Donor() {
  return (
    <section className="layout-section-xl max-md:p-0">
      <div className="bg-primary p-12">
        <div className="lg:w-2/3">
          <h2 className="heading-2">Your Contribution Fuels Change</h2>
          <p className="mb-5">
            Every rupee you donate helps us restore ecosystems, empower communities, and combat climate change. From planting trees to supporting underprivileged farmers, your generosity drives our mission forward.
          </p>
          <DonateNow type="secondary_forest" icon />
        </div>
      </div>
    </section>
  );
}

export default Donor;
