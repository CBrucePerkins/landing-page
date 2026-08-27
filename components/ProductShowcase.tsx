"use client";

import Dashboard from "@/public/assets/Dashboard.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoCalendar, GoPerson, GoCreditCard, GoInbox } from "react-icons/go";
import { MdLibraryMusic } from "react-icons/md";
import Modal from "./Modal";
import { featureData } from "./ProductShowcaseFeatures";

type FeatureKey = keyof typeof featureData;

const featureCards: { key: FeatureKey; icon: React.ReactNode }[] = [
  { key: "students", icon: <GoPerson /> },
  { key: "scheduling", icon: <GoCalendar /> },
  { key: "practice", icon: <MdLibraryMusic /> },
  { key: "payments", icon: <GoCreditCard /> },
  { key: "messages", icon: <GoInbox /> },
];

const ProductShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureKey | null>(null);

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={!!activeFeature}
        onClose={() => setActiveFeature(null)}
        feature={activeFeature ? featureData[activeFeature] : undefined}
      />

      <div className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-hidden pb-24">
        {/* Header Section */}
        <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
            Powerful tools for music teachers
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
            Manage students, lessons, practice, and payments — all in one place.
          </h2>

          <div className="text-center text-lg mb-8 md:text-xl">
            MusiOS helps private teachers and music schools stay organized,
            automate admin work, and help students practice more effectively.
          </div>
        </div>

        {/* Product Screenshot — framed like a browser window for a cleaner, more polished look */}
        <div className="relative w-full max-w-5xl px-6 md:px-8">
          <div className="absolute inset-x-10 -top-8 h-64 rounded-full bg-gradient-to-tr from-[#001E80]/20 to-indigo-300/30 blur-3xl -z-10" />

          <motion.div
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Fake browser chrome */}
            <div className="flex items-center border-b border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex flex-1 justify-center">
                <div className="rounded-md border border-slate-200 bg-white px-4 py-1 text-xs text-slate-400">
                  musios.io/app
                </div>
              </div>
              <div className="w-[54px]" />
            </div>

            <Image
              src={Dashboard}
              alt="MusiOS Dashboard Preview"
              className="w-full"
            />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px] mt-20">
          {featureCards.map(({ key, icon }, i) => {
            const feature = featureData[key];
            return (
              <motion.div
                key={key}
                className="group cursor-pointer rounded-2xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onClick={() => setActiveFeature(key)}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#001E80]/10 text-2xl text-[#001E80]">
                  {icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <div className="text-base text-slate-700 mb-4">
                  {feature.description}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#001E80] transition-all group-hover:gap-2.5">
                  Learn more <FaArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
