"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useDonateModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useDonateModal must be used within a DonateModalProvider");
  }
  return context;
};

function DonateModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export default DonateModalProvider;
