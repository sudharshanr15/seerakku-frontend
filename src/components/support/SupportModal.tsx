import DonateModalWrapper from "../modal/DonateModalWrapper";
import DonateModal from "./DonateModal";

function SupportModal() {
  return (
    <DonateModalWrapper>
      <div className="min-h-screen layout-section-xl p-10 bg-white">
        <DonateModal />
      </div>
    </DonateModalWrapper>
  );
}

export default SupportModal;
