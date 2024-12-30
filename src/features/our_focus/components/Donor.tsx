import DonateNow from "@/components/buttons/DonateNow";

function Donor() {
  return (
    <section className="layout-section-xl max-md:p-0">
      <div className="bg-primary p-12">
        <div className="lg:w-2/3">
          <h2 className="heading-2">Become A Donor</h2>
          <p className="mb-5">
          Support our organization financially by donating. Your contribution, no matter the size, directly funds our initiatives and helps us implement projects that promote sustainability, biodiversity, and environmental conservation. Your generosity enables us to continue our important work and create a positive impact on the planet.
          </p>
          <DonateNow type="secondary_forest" icon />
        </div>
      </div>
    </section>
  );
}

export default Donor;
