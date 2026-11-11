"use client";

import { twMerge } from "tailwind-merge";
import { useWaitlist } from "./WaitlistContext";

const SIZES = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

const VARIANTS = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  light: "bg-white text-brand hover:bg-brand-soft",
  dark: "bg-ink text-white hover:bg-black",
};

// Every sign-up button on the site opens the same waitlist dialog.
export default function WaitlistButton({
  children = "Join the waitlist",
  size = "md",
  variant = "primary",
  className,
}: {
  children?: React.ReactNode;
  size?: keyof typeof SIZES;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const { openWaitlist } = useWaitlist();
  return (
    <button
      type="button"
      onClick={openWaitlist}
      className={twMerge(
        "inline-flex items-center justify-center rounded-xl font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        SIZES[size],
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
