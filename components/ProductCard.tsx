"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = {
  id: number;
  title: string;
  description: string;
  video: string;
  poster: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Set up your studio",
    description:
      "Create students, classes, and connect your Stripe account to start managing lessons and payments in minutes.",
    video: "/assets/StudioSetup.mp4",
    poster: "/assets/StudioSetup-poster.jpg",
  },
  {
    id: 2,
    title: "Assign lessons & practice sheets",
    description:
      "Upload files and create weekly practice sheets for your students. They can log practice time and access materials anytime.",
    video: "/assets/PracticeSheet.mp4",
    poster: "/assets/PracticeSheet-poster.jpg",
  },
  {
    id: 3,
    title: "Get paid & track progress",
    description:
      "Monitor student progress, review practice reports, and receive payments directly — all from your MusiOS dashboard.",
    video: "/assets/Payments.mp4",
    poster: "/assets/Payments-poster.jpg",
  },
  {
    id: 4,
    title: "Send messages easily",
    description:
      "Send e-mail or SMS messages to individual students or entire classes directly from the platform.",
    video: "/assets/Messages.mp4",
    poster: "/assets/Messages-poster.jpg",
  },
];

const ProductCard = () => {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  return (
    <div className="pb-28 flex flex-col items-center relative">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center pt-28 px-12 pb-14 md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          How it works
        </div>

        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Simplify your studio workflow with four easy steps
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          MusiOS helps you spend less time managing and more time teaching.
          Set up your studio, assign practice materials, and get paid — all from one platform.
        </div>
      </div>

      {/* Step Cards */}
      <div className="grid gap-8 px-6 sm:px-10 md:grid-cols-2 max-w-6xl">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            {/* Fake browser chrome, tying it to the same frame used above */}
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>

            <button
              type="button"
              onClick={() => setSelectedStep(step)}
              className="relative aspect-[1280/706] w-full cursor-zoom-in bg-black"
              aria-label={`Play full-size demo: ${step.title}`}
            >
              <video
                className="h-full w-full object-cover"
                src={step.video}
                poster={step.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </button>

            <div className="p-6 sm:p-8">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#001E80] text-sm font-bold text-white">
                {step.id}
              </div>
              <div className="text-xl font-bold mb-2">{step.title}</div>
              <div className="text-slate-700">{step.description}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full rounded-xl shadow-2xl"
                src={selectedStep.video}
                poster={selectedStep.poster}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-3xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
