"use client";

import React, { useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useDonateModal } from "./DonateModalProvider";

function DonateModalWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen, close } = useDonateModal();

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[100] bg-black bg-opacity-50 overflow-auto">
      <div className="min-h-screen flex flex-col items-end justify-center overflow-auto">
        <div className="min-h-screen w-full md:w-1/2 md:max-w-[500px] md:m-2">{children}</div>
      </div>
      <div className="absolute top-4 right-4 z-50">
        <button onClick={close}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default DonateModalWrapper;
