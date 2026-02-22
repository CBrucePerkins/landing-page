"use client";

import Dashboard from "@/public/assets/Dashboard.png";
import Pyramid from "@/public/assets/treble-clef.png";
import Tube from "@/public/assets/bass-clef.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoCalendar, GoPerson, GoCreditCard, GoInbox } from "react-icons/go";
import { MdLibraryMusic } from "react-icons/md";
import Modal from "./Modal";
import { featureData } from "./ProductShowcaseFeatures";

type FeatureKey = keyof typeof featureData;

const ProductShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureKey | null>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={!!activeFeature}
        onClose={() => setActiveFeature(null)}
        feature={activeFeature ? featureData[activeFeature] : undefined}
      />

      <div
        ref={sectionRef}
        className="bg-gradient-to-t from-[#acbae8] to-white flex flex-col items-center overflow-x-hidden pb-24"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center font-medium mt-24 px-8 mx-auto md:w-[550px] lg:w-[630px]">
          <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
            Powerful tools for music teachers
          </div>

          <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
            Manage students, lessons, practice, and payments — all in one place.
          </div>

          <div className="text-center text-lg mb-8 md:text-xl">
            MusiOS helps private teachers and music schools stay organized,
            automate admin work, and help students practice more effectively.
          </div>
        </div>

        {/* Product Image Showcase */}
        <div className="relative">
          <motion.img
            src={Pyramid.src}
            alt="Decorative pyramid shape"
            className="absolute -right-24 -top-20 w-72 h-72 hidden md:block"
            style={{ translateY }}
          />
          <Image
            src={Dashboard}
            alt="MusiOS Dashboard Preview"
            className="px-1"
          />
          <motion.img
            src={Tube.src}
            alt="Decorative tube shape"
            className="absolute w-72 h-72 top-64 -left-28 hidden md:block"
            style={{ translateY }}
          />
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20 max-w-[1400px] lg:px-28">
          {/* Feature 1 */}
          <div className="mt-16">
            <GoPerson className="text-2xl mb-3" />
            <div className="font-bold text-2xl">Students & Classes</div>
            <div className="text-lg my-2">
              Onboard students and organize them into classes. Track lesson
              history, progress, and details — all from one intuitive dashboard.
            </div>
            <div
              className="text-lg font-medium cursor-pointer hover:underline"
              onClick={() => setActiveFeature("students")}
            >
              Learn more <FaArrowRight className="inline h-3 w-3" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mt-16">
            <GoCalendar className="text-2xl mb-3" />
            <div className="font-bold text-2xl">Smart Scheduling</div>
            <div className="text-lg my-2">
              Manage recurring lessons and one-off appointments with ease.
              Automated reminders keep teachers and students on schedule.
            </div>
            <div
              className="text-lg font-medium cursor-pointer hover:underline"
              onClick={() => setActiveFeature("scheduling")}
            >
              Learn more <FaArrowRight className="inline h-3 w-3" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mt-16">
            <MdLibraryMusic className="text-2xl mb-3" />
            <div className="font-bold text-2xl">Practice Sheets & Materials</div>
            <div className="text-lg my-2">
              Upload sheet music, videos, and audio files. Assign practice items
              and let students log daily practice time — all trackable in one place.
            </div>
            <div
              className="text-lg font-medium cursor-pointer hover:underline"
              onClick={() => setActiveFeature("practice")}
            >
              Learn more <FaArrowRight className="inline h-3 w-3" />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="mt-16">
            <GoCreditCard className="text-2xl mb-3" />
            <div className="font-bold text-2xl">Payments Made Simple</div>
            <div className="text-lg my-2">
              Get paid faster with Stripe Connect. Send payment requests, manage
              transactions, and receive payments directly from students.
            </div>
            <div
              className="text-lg font-medium cursor-pointer hover:underline"
              onClick={() => setActiveFeature("payments")}
            >
              Learn more <FaArrowRight className="inline h-3 w-3" />
            </div>
          </div>

          {/* Feature 5 */}
          <div className="mt-16">
            <GoInbox className="text-2xl mb-3" />
            <div className="font-bold text-2xl">Send A Message</div>
            <div className="text-lg my-2">
              Send e-mail and SMS messages to individual students or entire classes.
            </div>
            <div
              className="text-lg font-medium cursor-pointer hover:underline"
              onClick={() => setActiveFeature("messages")}
            >
              Learn more <FaArrowRight className="inline h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
