"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PrimeGuideLauncher } from "./PrimeGuideLauncher";
import { PrimeGuideChat } from "./PrimeGuideChat";

export function PrimeGuide() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <PrimeGuideLauncher onOpen={handleOpen} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && <PrimeGuideChat onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}
