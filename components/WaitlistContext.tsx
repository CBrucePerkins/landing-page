"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import WaitlistModal from "./WaitListModal";

interface WaitlistContextValue {
  openWaitlist: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | undefined>(
  undefined
);

// Lives in the root layout rather than the homepage, so every "Sign up" /
// "Get started" trigger — including the announcement bar, which renders on
// every page (privacy, terms, support, not just "/") — opens the exact same
// modal instead of each page needing its own local copy of this state.
export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WaitlistContext.Provider value={{ openWaitlist: () => setIsOpen(true) }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return ctx;
}
