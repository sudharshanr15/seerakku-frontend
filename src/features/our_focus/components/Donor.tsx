import DonateNow from "@/components/buttons/DonateNow";
import { ButtonType } from "@/components/buttons/type";

function Donor() {
  return (
    <section className="layout-section-xl max-md:p-0">
      <div className="bg-primary p-12">
        <div className="lg:w-2/3">
          <h2 className="heading-2">Become A Donor</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rhoncus fringilla egestas. Sed eget purus imperdiet, mollis metus
            eu, varius metus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse sed scelerisque ex.
          </p>
          <DonateNow type={ButtonType.secondary_forest} icon />
        </div>
      </div>
    </section>
  );
}

export default Donor;
