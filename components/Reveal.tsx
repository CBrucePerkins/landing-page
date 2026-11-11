"use client";

import { motion, MotionConfig } from "framer-motion";

// A gentle fade-up as a block scrolls into view. reducedMotion="user" drops
// the movement (keeping only the fade) for people who've asked their device
// for less motion. Not used above the fold, so the hero paints immediately.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
