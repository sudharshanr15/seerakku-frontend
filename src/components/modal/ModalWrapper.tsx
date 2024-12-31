"use client";

import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useModal } from "./ModalProvider";

function ModalWrapper({ children }: { children: React.ReactNode }) {
  const { isOpen, close } = useModal();

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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div>{children}</div>
      </div>
      <div className="absolute top-2 right-2 z-50">
        <button className="bg-white p-3 rounded-full" onClick={close}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default ModalWrapper;
