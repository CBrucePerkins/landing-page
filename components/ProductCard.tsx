"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import StudioSetup from "@/public/assests/StudioSetup.gif";
import PracticeSheet from "@/public/assests/PracticerSheet.gif";
import PaymentTracking from "@/public/assests/Payments.gif";

const ProductCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Set up your studio",
      description:
        "Create students, classes, and connect your Stripe account to start managing lessons and payments in minutes.",
      image: StudioSetup,
    },
    {
      id: 2,
      title: "Assign lessons & practice sheets",
      description:
        "Upload files and create weekly practice sheets for your students. They can log practice time and access materials anytime.",
      image: PracticeSheet,
    },
    {
      id: 3,
      title: "Get paid & track progress",
      description:
        "Monitor student progress, review practice reports, and receive payments directly — all from your MusiOS dashboard.",
      image: PaymentTracking,
    },
  ];

  return (
    <div className="pb-28 flex flex-col items-center relative">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center pt-28 px-12 pb-10 md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          How it works
        </div>

        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Simplify your studio workflow in three easy steps
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          MusiOS helps you spend less time managing and more time teaching.
          Set up your studio, assign practice materials, and get paid — all from one platform.
        </div>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col gap-16 pt-4 lg:flex-row justify-center items-center px-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="shadow-2xl rounded-2xl flex justify-center items-center flex-col p-8 max-w-[400px] bg-white hover:shadow-3xl transition-all duration-300 cursor-pointer"
          >
            <Image
              src={step.image}
              alt={step.title}
              className="pb-4 w-56 h-auto rounded-lg hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(step.image)}
            />
            <div className="text-2xl font-bold pb-3 text-center">
              {step.id}. {step.title}
            </div>
            <div className="text-center text-lg">{step.description}</div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full px-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Full-size preview"
                className="rounded-xl object-contain mx-auto"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
