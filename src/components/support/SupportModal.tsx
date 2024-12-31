import ModalWrapper from "@/components/modal/ModalWrapper";
import SupportContainer from "./SupportContainer";

function SupportModal() {
  return (
    <ModalWrapper>
      <div className="layout-section-xl p-10 bg-white">
        <SupportContainer />
      </div>
    </ModalWrapper>
  );
}

export default SupportModal;
